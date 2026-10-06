import React, { useState, useRef, useEffect } from 'react';
import { TOP_GALLERY_PLATES, BOTTOM_GALLERY_PLATES } from '../data/galleryData';
import { getPreloadedVideoBlob, areVideosPreloaded } from '../lib/assetPreloader';
import soundManager from '../lib/soundManager';

// Marquee metrics live in index.css as `--gallery-plate-w` / `--gallery-gap`, so that
// both the plate width and its portrait-phone override come from one place. The two
// numbers carry the no-repeat guarantee, and the reasoning is documented there.
const MARQUEE_SET_STYLE = {
  gap: 'var(--gallery-gap)',
  paddingRight: 'var(--gallery-gap)',
};

// Fine-art Renaissance corner filigree bracket
const CornerFiligree = ({ className = '' }) => (
  <svg 
    viewBox="0 0 60 60" 
    className={`w-12 h-12 sm:w-16 sm:h-16 text-[#C79238] pointer-events-none select-none opacity-25 ${className}`}
    fill="none" 
    stroke="currentColor"
  >
    <path d="M4 56V12C4 7.58172 7.58172 4 12 4H56" strokeWidth="1" strokeLinecap="round" />
    <path d="M12 56V18C12 14.6863 14.6863 12 18 12H56" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6" />
    <circle cx="8" cy="8" r="2.4" fill="#C79238" fillOpacity="0.45" stroke="none" />
    <path d="M4 22C11 22 22 11 22 4" strokeWidth="0.75" opacity="0.45" />
  </svg>
);

// Dedicated Video Card Component delivering silky-smooth native 60fps playback.
//
// Performance contract (this is what keeps the marquee buttery smooth):
//  1. The <video> src is attached ONLY from the in-RAM Blob created during the loading
//     screen. Until then the element has no src at all, so 24 gallery cards never race
//     the loader for bandwidth.
//  2. Playback is limited to cards that are BOTH inside this section AND inside the
//     viewport. Off-screen clones stay paused, so the browser is asked to decode a
//     handful of streams instead of 24 at once.
function GalleryVideoCard({ src, className = '', active = true }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(() => getPreloadedVideoBlob(src));
  const [inView, setInView] = useState(false);
  // Playback keeps running through the ~1.1s cinematic section transition so the
  // fade-out never shows a frozen frame; it stops once the section is truly gone.
  const [playbackAllowed, setPlaybackAllowed] = useState(active);

  useEffect(() => {
    if (active) {
      setPlaybackAllowed(true);
      return undefined;
    }
    const timer = setTimeout(() => setPlaybackAllowed(false), 1200);
    return () => clearTimeout(timer);
  }, [active]);

  // 1. Attach the in-memory Blob URL the moment it exists — never race the network.
  useEffect(() => {
    const sync = () => {
      const blobUrl = getPreloadedVideoBlob(src);
      if (blobUrl) {
        setVideoSrc((prev) => (prev === blobUrl ? prev : blobUrl));
        return;
      }
      // Only after the preload phase has fully settled do we allow a direct fallback,
      // so a failed asset still renders instead of staying permanently blank.
      if (areVideosPreloaded()) {
        setVideoSrc((prev) => (prev ? prev : src));
      }
    };

    sync();
    window.addEventListener('videos-preloaded', sync);
    window.addEventListener('videos-preload-complete', sync);
    return () => {
      window.removeEventListener('videos-preloaded', sync);
      window.removeEventListener('videos-preload-complete', sync);
    };
  }, [src]);

  // 2. Track whether this specific card is actually on screen.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { root: null, rootMargin: '240px 360px 240px 360px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const shouldPlay = playbackAllowed && inView && Boolean(videoSrc);
  const shouldPlayRef = useRef(false);

  // 3. Play only what is visible, at exactly 1.0x native speed.
  useEffect(() => {
    shouldPlayRef.current = shouldPlay;
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    video.playbackRate = 1.0;
    video.defaultPlaybackRate = 1.0;

    if (!shouldPlay) {
      video.pause();
      return;
    }

    const startPlayback = () => {
      video.playbackRate = 1.0;
      const p = video.play();
      if (p !== undefined) p.catch(() => {});
    };

    startPlayback();
  }, [shouldPlay, videoSrc]);

  // 4. Browsers suspend muted media while a tab is backgrounded and do not always
  //    resume it. Re-assert playback on return so cards never stay frozen.
  useEffect(() => {
    const resume = () => {
      const video = videoRef.current;
      if (!video || !shouldPlayRef.current || !video.paused) return;
      video.playbackRate = 1.0;
      const p = video.play();
      if (p !== undefined) p.catch(() => {});
    };

    const onVisibility = () => {
      if (!document.hidden) resume();
    };

    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('focus', resume);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('focus', resume);
    };
  }, []);

  const handleReady = (e) => {
    if (!shouldPlay) return;
    e.target.playbackRate = 1.0;
    e.target.play().catch(() => {});
  };

  return (
    <div ref={containerRef} className="w-full h-full">
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
          onLoadedData={handleReady}
          onCanPlay={handleReady}
          className={className}
        />
      )}
    </div>
  );
}

export default function GallerySection({ active = true, onNext, onPrev }) {
  // When user interacts, ensure video autoplay permissions are active
  useEffect(() => {
    const handleFirstGesture = () => {
      // Audio context unlock
      soundManager.unlock();
    };

    window.addEventListener('pointerdown', handleFirstGesture, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { once: true, passive: true });

    return () => {
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };
  }, []);

  // Render an individual prominent 16:9 video gallery card (pure showcase mode)
  const renderCard = (card, keyPrefix) => (
    <div
      key={`${keyPrefix}-${card.id}`}
      className="gallery-card inline-flex items-center gap-4 sm:gap-6 md:gap-7 shrink-0 select-none"
    >
      {/* Artwork Video Plate with genuine 16:9 widescreen video dimensions */}
      <div 
        className={`gallery-plate relative aspect-video overflow-hidden rounded-none border bg-[#151413] ${card.frameBorder} shrink-0 transform-gpu`}
      >
        <GalleryVideoCard
          src={card.video}
          active={active}
          className="w-full h-full object-cover block pointer-events-none"
        />
      </div>

      {/* Beside Video: 3 Lines of Clear Editorial Typography */}
      <div className="gallery-caption flex flex-col items-start text-left min-w-[150px] max-w-[210px] sm:max-w-[260px]">
        {/* 1. Italic Serif Kicker */}
        <span className="font-serif italic text-[12.5px] sm:text-[14px] md:text-[15px] text-[#8C6422] tracking-wide leading-tight">
          {card.kicker}
        </span>
        {/* 2. Bold/Display Serif Title */}
        <h4 className="font-bodoni font-normal text-[17px] sm:text-[21px] md:text-[24px] text-[#151413] tracking-[-0.015em] leading-snug mt-1 transition-colors">
          {card.title}
        </h4>
        {/* 3. Caption */}
        <p className="font-sans text-[11.5px] sm:text-[12.5px] md:text-[13.5px] text-[#736859] leading-normal mt-1">
          {card.caption}
        </p>
      </div>
    </div>
  );

  return (
    <section 
      id="gallery"
      aria-label="Atelier Gallery Section"
      className="relative w-full h-[100svh] min-h-[100svh] overflow-hidden bg-[#FBF9F5] select-none flex flex-col justify-between py-2 sm:py-4"
    >
      {/* 1. Background Microscopic Canvas Weave Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.035] linen-texture"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* ========================================================================= */}
      {/* 2. LIGHTWEIGHT AMBIENT BACKGROUND: Static Zero-Lag Radial Color Auras      */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Warm Tuscan Ochre Light Aura (Zero-cost radial gradient) */}
        <div 
          className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(223, 186, 90, 0.08) 0%, transparent 70%)',
          }}
        />
        {/* Soft Veronese Mineral Earth Aura */}
        <div 
          className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2 w-[540px] h-[340px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(74, 96, 77, 0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* 3. OIL-PAINTED ART CORNERS: Textured Impasto Vignettes & Renaissance Gold  */}
      {/* ========================================================================= */}
      {/* Top-Left Oil Impasto Corner */}
      <div 
        className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none z-5 overflow-hidden"
        style={{
          maskImage: 'radial-gradient(circle at 0% 0%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 0% 0%, black 20%, transparent 75%)',
        }}
      >
        <img
          src="/hero-canvas-impasto.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20 filter contrast-110"
        />
      </div>
      <CornerFiligree className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10" />

      {/* Top-Right Tuscan Mist Oil Wash Corner */}
      <div 
        className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none z-5 overflow-hidden"
        style={{
          maskImage: 'radial-gradient(circle at 100% 0%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 100% 0%, black 20%, transparent 75%)',
        }}
      >
        <img
          src="/hero-tuscan-mist.jpg"
          alt=""
          className="w-full h-full object-cover opacity-18 filter contrast-110"
        />
      </div>
      <CornerFiligree className="absolute top-3 right-3 sm:top-5 sm:right-5 rotate-90 z-10" />

      {/* Bottom-Left Tuscan Mist Oil Wash Corner */}
      <div 
        className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none z-5 overflow-hidden"
        style={{
          maskImage: 'radial-gradient(circle at 0% 100%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 0% 100%, black 20%, transparent 75%)',
        }}
      >
        <img
          src="/hero-tuscan-mist.jpg"
          alt=""
          className="w-full h-full object-cover opacity-18 filter contrast-110"
        />
      </div>
      <CornerFiligree className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 -rotate-90 z-10" />

      {/* Bottom-Right Oil-Painted Bushes & Flowers Botanical Vignette (Positioned low, smoothly feathered) */}
      <div 
        className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-20 right-0 w-[360px] xs:w-[440px] sm:w-[560px] md:w-[700px] lg:w-[820px] max-w-[85vw] pointer-events-none z-5 flex items-end justify-end select-none"
        style={{
          maskImage: 'linear-gradient(to top, black 40%, rgba(0,0,0,0.7) 70%, transparent 98%)',
          WebkitMaskImage: 'linear-gradient(to top, black 40%, rgba(0,0,0,0.7) 70%, transparent 98%)',
        }}
      >
        <img
          src="/gallery-corner-flowers.png"
          alt="Oil painted garden bushes and blooming wildflowers"
          className="w-full h-auto object-contain object-bottom-right mix-blend-multiply opacity-85 filter contrast-105"
          loading="eager"
        />
      </div>

      {/* ========================================================================= */}
      {/* 4. UPPER STREAM: Mathematically Seamless Infinite Marquee Loop (Right->Left) */}
      {/* ========================================================================= */}
      <div 
        aria-label="Upper Gallery Stream"
        className="relative z-20 w-full h-[32vh] sm:h-[34vh] flex items-center overflow-hidden pointer-events-auto"
      >
        <div className="flex w-max">
          {/* Set 1 */}
          <div className="flex items-center shrink-0 animate-marquee-flow" style={MARQUEE_SET_STYLE}>
            {TOP_GALLERY_PLATES.map((card) => renderCard(card, 'u1'))}
          </div>
          {/* Set 2 (Exact clone matching gap width for 100% glitchless loop) */}
          <div className="flex items-center shrink-0 animate-marquee-flow" style={MARQUEE_SET_STYLE} aria-hidden="true">
            {TOP_GALLERY_PLATES.map((card) => renderCard(card, 'u2'))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. CENTER: Monumental Animated Title (Zero Overlap with Cards)            */}
      {/* ========================================================================= */}
      <div 
        className="relative z-10 w-full text-center pointer-events-none select-none my-auto py-0 flex items-center justify-center"
      >
        {/* Soft Golden Backlight Halo behind Title */}
        <div 
          aria-hidden="true"
          className="absolute w-[60vw] max-w-[650px] h-[140px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(223, 186, 90, 0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-2.5 sm:gap-3.5">
          {/* Monumental Title with Gilded Sheen Animation */}
          <h2 
            aria-hidden="true"
            className="font-bodoni font-normal text-[clamp(4.5rem,14vw,11.5rem)] leading-none tracking-[-0.035em] whitespace-nowrap animate-gallery-title-sheen select-none inline-block drop-shadow-xs"
          >
            Gallery
          </h2>

          {/* =================================================================== */}
          {/* FORWARD AFFORDANCE.                                                 */}
          {/* The Gallery is the middle of three screens, so it owes the visitor  */}
          {/* a "there is more below" cue — this mirrors the Hero's existing       */}
          {/* "Gallery · Explore" hint and closes what was previously a dead end. */}
          {/* It sits inside the title band so it fills space that was already   */}
          {/* empty rather than crowding either marquee stream.                  */}
          {/* =================================================================== */}
          <button
            type="button"
            onClick={() => {
              soundManager.play('hold');
              onNext?.();
            }}
            className="group pointer-events-auto cursor-pointer flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-all duration-300 select-none [-webkit-tap-highlight-color:transparent]"
          >
            <span className="font-cinzel text-[9.5px] sm:text-[10px] tracking-[0.26em] uppercase text-[#151413]/70 group-hover:text-[#C79238] transition-colors">
              Projects · Continue
            </span>
            <svg
              className="w-3.5 h-3.5 text-[#151413]/50 group-hover:text-[#C79238] animate-bounce transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M7 7l5 5 5-5M7 14l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. LOWER STREAM: Mathematically Seamless Infinite Marquee Loop (Right->Left) */}
      {/* ========================================================================= */}
      <div 
        aria-label="Lower Gallery Stream"
        className="relative z-20 w-full h-[32vh] sm:h-[34vh] flex items-center overflow-hidden pointer-events-auto"
      >
        <div className="flex w-max">
          {/* Set 1 */}
          <div className="flex items-center shrink-0 animate-marquee-flow-slower" style={MARQUEE_SET_STYLE}>
            {BOTTOM_GALLERY_PLATES.map((card) => renderCard(card, 'l1'))}
          </div>
          {/* Set 2 (Exact clone matching gap width for 100% glitchless loop) */}
          <div className="flex items-center shrink-0 animate-marquee-flow-slower" style={MARQUEE_SET_STYLE} aria-hidden="true">
            {BOTTOM_GALLERY_PLATES.map((card) => renderCard(card, 'l2'))}
          </div>
        </div>
      </div>
    </section>
  );
}

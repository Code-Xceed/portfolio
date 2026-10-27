import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Mail } from 'lucide-react';

const TALK_TEXT = "Let's talk";
const EMAIL = "aditya.rathore10101@gmail.com";

/**
 * ContactDealButton Component
 * 
 * Performance & Polish Architecture:
 * 1. Decoupled Transform Hierarchy:
 *    - Outer Anchor div handles purely cursor coordinates (--tx, --ty) and dynamic tilt (--tilt)
 *      via a 60/120fps continuous requestAnimationFrame LERP loop (damping 0.10).
 *    - Inner Surface div handles purely scale, opacity, and blur transitions on the GPU compositor.
 *    - No animation collisions between LERP coordinate updates and enter/exit scale transforms.
 * 2. Zero-Jank Non-Blocking Media Pipeline:
 *    - Synchronous `.currentTime = 0` seeking is completely eliminated from mouseLeave.
 *    - Video pauses immediately (0.05ms non-blocking), and buffer reset occurs asynchronously
 *      only after the thumbnail has completed its fade-out (260ms).
 * 3. Frame-Accurate Character Outro Choreography:
 *    - "Let's talk" characters stagger-exit upward (160ms duration, 8ms index offset = 232ms total).
 *    - Transition to 'idle' fires at 245ms, eliminating the mid-air letter truncation glitch.
 *    - Invisible characters teleport to starting positions with `transition: none` to prevent reverse ghosting.
 * 4. Layout-Thrashing Free:
 *    - Cached button bounding rect on enter/resize eliminates DOM layout reads on mousemove.
 * 5. Single Solid White Border:
 *    - Clean `border-2 border-white` framing media edge-to-edge with zero inner black gap.
 */
export default function ContactDealButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonPhase, setButtonPhase] = useState('idle'); // 'idle' | 'active' | 'outro'

  const buttonRef = useRef(null);
  const thumbnailRef = useRef(null);
  const videoRef = useRef(null);

  // Timers
  const videoEndDismissTimerRef = useRef(null);
  const outroResetTimerRef = useRef(null);
  const stopTrackingTimerRef = useRef(null);
  const videoCleanupTimerRef = useRef(null);

  // Cached layout & LERP tracking state (zero React re-renders during mouse moves)
  const rectRef = useRef(null);
  const targetPos = useRef({ x: 80, y: 22 });
  const currentPos = useRef({ x: 80, y: 22 });
  const currentTilt = useRef(0);
  const rafId = useRef(null);
  const isTracking = useRef(false);

  // Buttery fluid physics loop
  const startTrackingLoop = useCallback(() => {
    if (isTracking.current) return;
    isTracking.current = true;

    const loop = () => {
      // Damping factor: 0.10 gives cushioned, responsive, fluid momentum
      const damping = 0.10;
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += dx * damping;
      currentPos.current.y += dy * damping;

      // Organic micro-tilt based on horizontal momentum (±3°)
      const targetTilt = Math.max(-3, Math.min(3, dx * 0.12));
      currentTilt.current += (targetTilt - currentTilt.current) * 0.10;

      if (thumbnailRef.current) {
        thumbnailRef.current.style.setProperty('--tx', `${currentPos.current.x.toFixed(1)}px`);
        thumbnailRef.current.style.setProperty('--ty', `${currentPos.current.y.toFixed(1)}px`);
        thumbnailRef.current.style.setProperty('--tilt', `${currentTilt.current.toFixed(1)}deg`);
      }

      if (isTracking.current) {
        rafId.current = requestAnimationFrame(loop);
      }
    };

    rafId.current = requestAnimationFrame(loop);
  }, []);

  const stopTrackingLoop = useCallback(() => {
    isTracking.current = false;
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, []);

  const clearAllTimers = useCallback(() => {
    if (videoEndDismissTimerRef.current) clearTimeout(videoEndDismissTimerRef.current);
    if (outroResetTimerRef.current) clearTimeout(outroResetTimerRef.current);
    if (stopTrackingTimerRef.current) clearTimeout(stopTrackingTimerRef.current);
    if (videoCleanupTimerRef.current) clearTimeout(videoCleanupTimerRef.current);
  }, []);

  useEffect(() => {
    return () => {
      clearAllTimers();
      stopTrackingLoop();
    };
  }, [clearAllTimers, stopTrackingLoop]);

  // Cache button rect on window resize/scroll to prevent layout thrashing
  useEffect(() => {
    const updateRect = () => {
      if (buttonRef.current) {
        rectRef.current = buttonRef.current.getBoundingClientRect();
      }
    };
    window.addEventListener('resize', updateRect, { passive: true });
    window.addEventListener('scroll', updateRect, { passive: true });
    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, []);

  const updateTargetPosition = (clientX, clientY, instant = false) => {
    if (!buttonRef.current) return;
    if (!rectRef.current) {
      rectRef.current = buttonRef.current.getBoundingClientRect();
    }

    const rect = rectRef.current;
    const rawX = clientX - rect.left;
    const rawY = clientY - rect.top;
    
    // Smoothly clamp within button width with comfortable edge padding
    const clampedX = Math.max(20, Math.min(rect.width - 20, rawX));
    targetPos.current = { x: clampedX, y: rawY };

    if (instant) {
      currentPos.current = { x: clampedX, y: rawY };
      currentTilt.current = 0;
      if (thumbnailRef.current) {
        thumbnailRef.current.style.setProperty('--tx', `${clampedX.toFixed(1)}px`);
        thumbnailRef.current.style.setProperty('--ty', `${rawY.toFixed(1)}px`);
        thumbnailRef.current.style.setProperty('--tilt', '0deg');
      }
    }
  };

  const handleMouseEnter = (e) => {
    // Refresh cached rect on enter
    if (buttonRef.current) {
      rectRef.current = buttonRef.current.getBoundingClientRect();
    }

    // Cancel pending exit / cleanup timers
    if (stopTrackingTimerRef.current) clearTimeout(stopTrackingTimerRef.current);
    if (videoCleanupTimerRef.current) clearTimeout(videoCleanupTimerRef.current);

    updateTargetPosition(e.clientX, e.clientY, true);
    startTrackingLoop();
    setIsHovered(true);
    setIsDismissed(false);
  };

  const handleMouseMove = (e) => {
    updateTargetPosition(e.clientX, e.clientY, false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDismissed(false);

    // 1. Pause video immediately without blocking the thread with an instant seek
    if (videoRef.current) {
      videoRef.current.pause();
    }

    // 2. Schedule non-blocking video reset once thumbnail is completely hidden (260ms)
    if (videoCleanupTimerRef.current) clearTimeout(videoCleanupTimerRef.current);
    videoCleanupTimerRef.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
      setIsPlaying(false);
    }, 260);

    // 3. Allow thumbnail to float naturally with momentum during its 200ms exit fade
    if (stopTrackingTimerRef.current) clearTimeout(stopTrackingTimerRef.current);
    stopTrackingTimerRef.current = setTimeout(() => {
      stopTrackingLoop();
    }, 260);

    // 4. Smoothly revert text if currently active
    if (buttonPhase === 'active') {
      setButtonPhase('outro');
      if (outroResetTimerRef.current) clearTimeout(outroResetTimerRef.current);
      outroResetTimerRef.current = setTimeout(() => {
        setButtonPhase('idle');
      }, 245);
    }
    // Note: If buttonPhase is already 'outro', we deliberately DO NOT clear outroResetTimerRef,
    // ensuring the outro transition runs to completion and cleanly settles into 'idle'.
  };

  const handleClick = async () => {
    // 1. Silent clipboard copy without throwing
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(EMAIL).catch(() => {});
    }

    // Cancel pending outro timers to immediately elevate to active
    if (outroResetTimerRef.current) clearTimeout(outroResetTimerRef.current);
    if (videoEndDismissTimerRef.current) clearTimeout(videoEndDismissTimerRef.current);

    setButtonPhase('active');
    setIsDismissed(false);
    setIsPlaying(true);

    // 2. Play video safely from 0:00
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleVideoEnded = () => {
    // Hold final handshake moment for 350ms so user absorbs conclusion
    if (videoEndDismissTimerRef.current) clearTimeout(videoEndDismissTimerRef.current);
    videoEndDismissTimerRef.current = setTimeout(() => {
      // 1. Smoothly dismiss thumbnail (GPU scale 0.92, opacity 0)
      setIsDismissed(true);

      // 2. Start text outro
      setButtonPhase('outro');
      if (outroResetTimerRef.current) clearTimeout(outroResetTimerRef.current);
      outroResetTimerRef.current = setTimeout(() => {
        setButtonPhase('idle');
        
        // 3. Reset video state once completely hidden
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
        }
        setIsPlaying(false);
      }, 245);
    }, 350);
  };

  const isThumbnailVisible = isHovered && !isDismissed;

  return (
    <div 
      className="relative inline-flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* FLOATING HOVER THUMBNAIL (Decoupled Physics Tracking + Hardware Compositor Surface) */}
      <div 
        ref={thumbnailRef}
        className="absolute top-0 left-0 z-50 pointer-events-none select-none"
        style={{
          transform: 'translate3d(calc(var(--tx, 80px) - 50%), calc(var(--ty, 22px) - 100% - 14px), 0) rotate(var(--tilt, 0deg))',
          willChange: 'transform',
        }}
        aria-hidden={!isThumbnailVisible}
      >
        {/* Hardware-Accelerated Appearance Surface (Handles enter/exit scale, opacity, subtle blur) */}
        <div 
          style={{
            transform: isThumbnailVisible ? 'scale(1)' : 'scale(0.92)',
            opacity: isThumbnailVisible ? 1 : 0,
            filter: isThumbnailVisible ? 'blur(0px)' : 'blur(4px)',
            transformOrigin: 'bottom center',
            transition: isThumbnailVisible 
              ? 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease-out, filter 200ms ease-out'
              : 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1), opacity 180ms ease-out, filter 180ms ease-out',
            willChange: 'transform, opacity',
          }}
        >
          {/* Single Solid White Border Card (Flush edge-to-edge media, zero black inner gap/border) */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl border-2 border-white overflow-hidden shadow-[0_20px_48px_-6px_rgba(0,0,0,0.30),0_8px_18px_-4px_rgba(0,0,0,0.15)] bg-[#161514] flex items-center justify-center">
            <video
              ref={videoRef}
              src="/cat-handshake.mp4"
              poster="/cat-handshake-thumb.png"
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              onEnded={handleVideoEnded}
            />

            {/* Static poster fallback overlay when not playing */}
            {!isPlaying && (
              <img 
                src="/cat-handshake-thumb.png" 
                alt="Handshake Thumbnail"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            )}
          </div>
        </div>
      </div>

      {/* FIXED GEOMETRY BUTTON (w-40 h-11, NO browser title tooltip) */}
      <button
        ref={buttonRef}
        type="button"
        onClick={handleClick}
        className="pressable group relative h-11 w-40 px-3 rounded-full bg-[#161514] text-[#FAFAF8] text-sm font-medium hover:bg-[#2B2927] shadow-[0_2px_10px_rgba(22,21,20,0.08)] cursor-pointer overflow-hidden inline-flex items-center justify-center transition-colors duration-200 select-none"
        aria-label="Connect via email"
      >
        {/* STATE 1: "Get in touch" (Default) */}
        <div 
          className={`absolute inset-0 flex items-center justify-center gap-2 pointer-events-none ${
            buttonPhase === 'idle'
              ? 'translate-y-0 opacity-100'
              : buttonPhase === 'active'
                ? '-translate-y-3 opacity-0'
                : '-translate-y-2 opacity-0'
          }`}
          style={{ 
            transitionProperty: 'transform, opacity, filter',
            transitionDuration: buttonPhase === 'idle' ? '220ms' : '180ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            filter: buttonPhase === 'idle' ? 'blur(0px)' : 'blur(1.5px)',
          }}
        >
          <Mail className="w-4 h-4 text-[#FAFAF8]/75 group-hover:text-[#FAFAF8] transition-colors" />
          <span className="tracking-tight text-[#FAFAF8]">Get in touch</span>
        </div>

        {/* STATE 2: "Let's talk" with Staggered Character Intro & Outro */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            opacity: buttonPhase === 'idle' ? 0 : 1,
            visibility: buttonPhase === 'idle' ? 'hidden' : 'visible',
            pointerEvents: 'none',
          }}
        >
          <div className="flex items-center tracking-tight font-medium text-[#FAFAF8]">
            {TALK_TEXT.split('').map((char, index) => {
              const isActive = buttonPhase === 'active';
              const isOutro = buttonPhase === 'outro';
              
              // Intro stagger: 16ms step, Outro stagger: 8ms step
              const enterDelay = `${index * 16}ms`;
              const exitDelay = `${index * 8}ms`;

              let transform = 'translateY(10px) scale(0.9)';
              let opacity = 0;
              let filter = 'blur(2px)';
              let duration = '0ms';
              let delay = '0ms';
              let timing = 'cubic-bezier(0.16, 1, 0.3, 1)';

              if (isActive) {
                transform = 'translateY(0) scale(1)';
                opacity = 1;
                filter = 'blur(0px)';
                duration = '220ms';
                delay = enterDelay;
              } else if (isOutro) {
                transform = 'translateY(-10px) scale(0.92)';
                opacity = 0;
                filter = 'blur(1.5px)';
                duration = '160ms';
                delay = exitDelay;
              }

              return (
                <span
                  key={index}
                  className="inline-block"
                  style={{
                    transform,
                    opacity,
                    filter,
                    transitionProperty: 'transform, opacity, filter',
                    transitionDuration: duration,
                    transitionDelay: delay,
                    transitionTimingFunction: timing,
                    willChange: 'transform, opacity',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
        </div>
      </button>
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Check, 
  Copy, 
  ExternalLink,
  Building2, 
  PartyPopper, 
  Megaphone, 
  Sparkles, 
  Film, 
  User, 
  Scissors, 
  Package,
  Layers,
  Palette,
  Sliders,
  Maximize2,
  Plus
} from 'lucide-react';

/**
 * On-Demand Video Editing Capabilities & Niches
 */
const EDIT_CAPABILITIES = [
  { label: 'YouTube Videos', iconSrc: '/icons/youtube.svg' },
  { label: 'Real Estate Reels', icon: Building2, iconColor: 'text-stone-600' },
  { label: 'Color Grading', icon: Palette, iconColor: 'text-amber-600' },
  { label: 'Motion VFX', icon: Sparkles, iconColor: 'text-amber-500' },
  { label: 'Brand Reels', icon: Megaphone, iconColor: 'text-emerald-600' },
  { label: 'Product Reels', icon: Package, iconColor: 'text-rose-500' },
  { label: 'Event Recaps', icon: PartyPopper, iconColor: 'text-sky-600' },
  { label: 'Stream Clips', icon: Scissors, iconColor: 'text-orange-500' },
  { label: 'Personal Brand', icon: User, iconColor: 'text-indigo-600' },
  { label: 'Sound Staging', icon: Sliders, iconColor: 'text-teal-600' },
];

/**
 * Curated Video Categories & Premier Showcases
 * 4 Focused Categories: YouTube Long-Form + 3 Vertical Reels Niches
 */
const CATEGORIES = [
  {
    id: 'youtube',
    label: 'YouTube Long-Form',
    shortLabel: 'YouTube',
    iconSrc: '/icons/youtube.svg',
    layout: 'cinematic', // 16:9 widescreen canvas
    video: {
      title: 'The Credit Card Game Is Starting To Break',
      src: '/gallery/videos/youtube-creditcard.mp4',
      poster: '/gallery/videos/youtube-creditcard-poster.webp',
      badge: 'Finance & Macro Essay',
      tool: 'DaVinci Resolve Studio',
      format: '1080p60 • 16:9',
      duration: '1:00 Preview',
      description: 'Retention-engineered pacing, macro financial motion graphics, and clean audio ducking.',
    },
  },
  {
    id: 'real-estate',
    label: 'Real Estate Reels',
    shortLabel: 'Real Estate',
    icon: Building2,
    layout: 'reels', // 9:16 vertical 3-reel showcase
    reels: [
      {
        id: 're-1',
        title: 'Versova 4BHK Luxury Apartment',
        subtitle: 'Interior architectural tour & lighting',
        src: '/gallery/videos/Versova-4BHK-opt.mp4',
        poster: '/gallery/videos/Versova-4BHK-poster.webp',
        badge: '4BHK Luxury Tour',
        tool: 'DaVinci Resolve',
        format: '9:16 Reel',
      },
      {
        id: 're-2',
        title: 'Statue of Unity Luxury Resort & Villas',
        subtitle: 'Aerial resort landscape & pool cottages',
        src: '/gallery/videos/Edit4-opt.mp4',
        poster: '/gallery/videos/Edit4-poster.webp',
        badge: 'Resort Walkthrough',
        tool: 'DaVinci Resolve',
        format: '9:16 Reel',
      },
      {
        id: 're-3',
        title: 'Modern Luxury Villa Architectural Tour',
        subtitle: 'Clean lines, stabilized cinematic walkthrough',
        src: '/gallery/videos/villa-architectural-opt.mp4',
        poster: '/gallery/videos/villa-architectural-poster.webp',
        badge: 'Architectural Tour',
        tool: 'DaVinci Resolve',
        format: '9:16 Reel',
      },
    ],
  },
  {
    id: 'events',
    label: 'Events Reels',
    shortLabel: 'Events',
    icon: PartyPopper,
    layout: 'reels', // 9:16 vertical 3-reel showcase
    reels: [
      {
        id: 'ev-1',
        title: 'Statue of Unity Ekta Prakash Parv',
        subtitle: 'High energy laser & celebration cuts',
        src: '/gallery/videos/reel-event-1-opt.mp4',
        poster: '/gallery/videos/reel-event-1-poster.webp',
        badge: 'Ekta Prakash Parv',
        tool: 'DaVinci & AE',
        format: '9:16 Reel',
      },
      {
        id: 'ev-2',
        title: 'Sou Tours Travel Experience',
        subtitle: 'Scenic movement & rhythm synchronization',
        src: '/gallery/videos/reel-event-2-opt.mp4',
        poster: '/gallery/videos/reel-event-2-poster.webp',
        badge: 'Sou Tours',
        tool: 'DaVinci & Premiere',
        format: '9:16 Reel',
      },
      {
        id: 'ev-3',
        title: 'Live Concert & Festival Aftermovie',
        subtitle: 'Stage lighting, crowd energy & bass drops',
        src: '/gallery/videos/festival-concert-opt.mp4',
        poster: '/gallery/videos/festival-concert-poster.webp',
        badge: 'Festival Aftermovie',
        tool: 'After Effects & Premiere',
        format: '9:16 Reel',
      },
    ],
  },
  {
    id: 'brands',
    label: 'Brand Commercials',
    shortLabel: 'Brands',
    icon: Megaphone,
    layout: 'reels', // 9:16 vertical showcase
    reels: [
      {
        id: 'br-1',
        title: 'Dynamic Fashion & Lifestyle Concept',
        subtitle: 'Bold typography, rhythmic cuts & grade',
        src: '/gallery/videos/Trial-Edit-opt.mp4',
        poster: '/gallery/videos/Trial-Edit-poster.webp',
        badge: 'Brand Concept',
        tool: 'DaVinci / After Effects',
        format: '9:16 Reel',
      },
      {
        id: 'br-2',
        title: 'Luxury Fragrance Spec Commercial',
        subtitle: 'Cinematic lighting, product macro & motion grade',
        src: '/gallery/videos/perfume-commercial-opt.mp4',
        poster: '/gallery/videos/perfume-commercial-poster.webp',
        badge: 'Commercial Ad',
        tool: 'DaVinci / Premiere',
        format: '9:16 Reel',
      },
      {
        id: 'br-3',
        title: 'Cinematic Footwear Spec Commercial',
        subtitle: 'Volumetric lighting, sole macro & sound design',
        src: '/gallery/videos/sneaker-commercial-opt.mp4',
        poster: '/gallery/videos/sneaker-commercial-poster.webp',
        badge: 'Product Commercial',
        tool: 'DaVinci & After Effects',
        format: '9:16 Reel',
      },
    ],
  },
];

export default function VideoEditingExplorePage({ onNavigate }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState('youtube');
  
  // YouTube player state
  const [ytPlaying, setYtPlaying] = useState(true);
  const [ytMuted, setYtMuted] = useState(true);
  const [ytLoading, setYtLoading] = useState(true);
  const ytVideoRef = useRef(null);

  // Reels players state
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [reelPlayingStates, setReelPlayingStates] = useState({});
  const [reelMutedStates, setReelMutedStates] = useState({});
  const [reelLoadingStates, setReelLoadingStates] = useState({});
  const reelRefs = useRef({});

  const [copiedField, setCopiedField] = useState(null);

  const activeCategory = CATEGORIES.find((c) => c.id === selectedCategoryId) || CATEGORIES[0];

  // Reset reel active index whenever category changes
  useEffect(() => {
    setActiveReelIndex(0);
    // Pause all reels from previous category
    Object.values(reelRefs.current).forEach((videoEl) => {
      if (videoEl && !videoEl.paused) {
        videoEl.pause();
      }
    });
  }, [selectedCategoryId]);

  const handleBack = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    } else {
      window.location.href = '/';
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // YouTube controls
  const toggleYtPlay = () => {
    if (!ytVideoRef.current) return;
    if (ytVideoRef.current.paused) {
      ytVideoRef.current.play();
      setYtPlaying(true);
    } else {
      ytVideoRef.current.pause();
      setYtPlaying(false);
    }
  };

  const toggleYtMute = () => {
    if (!ytVideoRef.current) return;
    ytVideoRef.current.muted = !ytVideoRef.current.muted;
    setYtMuted(ytVideoRef.current.muted);
  };

  // Reel controls
  const toggleReelPlay = (idx, e) => {
    if (e) e.stopPropagation();
    const videoEl = reelRefs.current[idx];
    if (!videoEl) return;

    if (videoEl.paused) {
      // Pause any other playing reel to prevent overlap
      Object.entries(reelRefs.current).forEach(([k, el]) => {
        if (el && Number(k) !== idx && !el.paused) {
          el.pause();
          setReelPlayingStates((prev) => ({ ...prev, [k]: false }));
        }
      });
      videoEl.play();
      setReelPlayingStates((prev) => ({ ...prev, [idx]: true }));
      setActiveReelIndex(idx);
    } else {
      videoEl.pause();
      setReelPlayingStates((prev) => ({ ...prev, [idx]: false }));
    }
  };

  const toggleReelMute = (idx, e) => {
    if (e) e.stopPropagation();
    const videoEl = reelRefs.current[idx];
    if (!videoEl) return;
    const newMuted = !videoEl.muted;
    videoEl.muted = newMuted;
    setReelMutedStates((prev) => ({ ...prev, [idx]: newMuted }));
  };

  const handleReelCardClick = (idx) => {
    const videoEl = reelRefs.current[idx];
    if (!videoEl) return;
    setActiveReelIndex(idx);

    if (videoEl.paused) {
      // Pause others
      Object.entries(reelRefs.current).forEach(([k, el]) => {
        if (el && Number(k) !== idx && !el.paused) {
          el.pause();
          setReelPlayingStates((prev) => ({ ...prev, [k]: false }));
        }
      });
      videoEl.play();
      setReelPlayingStates((prev) => ({ ...prev, [idx]: true }));
    } else {
      videoEl.pause();
      setReelPlayingStates((prev) => ({ ...prev, [idx]: false }));
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F7F3EC] text-[#161514] font-sans selection:bg-[#EAE5D9] selection:text-[#161514] overflow-x-hidden">
      {/* 1. Custom Themed Background Artwork */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <img
          src="/videoeditor-bg.webp"
          alt=""
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. Tactile Japanese paper micro-texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 paper-texture opacity-90"
        aria-hidden="true" 
      />

      {/* 3. Header Navigation Bar */}
      <header className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-4 sm:pt-6 pb-2 safe-top select-none">
        <div className="flex items-center justify-between pb-3 border-b border-[rgba(22,21,20,0.08)]">
          <a
            href="/"
            onClick={handleBack}
            className="pressable group inline-flex items-center gap-1.5 px-3 py-1.5 -ml-2 rounded-lg text-xs font-mono text-[#57534E] hover:text-[#161514] hover:bg-black/[0.04] active:scale-95 transition-all duration-150 cursor-pointer touch-manipulation"
            aria-label="Back to home page"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-stone-400 group-hover:-translate-x-0.5 transition-transform duration-150" />
            <span>Back</span>
          </a>

          {/* Section Breadcrumb Pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-lg bg-black/[0.04] border border-black/[0.06] backdrop-blur-xs select-none">
            <Film className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="text-[11px] font-mono font-medium text-[#161514] sm:hidden">
              # Video Editing
            </span>
            <span className="text-[11px] font-mono font-medium text-[#161514] hidden sm:inline">
              # Video Editing &amp; Motion Design
            </span>
          </div>
        </div>
      </header>

      {/* Main Single-Viewport Layout */}
      <main className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-8 py-3 sm:py-4 flex flex-col gap-3.5 sm:gap-4 animate-fade-in" style={{ animationDuration: '280ms' }}>
        
        {/* Full-Width Refined Segmented Control Category Bar (4 Clean Categories) */}
        <div className="w-full">
          <div 
            className="w-full flex items-center p-1 sm:p-1.5 rounded-2xl bg-black/[0.03] border border-black/[0.06] shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] backdrop-blur-xs overflow-x-auto no-scrollbar gap-1 sm:gap-1.5 sm:grid sm:grid-cols-4"
            role="tablist"
            aria-label="Filter showcase video category"
          >
            {CATEGORIES.map((cat) => {
              const isSelected = cat.id === selectedCategoryId;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`pressable group/tab relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-2.5 py-2 sm:py-2.5 rounded-xl text-xs font-mono transition-all duration-150 cursor-pointer select-none whitespace-nowrap touch-manipulation shrink-0 sm:shrink min-w-max sm:min-w-0 ${
                    isSelected
                      ? 'bg-white text-[#161514] font-bold shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_1px_rgba(0,0,0,0.04)] border border-stone-200/70'
                      : 'text-stone-500 hover:text-[#161514] hover:bg-black/[0.04] active:bg-black/[0.06]'
                  }`}
                >
                  {cat.iconSrc ? (
                    <img src={cat.iconSrc} alt="" className="w-3.5 h-3.5 object-contain shrink-0 group-hover/tab:scale-105 transition-transform" />
                  ) : (
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#161514]' : 'text-stone-400 group-hover/tab:text-stone-700'} group-hover/tab:scale-105 transition-all`} />
                  )}
                  <span className="hidden sm:inline font-semibold tracking-tight">{cat.label}</span>
                  <span className="sm:hidden font-semibold tracking-tight">{cat.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Responsive Grid (Left 8 cols, Right 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN (8 cols): Showcase Stage (16:9 or 9:16 Multi-Reels) */}
          {/* ======================================================== */}
          <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-3.5">
            
            {/* CASE A: YouTube Long-Form (16:9 Cinematic Video Player) */}
            {activeCategory.layout === 'cinematic' && (
              <div className="group/player relative w-full aspect-video rounded-2xl bg-black overflow-hidden border border-stone-200/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12),0_4px_20px_rgba(0,0,0,0.06)] shrink-0">
                <video
                  key={activeCategory.video.src}
                  ref={ytVideoRef}
                  src={activeCategory.video.src}
                  poster={activeCategory.video.poster}
                  autoPlay
                  loop
                  muted={ytMuted}
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onWaiting={() => setYtLoading(true)}
                  onPlaying={() => {
                    setYtLoading(false);
                    setYtPlaying(true);
                  }}
                  onPause={() => setYtPlaying(false)}
                  onCanPlay={() => setYtLoading(false)}
                />

                {/* Tactile Buffering / Loading Animation */}
                {ytLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 pointer-events-none z-20">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 border border-white/10 shadow-lg text-white">
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-white/20 border-t-amber-400 animate-spin" />
                      <span className="text-[11px] font-mono text-white/90">Buffering...</span>
                    </div>
                  </div>
                )}

                {/* Top Header Overlay */}
                <div className="absolute top-0 inset-x-0 p-3 sm:p-3.5 bg-gradient-to-b from-black/85 via-black/40 to-transparent flex items-center justify-between pointer-events-none select-none z-10 gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="px-2 py-0.5 rounded-md bg-amber-500 text-black text-[10px] font-mono font-bold tracking-wide uppercase shrink-0 shadow-xs whitespace-nowrap">
                      {activeCategory.video.badge}
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium text-white/95 tracking-tight truncate drop-shadow-sm">
                      {activeCategory.video.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/70 px-1.5 py-0.5 rounded bg-white/10 backdrop-blur-xs shrink-0 hidden sm:inline">
                    {activeCategory.video.tool}
                  </span>
                </div>

                {/* Bottom Video Controls */}
                <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={toggleYtPlay}
                      className="pressable p-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer backdrop-blur-xs"
                      aria-label={ytPlaying ? 'Pause video' : 'Play video'}
                    >
                      {ytPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
                    </button>
                    <button
                      type="button"
                      onClick={toggleYtMute}
                      className="pressable p-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer backdrop-blur-xs"
                      aria-label={ytMuted ? 'Unmute video' : 'Mute video'}
                    >
                      {ytMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                    <span className="text-[11px] font-mono text-white/70 ml-1">
                      {activeCategory.video.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-mono text-white/80">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>{activeCategory.video.format}</span>
                  </div>
                </div>
              </div>
            )}

            {/* CASE B: Vertical Reels Showcase Canvas (Fits 3 Reels Form) */}
            {activeCategory.layout === 'reels' && (
              <div className="flex flex-col gap-2">
                {/* Horizontal Snap Scroll Track for Mobile / Uniform 3-Column Grid for Tablet & Desktop */}
                <div className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-3.5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar pb-1 px-0.5 w-full">
                  {activeCategory.reels.map((reel, idx) => {
                    const isReelActive = activeReelIndex === idx;
                    const isPlaying = reelPlayingStates[idx] ?? true;
                    const isMuted = reelMutedStates[idx] ?? true;
                    const isLoading = reelLoadingStates[idx] ?? false;

                    return (
                      <div
                        key={reel.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleReelCardClick(idx)}
                        onKeyDown={(e) => e.key === 'Enter' && handleReelCardClick(idx)}
                        className={`group/reel relative w-[76vw] sm:w-auto shrink-0 snap-center aspect-[9/16] rounded-2xl bg-black overflow-hidden border transition-all duration-200 cursor-pointer select-none shadow-[0_4px_16px_rgba(0,0,0,0.08)] ${
                          isReelActive
                            ? 'border-amber-500/90 shadow-[0_0_0_2px_rgba(245,158,11,0.25),0_6px_24px_rgba(0,0,0,0.12)]'
                            : 'border-stone-200/80 hover:border-stone-400/80'
                        }`}
                        aria-label={`Play ${reel.title}`}
                      >
                        {/* Video Element */}
                        <video
                          ref={(el) => {
                            reelRefs.current[idx] = el;
                          }}
                          src={reel.src}
                          poster={reel.poster}
                          autoPlay
                          loop
                          muted={isMuted}
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                          onWaiting={() => setReelLoadingStates((p) => ({ ...p, [idx]: true }))}
                          onPlaying={() => {
                            setReelLoadingStates((p) => ({ ...p, [idx]: false }));
                            setReelPlayingStates((p) => ({ ...p, [idx]: true }));
                          }}
                          onPause={() => setReelPlayingStates((p) => ({ ...p, [idx]: false }))}
                          onCanPlay={() => setReelLoadingStates((p) => ({ ...p, [idx]: false }))}
                        />

                        {/* Tactile Buffering / Loading Indicator */}
                        {isLoading && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 pointer-events-none z-20">
                            <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-black/70 border border-white/10 shadow-lg text-white">
                              <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-amber-400 animate-spin" />
                              <span className="text-[9px] font-mono text-white/80 uppercase tracking-wider">Loading</span>
                            </div>
                          </div>
                        )}

                        {/* Top Reels Card Header Bar */}
                        <div className="absolute top-0 inset-x-0 p-2.5 sm:p-3 bg-gradient-to-b from-black/85 via-black/40 to-transparent flex items-center justify-between z-10">
                          <span className="px-2 py-0.5 rounded-md bg-amber-500 text-black text-[9.5px] font-mono font-bold tracking-tight uppercase shadow-xs truncate max-w-[70%]">
                            {reel.badge}
                          </span>

                          <div className="flex items-center gap-1.5">
                            {/* Audio Toggle Button */}
                            <button
                              type="button"
                              onClick={(e) => toggleReelMute(idx, e)}
                              className="pressable p-1.5 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/10 backdrop-blur-xs transition-all cursor-pointer shadow-sm active:scale-90"
                              title={isMuted ? 'Unmute audio' : 'Mute audio'}
                              aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                            >
                              {isMuted ? <VolumeX className="w-3 h-3 text-stone-300" /> : <Volume2 className="w-3 h-3 text-amber-400" />}
                            </button>

                            {/* Play / Pause Toggle Button */}
                            <button
                              type="button"
                              onClick={(e) => toggleReelPlay(idx, e)}
                              className="pressable p-1.5 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/10 backdrop-blur-xs transition-all cursor-pointer shadow-sm active:scale-90"
                              title={isPlaying ? 'Pause' : 'Play'}
                              aria-label={isPlaying ? 'Pause' : 'Play'}
                            >
                              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                            </button>
                          </div>
                        </div>

                        {/* Center Tap Indicator on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover/reel:opacity-100 transition-opacity duration-200 z-10">
                          <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shadow-lg">
                            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                          </div>
                        </div>

                        {/* Bottom Reels Card Footer Overlay */}
                        <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-0.5 z-10 pointer-events-none">
                          <h3 className="text-xs font-semibold text-white tracking-tight line-clamp-1 drop-shadow-sm">
                            {reel.title}
                          </h3>
                          <div className="flex items-center justify-between text-[10px] font-mono text-white/70 pt-0.5">
                            <span className="truncate">{reel.subtitle}</span>
                            <span className="shrink-0 px-1.5 py-0.2 rounded bg-white/15 text-[9px]">
                              {reel.format}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Reserved / Open slot for categories with fewer than 3 reels to preserve identical card dimensions */}
                  {activeCategory.reels.length < 3 && (
                    <div 
                      className="hidden sm:flex flex-col items-center justify-center aspect-[9/16] rounded-2xl border-2 border-dashed border-stone-300/80 bg-stone-100/40 p-5 text-center select-none group transition-all"
                      aria-label="Reserved slot for upcoming commercial reel"
                    >
                      <div className="w-10 h-10 rounded-full bg-white border border-stone-200/80 shadow-xs flex items-center justify-center mb-2.5 text-stone-400 group-hover:text-amber-600 group-hover:scale-105 transition-all">
                        <Plus className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-stone-700">Reserved Slot</span>
                      <span className="text-[10px] font-mono text-stone-400 mt-1 max-w-[130px] leading-tight">
                        Commercial in post-production
                      </span>
                      <div className="mt-3 px-2 py-0.5 rounded-md bg-stone-200/60 text-stone-600 text-[9px] font-mono uppercase tracking-wider font-semibold">
                        9:16 Reel
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Dot Indicators */}
                <div className="flex sm:hidden items-center justify-center gap-1.5 py-1">
                  {activeCategory.reels.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleReelCardClick(i)}
                      className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                        activeReelIndex === i ? 'w-5 bg-amber-500' : 'w-1.5 bg-stone-300'
                      }`}
                      aria-label={`Go to reel ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Subtle helper note */}
                <div className="flex items-center justify-between px-1 text-[11px] font-mono text-stone-500 pt-0.5">
                  <span>⚡ Tap any reel card to play or toggle sound</span>
                  <span className="hidden sm:inline">Optimized 9:16 vertical delivery</span>
                </div>
              </div>
            )}

            {/* 2. Identity & Core Craft (Direct on washi background) */}
            <div className="flex flex-col gap-2.5 pt-2 pb-1 px-1 sm:px-2">
              <div>
                <div className="flex items-center gap-2 pb-2 border-b border-stone-200/80 mb-2.5">
                  <span className="text-xs font-mono font-bold text-[#161514] tracking-tight shrink-0">
                    # Creative Identity
                  </span>
                  <div className="flex-1 h-[1px] bg-stone-200/80" />
                  <span className="px-2 py-0.5 rounded-md bg-stone-100/80 text-[10px] font-mono text-stone-600 border border-stone-200/80 font-medium">
                    Motion &amp; Cinematic
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 items-start">
                  <h1 className="text-base sm:text-lg font-bold text-[#161514] tracking-tight">
                    Video Editor &amp; Motion Designer
                  </h1>
                  
                  {/* Highlight Primary NLE: DaVinci Resolve */}
                  <div className="group/pill inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-100/70 border border-stone-200/70 text-stone-800 font-mono text-[11px] font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.02)] shrink-0 w-fit">
                    <img src="/icons/davinci.svg" alt="DaVinci" className="w-3.5 h-3.5 object-contain group-hover/pill:rotate-45 transition-transform duration-300" />
                    <span>DaVinci Resolve Studio</span>
                  </div>
                </div>
              </div>

              {/* Tools & Suite Focus */}
              <div className="flex items-center gap-2 flex-wrap pt-1 border-t border-stone-200/80">
                <span className="text-[11px] font-mono text-stone-400 shrink-0">Suite:</span>
                <div className="group/pill inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100/70 border border-stone-200/70 text-stone-700 font-mono text-[11px] font-medium hover:text-black hover:border-stone-400 hover:bg-stone-50 hover:-translate-y-0.5 active:scale-[0.96] transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <img src="/icons/premiere.svg" alt="Premiere" className="w-3 h-3 group-hover/pill:scale-110 transition-transform duration-150" />
                  <span>Premiere Pro</span>
                </div>
                <div className="group/pill inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100/70 border border-stone-200/70 text-stone-700 font-mono text-[11px] font-medium hover:text-black hover:border-stone-400 hover:bg-stone-50 hover:-translate-y-0.5 active:scale-[0.96] transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <img src="/icons/aftereffects.svg" alt="AE" className="w-3 h-3 group-hover/pill:scale-110 transition-transform duration-150" />
                  <span>After Effects</span>
                </div>
              </div>

            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN (4 cols): Direct Editorial Flow */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between py-1 px-1 sm:px-2">
            
            {/* Top Section: Direct Contact & Commissions */}
            <div>
              <div className="flex items-center gap-2 pb-2.5 border-b border-stone-200/80 mb-3">
                <span className="text-xs font-mono font-bold text-[#161514] tracking-tight shrink-0">
                  # Direct Contact
                </span>
                <div className="flex-1 h-[1px] bg-stone-200/80" />
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100/80 text-[10px] font-mono text-stone-600 border border-stone-200/80 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>

              <h2 className="text-sm sm:text-base font-bold text-[#161514] tracking-tight leading-snug">
                Video Commissions
              </h2>
              <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                YouTube retention edits, real estate architectural tours &amp; commercial reels.
              </p>

              {/* Flush, Borderless Channel Rows */}
              <div className="mt-3.5 space-y-1">
                {/* WhatsApp Channel */}
                <div className="group flex items-center justify-between py-2 px-2.5 -mx-2 rounded-xl hover:bg-black/[0.03] transition-colors">
                  <a
                    href="https://wa.me/919261818621?text=Hi%20Aditya%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20video%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 flex-1 min-w-0"
                    aria-label="Direct WhatsApp Chat with Aditya: +91 92618 18621"
                  >
                    <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-4 h-4 object-contain shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-stone-400 leading-none">WhatsApp</div>
                      <div className="text-xs font-mono font-semibold text-[#161514] truncate mt-0.5">+91 92618 18621</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-1 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    <a
                      href="https://wa.me/919261818621?text=Hi%20Aditya%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20video%20project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pressable p-1.5 rounded-lg text-stone-400 hover:text-[#161514] hover:bg-black/[0.04] transition-colors"
                      title="Open WhatsApp Chat"
                      aria-label="Open WhatsApp Chat"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('+919261818621', 'whatsapp')}
                      className="pressable p-1.5 rounded-lg text-stone-400 hover:text-[#161514] hover:bg-black/[0.04] transition-colors cursor-pointer"
                      title="Copy Phone Number"
                      aria-label="Copy WhatsApp phone number"
                    >
                      {copiedField === 'whatsapp' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Discord Channel */}
                <div className="group flex items-center justify-between py-2 px-2.5 -mx-2 rounded-xl hover:bg-black/[0.03] transition-colors">
                  <a
                    href="https://discord.com/users/codexceed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 flex-1 min-w-0"
                    aria-label="Open Discord Profile: codexceed"
                  >
                    <img src="/icons/discord.svg" alt="Discord" className="w-4 h-4 object-contain shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-stone-400 leading-none">Discord</div>
                      <div className="text-xs font-mono font-semibold text-[#161514] truncate mt-0.5">@codexceed</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-1 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    <a
                      href="https://discord.com/users/codexceed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pressable p-1.5 rounded-lg text-stone-400 hover:text-[#161514] hover:bg-black/[0.04] transition-colors"
                      title="Open Discord Profile"
                      aria-label="Open Discord Profile"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('codexceed', 'discord')}
                      className="pressable p-1.5 rounded-lg text-stone-400 hover:text-[#161514] hover:bg-black/[0.04] transition-colors cursor-pointer"
                      title="Copy Discord Username"
                      aria-label="Copy Discord username codexceed"
                    >
                      {copiedField === 'discord' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: What Can I Edit? */}
            <div className="pt-4 border-t border-stone-200/80 mt-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-stone-200/80 mb-3">
                <Film className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="text-xs font-mono font-bold text-[#161514] tracking-tight shrink-0">
                  # What Can I Edit?
                </span>
                <div className="flex-1 h-[1px] bg-stone-200/80" />
                <span className="text-[10px] font-mono text-stone-500 font-medium">
                  On-Demand
                </span>
              </div>

              {/* Clean, Non-Boxed Typographic 2-Column Grid */}
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 pt-0.5">
                {EDIT_CAPABILITIES.map((cap) => (
                  <div
                    key={cap.label}
                    className="group/item flex items-center gap-1.5 py-1 px-1.5 -mx-1 rounded-md text-[10.5px] font-mono font-medium text-stone-600 hover:text-black hover:bg-black/[0.03] tracking-tight transition-all duration-150 cursor-default select-none min-w-0"
                  >
                    {cap.iconSrc ? (
                      <img src={cap.iconSrc} alt="" className="w-3.5 h-3.5 object-contain shrink-0 group-hover/item:scale-110 transition-transform duration-150" />
                    ) : (
                      <cap.icon className={`w-3.5 h-3.5 shrink-0 ${cap.iconColor} group-hover/item:scale-110 transition-transform duration-150`} />
                    )}
                    <span className="truncate group-hover/item:translate-x-0.5 transition-transform duration-150">{cap.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
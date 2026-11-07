import React, { useState, useRef } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Check, 
  Copy, 
  ExternalLink,
  Tv,
  Building2,
  PartyPopper,
  Megaphone,
  Wand2,
  Cpu,
  Layers,
  Sparkles,
  Film,
  User,
  Scissors,
  Package,
  Box
} from 'lucide-react';

/**
 * On-Demand Video Editing Capabilities & Niches
 */
const EDIT_CAPABILITIES = [
  { label: 'YouTube Videos', iconSrc: '/icons/youtube.svg' },
  { label: 'Real Estate', icon: Building2, iconColor: 'text-stone-600' },
  { label: 'Cinematics', icon: Film, iconColor: 'text-amber-600' },
  { label: 'Motion VFX', icon: Sparkles, iconColor: 'text-amber-500' },
  { label: 'Brand Reels', icon: Megaphone, iconColor: 'text-emerald-600' },
  { label: 'Product Reels', icon: Package, iconColor: 'text-rose-500' },
  { label: 'Event Recaps', icon: PartyPopper, iconColor: 'text-sky-600' },
  { label: 'Stream Clips', icon: Scissors, iconColor: 'text-orange-500' },
  { label: 'Personal Brand', icon: User, iconColor: 'text-indigo-600' },
  { label: '3D Elements', icon: Box, iconColor: 'text-teal-600' },
];

/**
 * Curated Video Categories & Premier Showcases
 */
const CATEGORIES = [
  {
    id: 'youtube',
    label: 'YouTube Long-Form',
    shortLabel: 'YouTube',
    iconSrc: '/icons/youtube.svg',
    video: {
      title: 'Documentary Essay & Retention Engineering',
      src: '/gallery/videos/Showcase-1.mp4',
      poster: '/gallery/videos/Showcase-1-poster.webp',
      badge: 'Retention Edit',
      tool: 'DaVinci / Premiere',
      format: '1080p60',
    },
  },
  {
    id: 'real-estate',
    label: 'Real Estate Reels',
    shortLabel: 'Real Estate',
    icon: Building2,
    video: {
      title: 'Luxury Villa Architectural Walkthrough',
      src: '/gallery/videos/Showcase-2.mp4',
      poster: '/gallery/videos/Showcase-2-poster.webp',
      badge: 'Luxury Walkthrough',
      tool: 'DaVinci Resolve',
      format: '4K Cinema',
    },
  },
  {
    id: 'events',
    label: 'Events Reels',
    shortLabel: 'Events',
    icon: PartyPopper,
    video: {
      title: 'Automotive Festival Dynamic Aftermovie',
      src: '/gallery/videos/Mahindra.mp4',
      poster: '/gallery/videos/Mahindra-poster.webp',
      badge: 'Event Aftermovie',
      tool: 'After Effects & Premiere',
      format: '1080p60',
    },
  },
  {
    id: 'brands',
    label: 'Brand Commercials',
    shortLabel: 'Brands',
    icon: Megaphone,
    video: {
      title: 'Fashion Editorial Commercial Sequence',
      src: '/gallery/videos/Debatable.mp4',
      poster: '/gallery/videos/Debatable-poster.webp',
      badge: 'Brand Commercial',
      tool: 'DaVinci / After Effects',
      format: 'Cinema Scope',
    },
  },
  {
    id: 'on-demand',
    label: '3D Cinematics',
    shortLabel: '3D Cinematics',
    icon: Wand2,
    video: {
      title: 'Minecraft 3D Cinematic Animation (Vexel)',
      src: '/gallery/videos/GixelMC.mp4',
      poster: '/gallery/videos/GixelMC-poster.webp',
      badge: '3D Rigged Cinematic',
      tool: 'Mine-imator & AE',
      format: '1080p60',
    },
  },
];

export default function VideoEditingExplorePage({ onNavigate }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState('youtube');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [copiedField, setCopiedField] = useState(null);
  const videoRef = useRef(null);

  const activeCategory = CATEGORIES.find((c) => c.id === selectedCategoryId) || CATEGORIES[0];
  const activeVideo = activeCategory.video;

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

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F7F3EC] text-[#161514] font-sans selection:bg-[#EAE5D9] selection:text-[#161514] overflow-x-hidden">
      {/* 1. Custom Themed Background Artwork (videoeditor-bg.webp) */}
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

          {/* Section Breadcrumb Pill (Refined home page token, responsive label) */}
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

      {/* Main Single-Viewport Layout (Matching Minecraft page architecture, zero scroll) */}
      <main className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-8 py-3 sm:py-4 flex flex-col gap-3.5 sm:gap-4 animate-fade-in" style={{ animationDuration: '280ms' }}>
        
        {/* Full-Width Refined Segmented Control Category Bar */}
        <div className="w-full">
            <div 
              className="w-full flex items-center p-1 sm:p-1.5 rounded-2xl bg-black/[0.03] border border-black/[0.06] shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] backdrop-blur-xs overflow-x-auto no-scrollbar gap-1 sm:gap-1.5 sm:grid sm:grid-cols-5"
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
                    <span className="hidden lg:inline font-semibold tracking-tight">{cat.label}</span>
                    <span className="lg:hidden font-semibold tracking-tight">{cat.shortLabel}</span>
                  </button>
                );
              })}
            </div>
        </div>

        {/* 2-Column Responsive Grid (Left 8 cols, Right 4 cols - Combined Panels Equal Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN (8 cols): Video Player & Identity Craft Card */}
          {/* ======================================================== */}
          <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-3.5">
            
            {/* 1. YouTube-Style Cinematic Video Player */}
            <div className="group/player relative w-full aspect-video rounded-2xl bg-black overflow-hidden border border-stone-200/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12),0_4px_20px_rgba(0,0,0,0.06)] shrink-0">
              <video
                key={activeVideo.src}
                ref={videoRef}
                src={activeVideo.src}
                poster={activeVideo.poster}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Top YouTube-Style Video Header Overlay */}
              <div className="absolute top-0 inset-x-0 p-3 sm:p-3.5 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between pointer-events-none select-none z-10 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="px-2 py-0.5 rounded-md bg-amber-500 text-black text-[10px] font-mono font-bold tracking-wide uppercase shrink-0 shadow-xs whitespace-nowrap">
                    {activeVideo.badge}
                  </span>
                  <span className="text-xs sm:text-[13px] font-medium text-white/95 tracking-tight truncate drop-shadow-sm">
                    {activeVideo.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/70 px-1.5 py-0.5 rounded bg-white/10 backdrop-blur-xs shrink-0 hidden sm:inline">
                  {activeVideo.tool}
                </span>
              </div>

              {/* Bottom Video Controls */}
              <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="pressable p-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer backdrop-blur-xs"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="pressable p-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer backdrop-blur-xs"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-white/80">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>{activeVideo.format}</span>
                </div>
              </div>
            </div>

            {/* 2. Identity & Core Craft (Direct on washi background, zero white box) */}
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

              {/* Tools & Suite Focus - Quiet, balanced editorial hierarchy */}
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
                <div className="group/pill inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100/70 border border-stone-200/70 text-stone-700 font-mono text-[11px] font-medium hover:text-black hover:border-stone-400 hover:bg-stone-50 hover:-translate-y-0.5 active:scale-[0.96] transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <img src="/icons/mineimator.webp" alt="Mine-imator" className="w-3 h-3 group-hover/pill:scale-110 transition-transform duration-150" />
                  <span>Mine-imator</span>
                </div>
              </div>

            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN (4 cols): Direct Editorial Flow (Zero white box, natural on washi canvas) */}
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
                YouTube retention edits, commercial reels &amp; 3D cinematics.
              </p>

              {/* Flush, Borderless Channel Rows (Zero nested cards) */}
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

            {/* Bottom Section: What Can I Edit? (Clean Typographic Grid - Zero Bordered Boxes) */}
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

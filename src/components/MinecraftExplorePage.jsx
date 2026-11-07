import React, { useState, useRef } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';



export default function MinecraftExplorePage({ onNavigate }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [copiedField, setCopiedField] = useState(null);
  const videoRef = useRef(null);

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
      {/* 1. Custom Themed Background Artwork (minecraft-bg.webp) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <img
          src="/minecraft-bg.webp"
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
            <img 
              src="/icons/minecraft-brand.svg" 
              alt="Minecraft" 
              className="w-3.5 h-3.5 object-contain shrink-0" 
            />
            <span className="text-[11px] font-mono font-medium text-[#161514] sm:hidden">
              # Minecraft
            </span>
            <span className="text-[11px] font-mono font-medium text-[#161514] hidden sm:inline">
              # Minecraft Speedrunner
            </span>
          </div>
        </div>
      </header>

      {/* Main Single-Viewport Layout (Matching VideoEditingExplorePage architecture) */}
      <main className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-8 py-3 sm:py-4 flex flex-col gap-3.5 sm:gap-4 animate-fade-in" style={{ animationDuration: '280ms' }}>
        
        {/* 2-Column Responsive Grid (Left 8 cols, Right 4 cols - Combined Panels Equal Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN (8 cols): Minecraft Speedrunning Video & Specs */}
          {/* ======================================================== */}
          <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-3.5">
            
            {/* 1. Big Speedrunning Video Player */}
            <div className="group/player relative w-full aspect-video rounded-2xl bg-black overflow-hidden border border-stone-200/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12),0_4px_20px_rgba(0,0,0,0.06)] shrink-0">
              <video
                ref={videoRef}
                src="/gallery/videos/GixelMC.mp4"
                poster="/gallery/videos/GixelMC-poster.webp"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Top YouTube-Style Video Header Overlay (Responsive, never wraps badge) */}
              <div className="absolute top-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between pointer-events-none select-none z-10 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-red-600 text-[10px] font-mono font-bold text-white tracking-wide uppercase shrink-0 shadow-xs whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    MCSR Clip
                  </span>
                  <span className="text-xs sm:text-[13px] font-medium text-white/95 tracking-tight truncate drop-shadow-sm">
                    Minecraft Speedrunning (MCSR)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/70 px-1.5 py-0.5 rounded bg-white/10 backdrop-blur-xs shrink-0">
                  1080p60
                </span>
              </div>

              {/* Bottom YouTube-Style Floating Control Bar */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="pressable p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer backdrop-blur-xs"
                    aria-label={isPlaying ? 'Pause speedrun video' : 'Play speedrun video'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="pressable p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer backdrop-blur-xs"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[10.5px] font-mono text-white/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>OnlyCodeX Speedrun</span>
                </div>
              </div>
            </div>

            {/* 2. Minecraft Speedrunner Identity & Specs (Direct on washi background, zero white box) */}
            <div className="flex flex-col gap-2.5 pt-2 pb-1 px-1 sm:px-2">
              
              {/* Identity & Main Headline (Home page hairline divider signature) */}
              <div>
                <div className="flex items-center gap-2 pb-2 border-b border-stone-200/80 mb-2.5">
                  <span className="text-xs font-mono font-bold text-[#161514] tracking-tight shrink-0">
                    # MCSR Speedrunner
                  </span>
                  <div className="flex-1 h-[1px] bg-stone-200/80" />
                  <a
                    href="https://mcsrranked.com/stats/OnlyCodeX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100/80 hover:bg-stone-200/80 text-[10px] font-mono text-stone-600 hover:text-black border border-stone-200/80 font-medium transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    title="View OnlyCodeX stats on MCSR Ranked"
                    aria-label="View OnlyCodeX stats on MCSR Ranked"
                  >
                    <span>Competitive</span>
                    <ArrowUpRight className="w-2.5 h-2.5 text-stone-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Detached MCSR Logo with independent link & hover */}
                    <a
                      href="https://mcsrranked.com/stats/OnlyCodeX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pressable shrink-0 rounded-lg transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-hidden"
                      title="View OnlyCodeX stats on MCSR Ranked"
                      aria-label="View OnlyCodeX stats on MCSR Ranked"
                    >
                      <img 
                        src="/icons/mcsr.svg" 
                        alt="MCSR Ranked" 
                        className="w-11 h-11 sm:w-12 sm:h-12 object-contain shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.08)]" 
                      />
                    </a>

                    <div>
                      {/* Text Headline with Redirect Arrow - Detached from logo */}
                      <a
                        href="https://mcsrranked.com/stats/OnlyCodeX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 hover:opacity-85 transition-opacity cursor-pointer select-none"
                        title="View OnlyCodeX stats on MCSR Ranked"
                        aria-label="View OnlyCodeX stats on MCSR Ranked"
                      >
                        <h1 className="text-lg sm:text-xl font-bold text-[#161514] tracking-tight group-hover:underline underline-offset-4 decoration-stone-300">
                          I&apos;m a MCSR Speedrunner
                        </h1>
                        <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                      </a>

                      {/* Versions Played (Neat row under title) */}
                      <div className="flex items-center gap-2 flex-wrap pt-1">
                        <span className="text-[11px] font-mono text-stone-400 shrink-0">
                          Mostly plays:
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-stone-100/70 text-stone-800 font-mono text-[11px] font-medium border border-stone-200/70 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                          1.16.1
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-stone-100/70 text-stone-800 font-mono text-[11px] font-medium border border-stone-200/70 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                          1.20.2
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-stone-100/70 text-stone-800 font-mono text-[11px] font-medium border border-stone-200/70 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                          1.21.4
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* IGN Pill with 1-click Copy */}
                  <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-center">
                    <span className="text-[11px] font-mono text-stone-400">IGN:</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('OnlyCodeX', 'ign')}
                      className="pressable group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-100/70 hover:bg-stone-50 border border-stone-200/70 text-xs font-mono font-medium text-stone-700 hover:text-black transition-all cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                      title="Click to copy Minecraft IGN"
                      aria-label="Copy Minecraft IGN OnlyCodeX"
                    >
                      <span>OnlyCodeX</span>
                      {copiedField === 'ign' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-700 transition-colors" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN (4 cols): Direct Editorial Flow (Zero white box, natural on washi canvas) */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between py-1 px-1 sm:px-2">
            
            {/* Top Section: Modrinth Creator & Custom Work */}
            <div>
              <div className="flex items-center gap-2 pb-2 border-b border-stone-200/80 mb-2.5">
                <span className="text-xs font-mono font-bold text-[#161514] tracking-tight shrink-0">
                  # Modrinth Creator
                </span>
                <div className="flex-1 h-[1px] bg-stone-200/80" />
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100/80 text-[10px] font-mono text-stone-600 border border-stone-200/80 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>

              <h2 className="text-sm sm:text-base font-bold text-[#161514] tracking-tight leading-snug">
                Mods, Plugins &amp; Modpacks
              </h2>
              <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                Custom mechanics, server utilities &amp; optimization on demand.
              </p>

              {/* Flush Channel Rows */}
              <div className="mt-3 space-y-1">
                {/* Modrinth Profile */}
                <div className="group flex items-center justify-between py-1.5 px-2 -mx-2 rounded-lg hover:bg-black/[0.03] transition-colors">
                  <a
                    href="https://modrinth.com/user/CodeXceed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 flex-1 min-w-0"
                    aria-label="Open Modrinth Profile: CodeXceed"
                  >
                    <img src="/icons/modrinth.svg" alt="Modrinth" className="w-4 h-4 object-contain shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-stone-400 leading-none">Modrinth</div>
                      <div className="text-xs font-mono font-semibold text-[#161514] truncate mt-0.5">CodeXceed</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-1 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    <a
                      href="https://modrinth.com/user/CodeXceed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pressable p-1.5 rounded-lg text-stone-400 hover:text-[#161514] hover:bg-black/[0.04] transition-colors"
                      title="Open Modrinth Profile"
                      aria-label="Open Modrinth Profile"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('CodeXceed', 'modrinth')}
                      className="pressable p-1.5 rounded-lg text-stone-400 hover:text-[#161514] hover:bg-black/[0.04] transition-colors cursor-pointer"
                      title="Copy Modrinth Username"
                      aria-label="Copy Modrinth username CodeXceed"
                    >
                      {copiedField === 'modrinth' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Discord Channel */}
                <div className="group flex items-center justify-between py-1.5 px-2 -mx-2 rounded-lg hover:bg-black/[0.03] transition-colors">
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

            {/* Bottom Section: Other Games */}
            <div className="pt-3 border-t border-stone-200/80 mt-3">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-200/80 mb-2.5">
                <span className="text-xs font-mono font-bold text-[#161514] tracking-tight shrink-0">
                  # Other Games
                </span>
                <div className="flex-1 h-[1px] bg-stone-200/80" />
                <span className="px-2 py-0.5 rounded-md bg-stone-100/80 text-[10px] font-mono text-stone-600 border border-stone-200/80 font-medium">
                  Side Interests
                </span>
              </div>

              <div className="space-y-1.5 pt-0.5">
                {/* BGMI Row */}
                <div className="group flex items-center justify-between py-1.5 px-2 -mx-2 rounded-lg hover:bg-black/[0.03] transition-colors">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img src="/icons/pubg.svg" alt="BGMI" className="w-4 h-3.5 object-contain shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-mono font-semibold text-[#161514] flex items-center gap-2">
                        <span>BGMI</span>
                        <span className="text-[9.5px] font-mono text-stone-400 font-normal">· casual</span>
                      </div>
                      <div className="text-[11px] font-mono text-stone-500 truncate mt-0.5">IGN: BGMHACKER112</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('BGMHACKER112', 'bgmi')}
                    className="pressable p-1.5 rounded-lg text-stone-400 hover:text-[#161514] hover:bg-black/[0.04] transition-colors cursor-pointer opacity-70 group-hover:opacity-100"
                    title="Copy BGMI IGN"
                    aria-label="Copy BGMI IGN BGMHACKER112"
                  >
                    {copiedField === 'bgmi' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Chess.com Row */}
                <div className="group flex items-center justify-between py-1.5 px-2 -mx-2 rounded-lg hover:bg-black/[0.03] transition-colors">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img src="/icons/chesscom.svg" alt="Chess.com" className="w-4 h-4 object-contain shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-mono font-semibold text-[#161514] flex items-center gap-2">
                        <span>Chess.com</span>
                        <span className="text-[9.5px] font-mono text-emerald-700 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.2 rounded">ELO 500</span>
                      </div>
                      <div className="text-[11px] font-mono text-stone-500 truncate mt-0.5">IGN: codeXceed · Rapid / Blitz</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('codeXceed', 'chess')}
                    className="pressable p-1.5 rounded-lg text-stone-400 hover:text-[#161514] hover:bg-black/[0.04] transition-colors cursor-pointer opacity-70 group-hover:opacity-100"
                    title="Copy Chess IGN"
                    aria-label="Copy Chess IGN codeXceed"
                  >
                    {copiedField === 'chess' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Gamepad2, 
  Briefcase, 
  Pin, 
  ArrowUpRight, 
  Layers,
  ChevronDown,
  Target,
  Crown,
  BookOpen,
  Play,
  Film
} from 'lucide-react';

/**
 * Minimal Japanese Seigaiha Line Art (Consistent with SelectedWorks)
 */
function SeigaihaLines() {
  return (
    <svg className="w-full h-full opacity-[0.06]" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="0.8">
      <path d="M0 60 A25 25 0 0 1 50 60" />
      <path d="M10 60 A15 15 0 0 1 40 60" />
      <path d="M50 60 A25 25 0 0 1 100 60" />
      <path d="M60 60 A15 15 0 0 1 90 60" />
      <path d="M25 60 A25 25 0 0 1 75 60" opacity="0.6" />
    </svg>
  );
}

/**
 * Chess Knight Minimalist Vector Emblem
 */
function ChessKnightEmblem({ color = "#44403C" }) {
  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 40h20M17 40v-4c0-2 1-3 3-4l4-2c2-1 3-3 3-5v-3c0-1-1-2-2-2h-3l-2-2c-1-1-1-3 0-4l2-2c1-1 3-1 4 0l3 3c2 2 3 5 3 8v3c0 3-2 6-4 8l-3 2v5" opacity="0.85" />
      <circle cx="21" cy="19" r="1.5" fill={color} />
      <path d="M16 26c2 1 4 0 5-2" opacity="0.7" />
    </svg>
  );
}

/**
 * Tactical Esports Crosshairs Emblem
 */
function TacticalCrosshairEmblem({ color = "#D97706" }) {
  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.2">
      <circle cx="24" cy="24" r="15" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="24" cy="24" r="7" opacity="0.85" />
      <circle cx="24" cy="24" r="2" fill={color} />
      <line x1="24" y1="5" x2="24" y2="13" strokeLinecap="round" />
      <line x1="24" y1="35" x2="24" y2="43" strokeLinecap="round" />
      <line x1="5" y1="24" x2="13" y2="24" strokeLinecap="round" />
      <line x1="35" y1="24" x2="43" y2="24" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Technical Dispatch / Article Emblem
 */
function ArticleEmblem({ color = "#7C3AED" }) {
  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round">
      <rect x="11" y="9" width="26" height="30" rx="3" opacity="0.85" />
      <line x1="17" y1="17" x2="31" y2="17" />
      <line x1="17" y1="23" x2="28" y2="23" />
      <line x1="17" y1="29" x2="24" y2="29" />
      <circle cx="31" cy="29" r="1.5" fill={color} />
    </svg>
  );
}

/**
 * ALL CURATED ITEMS: Interests & Experience
 */
const ITEMS = [
  // ==========================================
  // 1. MINECRAFT SPEEDRUNNING (HIGHLIGHTED HERO)
  // ==========================================
  {
    id: 'minecraft-speedrunning',
    category: 'interest',
    isFeatured: true,
    index: '01',
    kanji: '疾',
    status: 'featured · sub-20',
    statusType: 'featured',
    accent: '#059669',
    ambientGradient: 'from-[#059669]/14 via-[#10B981]/5 to-transparent',
    title: 'Minecraft Speedrunning (1.16+ RSG)',
    role: 'RSG Mechanical Runner & Nether Strategist',
    subtitle: 'Personal Best: 18m 42s · Leaderboard Verified',
    description: 'Competitive Random Seed Glitchless runner specializing in fast Nether Bastion treasure routing, blind travel triangulation, and zero-pause mechanical execution.',
    videoSrc: '/gallery/videos/GixelMC.mp4',
    link: 'https://github.com/Code-Xceed',
    linkText: 'Highlights',
    skills: [
      { name: '1.16+ RSG', icon: '/icons/minecraft-brand.svg' },
      { name: 'Bastion Routing' },
      { name: 'Blind Travel' },
      { name: 'FastReset' },
      { name: 'Zero-Pause' },
    ],
  },

  // ==========================================
  // 2. BIG BROTHERS MEDIA AGENCY (PINNED CURRENT)
  // ==========================================
  {
    id: 'big-brothers-media',
    category: 'experience',
    isPinned: true,
    index: '02',
    kanji: '創',
    status: 'pinned · current',
    statusType: 'current',
    accent: '#DC2626',
    ambientGradient: 'from-[#DC2626]/12 via-[#F43F5E]/4 to-transparent',
    title: 'Big Brothers Media Agency',
    role: 'Lead Video Editor & Motion Designer',
    subtitle: '2024 — Present · Digital Agency',
    description: 'Directing retention-optimized YouTube edits, cinematic sound design layers, and dynamic kinetic typography for creator channels with millions of cumulative impressions.',
    videoSrc: '/gallery/videos/Debatable.mp4',
    link: 'https://github.com/Code-Xceed',
    linkText: 'Media Case',
    skills: [
      { name: 'DaVinci Resolve', icon: '/icons/davinci.svg' },
      { name: 'Premiere Pro', icon: '/icons/premiere.svg' },
      { name: 'After Effects', icon: '/icons/aftereffects.svg' },
      { name: 'Sound Design' },
      { name: 'Retention Curves' },
    ],
  },

  // ==========================================
  // 3. HELX STUDIO (PAST BACKEND ROLE)
  // ==========================================
  {
    id: 'helx-studio',
    category: 'experience',
    index: '03',
    kanji: '基',
    status: '2023 — 2024',
    statusType: 'past',
    accent: '#2563EB',
    ambientGradient: 'from-[#2563EB]/12 via-[#38BDF8]/4 to-transparent',
    title: 'Helx Studio',
    role: 'Backend Developer & Systems Architect',
    subtitle: '2023 — 2024 · Minecraft Infrastructure',
    description: 'Engineered high-throughput Java server plugins, custom packet pipelines, and zero-tick-drop network architecture across multi-region game server clusters.',
    videoSrc: '/gallery/videos/HelxStudio.mp4',
    link: 'https://github.com/Code-Xceed',
    linkText: 'Infra Spec',
    skills: [
      { name: 'Java', icon: '/icons/java.svg' },
      { name: 'PaperMC', icon: '/icons/papermc.svg' },
      { name: 'Folia', icon: '/icons/folia.svg' },
      { name: 'Packet Pipelines' },
      { name: 'Multi-Threading' },
    ],
  },

  // ==========================================
  // 4. MOTION DESIGN & VISUAL CRAFT
  // ==========================================
  {
    id: 'motion-design-craft',
    category: 'interest',
    index: '04',
    kanji: '映',
    status: 'visual craft',
    statusType: 'motion',
    accent: '#E11D48',
    ambientGradient: 'from-[#E11D48]/12 via-[#FB7185]/4 to-transparent',
    title: 'Motion Design & Visual Systems',
    role: 'Kinetic Animator & Visual Stylist',
    subtitle: 'Typography Motion · 3D Lighting & Brand Reels',
    description: 'Crafting high-fidelity promotional reels, kinetic typography lockups, and procedural motion physics across DaVinci Resolve, Premiere Pro, and Figma.',
    videoSrc: '/gallery/videos/Portfolio-template.mp4',
    link: 'https://github.com/Code-Xceed',
    linkText: 'Watch Reel',
    skills: [
      { name: 'DaVinci Resolve', icon: '/icons/davinci.svg' },
      { name: 'Premiere Pro', icon: '/icons/premiere.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' },
      { name: 'After Effects', icon: '/icons/aftereffects.svg' },
      { name: 'Kinetic Type' },
    ],
  },

  // ==========================================
  // 5. COMPETITIVE GAMING / ESPORTS
  // ==========================================
  {
    id: 'competitive-gaming',
    category: 'interest',
    index: '05',
    kanji: '戦',
    status: 'competitive gaming',
    statusType: 'gaming',
    accent: '#D97706',
    ambientGradient: 'from-[#D97706]/12 via-[#F59E0B]/4 to-transparent',
    title: 'Tactical FPS & Battle Royale',
    role: 'Competitive Fragger & In-Game Shotcaller',
    subtitle: 'Free Fire · PUBG Mobile · Tactical Shooters',
    description: 'High-pace tactical player focused on zone rotation prediction, high-stakes 1v4 clutch composure, precision recoil mechanics, and real-time squad shotcalling.',
    emblem: <TacticalCrosshairEmblem color="#D97706" />,
    skills: [
      { name: 'Free Fire' },
      { name: 'PUBG Mobile' },
      { name: 'Zone Prediction' },
      { name: 'Shotcalling' },
      { name: 'Clutch Reflex' },
    ],
  },

  // ==========================================
  // 6. RAPID & BLITZ CHESS
  // ==========================================
  {
    id: 'chess-strategy',
    category: 'interest',
    index: '06',
    kanji: '棋',
    status: 'tactics · rapid',
    statusType: 'chess',
    accent: '#57534E',
    ambientGradient: 'from-[#57534E]/10 via-[#78716C]/4 to-transparent',
    title: 'Rapid & Blitz Chess',
    role: 'Positional Strategist & Tactical Solver',
    subtitle: 'Chess.com & Lichess · Rapid & Blitz Formats',
    description: 'Training deep calculation under strict clock pressure, Sicilian / Caro-Kann middle-game conversions, and calm tactical problem-solving under time crunches.',
    emblem: <ChessKnightEmblem color="#57534E" />,
    skills: [
      { name: 'Blitz (3+2)' },
      { name: 'Rapid (10+0)' },
      { name: 'Calculation' },
      { name: 'Positional Squeeze' },
    ],
  },

  // ==========================================
  // 7. ENGINEERING LOGS & SPEEDRUN NOTES
  // ==========================================
  {
    id: 'engineering-logs',
    category: 'experience',
    isPinned: true,
    index: '07',
    kanji: '論',
    status: 'pinned · dispatches',
    statusType: 'blog',
    accent: '#7C3AED',
    ambientGradient: 'from-[#7C3AED]/12 via-[#8B5CF6]/4 to-transparent',
    title: 'Engineering Logs & Speedrun Strats',
    role: 'Technical Writer & Systems Researcher',
    subtitle: 'Architecture Notes & Mechanical Essays',
    description: 'Documented deep-dives into Java JVM memory compaction, tick loop synchronization physics, and optimal trigonometric blind travel angles in Minecraft speedruns.',
    emblem: <ArticleEmblem color="#7C3AED" />,
    link: 'https://github.com/Code-Xceed',
    linkText: 'Read Notes',
    skills: [
      { name: 'Technical Writing' },
      { name: 'JVM Profiling' },
      { name: 'Tick Loop Theory' },
      { name: 'Speedrun Math' },
    ],
  },
];

/**
 * Filter Categories for Segmented Control
 */
const TABS = [
  { id: 'all', label: 'All', shortLabel: 'All', count: 7 },
  { id: 'interest', label: 'Interests & Gaming', shortLabel: 'Interests', count: 4, icon: Gamepad2 },
  { id: 'experience', label: 'Experience & Logs', shortLabel: 'Experience', count: 3, icon: Briefcase },
];

/**
 * Single Item Card (Matching EditorialProjectCard Precision & Craft)
 */
function ExperienceCard({ item }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative w-full rounded-2xl bg-white border shadow-[0_2px_8px_rgba(22,21,20,0.015)] hover:shadow-[0_14px_30px_rgba(22,21,20,0.05)] hover:-translate-y-0.5 transition-all duration-300 ease-out p-4 sm:p-5 flex flex-col md:flex-row gap-5 sm:gap-6 overflow-hidden ${
        item.isFeatured 
          ? 'border-emerald-600/30 ring-1 ring-emerald-500/15' 
          : 'border-[rgba(22,21,20,0.08)] hover:border-[rgba(22,21,20,0.16)]'
      }`}
    >
      {/* Corner Technical Registration Crosshairs (+) */}
      <span className="absolute top-2 left-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 transition-colors select-none pointer-events-none z-10">+</span>
      <span className="absolute top-2 right-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 transition-colors select-none pointer-events-none z-10">+</span>
      <span className="absolute bottom-2 left-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 transition-colors select-none pointer-events-none z-10">+</span>
      <span className="absolute bottom-2 right-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 transition-colors select-none pointer-events-none z-10">+</span>

      {/* ======================================================== */}
      {/* LEFT: THUMBNAIL PLATE / VIDEO / EMBLEM                  */}
      {/* ======================================================== */}
      <div 
        className={`relative w-full md:w-[200px] lg:w-[215px] h-[135px] md:h-auto rounded-xl bg-gradient-to-br ${item.ambientGradient} bg-stone-50/70 p-3 flex flex-col justify-between shrink-0 overflow-hidden border border-[rgba(22,21,20,0.08)] group-hover:border-[rgba(22,21,20,0.18)] transition-all duration-200`}
      >
        {/* If Video Available: Autoplay / Hover Play */}
        {item.videoSrc ? (
          <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              src={item.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Soft overlay gradient so text stays readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
            
            {/* Play indicator watermark if not playing */}
            <div className={`absolute bottom-2 left-2 flex items-center gap-1 text-[10px] font-mono text-white/80 transition-opacity duration-200 ${isPlaying ? 'opacity-0' : 'opacity-80'}`}>
              <Play className="w-2.5 h-2.5 fill-white/80" />
              <span>preview</span>
            </div>
          </div>
        ) : (
          <>
            {/* Subtle Architectural Blueprint Grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(22, 21, 20, 0.05) 0px, rgba(22, 21, 20, 0.05) 1px, transparent 1px, transparent 16px),
                  repeating-linear-gradient(90deg, rgba(22, 21, 20, 0.05) 0px, rgba(22, 21, 20, 0.05) 1px, transparent 1px, transparent 16px)
                `,
              }}
              aria-hidden="true"
            />

            {/* Japanese Seigaiha Line Art Accent */}
            <div 
              className="absolute -right-3 -bottom-3 w-28 h-16 pointer-events-none text-current"
              style={{ color: item.accent }}
              aria-hidden="true"
            >
              <SeigaihaLines />
            </div>

            {/* Emblem Center */}
            <div className="relative z-10 my-auto py-2 flex items-center justify-center">
              <div className="transform group-hover:scale-110 transition-transform duration-200 ease-out">
                {item.emblem}
              </div>
            </div>
          </>
        )}

        {/* Kanji Seal Watermark */}
        <span 
          className="absolute right-2 bottom-1 text-[40px] font-serif font-black select-none pointer-events-none opacity-[0.14] transition-transform duration-200 group-hover:scale-105 z-10"
          style={{ color: item.videoSrc ? '#FFFFFF' : item.accent }}
        >
          {item.kanji}
        </span>

        {/* Status Line Top-Right */}
        <div className="relative z-10 flex items-center justify-end">
          {item.statusType === 'featured' ? (
            <span className="font-mono text-[9.5px] font-semibold tracking-wide text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded-full select-none backdrop-blur-xs">
              ★ {item.status}
            </span>
          ) : item.statusType === 'current' ? (
            <span className="font-mono text-[9.5px] font-medium tracking-wide text-rose-300 bg-rose-950/70 border border-rose-500/40 px-2 py-0.5 rounded-full select-none flex items-center gap-1 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
              {item.status}
            </span>
          ) : (
            <span 
              className="font-mono text-[10px] font-medium tracking-wide select-none pb-0.5 border-b-[1.5px]"
              style={{ 
                color: item.videoSrc ? '#FFFFFF' : item.accent,
                borderColor: item.videoSrc ? 'rgba(255,255,255,0.7)' : `${item.accent}99`
              }}
            >
              {item.status}
            </span>
          )}
        </div>
      </div>

      {/* ======================================================== */}
      {/* RIGHT: EDITORIAL SPEC & CONTENT                          */}
      {/* ======================================================== */}
      <div className="flex-1 flex flex-col justify-between pt-0.5">
        <div>
          {/* Header Row: Title & Link */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-[19px] sm:text-[20px] font-bold text-[#161514] tracking-tight group-hover:text-black transition-colors duration-150">
                  {item.title}
                </h3>
                {item.isPinned && (
                  <Pin className="w-3.5 h-3.5 text-rose-500 rotate-45 shrink-0" title="Pinned Milestone" />
                )}
              </div>

              {/* Role & Timeline Subtitle */}
              <p className="text-[12px] sm:text-[12.5px] mt-1 text-[#57534E] leading-relaxed">
                <span className="font-medium text-[#161514]">{item.role}</span>
                <span className="mx-1.5 text-stone-300 select-none">·</span>
                <span className="font-mono text-[11px] sm:text-[11.5px] text-[#8C867E]">{item.subtitle}</span>
              </p>
            </div>

            {/* Launch / Details Link Button */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable group/btn relative overflow-hidden px-3 py-1.5 rounded-lg bg-[#161514] hover:bg-black text-white text-[11px] font-medium flex items-center gap-1.5 transition-all duration-150 active:scale-95 shadow-2xs shrink-0"
              >
                <span>{item.linkText || 'View'}</span>
                <ArrowUpRight className="w-3 h-3 transition-transform duration-150 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            )}
          </div>

          {/* Clean, Human Description */}
          <p className="text-[13px] sm:text-[13.5px] text-[#57534E] leading-[1.6] mt-2.5">
            {item.description}
          </p>
        </div>

        {/* Skills & Tag Pills: Refined Dashed Tags matching the whole site */}
        <div className="pt-3.5 border-t border-stone-100/80 mt-3.5">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {item.skills.map((skill) => (
              <div
                key={skill.name}
                className="pressable inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white border border-dashed border-[#D6D3D1] hover:border-solid hover:border-[#161514]/40 hover:-translate-y-0.5 active:scale-95 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-150 cursor-default select-none"
              >
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-3 h-3 object-contain shrink-0"
                  />
                )}
                <span className="text-[11px] font-medium text-[#161514] tracking-[-0.01em] whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * Interests & Experience Section
 * 
 * Museum-grade section directly below Selected Works:
 * - Segmented tab filter (All, Interests, Experience) with zero layout jump
 * - Minecraft speedrunning specially highlighted with emerald accent & video preview
 * - Big Brothers Media Agency (current pinned role) & Helx Studio (past backend role)
 * - Esports (Free Fire, PUBG), Chess strategy, and technical blogging dispatches
 * - Seamless Japanese Zen aesthetic with corner crosshairs, Seigaiha waves & dashed pills
 */
export default function InterestsExperience() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all' 
    ? ITEMS 
    : ITEMS.filter(item => item.category === activeTab);

  return (
    <section 
      id="interests-experience" 
      className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-8 pt-4 sm:pt-6 pb-16 sm:pb-24 scroll-mt-8 sm:scroll-mt-12"
    >
      {/* SECTION HEADER & CONTEXT */}
      <div className="mb-6 sm:mb-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-widest text-[#8C867E] uppercase">
              四 · 経験と関心
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#161514] mt-1">
            Interests &amp; Experience
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#57534E] mt-1.5 max-w-xl">
            Where mechanical speedruns, studio video editing, and backend architecture converge.
          </p>
        </div>

        {/* 100% Full-Width Segmented Tab Filter on Mobile, Inline-Flex on sm+ */}
        <div 
          className="w-full sm:w-auto grid grid-cols-3 sm:inline-flex p-1 rounded-xl bg-stone-100/90 sm:bg-white/80 border border-stone-200/80 shadow-[inset_0_1px_2px_rgba(22,21,20,0.03)] backdrop-blur-md gap-1 sm:gap-0.5 shrink-0"
          role="tablist"
          aria-label="Filter by interests or experience"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`pressable relative flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-[11.5px] font-medium transition-all duration-150 cursor-pointer select-none whitespace-nowrap touch-manipulation ${
                  isActive
                    ? 'bg-white text-[#161514] font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.04)] border border-black/[0.04]'
                    : 'text-[#78716C] hover:text-[#161514] hover:bg-white/50 active:bg-white/30'
                }`}
              >
                {Icon && <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#161514]' : 'text-[#78716C]'}`} />}
                <span className="sm:hidden">{tab.shortLabel}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span 
                  className={`text-[9.5px] font-mono px-1.5 py-0.2 rounded-md transition-colors ${
                    isActive 
                      ? 'bg-stone-100 text-[#161514] font-semibold' 
                      : 'bg-black/[0.03] text-[#A8A29E]'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ITEMS LIST: Structured Editorial Spec Stack */}
      <div 
        key={activeTab}
        className="flex flex-col gap-4 sm:gap-5 animate-fade-in-up"
        style={{ animationDuration: '240ms' }}
      >
        {filteredItems.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>

      {/* FOOTER CUE & SIGN-OFF */}
      <footer className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C867E] font-mono border-t border-[rgba(22,21,20,0.06)] pt-6 mt-12 sm:mt-16 gap-3">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for select engineering &amp; media collaborations</span>
        </span>
        <span className="text-[11px] text-[#A8A29E]">
          © {new Date().getFullYear()} CodeX · Tokyo &amp; Global
        </span>
      </footer>
    </section>
  );
}

import React, { useRef } from 'react';
import { 
  Gamepad2, 
  Film, 
  ArrowUpRight, 
  BookOpen, 
  Sparkles,
  Trophy
} from 'lucide-react';

/**
 * Official Minecraft Creeper Logo
 */
function MinecraftIcon({ className = "w-3 h-3" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M6,6V10H10V12H8V18H10V16H14V18H16V12H14V10H18V6H14V10H10V6H6Z" />
    </svg>
  );
}

/**
 * Authentic Free Fire Flame / Dagger Emblem
 */
function FreeFireIcon({ className = "w-3 h-3" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.5C12 2.5 10.2 5.8 10.2 8.2C10.2 9.4 10.8 10.4 11.5 11.1C10.6 11.2 9.8 10.8 9.3 10.2C8.6 11.4 8.8 13.1 9.8 14.2C8.2 13.8 7.2 12.4 7.2 10.8C6.1 12.5 6.2 14.8 7.4 16.5C8.8 18.4 11.2 19.5 13.5 19C16.2 18.4 18 16 18 13.2C18 9.2 14.5 7.2 14.5 3.5C13.5 5 12.8 6.8 13 8.8C12.4 8 12 7 12 5.8C12 4.6 12 2.5 12 2.5Z" fill="#F97316"/>
      <path d="M11.5 14C11.5 15.4 12.6 16.5 14 16.5C15.1 16.5 16 15.6 16 14.5C16 13.2 14.8 12.2 14 10.5C13.2 11.5 11.5 12.5 11.5 14Z" fill="#FBBF24"/>
    </svg>
  );
}

/**
 * Official PUBG Level-3 Tactical Helmet Icon (Simple Icons)
 */
function PubgIcon({ className = "w-3 h-3" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.425 20.693c-.107-.247-.132-.4-.131-.8 0-.376.015-.478.208-1.416a38 38 0 0 0 .2-1.015c-.1-.056-.481-.376-.7-.587-.49-.462-.777-1.125-.794-1.849-.015-.658.207-1.25.632-1.705.419-.45 1.006-.74 1.708-.852.12-.02.49-.071.821-.115.111-.015.308-.041.439-.056l.044-.228c.371-1.884 1.139-3.238 2.308-4.077 1.05-.751 2.39-1.137 4.041-1.161h.334c2.196.038 3.829.614 4.887 1.725 1.014 1.066 1.542 2.617 1.583 4.639l.006.33.684.053c.691.053 1.251.272 1.678.659.431.391.688.948.749 1.62.063.69-.138 1.343-.585 1.884-.336.408-.669.673-.972.802-.036.016-.07.031-.102.046a38 38 0 0 0 .201 1.015c.193.938.208 1.04.208 1.416 0 .4-.024.553-.131.8-.184.425-.511.758-.946.967-.323.155-.72.246-1.173.272-.37.021-3.666.038-7.234.038-3.568 0-6.864-.017-7.234-.038-.453-.026-.85-.117-1.173-.272-.435-.209-.762-.542-.946-.967zm4.314-1.815h2.185v-4.116H5.739zm0-5.836h2.185v-4.116H5.739zm3.876 5.836h2.186v-4.116H9.615zm0-5.836h2.186v-4.116H9.615zm3.877 5.836h2.185v-4.116h-2.185zm0-5.836h2.185v-4.116h-2.185zm3.876 5.836h2.186v-4.116h-2.186zm0-5.836h2.186v-4.116h-2.186z"/>
    </svg>
  );
}

/**
 * Official Chess.com Emblem (Simple Icons)
 */
function ChessIcon({ className = "w-3 h-3" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.164 6.785L12 2.657 4.836 6.785v8.256L12 19.169l7.164-4.128zm1.905-1.101v10.457L12 21.004l-9.069-4.863V5.684L2.931 4.583 12 0l9.069 4.583zM12 4.417L5.805 7.828v6.828L12 18.067l6.195-3.411V7.828z" />
    </svg>
  );
}

/**
 * Curated Dispatches / Technical Writing
 */
const BLOGS = [
  {
    id: 'folia-concurrency',
    title: 'Zero-Tick Concurrency in Folia',
    category: 'Server Engine',
    date: "Oct '26",
    readTime: '4 min',
    link: 'https://github.com/Code-Xceed',
  },
  {
    id: 'sumi-e-ui',
    title: 'Japanese Zen Aesthetics in Web UI',
    category: 'Interface Polish',
    date: "Sep '26",
    readTime: '3 min',
    link: 'https://github.com/Code-Xceed',
  },
  {
    id: 'foley-retention',
    title: 'Kinetic Pacing & Audio Foley Math',
    category: 'Video Editing',
    date: "Aug '26",
    readTime: '5 min',
    link: 'https://github.com/Code-Xceed',
  },
  {
    id: 'speedrun-mechanics',
    title: 'Sub-20m Nether Routing & Tick Math',
    category: 'Game Physics',
    date: "Jul '26",
    readTime: '4 min',
    link: 'https://github.com/Code-Xceed',
  },
];

/**
 * Career Milestones & Experience (Exact Match to User Reference)
 */
const EXPERIENCES = [
  {
    year: '2026',
    role: 'Video Editor',
    company: 'Big Brothers Media Agency',
    period: "Aug '26 – Present",
    status: 'current',
  },
  {
    year: '2025',
    role: 'Backend Developer',
    company: 'Helx Studio',
    period: "Jan '25 – May '26",
    status: 'past',
  },
  {
    year: '2024',
    role: 'Full Stack Developer',
    company: '[Freelance]',
    period: '2024 – Present',
    status: 'active',
  },
];

export default function InterestsExperience() {
  const mcVideoRef = useRef(null);
  const editVideoRef = useRef(null);

  return (
    <section 
      id="interests-experience" 
      className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-8 pt-4 sm:pt-6 pb-16 sm:pb-24 scroll-mt-8 sm:scroll-mt-12"
    >
      {/* ======================================================== */}
      {/* 2-COLUMN VIEWPORT GRID (Interests Left, Direct Text Right) */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
        
        {/* ======================================================== */}
        {/* LEFT COLUMN: VISUAL MEDIA CARDS (Big Thumbnails, No Text Clutter) */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-4 sm:gap-5">
          
          {/* Card 1: Minecraft Speedrunning & Gaming Passion */}
          <article className="group relative rounded-2xl bg-white border border-[rgba(22,21,20,0.08)] shadow-[0_2px_8px_rgba(22,21,20,0.015)] hover:shadow-[0_12px_28px_rgba(22,21,20,0.05)] hover:-translate-y-0.5 transition-all duration-300 ease-out p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Header: Track metadata + Role Badge */}
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] font-mono text-emerald-700 font-semibold tracking-wide uppercase flex items-center gap-1.5">
                  <Gamepad2 className="w-3 h-3 text-emerald-600" />
                  <span>01 // Gaming Passion</span>
                </span>
                <span className="font-mono text-[9px] font-semibold tracking-wide bg-emerald-50 text-emerald-700 border border-emerald-500/25 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Trophy className="w-2.5 h-2.5 text-emerald-600" />
                  <span>Speedrunner</span>
                </span>
              </div>

              {/* Title / Headline (No Description Text as Requested) */}
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#161514] tracking-tight group-hover:text-black transition-colors">
                Minecraft &amp; Competitive Esports
              </h3>
            </div>

            {/* Bigger Visual Gameplay Plate (Enhanced 16:9 Cinematic Thumbnail) */}
            <div 
              className="relative w-full aspect-video rounded-xl overflow-hidden bg-stone-900 my-2.5 border border-stone-200/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)] group/video"
              onMouseEnter={() => mcVideoRef.current?.play()}
            >
              <video 
                ref={mcVideoRef}
                src="/gallery/videos/GixelMC.mp4" 
                autoPlay
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end justify-between p-2.5">
                <span className="text-[9.5px] font-mono text-white/95 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>RSG Runner · 1.16+ / 1.20+ Engine</span>
                </span>
                <span className="text-[9px] font-mono text-emerald-300/90 bg-black/60 px-1.5 py-0.5 rounded border border-white/10 font-semibold">
                  Sub-20m
                </span>
              </div>
            </div>

            {/* Proper Games Logos Strip (Symmetrical 2x2 Grid, Zero Truncation) */}
            <div className="pt-2.5 border-t border-stone-100/90 grid grid-cols-2 gap-1.5">
              <div className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-50/80 border border-stone-200/80 hover:border-stone-400 text-[11px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <MinecraftIcon className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Minecraft</span>
              </div>

              <div className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-50/80 border border-stone-200/80 hover:border-stone-400 text-[11px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <FreeFireIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Free Fire</span>
              </div>

              <div className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-50/80 border border-stone-200/80 hover:border-stone-400 text-[11px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <PubgIcon className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>PUBG</span>
              </div>

              <div className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-50/80 border border-stone-200/80 hover:border-stone-400 text-[11px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <ChessIcon className="w-3.5 h-3.5 text-[#81B64C] shrink-0" />
                <span>Chess</span>
              </div>
            </div>
          </article>

          {/* Card 2: Video Direction & Creative Craft */}
          <article className="group relative rounded-2xl bg-white border border-[rgba(22,21,20,0.08)] shadow-[0_2px_8px_rgba(22,21,20,0.015)] hover:shadow-[0_12px_28px_rgba(22,21,20,0.05)] hover:-translate-y-0.5 transition-all duration-300 ease-out p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Header: Track metadata + Role Badge */}
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] font-mono text-purple-700 font-semibold tracking-wide uppercase flex items-center gap-1.5">
                  <Film className="w-3 h-3 text-purple-600" />
                  <span>02 // Creative Craft</span>
                </span>
                <span className="font-mono text-[9px] font-semibold tracking-wide bg-purple-50 text-purple-700 border border-purple-500/25 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-purple-600" />
                  <span>Editor &amp; Motion</span>
                </span>
              </div>

              {/* Title / Headline (No Description Text as Requested) */}
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#161514] tracking-tight group-hover:text-black transition-colors">
                Video Direction &amp; Motion Design
              </h3>
            </div>

            {/* Bigger Visual Motion Plate (Enhanced 16:9 Cinematic Thumbnail) */}
            <div 
              className="relative w-full aspect-video rounded-xl overflow-hidden bg-stone-900 my-2.5 border border-stone-200/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)] group/video"
              onMouseEnter={() => editVideoRef.current?.play()}
            >
              <video 
                ref={editVideoRef}
                src="/gallery/videos/Showcase-2.mp4" 
                autoPlay
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex items-end justify-between p-2.5">
                <span className="text-[9.5px] font-mono text-white/95 font-medium">
                  Kinetic Pacing &amp; Foley Mixing
                </span>
                <span className="text-[9px] font-mono text-purple-300/90 bg-black/60 px-1.5 py-0.5 rounded border border-white/10 font-semibold">
                  4K / 60fps
                </span>
              </div>
            </div>

            {/* Editing Tools Pills (Symmetrical 2x2 Grid, Zero Truncation) */}
            <div className="pt-2.5 border-t border-stone-100/90 grid grid-cols-2 gap-1.5">
              <div className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-50/80 border border-stone-200/80 hover:border-stone-400 text-[11px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <img src="/icons/premiere.svg" alt="Premiere Pro" className="w-3.5 h-3.5 object-contain shrink-0" />
                <span>Premiere Pro</span>
              </div>

              <div className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-50/80 border border-stone-200/80 hover:border-stone-400 text-[11px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <img src="/icons/aftereffects.svg" alt="After Effects" className="w-3.5 h-3.5 object-contain shrink-0" />
                <span>After Effects</span>
              </div>

              <div className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-50/80 border border-stone-200/80 hover:border-stone-400 text-[11px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <img src="/icons/davinci.svg" alt="DaVinci Resolve" className="w-3.5 h-3.5 object-contain shrink-0" />
                <span>DaVinci Resolve</span>
              </div>

              <div className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-50/80 border border-stone-200/80 hover:border-stone-400 text-[11px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <img src="/icons/blender.svg" alt="Blender" className="w-3.5 h-3.5 object-contain shrink-0" />
                <span>Blender 3D</span>
              </div>
            </div>
          </article>

        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: PURE TEXT & LINEWORK DIRECTLY ON CANVAS    */}
        {/* (Zero panels, zero card backgrounds, pristine hierarchy) */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-8 sm:gap-10 justify-between pt-1">
          
          {/* Top Block: Recent Dispatches (Directly on canvas, no card background) */}
          <section aria-labelledby="dispatches-heading">
            {/* Header with Divider Line */}
            <div className="flex items-center gap-2.5 mb-2">
              <span id="dispatches-heading" className="text-xs font-mono font-bold text-[#161514] tracking-tight flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-stone-500" />
                <span># Dispatches</span>
              </span>
              <div className="flex-1 h-[1px] bg-stone-200/80" />
              <span className="text-[10px] font-mono text-stone-400 font-medium">4 notes</span>
            </div>

            {/* Compact Note Entries (Clean typographic list directly on background) */}
            <div className="divide-y divide-stone-200/60">
              {BLOGS.map((blog) => (
                <a
                  key={blog.id}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable group/item block py-2.5 sm:py-3 -mx-1.5 px-1.5 rounded-lg hover:bg-black/[0.03] transition-colors"
                >
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[12.5px] sm:text-[13px] font-semibold text-[#161514] group-hover/item:text-black tracking-tight truncate transition-colors">
                        {blog.title}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5 text-[10.5px] font-mono text-stone-400">
                        <span>{blog.date}</span>
                        <span>·</span>
                        <span className="text-stone-600 font-medium">{blog.category}</span>
                        <span>·</span>
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <span className="text-stone-300 group-hover/item:text-[#161514] transition-all duration-150 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 shrink-0 mt-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom Archive Link */}
            <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-[10.5px] font-mono text-stone-400 mt-1">
              <span>Tech &amp; video essays</span>
              <a 
                href="https://github.com/Code-Xceed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-black flex items-center gap-1 transition-colors"
              >
                <span>Read archive</span>
                <ArrowUpRight className="w-2.5 h-2.5" />
              </a>
            </div>
          </section>

          {/* Bottom Block: Career Experience Log (Exact User Image 2 Match, Directly on Canvas) */}
          <section aria-labelledby="experience-heading">
            {/* Header with Divider Line */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <span id="experience-heading" className="text-xs font-mono font-bold text-[#161514] tracking-tight">
                # Experience
              </span>
              <div className="flex-1 h-[1px] bg-stone-200/80" />
            </div>

            {/* Experience Rows (Zero Truncation, Clean Typographic Flow) */}
            <div className="space-y-2 sm:space-y-2.5">
              {EXPERIENCES.map((exp) => (
                <div 
                  key={exp.role + exp.year} 
                  className="group/row flex items-start gap-2.5 sm:gap-3 hover:bg-black/[0.03] -mx-1.5 px-1.5 py-2 sm:py-2.5 rounded-lg transition-colors"
                >
                  {/* Left Year Column */}
                  <span className="font-mono text-[#8C867E] text-[11px] sm:text-xs shrink-0 w-8 sm:w-9 pt-0.5 select-none">
                    {exp.year}
                  </span>

                  {/* Center & Right Combined Content */}
                  <div className="min-w-0 flex-1">
                    {/* Top Line: Role on Left, Date & Diamond on Right */}
                    <div className="flex items-baseline justify-between gap-1.5">
                      <span className="font-semibold text-[#161514] text-[12px] sm:text-[12.5px] group-hover/row:text-black transition-colors">
                        {exp.role}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] sm:text-[10.5px] font-mono text-[#8C867E] shrink-0">
                        <span>{exp.period}</span>
                        <span className={`text-[9px] select-none ${exp.status === 'current' ? 'text-emerald-500 font-bold' : 'text-stone-300'}`}>
                          ◇
                        </span>
                      </div>
                    </div>

                    {/* Second Line: Company Name */}
                    {exp.company && (
                      <div className="text-[11px] text-[#78716C] mt-0.5 flex items-center gap-1">
                        <span className="text-[#A8A29E] text-[10.5px] select-none">at</span>
                        <span className="font-medium text-[#44403C]">{exp.company}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Status Footnote */}
            <div className="pt-2.5 border-t border-stone-200/60 mt-3 flex items-center justify-between text-[10.5px] font-mono text-stone-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-stone-600 font-medium">Available for hire</span>
              </span>
              <span className="text-[10px] text-stone-400">Remote &amp; Contract</span>
            </div>
          </section>

        </div>

      </div>
    </section>
  );
}

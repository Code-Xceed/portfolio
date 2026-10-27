import React, { useRef } from 'react';
import { 
  Gamepad2, 
  Film, 
  ArrowUpRight, 
  BookOpen, 
  Sparkles,
  Flame,
  Crosshair,
  Trophy
} from 'lucide-react';

/**
 * Custom High-Craft Minimal Vector Chess Knight Icon
 */
function ChessKnightIcon({ className = "w-3 h-3" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 22H5v-2h14v2M17.5 13.5c0 1.25-.4 2.4-1.1 3.3l1.1 1.2H6.5l1.1-1.2c-.7-.9-1.1-2-1.1-3.3 0-1.8.8-3.4 2-4.5V7c0-2.8 2.2-5 5-5 .4 0 .7.1 1 .2-.3.6-.5 1.3-.5 2 0 1.5.8 2.8 2 3.5v2.8c1.5.7 2.5 2.2 2.5 3.5z" />
    </svg>
  );
}

/**
 * Free Fire Flame Icon
 */
function FreeFireIcon({ className = "w-3 h-3" }) {
  return <Flame className={`${className} text-orange-500`} />;
}

/**
 * PUBG Tactical Target Icon
 */
function PubgIcon({ className = "w-3 h-3" }) {
  return <Crosshair className={`${className} text-amber-500`} />;
}

/**
 * Recent Dispatches / Notes
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
 * Career Milestones & Experience (Exact User Image 2 Match)
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
      {/* 2-COLUMN VIEWPORT GRID (Interests Left, Experience Right) */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
        
        {/* ======================================================== */}
        {/* LEFT COLUMN: INTERESTS (Gaming Highlight & Video Craft)   */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-5 sm:gap-6 justify-between">
          
          {/* Card 1: Minecraft Speedrunning & Competitive Gaming (Hero Highlight) */}
          <article className="group relative rounded-2xl bg-white border border-[rgba(22,21,20,0.08)] shadow-[0_2px_8px_rgba(22,21,20,0.015)] hover:shadow-[0_14px_30px_rgba(22,21,20,0.05)] hover:-translate-y-0.5 transition-all duration-300 ease-out p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
            {/* Technical Registration Crosshairs (+) */}
            <span className="absolute top-2 left-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>
            <span className="absolute top-2 right-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>
            <span className="absolute bottom-2 left-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>
            <span className="absolute bottom-2 right-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>

            {/* Kanji Watermark */}
            <span className="absolute -right-1 -top-1 text-[38px] font-serif font-black select-none pointer-events-none opacity-[0.05] text-emerald-800">
              速
            </span>

            <div>
              {/* Header: Track metadata + Role Badge */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10.5px] font-mono text-emerald-700 font-semibold tracking-wide uppercase flex items-center gap-1.5">
                  <Gamepad2 className="w-3 h-3 text-emerald-600" />
                  <span>01 // Gaming Passion</span>
                </span>
                <span className="font-mono text-[9.5px] font-semibold tracking-wide bg-emerald-50 text-emerald-700 border border-emerald-500/25 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Trophy className="w-2.5 h-2.5 text-emerald-600" />
                  <span>Speedrunner</span>
                </span>
              </div>

              {/* Title & Concise Copy */}
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#161514] tracking-tight group-hover:text-black transition-colors">
                Minecraft &amp; Competitive Esports
              </h3>
              <p className="text-[12px] sm:text-[12.5px] text-[#57534E] leading-[1.55] mt-1">
                Sub-20m nether routing, mechanical block placement, tick timing, and building high-concurrency custom server engines.
              </p>
            </div>

            {/* Live Gameplay / Server Teaser Plate */}
            <div 
              className="relative w-full h-[98px] sm:h-[104px] rounded-xl overflow-hidden bg-stone-900 my-3 border border-stone-200/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)] group/video"
              onMouseEnter={() => mcVideoRef.current?.play()}
            >
              <video 
                ref={mcVideoRef}
                src="/gallery/videos/GixelMC.mp4" 
                autoPlay
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-2">
                <span className="text-[9.5px] font-mono text-white/95 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>RSG Runner · 1.16+ / 1.20+ Engine</span>
                </span>
                <span className="text-[9px] font-mono text-emerald-300/90 bg-black/50 px-1.5 py-0.5 rounded border border-white/10">
                  Sub-20m
                </span>
              </div>
            </div>

            {/* Other Competitive Games Roster */}
            <div className="pt-2 border-t border-stone-100/90 flex flex-wrap items-center gap-1.5">
              <span className="text-[9.5px] font-mono text-stone-400 mr-1 select-none">Roster:</span>
              
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-dashed border-[#D6D3D1] hover:border-solid hover:border-stone-400 text-[10.5px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <FreeFireIcon />
                <span>Free Fire</span>
              </div>

              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-dashed border-[#D6D3D1] hover:border-solid hover:border-stone-400 text-[10.5px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <PubgIcon />
                <span>PUBG</span>
              </div>

              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-dashed border-[#D6D3D1] hover:border-solid hover:border-stone-400 text-[10.5px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <ChessKnightIcon />
                <span>Chess</span>
              </div>
            </div>
          </article>

          {/* Card 2: Video Editing & Creative Craft */}
          <article className="group relative rounded-2xl bg-white border border-[rgba(22,21,20,0.08)] shadow-[0_2px_8px_rgba(22,21,20,0.015)] hover:shadow-[0_14px_30px_rgba(22,21,20,0.05)] hover:-translate-y-0.5 transition-all duration-300 ease-out p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
            {/* Technical Registration Crosshairs (+) */}
            <span className="absolute top-2 left-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>
            <span className="absolute top-2 right-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>
            <span className="absolute bottom-2 left-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>
            <span className="absolute bottom-2 right-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>

            {/* Kanji Watermark */}
            <span className="absolute -right-1 -top-1 text-[38px] font-serif font-black select-none pointer-events-none opacity-[0.05] text-purple-900">
              創
            </span>

            <div>
              {/* Header: Track metadata + Role Badge */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10.5px] font-mono text-purple-700 font-semibold tracking-wide uppercase flex items-center gap-1.5">
                  <Film className="w-3 h-3 text-purple-600" />
                  <span>02 // Creative Craft</span>
                </span>
                <span className="font-mono text-[9.5px] font-semibold tracking-wide bg-purple-50 text-purple-700 border border-purple-500/25 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-purple-600" />
                  <span>Editor &amp; Motion</span>
                </span>
              </div>

              {/* Title & Concise Copy */}
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#161514] tracking-tight group-hover:text-black transition-colors">
                Video Direction &amp; Motion Design
              </h3>
              <p className="text-[12px] sm:text-[12.5px] text-[#57534E] leading-[1.55] mt-1">
                Engineering high-retention narrative cuts, sound design foley, and fluid kinetic motion graphics for digital agencies.
              </p>
            </div>

            {/* Showcase Video Strip */}
            <div 
              className="relative w-full h-[98px] sm:h-[104px] rounded-xl overflow-hidden bg-stone-900 my-3 border border-stone-200/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)] group/video"
              onMouseEnter={() => editVideoRef.current?.play()}
            >
              <video 
                ref={editVideoRef}
                src="/gallery/videos/Showcase-2.mp4" 
                autoPlay
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex items-end justify-between p-2">
                <span className="text-[9.5px] font-mono text-white/95 font-medium">
                  Kinetic Pacing &amp; Foley Mixing
                </span>
                <span className="text-[9px] font-mono text-purple-300/90 bg-black/50 px-1.5 py-0.5 rounded border border-white/10">
                  4K / 60fps
                </span>
              </div>
            </div>

            {/* Editing Tools Pills */}
            <div className="pt-2 border-t border-stone-100/90 flex flex-wrap items-center gap-1.5">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white border border-dashed border-[#D6D3D1] hover:border-solid hover:border-stone-400 text-[10.5px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <img src="/icons/premiere.svg" alt="Premiere Pro" className="w-3 h-3 object-contain shrink-0" />
                <span>Premiere Pro</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white border border-dashed border-[#D6D3D1] hover:border-solid hover:border-stone-400 text-[10.5px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <img src="/icons/aftereffects.svg" alt="After Effects" className="w-3 h-3 object-contain shrink-0" />
                <span>After Effects</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white border border-dashed border-[#D6D3D1] hover:border-solid hover:border-stone-400 text-[10.5px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <img src="/icons/davinci.svg" alt="DaVinci" className="w-3 h-3 object-contain shrink-0" />
                <span>DaVinci</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white border border-dashed border-[#D6D3D1] hover:border-solid hover:border-stone-400 text-[10.5px] font-medium text-[#161514] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
                <img src="/icons/blender.svg" alt="Blender" className="w-3 h-3 object-contain shrink-0" />
                <span>Blender</span>
              </div>
            </div>
          </article>

        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: BLOGS (TOP) & CAREER EXPERIENCE (BOTTOM)    */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-5 sm:gap-6 justify-between">
          
          {/* Top Panel: Recent Dispatches & Writing (Compact Editorial Cards) */}
          <article className="group relative rounded-2xl bg-white border border-[rgba(22,21,20,0.08)] shadow-[0_2px_8px_rgba(22,21,20,0.015)] hover:shadow-[0_14px_30px_rgba(22,21,20,0.05)] hover:-translate-y-0.5 transition-all duration-300 ease-out p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
            {/* Technical Registration Crosshairs (+) */}
            <span className="absolute top-2 left-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>
            <span className="absolute top-2 right-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>
            <span className="absolute bottom-2 left-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>
            <span className="absolute bottom-2 right-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>

            {/* Kanji Watermark */}
            <span className="absolute -right-1 -top-1 text-[38px] font-serif font-black select-none pointer-events-none opacity-[0.05] text-stone-800">
              筆
            </span>

            <div>
              {/* Header with Divider Line (Matching Image 2 Style) */}
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-xs font-mono font-bold text-[#161514] tracking-tight flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-stone-500" />
                  <span># Dispatches</span>
                </span>
                <div className="flex-1 h-[1px] bg-stone-100" />
                <span className="text-[10px] font-mono text-stone-400 font-medium">4 notes</span>
              </div>

              {/* Compact Note Entries */}
              <div className="divide-y divide-stone-100/90">
                {BLOGS.map((blog) => (
                  <a
                    key={blog.id}
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pressable group/item block py-2 sm:py-2.5 -mx-1.5 px-1.5 rounded-lg hover:bg-stone-50/70 transition-all duration-150"
                  >
                    <div className="flex items-start justify-between gap-2.5">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[12.5px] sm:text-[13px] font-semibold text-[#161514] group-hover/item:text-black tracking-tight truncate transition-colors">
                          {blog.title}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5 text-[10.5px] font-mono text-stone-400">
                          <span>{blog.date}</span>
                          <span>·</span>
                          <span className="text-stone-500 font-medium">{blog.category}</span>
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
            </div>

            {/* Bottom Footer Note */}
            <div className="pt-2 border-t border-stone-100/90 flex items-center justify-between text-[10.5px] font-mono text-stone-400 mt-1">
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
          </article>

          {/* Bottom Panel: Career Experience Log (Exact User Image 2 Match) */}
          <article className="group relative rounded-2xl bg-white border border-[rgba(22,21,20,0.08)] shadow-[0_2px_8px_rgba(22,21,20,0.015)] hover:shadow-[0_14px_30px_rgba(22,21,20,0.05)] hover:-translate-y-0.5 transition-all duration-300 ease-out p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
            {/* Technical Registration Crosshairs (+) */}
            <span className="absolute top-2 left-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>
            <span className="absolute top-2 right-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>
            <span className="absolute bottom-2 left-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>
            <span className="absolute bottom-2 right-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 select-none pointer-events-none transition-colors">+</span>

            {/* Kanji Watermark */}
            <span className="absolute -right-1 -top-1 text-[38px] font-serif font-black select-none pointer-events-none opacity-[0.05] text-stone-800">
              歴
            </span>

            <div>
              {/* Header with Divider Line (Exact Image 2 Style) */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-xs font-mono font-bold text-[#161514] tracking-tight">
                  # Experience
                </span>
                <div className="flex-1 h-[1px] bg-stone-100" />
              </div>

              {/* Experience Log Rows (Zero-Truncation Clean 2-Line Architecture) */}
              <div className="space-y-2 sm:space-y-2.5">
                {EXPERIENCES.map((exp) => (
                  <div 
                    key={exp.role + exp.year} 
                    className="group/row flex items-start gap-2.5 sm:gap-3 hover:bg-stone-50/70 -mx-1.5 px-1.5 py-1.5 rounded-lg transition-colors"
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
            </div>

            {/* Bottom Status Footnote */}
            <div className="pt-2 border-t border-stone-100/90 mt-2 flex items-center justify-between text-[10.5px] font-mono text-stone-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-stone-600 font-medium">Available for hire</span>
              </span>
              <span className="text-[10px] text-stone-400">Remote &amp; Contract</span>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}

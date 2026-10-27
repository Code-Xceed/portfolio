import React, { useRef } from 'react';
import { 
  ArrowUpRight, 
  BookOpen,
  Briefcase
} from 'lucide-react';

/**
 * Curated Blog Posts / Technical Writing
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
 * Career Milestones & Experience
 */
const EXPERIENCES = [
  {
    role: 'Video Editor',
    company: 'Big Brothers Media Agency',
    period: "Aug '26 – Present",
    status: 'current',
  },
  {
    role: 'Backend Developer',
    company: 'Helx Studio',
    period: "Jan '25 – May '26",
    status: 'past',
  },
  {
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
      className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-8 pt-6 sm:pt-8 pb-20 sm:pb-28 scroll-mt-8 sm:scroll-mt-12"
    >
      {/* ======================================================== */}
      {/* 2-COLUMN VIEWPORT GRID (Wide gap, compact media width)   */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8 md:gap-12 lg:gap-14 items-stretch">
        
        {/* ======================================================== */}
        {/* LEFT COLUMN: PURE CANVAS SECTIONS (Full width mobile, compact desktop) */}
        {/* ======================================================== */}
        <div className="flex flex-col justify-between pt-0.5 w-full md:max-w-[310px]">
          
          {/* Top Block: Minecraft & Competitive Esports */}
          <section aria-labelledby="gaming-heading">
            {/* Header with Divider Line */}
            <div className="flex items-center gap-2 mb-2 group/header">
              <span id="gaming-heading" className="text-xs font-mono font-bold text-[#161514] tracking-tight group-hover/header:text-black transition-colors duration-150">
                # Minecraft Speedrunner
              </span>
              <div className="flex-1 h-[1px] bg-stone-200/80 group-hover/header:bg-stone-300 transition-colors duration-200" />
            </div>

            {/* Video Thumbnail (Smooth scale, subtle shadow bloom & glow on hover) */}
            <div 
              className="relative w-full h-[142px] sm:h-[150px] md:h-[124px] lg:h-[132px] rounded-xl overflow-hidden bg-stone-900 my-2 border border-stone-200/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)] hover:border-stone-300 transition-all duration-300 ease-out group/video"
              onMouseEnter={() => mcVideoRef.current?.play()}
            >
              <video 
                ref={mcVideoRef}
                src="/gallery/videos/GixelMC.mp4" 
                autoPlay
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-90 group-hover/video:opacity-100 group-hover/video:scale-[1.025] transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-between p-2">
                <span className="text-[9px] font-mono text-white/95 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10 font-medium group-hover/video:bg-black/75 group-hover/video:border-white/20 transition-all duration-200">
                  Sub-20m · RSG
                </span>
              </div>
            </div>

            {/* Sub-thumbnail Details: TWO SEPARATE ROWS (Pro App + Extra Apps) */}
            <div className="pt-2 border-t border-stone-200/60 flex flex-col gap-1.5">
              {/* Row 1: Pro in Minecraft */}
              <div className="flex items-center">
                <div className="group/pro inline-flex items-center gap-1.5 cursor-default select-none">
                  <img 
                    src="/icons/minecraft-brand.svg" 
                    alt="Minecraft" 
                    className="w-3.5 h-3.5 object-contain group-hover/pro:scale-110 transition-transform duration-150" 
                  />
                  <span className="text-[11.5px] font-semibold text-[#161514] group-hover/pro:text-black tracking-tight transition-colors duration-150">
                    Pro in Minecraft
                  </span>
                </div>
              </div>

              {/* Row 2: Extra Games (Also plays) */}
              <div className="flex items-baseline gap-2 pt-0.5">
                <span className="text-[9.5px] font-mono text-stone-400 uppercase tracking-wider shrink-0 select-none mt-1">
                  Also:
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <div 
                    title="PlayerUnknown's Battlegrounds"
                    className="group/pill inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-stone-100/70 border border-stone-200/70 text-[10px] font-medium text-stone-700 hover:text-black hover:border-stone-400 hover:bg-stone-50 hover:-translate-y-0.5 active:scale-[0.96] transition-all duration-150 ease-out cursor-default select-none shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  >
                    <img src="/icons/pubg.svg" alt="PUBG" className="w-3.5 h-2.5 object-contain group-hover/pill:scale-110 transition-transform duration-150" />
                    <span>PUBG</span>
                  </div>

                  <div 
                    title="Chess.com"
                    className="group/pill inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-stone-100/70 border border-stone-200/70 text-[10px] font-medium text-stone-700 hover:text-black hover:border-stone-400 hover:bg-stone-50 hover:-translate-y-0.5 active:scale-[0.96] transition-all duration-150 ease-out cursor-default select-none shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  >
                    <img src="/icons/chesscom.svg" alt="Chess.com" className="w-3 h-3 object-contain group-hover/pill:scale-110 transition-transform duration-150" />
                    <span>Chess.com</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Block: Video Direction & Motion Design */}
          <section aria-labelledby="video-heading" className="pt-5 sm:pt-6">
            {/* Header with Divider Line */}
            <div className="flex items-center gap-2 mb-2 group/header">
              <span id="video-heading" className="text-xs font-mono font-bold text-[#161514] tracking-tight group-hover/header:text-black transition-colors duration-150">
                # Video Editing &amp; Motion Design
              </span>
              <div className="flex-1 h-[1px] bg-stone-200/80 group-hover/header:bg-stone-300 transition-colors duration-200" />
            </div>

            {/* Video Thumbnail (Smooth scale, subtle shadow bloom & glow on hover) */}
            <div 
              className="relative w-full h-[142px] sm:h-[150px] md:h-[124px] lg:h-[132px] rounded-xl overflow-hidden bg-stone-900 my-2 border border-stone-200/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)] hover:border-stone-300 transition-all duration-300 ease-out group/video"
              onMouseEnter={() => editVideoRef.current?.play()}
            >
              <video 
                ref={editVideoRef}
                src="/gallery/videos/Showcase-2.mp4" 
                autoPlay
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-90 group-hover/video:opacity-100 group-hover/video:scale-[1.025] transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-between p-2">
                <span className="text-[9px] font-mono text-white/95 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10 font-medium group-hover/video:bg-black/75 group-hover/video:border-white/20 transition-all duration-200">
                  Kinetic Pacing · 4K
                </span>
              </div>
            </div>

            {/* Sub-thumbnail Details: TWO SEPARATE ROWS (Pro Tool + Extra Tools) */}
            <div className="pt-2 border-t border-stone-200/60 flex flex-col gap-1.5">
              {/* Row 1: Good at DaVinci Resolve */}
              <div className="flex items-center">
                <div className="group/pro inline-flex items-center gap-1.5 cursor-default select-none">
                  <img 
                    src="/icons/davinci.svg" 
                    alt="DaVinci Resolve" 
                    className="w-3.5 h-3.5 object-contain group-hover/pro:rotate-45 group-hover/pro:scale-110 transition-transform duration-300 ease-out" 
                  />
                  <span className="text-[11.5px] font-semibold text-[#161514] group-hover/pro:text-black tracking-tight transition-colors duration-150">
                    Good at DaVinci Resolve
                  </span>
                </div>
              </div>

              {/* Row 2: Extra Tools (Also uses - Blender replaced with Mine-imator Vexel Build) */}
              <div className="flex items-baseline gap-2 pt-0.5">
                <span className="text-[9.5px] font-mono text-stone-400 uppercase tracking-wider shrink-0 select-none mt-1">
                  Also:
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <div 
                    title="Adobe Premiere Pro"
                    className="group/pill inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-stone-100/70 border border-stone-200/70 text-[10px] font-medium text-stone-700 hover:text-black hover:border-stone-400 hover:bg-stone-50 hover:-translate-y-0.5 active:scale-[0.96] transition-all duration-150 ease-out cursor-default select-none shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  >
                    <img src="/icons/premiere.svg" alt="Premiere Pro" className="w-3 h-3 object-contain group-hover/pill:scale-110 transition-transform duration-150" />
                    <span>Premiere</span>
                  </div>

                  <div 
                    title="Adobe After Effects"
                    className="group/pill inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-stone-100/70 border border-stone-200/70 text-[10px] font-medium text-stone-700 hover:text-black hover:border-stone-400 hover:bg-stone-50 hover:-translate-y-0.5 active:scale-[0.96] transition-all duration-150 ease-out cursor-default select-none shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  >
                    <img src="/icons/aftereffects.svg" alt="After Effects" className="w-3 h-3 object-contain group-hover/pill:scale-110 transition-transform duration-150" />
                    <span>AE</span>
                  </div>

                  <div 
                    title="Mine-imator (Vexel Build)"
                    className="group/pill inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded-md bg-stone-100/70 border border-stone-200/70 text-[10px] font-medium text-stone-700 hover:text-black hover:border-stone-400 hover:bg-stone-50 hover:-translate-y-0.5 active:scale-[0.96] transition-all duration-150 ease-out cursor-default select-none shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  >
                    <img 
                      src="/icons/mineimator.webp" 
                      alt="Mine-imator (Vexel Build)" 
                      className="w-3.5 h-3.5 object-contain group-hover/pill:scale-110 transition-transform duration-150" 
                    />
                    <span>Mine-imator</span>
                    <span className="text-[7.5px] font-mono text-orange-700/90 bg-orange-500/10 px-1 py-[0.5px] rounded font-semibold tracking-tight border border-orange-500/20 uppercase">
                      vexel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: PURE TEXT & LINEWORK DIRECTLY ON CANVAS    */}
        {/* (Blogs & Experience, no footer as requested)            */}
        {/* ======================================================== */}
        <div className="flex flex-col justify-between pt-0.5">
          
          {/* Top Block: Curated Blogs (Exact user request: # Blogs) */}
          <section aria-labelledby="blogs-heading">
            {/* Header with Divider Line */}
            <div className="flex items-center gap-2.5 mb-2.5 group/header">
              <span id="blogs-heading" className="text-xs font-mono font-bold text-[#161514] tracking-tight flex items-center gap-1.5 group-hover/header:text-black transition-colors duration-150">
                <BookOpen className="w-3.5 h-3.5 text-stone-500 group-hover/header:text-stone-700 group-hover/header:-rotate-6 transition-all duration-200 ease-out" />
                <span># Blogs</span>
              </span>
              <div className="flex-1 h-[1px] bg-stone-200/80 group-hover/header:bg-stone-300 transition-colors duration-200" />
              <span className="text-[10px] font-mono text-stone-400 group-hover/header:text-stone-500 font-medium transition-colors duration-150">4 notes</span>
            </div>

            {/* Cleaner Note Entries (Only title, arrow icon, date below it, with smooth microanimations) */}
            <div className="divide-y divide-stone-200/60">
              {BLOGS.map((blog) => (
                <a
                  key={blog.id}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item block py-2.5 sm:py-3 -mx-2 px-2 rounded-lg hover:bg-stone-500/[0.04] active:scale-[0.985] transition-all duration-200 ease-out"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[13px] sm:text-[13.5px] font-semibold text-[#161514] group-hover/item:text-black tracking-tight transition-colors duration-150">
                        {blog.title}
                      </h4>
                      <div className="text-[11px] font-mono text-stone-400 group-hover/item:text-stone-500 mt-0.5 transition-colors duration-150">
                        {blog.date}
                      </div>
                    </div>
                    <span className="text-stone-300 group-hover/item:text-[#161514] transition-all duration-200 ease-out group-hover/item:translate-x-1 group-hover/item:-translate-y-1 shrink-0 mt-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Bottom Block: Career Experience Log (Title on top, time in front, company below, NO FOOTER) */}
          <section aria-labelledby="experience-heading" className="pt-6 sm:pt-7">
            {/* Header with Divider Line */}
            <div className="flex items-center gap-2.5 mb-2.5 group/header">
              <span id="experience-heading" className="text-xs font-mono font-bold text-[#161514] tracking-tight flex items-center gap-1.5 group-hover/header:text-black transition-colors duration-150">
                <Briefcase className="w-3.5 h-3.5 text-stone-500 group-hover/header:text-stone-700 group-hover/header:rotate-6 transition-all duration-200 ease-out" />
                <span># Experience</span>
              </span>
              <div className="flex-1 h-[1px] bg-stone-200/80 group-hover/header:bg-stone-300 transition-colors duration-200" />
              <span className="text-[10px] font-mono text-stone-400 group-hover/header:text-stone-500 font-medium transition-colors duration-150">2 years</span>
            </div>

            {/* Experience Rows (Title on top, time in front on right, at company below it, with smooth microanimations) */}
            <div className="space-y-3 sm:space-y-3.5">
              {EXPERIENCES.map((exp) => (
                <div 
                  key={exp.role + exp.company} 
                  className="group/row -mx-2 px-2 py-1.5 sm:py-2 rounded-lg hover:bg-stone-500/[0.04] active:scale-[0.985] transition-all duration-200 ease-out cursor-default select-none"
                >
                  {/* Top Line: Role / Title on Left, Period / Time in front on Right */}
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-semibold text-[#161514] text-[13px] sm:text-[13.5px] group-hover/row:text-black tracking-tight transition-colors duration-150">
                      {exp.role}
                    </span>
                    <div className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-mono text-[#8C867E] group-hover/row:text-stone-600 transition-colors duration-150 shrink-0">
                      <span>{exp.period}</span>
                      <span className={`text-[9px] select-none inline-block transition-transform duration-200 ease-out group-hover/row:scale-125 ${
                        exp.status === 'current' 
                          ? 'text-emerald-500 font-bold drop-shadow-[0_0_4px_rgba(16,185,129,0.3)]' 
                          : 'text-stone-300'
                      }`}>
                        ◇
                      </span>
                    </div>
                  </div>

                  {/* Bottom Line: Company Name */}
                  {exp.company && (
                    <div className="text-[11.5px] text-[#78716C] group-hover/row:text-stone-600 mt-0.5 flex items-center gap-1 transition-colors duration-150">
                      <span className="text-[#A8A29E] text-[11px] select-none">at</span>
                      <span className="font-medium text-[#44403C] group-hover/row:text-stone-800 transition-colors duration-150">{exp.company}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>
    </section>
  );
}
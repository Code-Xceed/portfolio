import React, { useRef } from 'react';
import { 
  ArrowUpRight, 
  BookOpen
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
      {/* 2-COLUMN VIEWPORT GRID (Clean standard width as before)  */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-11 items-stretch">
        
        {/* ======================================================== */}
        {/* LEFT COLUMN: PURE CANVAS SECTIONS (Zero Card BG, Zen)    */}
        {/* ======================================================== */}
        <div className="flex flex-col justify-between pt-0.5">
          
          {/* Top Block: Minecraft & Competitive Esports */}
          <section aria-labelledby="gaming-heading">
            {/* Header with Divider Line */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <span id="gaming-heading" className="text-xs font-mono font-bold text-[#161514] tracking-tight">
                # Minecraft &amp; Esports
              </span>
              <div className="flex-1 h-[1px] bg-stone-200/80" />
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50/80 border border-emerald-500/20 px-2 py-0.5 rounded font-medium">
                RSG Speedrunner
              </span>
            </div>

            {/* Video Thumbnail (Clean framing on canvas) */}
            <div 
              className="relative w-full h-[128px] sm:h-[135px] rounded-xl overflow-hidden bg-stone-900 my-2.5 border border-stone-200/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)] group/video"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-between p-2.5">
                <span className="text-[9.5px] font-mono text-white/95 bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded border border-white/10 font-medium">
                  Sub-20m · RSG
                </span>
              </div>
            </div>

            {/* Sub-thumbnail Details: Two Separate Rows (Pro App + Extra Apps) */}
            <div className="pt-2.5 border-t border-stone-200/60 flex flex-col gap-2">
              {/* Row 1: Pro in Minecraft */}
              <div className="flex items-center gap-1.5">
                <img src="/icons/minecraft-brand.svg" alt="Minecraft" className="w-3.5 h-3.5 object-contain" />
                <span className="text-[12px] font-semibold text-[#161514] tracking-tight">
                  Pro in Minecraft
                </span>
              </div>

              {/* Row 2: Extra Apps (Also plays) */}
              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider shrink-0 select-none">
                  Also:
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100/70 border border-stone-200/70 text-[10.5px] font-medium text-stone-700 hover:text-black hover:border-stone-400 transition-colors">
                    <img src="/icons/pubg.svg" alt="PUBG" className="w-3.5 h-2.5 object-contain" />
                    <span>PUBG</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100/70 border border-stone-200/70 text-[10.5px] font-medium text-stone-700 hover:text-black hover:border-stone-400 transition-colors">
                    <img src="/icons/chesscom.svg" alt="Chess.com" className="w-3 h-3 object-contain" />
                    <span>Chess.com</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Block: Video Direction & Motion Design */}
          <section aria-labelledby="video-heading" className="pt-6 sm:pt-7">
            {/* Header with Divider Line */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <span id="video-heading" className="text-xs font-mono font-bold text-[#161514] tracking-tight">
                # Video &amp; Motion Design
              </span>
              <div className="flex-1 h-[1px] bg-stone-200/80" />
              <span className="text-[9.5px] font-mono text-stone-600 bg-stone-100/90 border border-stone-300/60 px-2 py-0.5 rounded font-medium">
                Video &amp; Motion
              </span>
            </div>

            {/* Video Thumbnail (Clean framing on canvas) */}
            <div 
              className="relative w-full h-[128px] sm:h-[135px] rounded-xl overflow-hidden bg-stone-900 my-2.5 border border-stone-200/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)] group/video"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-between p-2.5">
                <span className="text-[9.5px] font-mono text-white/95 bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded border border-white/10 font-medium">
                  Kinetic Pacing · 4K
                </span>
              </div>
            </div>

            {/* Sub-thumbnail Details: Two Separate Rows (Pro Tool + Extra Tools) */}
            <div className="pt-2.5 border-t border-stone-200/60 flex flex-col gap-2">
              {/* Row 1: Good at DaVinci Resolve */}
              <div className="flex items-center gap-1.5">
                <img src="/icons/davinci.svg" alt="DaVinci Resolve" className="w-3.5 h-3.5 object-contain" />
                <span className="text-[12px] font-semibold text-[#161514] tracking-tight">
                  Good at DaVinci Resolve
                </span>
              </div>

              {/* Row 2: Extra Tools (Also uses) */}
              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider shrink-0 select-none">
                  Also:
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100/70 border border-stone-200/70 text-[10.5px] font-medium text-stone-700 hover:text-black hover:border-stone-400 transition-colors">
                    <img src="/icons/premiere.svg" alt="Premiere Pro" className="w-3 h-3 object-contain" />
                    <span>Premiere</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100/70 border border-stone-200/70 text-[10.5px] font-medium text-stone-700 hover:text-black hover:border-stone-400 transition-colors">
                    <img src="/icons/aftereffects.svg" alt="After Effects" className="w-3 h-3 object-contain" />
                    <span>AE</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100/70 border border-stone-200/70 text-[10.5px] font-medium text-stone-700 hover:text-black hover:border-stone-400 transition-colors">
                    <img src="/icons/blender.svg" alt="Blender" className="w-3 h-3 object-contain" />
                    <span>Blender</span>
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
            <div className="flex items-center gap-2.5 mb-2.5">
              <span id="blogs-heading" className="text-xs font-mono font-bold text-[#161514] tracking-tight flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-stone-500" />
                <span># Blogs</span>
              </span>
              <div className="flex-1 h-[1px] bg-stone-200/80" />
              <span className="text-[10px] font-mono text-stone-400 font-medium">4 notes</span>
            </div>

            {/* Cleaner Note Entries (Only title, arrow icon, date below it) */}
            <div className="divide-y divide-stone-200/60">
              {BLOGS.map((blog) => (
                <a
                  key={blog.id}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable group/item block py-2.5 sm:py-3 -mx-1.5 px-1.5 rounded-lg hover:bg-black/[0.03] transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[13px] sm:text-[13.5px] font-semibold text-[#161514] group-hover/item:text-black tracking-tight transition-colors">
                        {blog.title}
                      </h4>
                      <div className="text-[11px] font-mono text-stone-400 mt-0.5">
                        {blog.date}
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
            <div className="pt-2.5 border-t border-stone-200/60 flex items-center justify-between text-[10.5px] font-mono text-stone-400 mt-1">
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

          {/* Bottom Block: Career Experience Log (Title on top, time in front, company below, NO FOOTER) */}
          <section aria-labelledby="experience-heading" className="pt-6 sm:pt-7">
            {/* Header with Divider Line */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <span id="experience-heading" className="text-xs font-mono font-bold text-[#161514] tracking-tight">
                # Experience
              </span>
              <div className="flex-1 h-[1px] bg-stone-200/80" />
            </div>

            {/* Experience Rows (Title on top, time in front on right, at company below it) */}
            <div className="space-y-3 sm:space-y-3.5">
              {EXPERIENCES.map((exp) => (
                <div 
                  key={exp.role + exp.company} 
                  className="group/row -mx-1.5 px-1.5 py-1.5 sm:py-2 rounded-lg hover:bg-black/[0.03] transition-colors"
                >
                  {/* Top Line: Role / Title on Left, Period / Time in front on Right */}
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-semibold text-[#161514] text-[13px] sm:text-[13.5px] group-hover/row:text-black tracking-tight transition-colors">
                      {exp.role}
                    </span>
                    <div className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-mono text-[#8C867E] shrink-0">
                      <span>{exp.period}</span>
                      <span className={`text-[9px] select-none ${exp.status === 'current' ? 'text-emerald-500 font-bold' : 'text-stone-300'}`}>
                        ◇
                      </span>
                    </div>
                  </div>

                  {/* Bottom Line: Company Name */}
                  {exp.company && (
                    <div className="text-[11.5px] text-[#78716C] mt-0.5 flex items-center gap-1">
                      <span className="text-[#A8A29E] text-[11px] select-none">at</span>
                      <span className="font-medium text-[#44403C]">{exp.company}</span>
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

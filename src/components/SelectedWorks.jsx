import React from 'react';
import { ArrowUpRight } from 'lucide-react';

function GithubIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

/**
 * 2D Anime Japanese Wave Motif (Seigaiha)
 */
function SeigaihaLines({ className = "w-full h-full" }) {
  return (
    <svg className={className} viewBox="0 0 100 50" fill="none" opacity="0.12" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 50C0 36.19 11.19 25 25 25C38.81 25 50 36.19 50 50" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 50C8 40.61 15.61 33 25 33C34.39 33 42 40.61 42 50" stroke="currentColor" strokeWidth="1.2" />
      <path d="M50 50C50 36.19 61.19 25 75 25C88.81 25 100 36.19 100 50" stroke="currentColor" strokeWidth="1.2" />
      <path d="M58 50C58 40.61 65.61 33 75 33C84.39 33 92 40.61 92 50" stroke="currentColor" strokeWidth="1.2" />
      <path d="M25 25C25 11.19 36.19 0 50 0C63.81 0 75 11.19 75 25" stroke="currentColor" strokeWidth="1.2" />
      <path d="M33 25C33 15.61 40.61 8 50 8C59.39 8 67 15.61 67 25" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Minimalist Vector Emblems (Zero Text - Pure Japanese Technical Craft)
 */
function McpEmblem({ color }) {
  return (
    <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.2">
      <circle cx="24" cy="24" r="20" strokeDasharray="3 3" opacity="0.35" />
      <circle cx="24" cy="24" r="13" opacity="0.75" />
      <circle cx="24" cy="24" r="3.5" fill={color} fillOpacity="0.25" />
      <line x1="24" y1="5" x2="24" y2="43" opacity="0.35" strokeDasharray="2 2" />
      <line x1="5" y1="24" x2="43" y2="24" opacity="0.35" strokeDasharray="2 2" />
      <circle cx="24" cy="11" r="2" fill={color} />
      <circle cx="37" cy="24" r="2" fill={color} />
      <circle cx="24" cy="37" r="2" fill={color} />
      <circle cx="11" cy="24" r="2" fill={color} />
    </svg>
  );
}

function FoliaEmblem({ color }) {
  return (
    <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.2">
      <rect x="12" y="12" width="24" height="24" transform="rotate(45 24 24)" opacity="0.4" strokeDasharray="3 3" />
      <rect x="15" y="15" width="18" height="18" transform="rotate(45 24 24)" opacity="0.8" />
      <line x1="24" y1="11" x2="24" y2="37" opacity="0.5" />
      <line x1="11" y1="24" x2="37" y2="24" opacity="0.5" />
      <circle cx="24" cy="24" r="3" fill={color} fillOpacity="0.25" />
      <circle cx="24" cy="7" r="1.8" fill={color} />
      <circle cx="41" cy="24" r="1.8" fill={color} />
      <circle cx="24" cy="41" r="1.8" fill={color} />
      <circle cx="7" cy="24" r="1.8" fill={color} />
    </svg>
  );
}

function ZenEmblem({ color }) {
  return (
    <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.2">
      <path d="M24 7L39 15.5V32.5L24 41L9 32.5V15.5L24 7Z" opacity="0.85" />
      <path d="M24 24V41" opacity="0.75" />
      <path d="M24 24L39 15.5" opacity="0.75" />
      <path d="M24 24L9 15.5" opacity="0.75" />
      <path d="M24 7L39 15.5L24 24L9 15.5Z" fill={color} fillOpacity="0.12" />
      <circle cx="24" cy="7" r="1.8" fill={color} />
      <circle cx="39" cy="15.5" r="1.8" fill={color} />
      <circle cx="39" cy="32.5" r="1.8" fill={color} />
      <circle cx="24" cy="41" r="1.8" fill={color} />
      <circle cx="9" cy="32.5" r="1.8" fill={color} />
      <circle cx="9" cy="15.5" r="1.8" fill={color} />
    </svg>
  );
}

/**
 * FEATURED PROJECTS (Refined, Human Copy & Pure Japanese Tech Aesthetic)
 */
const PROJECTS = [
  {
    id: 'goatmcp',
    index: '01',
    kanji: '壱',
    status: 'active',
    statusType: 'active',
    title: 'GoatMCP',
    theme: {
      accent: '#0284C7',
      accentBg: 'bg-[#0284C7]/8',
      accentText: 'text-[#0284C7]',
      borderHover: 'hover:border-[#0284C7]/30',
      ambientGradient: 'from-[#0284C7]/12 via-[#38BDF8]/4 to-transparent',
      plateBorder: 'border-[#0284C7]/15',
    },
    description: 'Curated discovery registry for Model Context Protocol servers, agent tools, and developer workflows.',
    link: 'https://goatmcp.com',
    github: 'https://github.com/aditya-rathore',
    skills: [
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
    ],
    emblem: <McpEmblem color="#0284C7" />,
  },
  {
    id: 'folia-core',
    index: '02',
    kanji: '弐',
    status: 'building',
    statusType: 'building',
    title: 'FoliaCore Engine',
    theme: {
      accent: '#EA580C',
      accentBg: 'bg-[#EA580C]/8',
      accentText: 'text-[#EA580C]',
      borderHover: 'hover:border-[#EA580C]/30',
      ambientGradient: 'from-[#EA580C]/12 via-[#FB923C]/4 to-transparent',
      plateBorder: 'border-[#EA580C]/15',
    },
    description: 'Regionized multi-threaded server architecture engineered for zero tick drops under high player concurrency.',
    link: 'https://github.com/aditya-rathore',
    github: 'https://github.com/aditya-rathore',
    skills: [
      { name: 'Java', icon: '/icons/java.svg' },
      { name: 'Folia', icon: '/icons/folia.svg' },
      { name: 'PaperMC', icon: '/icons/papermc.svg' },
      { name: 'Fabric', icon: '/icons/fabric.svg' },
      { name: 'Gradle', icon: '/icons/gradle.svg' },
    ],
    emblem: <FoliaEmblem color="#EA580C" />,
  },
  {
    id: 'zen-canvas',
    index: '03',
    kanji: '参',
    status: 'active',
    statusType: 'active',
    title: 'ZenCanvas 3D',
    theme: {
      accent: '#0D9488',
      accentBg: 'bg-[#0D9488]/8',
      accentText: 'text-[#0D9488]',
      borderHover: 'hover:border-[#0D9488]/30',
      ambientGradient: 'from-[#0D9488]/12 via-[#2DD4BF]/4 to-transparent',
      plateBorder: 'border-[#0D9488]/15',
    },
    description: 'Interactive WebGL canvas exploring procedural shaders, paper textures, and real-time lighting physics.',
    link: 'https://github.com/aditya-rathore',
    github: 'https://github.com/aditya-rathore',
    skills: [
      { name: 'Three.js', icon: '/icons/threejs.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Motion', icon: '/icons/motion.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
    ],
    emblem: <ZenEmblem color="#0D9488" />,
  },
];

/**
 * EditorialProjectCard
 * 
 * Museum-grade, buttery smooth project card:
 * - Fluid, WAAPI-driven bi-directional border trace:
 *   - Mouse enter: A crisp black bar line glides around the perimeter and smoothly seals into a full solid black border.
 *   - Mouse leave: Reverses smoothly and gracefully back to 0 without any sudden snap or jitter.
 * - Left: Clean 2D anime visual plate with status indicator, Seigaiha waves & minimal geometric emblem
 * - Right: Crisp title, action buttons, human 1-line description, and hero-matched dashed skill pills
 */
function EditorialProjectCard({ project }) {
  const thumbRef = React.useRef(null);
  const pathRightRef = React.useRef(null);
  const pathLeftRef = React.useRef(null);
  const glowRightRef = React.useRef(null);
  const glowLeftRef = React.useRef(null);
  const animsRef = React.useRef([]);
  const [dimensions, setDimensions] = React.useState({ width: 200, height: 175 });

  React.useEffect(() => {
    if (!thumbRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const bb = entry.borderBoxSize?.[0];
        const w = bb ? Math.round(bb.inlineSize) : Math.round(entry.contentRect.width + 24);
        const h = bb ? Math.round(bb.blockSize) : Math.round(entry.contentRect.height + 24);
        if (w > 0 && h > 0) {
          setDimensions(prev => (prev.width === w && prev.height === h ? prev : { width: w, height: h }));
        }
      }
    });
    ro.observe(thumbRef.current);
    return () => ro.disconnect();
  }, []);

  // When dimensions change, cleanly reset animation instances
  React.useEffect(() => {
    animsRef.current.forEach(a => a?.cancel());
    animsRef.current = [];
  }, [dimensions.width, dimensions.height]);

  const w = dimensions.width || 200;
  const h = dimensions.height || 175;
  const r = 12; // matching rounded-xl
  const inset = 0.75; // half stroke-width for subpixel alignment
  const cornerArc = 0.5 * Math.PI * (r - inset);
  const cx = w / 2;
  const overlap = 1.5; // seamless subpixel overlap to prevent anti-aliasing seam
  // Half perimeter = top segment + corner + side + corner + bottom segment + overlap
  const halfLen = Math.ceil((w / 2 - r) + cornerArc + (h - 2 * r) + cornerArc + (w / 2 - r) + (overlap * 2));

  const handleMouseEnter = () => {
    if (!pathRightRef.current || !pathLeftRef.current) return;

    const timing = {
      duration: 650, // snappy, butter-smooth 650ms dual-flow
      easing: 'cubic-bezier(0.25, 1, 0.4, 1)', // Apple/Emil Kowalski buttery ease
      fill: 'forwards'
    };

    if (animsRef.current.length > 0) {
      animsRef.current.forEach(a => {
        a.playbackRate = 1;
        a.play();
      });
    } else {
      const lenR = pathRightRef.current.getTotalLength?.() || halfLen;
      const lenL = pathLeftRef.current.getTotalLength?.() || halfLen;

      const coreKeyframesR = [
        { strokeDashoffset: `${lenR}px`, opacity: 0 },
        { strokeDashoffset: `${lenR * 0.98}px`, opacity: 1, offset: 0.02 },
        { strokeDashoffset: '0px', opacity: 1, offset: 1.0 }
      ];

      const coreKeyframesL = [
        { strokeDashoffset: `${lenL}px`, opacity: 0 },
        { strokeDashoffset: `${lenL * 0.98}px`, opacity: 1, offset: 0.02 },
        { strokeDashoffset: '0px', opacity: 1, offset: 1.0 }
      ];

      const glowKeyframesR = [
        { strokeDashoffset: `${lenR}px`, opacity: 0 },
        { strokeDashoffset: `${lenR * 0.98}px`, opacity: 0.35, offset: 0.02 },
        { strokeDashoffset: '0px', opacity: 0.18, offset: 1.0 }
      ];

      const glowKeyframesL = [
        { strokeDashoffset: `${lenL}px`, opacity: 0 },
        { strokeDashoffset: `${lenL * 0.98}px`, opacity: 0.35, offset: 0.02 },
        { strokeDashoffset: '0px', opacity: 0.18, offset: 1.0 }
      ];

      animsRef.current = [
        pathRightRef.current.animate(coreKeyframesR, timing),
        pathLeftRef.current.animate(coreKeyframesL, timing),
        glowRightRef.current ? glowRightRef.current.animate(glowKeyframesR, timing) : null,
        glowLeftRef.current ? glowLeftRef.current.animate(glowKeyframesL, timing) : null,
      ].filter(Boolean);
    }
  };

  const handleMouseLeave = () => {
    // Seamless reverse unwind back to top-middle starting point
    if (animsRef.current.length > 0) {
      animsRef.current.forEach(a => {
        a.playbackRate = -1.4;
        a.play();
      });
    }
  };

  // Symmetrical Right Half: starts top-middle, goes right, down, ends bottom-middle with subpixel overlap
  const pathRight = `M ${cx - overlap} ${inset} L ${w - r} ${inset} A ${r - inset} ${r - inset} 0 0 1 ${w - inset} ${r} L ${w - inset} ${h - r} A ${r - inset} ${r - inset} 0 0 1 ${w - r} ${h - inset} L ${cx - overlap} ${h - inset}`;

  // Symmetrical Left Half: starts top-middle, goes left, down, ends bottom-middle with subpixel overlap
  const pathLeft = `M ${cx + overlap} ${inset} L ${r} ${inset} A ${r - inset} ${r - inset} 0 0 0 ${inset} ${r} L ${inset} ${h - r} A ${r - inset} ${r - inset} 0 0 0 ${r} ${h - inset} L ${cx + overlap} ${h - inset}`;

  // Full Resting Perimeter
  const pathFull = `M ${w / 2} ${inset} L ${w - r} ${inset} A ${r - inset} ${r - inset} 0 0 1 ${w - inset} ${r} L ${w - inset} ${h - r} A ${r - inset} ${r - inset} 0 0 1 ${w - r} ${h - inset} L ${r} ${h - inset} A ${r - inset} ${r - inset} 0 0 1 ${inset} ${h - r} L ${inset} ${r} A ${r - inset} ${r - inset} 0 0 1 ${r} ${inset} L ${w / 2} ${inset} Z`;

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative w-full rounded-2xl bg-white border border-[rgba(22,21,20,0.08)] shadow-[0_2px_8px_rgba(22,21,20,0.015)] hover:shadow-[0_14px_30px_rgba(22,21,20,0.05)] hover:-translate-y-0.5 transition-all duration-300 ease-out p-4 sm:p-5 flex flex-col md:flex-row gap-5 sm:gap-6 overflow-hidden"
    >
      {/* Corner Technical Registration Crosshairs (+) */}
      <span className="absolute top-2 left-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 transition-colors select-none pointer-events-none z-10">+</span>
      <span className="absolute top-2 right-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 transition-colors select-none pointer-events-none z-10">+</span>
      <span className="absolute bottom-2 left-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 transition-colors select-none pointer-events-none z-10">+</span>
      <span className="absolute bottom-2 right-2 text-[9px] font-mono text-stone-200 group-hover:text-stone-400 transition-colors select-none pointer-events-none z-10">+</span>

      {/* ======================================================== */}
      {/* LEFT: CALM JAPANESE COASTAL THUMBNAIL PLATE             */}
      {/* ======================================================== */}
      <div 
        ref={thumbRef}
        className={`relative w-full md:w-[200px] lg:w-[215px] h-[125px] md:h-auto rounded-xl bg-gradient-to-br ${project.theme.ambientGradient} bg-stone-50/70 p-3 flex flex-col justify-between shrink-0 overflow-hidden transition-all duration-200`}
      >
        {/* Unified Border System on Thumbnail: Resting Line + Traveling Blurred Aura + Sharp Traveling Black Bar */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none rounded-xl z-30 overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <filter id={`thumbBlur-${project.id}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
            </filter>
          </defs>

          {/* 1. Resting subtle plate border */}
          <path
            d={pathFull}
            fill="none"
            stroke="rgba(22, 21, 20, 0.10)"
            strokeWidth="1"
          />

          {/* 2. Soft blurred aura beams (symmetrical dual flow: left & right) */}
          <path
            ref={glowRightRef}
            d={pathRight}
            fill="none"
            stroke="#161514"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#thumbBlur-${project.id})`}
            style={{
              opacity: 0,
              strokeDasharray: `${halfLen} ${halfLen}`,
              strokeDashoffset: `${halfLen}`,
              willChange: 'stroke-dashoffset, opacity',
            }}
          />
          <path
            ref={glowLeftRef}
            d={pathLeft}
            fill="none"
            stroke="#161514"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#thumbBlur-${project.id})`}
            style={{
              opacity: 0,
              strokeDasharray: `${halfLen} ${halfLen}`,
              strokeDashoffset: `${halfLen}`,
              willChange: 'stroke-dashoffset, opacity',
            }}
          />

          {/* 3. Crisp core lines: Symmetrical Dual Flow meeting seamlessly at bottom-middle */}
          <path
            ref={pathRightRef}
            d={pathRight}
            fill="none"
            stroke="#161514"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              opacity: 0,
              strokeDasharray: `${halfLen} ${halfLen}`,
              strokeDashoffset: `${halfLen}`,
              willChange: 'stroke-dashoffset, opacity',
            }}
          />
          <path
            ref={pathLeftRef}
            d={pathLeft}
            fill="none"
            stroke="#161514"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              opacity: 0,
              strokeDasharray: `${halfLen} ${halfLen}`,
              strokeDashoffset: `${halfLen}`,
              willChange: 'stroke-dashoffset, opacity',
            }}
          />
        </svg>

        {/* Ambient subtle color aura on hover */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
          style={{
            boxShadow: `inset 0 0 20px ${project.theme.accent}14`,
          }}
          aria-hidden="true"
        />

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
          style={{ color: project.theme.accent }}
          aria-hidden="true"
        >
          <SeigaihaLines />
        </div>

        {/* Kanji Seal Watermark */}
        <span 
          className="absolute right-2 bottom-1 text-[42px] font-serif font-black select-none pointer-events-none opacity-[0.08] transition-transform duration-200 group-hover:scale-105"
          style={{ color: project.theme.accent }}
        >
          {project.kanji}
        </span>

        {/* Plate Top Bar: Minimal Status Text (Zero Pill - Clean Colored Text with Underline) */}
        <div className="relative z-10 flex items-center justify-end">
          {project.statusType === 'active' ? (
            <span className="font-mono text-[10px] font-medium tracking-wide text-emerald-600 border-b-[1.5px] border-emerald-500/80 pb-0.5 select-none">
              active
            </span>
          ) : (
            <span className="font-mono text-[10px] font-medium tracking-wide bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent border-b-[1.5px] border-orange-400/90 pb-0.5 select-none">
              building
            </span>
          )}
        </div>

        {/* Plate Center: Minimalist Vector Art (Zero Text Clutter) */}
        <div className="relative z-10 my-auto py-2 flex items-center justify-center">
          <div className="transform group-hover:scale-110 transition-transform duration-200 ease-out">
            {project.emblem}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* RIGHT: EDITORIAL SPEC & SKILLS SECTION                   */}
      {/* ======================================================== */}
      <div className="flex-1 flex flex-col justify-between pt-0.5">
        <div>
          {/* Header Row: Title & Action Controls Directly Aligned */}
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-[20px] sm:text-[21px] font-bold text-[#161514] tracking-tight group-hover:text-black transition-colors duration-150">
              {project.title}
            </h3>

            {/* Micro-Animated Launch Controls */}
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable p-2 rounded-lg text-stone-400 hover:text-[#161514] hover:bg-black/[0.04] active:scale-90 transition-all duration-150"
                title="View GitHub Repository"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable group/btn relative overflow-hidden px-3.5 py-1.5 rounded-lg bg-[#161514] hover:bg-black text-white text-[11.5px] font-medium flex items-center gap-1.5 transition-all duration-150 active:scale-95 shadow-2xs"
              >
                <span>Visit</span>
                <ArrowUpRight className="w-3 h-3 transition-transform duration-150 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Clean, Human Description */}
          <p className="text-[13px] sm:text-[13.5px] text-[#57534E] leading-[1.6] mt-2">
            {project.description}
          </p>
        </div>

        {/* ======================================================== */}
        {/* SKILLS TAGS: Refined Dashed Pills with Micro-Hover Lift  */}
        {/* ======================================================== */}
        <div className="pt-3.5 border-t border-stone-100/80 mt-3.5">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {project.skills.map((skill) => (
              <div
                key={skill.name}
                className="pressable inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white border border-dashed border-[#D6D3D1] hover:border-solid hover:border-[#161514]/40 hover:-translate-y-0.5 active:scale-95 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-150 cursor-default select-none"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-3 h-3 object-contain shrink-0"
                />
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
 * SelectedWorks
 * 
 * Museum-grade project showcase:
 * - Minimal, calm, human-written copy
 * - Refined Japanese coastal aesthetic (Aoi, Akane, Matsuba)
 * - Micro-animated buttons, links, and skills pills
 * - Zero unwanted metric badges or robotic CLI text
 */
export default function SelectedWorks() {
  return (
    <section 
      id="projects" 
      className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-8 pt-4 sm:pt-6 pb-14 sm:pb-20 scroll-mt-8 sm:scroll-mt-12"
    >
      {/* PROJECTS LIST: Structured Editorial Spec Stack */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {PROJECTS.map((project) => (
          <EditorialProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

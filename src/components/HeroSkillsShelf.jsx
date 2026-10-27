import React, { useState } from 'react';
import { Globe, Palette } from 'lucide-react';

/**
 * Small Black Minecraft Icon (Iconic Creeper Face Block)
 */
function MinecraftIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M6,6V10H10V12H8V18H10V16H14V18H16V12H14V10H18V6H14V10H10V6H6Z" />
    </svg>
  );
}

/**
 * SKILLS_CATALOG
 * Three core engineering & creative domains:
 * 1. Web & Full-Stack Systems (14 core web technologies)
 * 2. Creative Design & Media (5 curated creative tools: Figma, DaVinci Resolve, Photoshop, Premiere Pro, AI)
 * 3. Minecraft Modding & Server Architecture (7 specialized gaming technologies)
 */
const CATEGORIES = [
  { 
    id: 'web', 
    label: 'Web & Full-Stack', 
    icon: Globe,
    count: 14 
  },
  { 
    id: 'creative', 
    label: 'Creative', 
    icon: Palette,
    count: 5 
  },
  { 
    id: 'minecraft', 
    label: 'Minecraft & Modding', 
    icon: MinecraftIcon,
    count: 7 
  },
];

const SKILLS = [
  // ==========================================
  // 1. WEB & FULL-STACK SYSTEMS (14 skills)
  // ==========================================
  {
    name: 'TypeScript',
    category: 'web',
    tag: 'Type Safety',
    icon: '/icons/typescript.svg',
    glowColor: 'rgba(49, 120, 198, 0.25)',
  },
  {
    name: 'Python',
    category: 'web',
    tag: 'Backend & AI',
    icon: '/icons/python.svg',
    glowColor: 'rgba(56, 126, 184, 0.25)',
  },
  {
    name: 'JavaScript',
    category: 'web',
    tag: 'Core Language',
    icon: '/icons/javascript.svg',
    glowColor: 'rgba(247, 223, 30, 0.3)',
  },
  {
    name: 'PostgreSQL',
    category: 'web',
    tag: 'Relational DB',
    icon: '/icons/postgresql.svg',
    glowColor: 'rgba(51, 103, 145, 0.25)',
  },
  {
    name: 'React',
    category: 'web',
    tag: 'Frontend UI',
    icon: '/icons/react.svg',
    glowColor: 'rgba(8, 126, 164, 0.25)',
  },
  {
    name: 'Next.js',
    category: 'web',
    tag: 'Full-Stack React',
    icon: '/icons/nextjs.svg',
    glowColor: 'rgba(22, 21, 20, 0.25)',
  },
  {
    name: 'Bun',
    category: 'web',
    tag: 'Fast JS Runtime',
    icon: '/icons/bun.svg',
    glowColor: 'rgba(244, 114, 182, 0.25)',
  },
  {
    name: 'Tailwind',
    category: 'web',
    tag: 'Utility Styling',
    icon: '/icons/tailwindcss.svg',
    glowColor: 'rgba(6, 182, 212, 0.25)',
  },
  {
    name: 'Motion',
    category: 'web',
    tag: 'Fluid Physics',
    icon: '/icons/motion.svg',
    glowColor: 'rgba(255, 0, 85, 0.25)',
  },
  {
    name: 'Git',
    category: 'web',
    tag: 'Version Control',
    icon: '/icons/git.svg',
    glowColor: 'rgba(240, 80, 50, 0.25)',
  },
  {
    name: 'Github',
    category: 'web',
    tag: 'Code Hosting & CI',
    icon: '/icons/github.svg',
    glowColor: 'rgba(22, 21, 20, 0.25)',
  },
  {
    name: 'Docker',
    category: 'web',
    tag: 'Containers',
    icon: '/icons/docker.svg',
    glowColor: 'rgba(36, 150, 237, 0.25)',
  },
  {
    name: 'Node.js',
    category: 'web',
    tag: 'Server Runtime',
    icon: '/icons/nodejs.svg',
    glowColor: 'rgba(95, 160, 78, 0.25)',
  },
  {
    name: 'Three.js',
    category: 'web',
    tag: 'WebGL & 3D',
    icon: '/icons/threejs.svg',
    glowColor: 'rgba(22, 21, 20, 0.25)',
  },

  // ==========================================
  // 2. CREATIVE DESIGN & MEDIA (5 skills)
  // ==========================================
  {
    name: 'Figma',
    category: 'creative',
    tag: 'UI & Systems Design',
    icon: '/icons/figma.svg',
    glowColor: 'rgba(162, 89, 255, 0.25)',
  },
  {
    name: 'DaVinci Resolve',
    category: 'creative',
    tag: 'Color & Post-Production',
    icon: '/icons/davinci.svg',
    glowColor: 'rgba(255, 75, 75, 0.25)',
  },
  {
    name: 'Photoshop',
    category: 'creative',
    tag: 'Raster & Concept Art',
    icon: '/icons/photoshop.svg',
    glowColor: 'rgba(49, 168, 255, 0.25)',
  },
  {
    name: 'Premiere Pro',
    category: 'creative',
    tag: 'Video Editing & Pacing',
    icon: '/icons/premiere.svg',
    glowColor: 'rgba(153, 153, 255, 0.25)',
  },
  {
    name: 'Generative AI',
    category: 'creative',
    tag: 'Creative AI & Prompting',
    icon: '/icons/ai.svg',
    glowColor: 'rgba(124, 58, 237, 0.25)',
  },

  // ==========================================
  // 3. MINECRAFT MODDING & SYSTEMS (7 skills)
  // ==========================================
  {
    name: 'Java',
    category: 'minecraft',
    tag: 'JVM Platform',
    icon: '/icons/java.svg',
    glowColor: 'rgba(231, 111, 0, 0.25)',
  },
  {
    name: 'Fabric',
    category: 'minecraft',
    tag: 'Lightweight Loader',
    icon: '/icons/fabric.svg',
    glowColor: 'rgba(76, 94, 170, 0.25)',
  },
  {
    name: 'Forge',
    category: 'minecraft',
    tag: 'Modding Ecosystem',
    icon: '/icons/forge.svg',
    glowColor: 'rgba(223, 111, 35, 0.25)',
  },
  {
    name: 'NeoForge',
    category: 'minecraft',
    tag: 'Next-Gen Modding API',
    icon: '/icons/neoforge.svg',
    glowColor: 'rgba(255, 85, 0, 0.25)',
  },
  {
    name: 'PaperMC',
    category: 'minecraft',
    tag: 'High-Perf Server Core',
    icon: '/icons/papermc.svg',
    glowColor: 'rgba(0, 150, 230, 0.25)',
  },
  {
    name: 'Folia',
    category: 'minecraft',
    tag: 'Multi-Threaded Server Engine',
    icon: '/icons/folia.svg',
    glowColor: 'rgba(16, 185, 129, 0.25)',
  },
  {
    name: 'Gradle',
    category: 'minecraft',
    tag: 'Automation & Build System',
    icon: '/icons/gradle.svg',
    glowColor: 'rgba(2, 48, 58, 0.25)',
  },
];

/**
 * HeroSkillsShelf
 * 
 * Sized and styled strictly according to user reference:
 * - Compact pill sizing: ~32-34px height, px-2.5 py-1, text-[12px] font-medium
 * - Dashed border: border border-dashed border-[#D6D3D1]
 * - Official vector brand logos with 100% precision, zero bottom cutoff
 * - Rock-solid, fixed selector toolbar with all elements anchored, zero layout jitter
 */
export default function HeroSkillsShelf() {
  const [activeTab, setActiveTab] = useState('web');

  const filteredSkills = SKILLS.filter(s => s.category === activeTab);

  return (
    <div 
      className="mt-7 sm:mt-9 w-full max-w-xl animate-fade-in-up"
      style={{ animationDelay: '280ms' }}
    >
      {/* 
        ==================================================
        FIXED-IN-PLACE SELECTOR TOOLBAR
        - Fixed non-wrapping track with overflow-x-auto for small viewports
        - Three distinct domains: Web & Full-Stack, Creative, Minecraft & Modding
        - Clean segmented pill frame, zero layout shift
        ==================================================
      */}
      <div className="w-full flex items-center justify-start mb-3 px-0.5 overflow-x-auto scrollbar-none">
        {/* Segmented Tab Controls */}
        <div 
          className="inline-flex items-center p-1 rounded-xl bg-stone-100/90 sm:bg-white/80 border border-stone-200/80 shadow-[inset_0_1px_2px_rgba(22,21,20,0.03)] backdrop-blur-md shrink-0"
          role="tablist"
          aria-label="Filter skills by engineering & creative domain"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            const IconComponent = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(cat.id)}
                className={`pressable relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-[11.5px] font-medium transition-all duration-150 cursor-pointer select-none whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-[#161514] font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.04)] border border-black/[0.04]'
                    : 'text-[#78716C] hover:text-[#161514] hover:bg-white/50'
                }`}
              >
                <IconComponent className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#161514]' : 'text-[#78716C]'}`} />
                <span>{cat.label}</span>
                <span 
                  className={`text-[9.5px] font-mono px-1.5 py-0.2 rounded-md transition-colors ${
                    isActive 
                      ? 'bg-stone-100 text-[#161514] font-semibold' 
                      : 'bg-black/[0.03] text-[#A8A29E]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 
        ==================================================
        COMPACT PILLS CONTAINER (Reference Image Match)
        - min-h-[164px] guarantees zero layout shift/jump when toggling tabs
        - 1px dashed light-gray border (#D6D3D1)
        - Clean white background (#FFFFFF)
        - 15px official colored vector logos
        ==================================================
      */}
      <div 
        className="min-h-[164px] flex flex-wrap items-start content-start gap-2 sm:gap-2.5 pt-0.5"
        role="region"
        aria-live="polite"
      >
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="group relative inline-flex items-center gap-2 px-2.5 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-white border border-dashed border-[#D6D3D1] hover:border-solid hover:border-[#161514]/40 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_2px_8px_rgba(22,21,20,0.06)] hover:-translate-y-0.5 active:scale-95 transition-all duration-150 cursor-default select-none"
            title={`${skill.name} · ${skill.tag}`}
          >
            {/* 100% Precision Official Vector Brand Logo (14-15px bounding box, zero clip) */}
            <div className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] shrink-0 flex items-center justify-center transition-transform duration-150 group-hover:scale-110">
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            {/* Typography strictly matching user reference */}
            <span className="text-[12px] sm:text-[12.5px] font-medium text-[#161514] tracking-[-0.01em] whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

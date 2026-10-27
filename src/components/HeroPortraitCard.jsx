import React, { useState } from 'react';

/**
 * HeroPortraitCard
 * 
 * Museum-grade archival Polaroid portrait card featuring:
 * - 2D Japanese anime character artwork (Aditya Rathore, age 16, India)
 * - Interactive cartoon-style thought cloud bubble ("Open for work") emerging on hover/tap
 *   with trailing thought bubbles pointing directly down towards the character's head
 * - Bottom archival metadata: "ADITYA · 16" and "INDIA"
 * - High-craft spring physics, tactile paper texture, and precision corner alignment
 */
export default function HeroPortraitCard({ compact = false }) {
  const [isTapped, setIsTapped] = useState(false);

  const toggleMobileThought = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setIsTapped((prev) => !prev);
  };

  if (compact) {
    // Mobile Compact Variant (integrated into main title row)
    return (
      <div 
        className="relative shrink-0 select-none group cursor-pointer"
        onClick={toggleMobileThought}
        onTouchEnd={toggleMobileThought}
        onMouseEnter={() => setIsTapped(true)}
        onMouseLeave={() => setIsTapped(false)}
        role="button"
        tabIndex={0}
        aria-label="Aditya Rathore Portrait - Open for work"
      >
        {/* Cartoon Thought Bubble (Mobile Pop-in) */}
        <div
          className={`absolute -top-12 -left-14 sm:-left-12 z-30 pointer-events-none transition-all duration-300 ease-out origin-bottom-right ${
            isTapped 
              ? 'opacity-100 scale-100 translate-y-0 rotate-0' 
              : 'opacity-0 scale-75 translate-y-2 rotate-[-4deg] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:rotate-0'
          }`}
        >
          <div className="relative filter drop-shadow-[0_8px_16px_rgba(22,21,20,0.12)] drop-shadow-[1.5px_2px_0px_#161514]">
            <svg 
              className="w-28 sm:w-32 h-auto overflow-visible animate-subtle-float" 
              viewBox="0 0 170 85" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Manga Cloud Scallop Lobes */}
              <path
                d="M 40 42 
                   C 32 40, 24 30, 32 20 
                   C 38 12, 52 10, 60 16 
                   C 68 8, 86 6, 96 14 
                   C 106 8, 124 10, 132 18 
                   C 142 12, 156 22, 154 34 
                   C 162 42, 160 56, 150 62 
                   C 144 68, 130 68, 122 62 
                   C 114 70, 96 70, 88 64 
                   C 78 70, 62 68, 54 62 
                   C 42 66, 32 56, 36 46 
                   C 34 44, 37 42, 40 42 Z"
                fill="#FFFFFF"
                stroke="#161514"
                strokeWidth="2.2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {/* Descending Thought Bubbles */}
              <circle cx="126" cy="72" r="4.5" fill="#FFFFFF" stroke="#161514" strokeWidth="1.8" />
              <circle cx="132" cy="79" r="3" fill="#FFFFFF" stroke="#161514" strokeWidth="1.5" />
              <circle cx="137" cy="84" r="1.8" fill="#FFFFFF" stroke="#161514" strokeWidth="1.2" />

              {/* Status Dot */}
              <circle cx="56" cy="38" r="3.2" fill="#10B981" />
              <circle cx="56" cy="38" r="5" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.4" />

              {/* Thought Text */}
              <text 
                x="66" 
                y="42" 
                fontFamily="'Plus Jakarta Sans', sans-serif" 
                fontWeight="800" 
                fontSize="10" 
                letterSpacing="-0.2px" 
                fill="#161514"
              >
                Open for work
              </text>
            </svg>
          </div>
        </div>

        {/* Compact Polaroid Frame */}
        <div className="relative w-20 sm:w-24 aspect-[4/5] p-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[rgba(22,21,20,0.08)] shadow-[0_6px_20px_rgba(22,21,20,0.04)] rotate-[-1deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 ease-out">
          <div className="relative w-full h-[calc(100%-14px)] rounded-lg overflow-hidden bg-[#F4EFE6] border border-[rgba(22,21,20,0.05)]">
            <img
              src="/profile-placeholder.svg"
              alt="Aditya Rathore - 2D Anime Avatar"
              className="w-full h-full object-cover object-top transition-transform duration-400 group-hover:scale-105"
            />
            <div className="absolute inset-0 pointer-events-none paper-texture opacity-40 mix-blend-multiply" aria-hidden="true" />
          </div>
          <div className="h-3.5 flex items-center justify-between px-0.5 pt-0.5 font-mono text-[7px] text-[#78716C] tracking-tight">
            <span className="font-semibold text-[#57534E]">ADITYA · 16</span>
            <span className="font-semibold text-[#161514]">INDIA</span>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Museum-Grade Tactile Plate
  return (
    <div 
      data-testid="hero-portrait-card"
      className="relative shrink-0 select-none group cursor-pointer"
      onMouseEnter={() => setIsTapped(true)}
      onMouseLeave={() => setIsTapped(false)}
      onClick={toggleMobileThought}
      role="region"
      aria-label="Aditya Rathore Portrait - 16, India - Open for work"
    >
      {/* ========================================================
          CARTOON THOUGHT BUBBLE (ANIME / MANGA UI ON HOVER)
          ======================================================== */}
      <div 
        className={`absolute -top-14 -left-10 md:-left-12 z-30 pointer-events-none transition-all duration-300 ease-out origin-bottom-right ${
          isTapped 
            ? 'opacity-100 scale-100 translate-y-0 rotate-0' 
            : 'opacity-0 scale-75 translate-y-3 rotate-[-4deg] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:rotate-0'
        }`}
      >
        <div className="relative filter drop-shadow-[0_10px_22px_rgba(22,21,20,0.12)] drop-shadow-[1.5px_2px_0px_#161514]">
          <svg 
            className="w-40 sm:w-44 h-auto overflow-visible animate-subtle-float" 
            viewBox="0 0 200 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Manga Cloud Shape with Hand-Drawn Scallop Lobes */}
            <path
              d="M 44 45 
                 C 34 42, 24 30, 32 18 
                 C 38 10, 54 8, 65 14 
                 C 76 6, 98 4, 112 12 
                 C 126 6, 148 8, 158 16 
                 C 172 10, 190 22, 186 36 
                 C 196 46, 192 62, 178 68 
                 C 170 74, 152 72, 142 66 
                 C 130 74, 108 74, 98 68 
                 C 84 74, 64 72, 54 66 
                 C 38 70, 28 58, 34 46 
                 C 32 44, 38 42, 44 45 Z"
              fill="#FFFFFF"
              stroke="#161514"
              strokeWidth="2.4"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            
            {/* Trailing Thought Circles descending to character's head */}
            <circle cx="150" cy="78" r="6" fill="#FFFFFF" stroke="#161514" strokeWidth="2.2" />
            <circle cx="160" cy="88" r="4" fill="#FFFFFF" stroke="#161514" strokeWidth="1.8" />
            <circle cx="167" cy="95" r="2.4" fill="#FFFFFF" stroke="#161514" strokeWidth="1.4" />
            
            {/* Status Pulse Glow Dot */}
            <circle cx="58" cy="40" r="4" fill="#10B981" />
            <circle cx="58" cy="40" r="6.5" fill="none" stroke="#10B981" strokeWidth="1.2" opacity="0.4" />
            
            {/* Thought Text */}
            <text 
              x="70" 
              y="44" 
              fontFamily="'Plus Jakarta Sans', sans-serif" 
              fontWeight="800" 
              fontSize="12.5" 
              letterSpacing="-0.3px" 
              fill="#161514"
            >
              Open for work
            </text>
          </svg>
        </div>
      </div>

      {/* ========================================================
          OUTER ARCHIVAL MAT FRAME (UPLIFTED & COMPACT POLAROID)
          ======================================================== */}
      <div className="relative w-36 md:w-[164px] aspect-[4/5] p-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[rgba(22,21,20,0.08)] shadow-[0_8px_24px_rgba(22,21,20,0.035),0_1px_2px_rgba(22,21,20,0.02)] rotate-[-1.2deg] group-hover:rotate-0 group-hover:scale-[1.025] group-hover:shadow-[0_16px_36px_rgba(22,21,20,0.07)] transition-all duration-300 ease-out">
        
        {/* Corner Precision Hairlines */}
        <span className="absolute top-1.5 left-1.5 text-[8px] font-mono text-[#8C867E]/40 leading-none">⌜</span>
        <span className="absolute top-1.5 right-1.5 text-[8px] font-mono text-[#8C867E]/40 leading-none">⌝</span>
        <span className="absolute bottom-5 left-1.5 text-[8px] font-mono text-[#8C867E]/40 leading-none">⌞</span>
        <span className="absolute bottom-5 right-1.5 text-[8px] font-mono text-[#8C867E]/40 leading-none">⌟</span>

        {/* Inner Image Plate with 2D Anime Artwork */}
        <div className="relative w-full h-[calc(100%-18px)] rounded-xl overflow-hidden bg-[#F4EFE6] border border-[rgba(22,21,20,0.05)]">
          <img
            src="/profile-placeholder.svg"
            alt="Aditya Rathore 2D Anime Portrait Plate"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Tactile Paper Grain Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none paper-texture opacity-40 mix-blend-multiply" 
            aria-hidden="true" 
          />
        </div>

        {/* Bottom Archival Label Strip: ADITYA · 16        INDIA */}
        <div className="h-4.5 flex items-center justify-between px-0.5 pt-1 font-mono text-[8.5px] text-[#78716C]">
          <span className="tracking-wider font-semibold text-[#57534E]">ADITYA · 16</span>
          <span className="tracking-wider font-semibold text-[#161514]">INDIA</span>
        </div>
      </div>

      {/* Ambient Soft Shadow Plate */}
      <div 
        className="absolute -bottom-1.5 left-2.5 right-2.5 h-4 bg-black/[0.035] blur-md rounded-full -z-10 group-hover:blur-lg group-hover:bg-black/[0.06] transition-all duration-300" 
        aria-hidden="true" 
      />
    </div>
  );
}

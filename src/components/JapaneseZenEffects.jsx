import React from 'react';

/**
 * JapaneseZenEffects Component
 * Minimalist Japanese Atmospheric Effects:
 * 1. Corner Zen Pond Ripples (Concentric micro-hairlines with slow breathing pulse)
 * 2. Drifting Hanafubuki / Falling Petals (Sakura pink & Momiji red petals swaying down the side margins)
 * 100% GPU accelerated, zero main-thread overhead, constrained strictly to side margins.
 */

const PETALS = [
  // Left side margin petals
  { id: 1, type: 'sakura', left: '4%', delay: '0s', duration: '14s', size: 10, drift: 24 },
  { id: 2, type: 'maple', left: '12%', delay: '4s', duration: '18s', size: 12, drift: -20 },
  { id: 3, type: 'sakura', left: '7%', delay: '8s', duration: '16s', size: 9, drift: 30 },
  { id: 4, type: 'ginkgo', left: '15%', delay: '11s', duration: '20s', size: 11, drift: -25 },

  // Right side margin petals
  { id: 5, type: 'sakura', left: '86%', delay: '2s', duration: '15s', size: 11, drift: -28 },
  { id: 6, type: 'maple', left: '92%', delay: '6s', duration: '19s', size: 10, drift: 22 },
  { id: 7, type: 'sakura', left: '88%', delay: '10s', duration: '17s', size: 12, drift: -32 },
  { id: 8, type: 'ginkgo', left: '94%', delay: '13s', duration: '21s', size: 9, drift: 18 },
];

export default function JapaneseZenEffects() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0" 
      aria-hidden="true"
    >
      {/* 1. TOP-LEFT CORNER: ZEN WATER RIPPLES */}
      <div className="absolute -top-16 -left-16 w-64 h-64 flex items-center justify-center opacity-60">
        <div className="absolute w-24 h-24 rounded-full border border-[#161514]/[0.05] animate-zen-ripple" style={{ animationDelay: '0s' }} />
        <div className="absolute w-40 h-40 rounded-full border border-[#161514]/[0.04] animate-zen-ripple" style={{ animationDelay: '2.5s' }} />
        <div className="absolute w-56 h-56 rounded-full border border-[#161514]/[0.03] animate-zen-ripple" style={{ animationDelay: '5s' }} />
      </div>

      {/* 2. BOTTOM-RIGHT CORNER: ZEN WATER RIPPLES */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 flex items-center justify-center opacity-50">
        <div className="absolute w-28 h-28 rounded-full border border-[#C28838]/[0.06] animate-zen-ripple" style={{ animationDelay: '1.2s' }} />
        <div className="absolute w-48 h-48 rounded-full border border-[#C28838]/[0.05] animate-zen-ripple" style={{ animationDelay: '3.8s' }} />
        <div className="absolute w-64 h-64 rounded-full border border-[#C28838]/[0.03] animate-zen-ripple" style={{ animationDelay: '6.4s' }} />
      </div>

      {/* 3. DRIFTING JAPANESE PETALS (HANAFUBUKI) */}
      <div className="absolute inset-0">
        {PETALS.map((petal) => (
          <div
            key={petal.id}
            className="absolute top-[-40px] animate-petal-fall"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              '--drift-x': `${petal.drift}px`,
            }}
          >
            <div 
              className="animate-petal-tumble"
              style={{
                width: `${petal.size}px`,
                height: `${petal.size * 1.25}px`,
                animationDuration: `${parseFloat(petal.duration) * 0.45}s`,
              }}
            >
              {petal.type === 'sakura' && (
                <svg viewBox="0 0 20 26" className="w-full h-full fill-[#F49BB2] opacity-75 drop-shadow-[0_1px_3px_rgba(244,155,178,0.25)]">
                  <path d="M10 0 C16 4, 20 12, 17 20 C14 26, 6 26, 3 20 C0 12, 4 4, 10 0 Z" />
                </svg>
              )}
              {petal.type === 'maple' && (
                <svg viewBox="0 0 24 24" className="w-full h-full fill-[#D84333] opacity-75 drop-shadow-[0_1px_3px_rgba(216,67,51,0.2)]">
                  <path d="M12 2 L13.5 8 L18 6 L15 11 L20 13 L14 15 L15 20 L12 16 L9 20 L10 15 L4 13 L9 11 L6 6 L10.5 8 Z" />
                </svg>
              )}
              {petal.type === 'ginkgo' && (
                <svg viewBox="0 0 24 22" className="w-full h-full fill-[#E5B539] opacity-70 drop-shadow-[0_1px_3px_rgba(229,181,57,0.2)]">
                  <path d="M12 21 C12 18, 11 14, 2 8 C8 2, 16 2, 22 8 C13 14, 12 18, 12 21 Z" />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

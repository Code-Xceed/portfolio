import React from 'react';

/**
 * BotanicalBorders Component
 * Minimalist Japanese 2D Anime Cel-Art Branches:
 * 1. LEFT: Slender Japanese Momiji Maple (vermilion autumn leaves)
 * 2. TOP RIGHT: Japanese Sakura Cherry Blossom (vivid pink petals & spring buds)
 * 3. LOWER RIGHT: Japanese Golden Ginkgo / Icho (radiant golden fan leaves)
 *
 * Micro-animations:
 * - Multi-frequency harmonic sway keyframes
 * - Isolated transparent alpha channels with subtle warm halos
 * - Zero hard cuts, zero scrollbar bugs, calibrated for desktop & mobile
 */
export default function BotanicalBorders() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0" 
      aria-hidden="true"
    >
      {/* 1. LEFT: SLENDER JAPANESE MOMIJI MAPLE BRANCH */}
      <div className="absolute -left-8 sm:left-0 top-1 sm:top-[22%] pointer-events-none">
        <div className="relative animate-foliage-left">
          {/* Subtle Japanese warm aura behind branch */}
          <div className="absolute -top-10 -left-10 w-36 sm:w-48 h-36 sm:h-48 rounded-full bg-radial from-amber-200/20 via-rose-100/10 to-transparent blur-2xl -z-10" />
          
          <img
            src="/japanese-left.png"
            alt=""
            className="w-28 sm:w-52 md:w-64 lg:w-72 h-auto object-contain opacity-30 sm:opacity-90 drop-shadow-[0_4px_16px_rgba(180,50,40,0.06)]"
            loading="eager"
          />
        </div>
      </div>

      {/* 2. TOP RIGHT: DELICATE JAPANESE SAKURA CHERRY BLOSSOM TWIG */}
      <div className="absolute -right-8 sm:right-0 -top-4 sm:top-0 pointer-events-none">
        <div className="relative animate-foliage-right">
          {/* Subtle Japanese spring aura behind blossom */}
          <div className="absolute -top-8 -right-8 w-36 sm:w-48 h-36 sm:h-48 rounded-full bg-radial from-rose-200/20 via-amber-100/10 to-transparent blur-2xl -z-10" />

          <img
            src="/japanese-right.png"
            alt=""
            className="w-28 sm:w-48 md:w-60 lg:w-68 h-auto object-contain opacity-30 sm:opacity-90 drop-shadow-[0_4px_16px_rgba(220,100,120,0.06)]"
            loading="eager"
          />
        </div>
      </div>

      {/* 3. LOWER RIGHT: JAPANESE GOLDEN GINKGO (ICHO) BRANCH */}
      <div className="absolute -right-6 sm:right-0 bottom-[6%] sm:bottom-[10%] pointer-events-none">
        <div className="relative animate-foliage-ginkgo">
          {/* Subtle Golden autumn aura behind ginkgo */}
          <div className="absolute -bottom-8 -right-8 w-40 sm:w-52 h-40 sm:h-52 rounded-full bg-radial from-amber-300/25 via-yellow-100/15 to-transparent blur-2xl -z-10" />

          <img
            src="/japanese-right-lower.png"
            alt=""
            className="w-28 sm:w-44 md:w-56 lg:w-64 h-auto object-contain opacity-30 sm:opacity-90 drop-shadow-[0_4px_16px_rgba(220,160,40,0.06)]"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}

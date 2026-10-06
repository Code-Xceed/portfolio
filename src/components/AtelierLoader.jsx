import React, { useEffect, useState, useMemo } from 'react';
import soundManager from '../lib/soundManager';
import { preloadAllSiteAssets } from '../lib/assetPreloader';

// Curated philosophical & calming atelier quotes with bespoke highlight segments
const ATELIER_QUOTES = [
  {
    quote: 'In the space between ink and water, eternity breathes.',
    highlight: 'eternity breathes',
    author: 'Kyoto Zen Painting Treatise',
    period: 'Circa 1480',
  },
  {
    quote: 'Art is not what you see, but what you make others see.',
    highlight: 'what you make others see',
    author: 'Edgar Degas',
    period: 'Paris Atelier, 1884',
  },
  {
    quote: 'Nature does not hurry, yet everything is accomplished.',
    highlight: 'everything is accomplished',
    author: 'Lao Tzu',
    period: 'Tao Te Ching',
  },
  {
    quote: 'Simplicity is about subtracting the obvious and adding the meaningful.',
    highlight: 'adding the meaningful',
    author: 'John Maeda',
    period: 'The Laws of Simplicity',
  },
  {
    quote: 'Digital matter, when touched with reverie, becomes as warm as handmade paper.',
    highlight: 'warm as handmade paper',
    author: 'Aditya Rathore',
    period: 'Digital Monograph Studio',
  },
  {
    quote: 'To create something new, one must first learn the patience of stone.',
    highlight: 'the patience of stone',
    author: 'Isamu Noguchi',
    period: 'Sculptural Journal, 1968',
  },
  {
    quote: 'The details are not the details. They make the design.',
    highlight: 'They make the design',
    author: 'Charles Eames',
    period: 'Atelier Philosophy',
  },
  {
    quote: 'Stillness is not the absence of motion, but the presence of depth.',
    highlight: 'presence of depth',
    author: 'Studio Monograph',
    period: 'Paris — Tokyo',
  },
];

export default function AtelierLoader({ onLoaded }) {
  // Pick random quote once per session
  const quoteData = useMemo(() => {
    const idx = Math.floor(Math.random() * ATELIER_QUOTES.length);
    return ATELIER_QUOTES[idx];
  }, []);

  const [isFading, setIsFading] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isCancelled = false;

    async function preprocessAndLoadEverything() {
      const startTime = performance.now();
      const minDuration = 1400; // serene atelier presentation

      // 1. Preload & GPU-decode every critical high-res texture, 3D book logo, font, audio, and all 10 videos into RAM
      await preloadAllSiteAssets((p) => {
        if (!isCancelled) {
          setProgress(p);
        }
      });

      // 2. Ensure minimum duration has also passed
      const elapsed = performance.now() - startTime;
      if (elapsed < minDuration) {
        await new Promise((resolve) => setTimeout(resolve, minDuration - elapsed));
      }

      // 3. Guarantee that the browser paints the underlying WebGL & canvas pipeline
      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve);
        });
      });

      if (isCancelled) return;

      // 4. Assets and underlying scene are 100% ready — unlock audio and trigger immediate crossfade
      soundManager.unlock();
      setIsFading(true);
      onLoaded?.();

      setTimeout(() => {
        if (!isCancelled) {
          setIsRemoved(true);
        }
      }, 950);
    }

    preprocessAndLoadEverything();

    return () => {
      isCancelled = true;
    };
  }, [onLoaded]);

  if (isRemoved) return null;

  const { quote, author } = quoteData;

  return (
    <div
      role="status"
      aria-live="polite"
      onPointerDown={() => soundManager.unlock()}
      onClick={() => soundManager.unlock()}
      className={`fixed inset-0 z-50 flex items-center justify-center px-6 sm:px-12 select-none overflow-hidden bg-[#FBF9F5] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isFading
          ? 'opacity-0 scale-[1.03] pointer-events-none'
          : 'opacity-100 scale-100 pointer-events-auto'
      }`}
    >
      {/* Microscopic Linen Canvas Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] linen-texture"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* Gentle Breathing Warm Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background:
            'radial-gradient(ellipse 70vw 60vh at 50% 50%, rgba(223, 186, 90, 0.15) 0%, rgba(247, 241, 230, 0.45) 45%, transparent 75%)',
        }}
      />

      {/* ===================================================================== */}
      {/* PURE MINIMAL CENTER CLUSTER: LOADING SHINE & QUOTE WITH AUTHOR         */}
      {/* ===================================================================== */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[620px] w-full px-4">
        {/* Animated "Loading Experience" with Liquid Gold Shimmer */}
        <h1 className="animate-shimmer-text font-cinzel text-[clamp(13px,2vw,17px)] tracking-[0.38em] uppercase font-medium select-none">
          Loading Experience
        </h1>

        {/* Minimal Curated Quote & Author */}
        <blockquote className="w-full mt-7 sm:mt-9">
          <p className="font-bodoni font-light text-[#151413] text-[clamp(1.15rem,3.2vw,1.85rem)] leading-[1.44] tracking-[-0.015em] max-w-[560px] mx-auto">
            {quote}
          </p>

          <footer className="mt-4 sm:mt-5 text-center">
            <span className="font-cinzel text-[11px] sm:text-[12px] tracking-[0.24em] uppercase font-semibold text-[#8C6422]">
              {author}
            </span>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import BotanicalBorders from './components/BotanicalBorders';
import JapaneseZenEffects from './components/JapaneseZenEffects';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FAFAF8] text-[#161514] font-sans selection:bg-[#EAE5D9] selection:text-[#161514] overflow-x-hidden">
      {/* 1. Japanese Zen Background Atmosphere (Corner ripples & drifting petals) */}
      <JapaneseZenEffects />

      {/* 2. Japanese 2D Cel-Art Botanical Branches (Momiji, Sakura & Ginkgo) */}
      <BotanicalBorders />

      {/* 3. Tactile Japanese Paper Micro-Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 paper-texture opacity-90"
        aria-hidden="true"
      />

      {/* 4. Main Content Flow */}
      <main className="relative z-10 w-full flex flex-col items-center">
        {/* Step 1: Hero Section */}
        <Hero onExploreClick={handleExploreClick} />

        {/* Step 2: Selected Works / Projects Section */}
        <SelectedWorks />
      </main>

      {/* 5. Floating Zen Quick-Nav / Back-to-Top Indicator */}
      <button
        type="button"
        onClick={handleScrollToTop}
        className={`pressable fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/90 hover:bg-white text-[#161514] border border-stone-200/80 shadow-[0_4px_16px_rgba(22,21,20,0.08)] backdrop-blur-md text-[11.5px] font-mono transition-all duration-300 ease-out cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top of page"
      >
        <ArrowUp className="w-3.5 h-3.5 text-[#161514]" />
        <span className="text-[11px] font-medium tracking-tight">Top</span>
      </button>
    </div>
  );
}
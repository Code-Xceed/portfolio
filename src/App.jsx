import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import InterestsExperience from './components/InterestsExperience';
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

        {/* Step 3: Interests and Experience Section */}
        <InterestsExperience />
      </main>

      {/* 5. Floating Zen Quick-Nav / Back-to-Top Indicator (Compact circle on mobile, text pill on desktop) */}
      <button
        type="button"
        onClick={handleScrollToTop}
        className={`pressable fixed bottom-4 right-4 sm:bottom-7 sm:right-7 z-40 flex items-center justify-center sm:gap-1.5 w-9 h-9 sm:w-auto sm:h-auto p-2 sm:px-3 sm:py-2 rounded-full bg-white/95 hover:bg-white text-[#161514] border border-stone-200/90 shadow-[0_4px_16px_rgba(22,21,20,0.1)] backdrop-blur-md text-[11.5px] font-mono transition-all duration-300 ease-out cursor-pointer active:scale-95 ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top of page"
      >
        <ArrowUp className="w-3.5 h-3.5 text-[#161514] shrink-0" />
        <span className="hidden sm:inline text-[11px] font-medium tracking-tight">Top</span>
      </button>
    </div>
  );
}
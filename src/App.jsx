import React from 'react';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import InterestsExperience from './components/InterestsExperience';
import Footer from './components/Footer';
import BotanicalBorders from './components/BotanicalBorders';
import JapaneseZenEffects from './components/JapaneseZenEffects';

export default function App() {
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
    <div className="relative min-h-screen w-full bg-[#FAFAF8] text-[#161514] font-sans selection:bg-[#EAE5D9] selection:text-[#161514] overflow-x-hidden flex flex-col justify-between">
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
      <main className="relative z-10 w-full flex-1 flex flex-col items-center">
        {/* Step 1: Hero Section */}
        <Hero onExploreClick={handleExploreClick} />

        {/* Step 2: Selected Works / Projects Section */}
        <SelectedWorks />

        {/* Step 3: Interests and Experience Section */}
        <InterestsExperience />
      </main>

      {/* Step 4: Ultra-Minimal Single-Row Zen Footer (Positioned to the very bottom with refined margin) */}
      <Footer onScrollToTop={handleScrollToTop} />
    </div>
  );
}
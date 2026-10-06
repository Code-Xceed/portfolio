import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import GallerySection from './components/GallerySection';
import BooksShowcase from './components/BooksShowcase';
import CustomCursor from './components/CustomCursor';
import CinematicFullpage from './components/CinematicFullpage';
import AtelierLoader from './components/AtelierLoader';
import SfxToggle from './components/SfxToggle';
import { MONOGRAPHS_DATA } from './data/monographsData';
import soundManager from './lib/soundManager';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const cleanup = soundManager.initGlobalListeners();
    return () => cleanup?.();
  }, []);

  const handleLoaded = () => {
    setLoaded(true);
    soundManager.startBgMusic();
  };

  return (
    <div className="relative w-full h-[100svh] overflow-hidden bg-[#FBF9F5] text-[#151413] selection:bg-[#C79238] selection:text-white">
      {/* Atmospheric Atelier Preloader */}
      <AtelierLoader onLoaded={handleLoaded} />

      {/* Top-Left: Master Audio Controller Seal (Controls all sound on website, including background loop) */}
      <SfxToggle />

      {/* Microscopic Linen / Canvas Weave Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 opacity-[0.035] linen-texture"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* Custom Artisanal Crumpled Paper Cursor (Default & Interactive Pointer) */}
      <CustomCursor />

      {/* Fullpage Cinematic Zoom Experience */}
      <CinematicFullpage
        enabled={loaded}
        sections={[
          ({ nextSection, active }) => (
            <Hero onNavigateToPublications={nextSection} active={active} />
          ),
          ({ nextSection, prevSection, active }) => (
            <GallerySection 
              active={active}
              onNext={nextSection} 
              onPrev={prevSection} 
            />
          ),
          ({ prevSection }) => (
            <section id="publications" className="relative w-full h-full bg-[#FBF9F5]">
              <BooksShowcase 
                books={MONOGRAPHS_DATA}
                heroTitle="Projects"
                navTitle="PROJECTS · ÉDITIONS D'ATELIER"
                onNavigateBack={prevSection}
              />
            </section>
          ),
        ]}
      />
    </div>
  );
}

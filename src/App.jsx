import React, { useEffect, useCallback } from 'react';
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
  useEffect(() => {
    const cleanup = soundManager.initGlobalListeners();
    return () => cleanup?.();
  }, []);

  // Stable identity — AtelierLoader's effect depends on this callback, so a fresh
  // function on each render would tear the effect down and re-run the entire preload
  // (and its 1400 ms gate) the instant loading finished, which swallowed the loader's
  // own fade-out timeout and left the score arriving a second and a half late.
  const handleLoaded = useCallback(() => {
    soundManager.startBgMusic();
  }, []);

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
        sections={[
          ({ nextSection, active }) => (
            <Hero onNavigateToPublications={nextSection} active={active} />
          ),
          ({ nextSection, active }) => (
            <GallerySection 
              active={active}
              onNext={nextSection} 
            />
          ),
          ({ prevSection }) => (
            <section id="publications" className="relative w-full h-full bg-[#FBF9F5]">
              <BooksShowcase 
                books={MONOGRAPHS_DATA}
                heroTitle="Projects"
                onNavigateBack={prevSection}
              />
            </section>
          ),
        ]}
      />
    </div>
  );
}

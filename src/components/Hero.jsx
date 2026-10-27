import React from 'react';
import { 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import ContactDealButton from './ContactDealButton';
import HeroPortraitCard from './HeroPortraitCard';
import HeroSkillsShelf from './HeroSkillsShelf';

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    handle: '@Code-Xceed',
    url: 'https://github.com/Code-Xceed',
    icon: (
      <svg className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'aditya-rathore',
    url: 'https://www.linkedin.com/in/aditya-rathore-110125385',
    icon: (
      <svg className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5H0v14h5V8zm7.982 0H8.014v14h4.969v-7.399c0-4.07 5.253-4.405 5.253 0V22H23.2v-8.878c0-6.91-7.447-6.666-10.218-3.256V8z" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    handle: 'codexceed',
    url: 'https://discord.com/users/codexceed',
    icon: (
      <svg className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@aditya.13201',
    url: 'https://www.instagram.com/aditya.13201/',
    icon: (
      <svg className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
];

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-16 pb-4 sm:pt-24 sm:pb-6 px-6 sm:px-8 max-w-3xl mx-auto">
      {/* Subtle Ambient Light Bloom */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] sm:w-[520px] h-[340px] sm:h-[440px] rounded-full ambient-glow blur-3xl opacity-80 z-0"
        aria-hidden="true"
      />

      {/* CENTER HERO CORE: Pure Minimalist Typography & Portrait */}
      <div className="relative z-10 my-auto py-6 sm:py-10 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 w-full">
        
        {/* LEFT COLUMN: Identity, Manifesto & Interactive Action Bar */}
        <div className="flex-1 flex flex-col items-start text-left w-full">
          
          {/* Main Title Row (With Mobile Portrait Integration) */}
          <div className="w-full flex items-start justify-between gap-4 animate-fade-in-up" style={{ animationDelay: '80ms' }}>
            <div className="space-y-2">
              <h1 className="text-[38px] sm:text-5xl md:text-[56px] font-bold text-[#161514] tracking-[-0.035em] leading-[1.04]">
                Aditya Rathore
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium text-[#57534E] tracking-[-0.015em]">
                Full-Stack Developer &amp; Creative Engineer
              </p>
            </div>

            {/* Mobile-Only Compact Portrait Card (Hidden on md+) */}
            <div className="md:hidden shrink-0">
              <HeroPortraitCard compact={true} />
            </div>
          </div>

          {/* Manifesto / Hook */}
          <p 
            className="mt-6 sm:mt-7 max-w-lg text-[15px] sm:text-[16.5px] leading-[1.7] text-[#57534E] font-normal animate-fade-in-up"
            style={{ animationDelay: '160ms' }}
          >
            Obsessed with building scalable web products, developer utilities, and high-craft interfaces with relentless attention to speed, feel, and simplicity.
          </p>

          {/* ACTIONS & SOCIALS: Fixed-size Morphing Contact Button */}
          <div 
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 animate-fade-in-up"
            style={{ animationDelay: '240ms' }}
          >
            {/* Interactive Deal Handshake Button with Hover Meme Thumbnail */}
            <ContactDealButton />

            {/* Social Icons Strip (Height matched to h-11) */}
            <div className="h-11 flex items-center gap-1 px-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[rgba(22,21,20,0.06)] shadow-[0_2px_8px_rgba(22,21,20,0.02)]">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable group relative p-2 rounded-full text-[#57534E] hover:text-[#161514] hover:bg-black/[0.04] transition-colors inline-flex items-center justify-center"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Core Technical Capabilities Shelf */}
          <HeroSkillsShelf />
        </div>

        {/* RIGHT COLUMN: Desktop Museum-Grade Tactile Portrait Plate (Uplifted & Compact) */}
        <div 
          className="hidden md:block relative shrink-0 pt-1 md:pt-1.5 animate-fade-in-up"
          style={{ animationDelay: '140ms' }}
        >
          <HeroPortraitCard />
        </div>

      </div>

      {/* BOTTOM FOOTER CUE */}
      <footer className="relative z-10 w-full flex items-center justify-between text-xs text-[#8C867E] font-mono border-t border-[rgba(22,21,20,0.06)] pt-4 animate-fade-in-up" style={{ animationDelay: '320ms' }}>
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500/80" />
          <span>17 months of shipping</span>
        </span>

        {onExploreClick && (
          <button
            type="button"
            onClick={onExploreClick}
            className="pressable group inline-flex items-center gap-1 text-[#57534E] hover:text-[#161514] cursor-pointer"
          >
            <span>Selected Works</span>
            <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>
        )}
      </footer>
    </section>
  );
}

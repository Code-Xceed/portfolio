import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { POSTS } from './blogPosts.js';

/**
 * PostPage
 *
 * Minimal Japanese Zen blog view:
 * - Edge-to-edge custom watercolor illustration (desktop wide + mobile portrait)
 * - Tactile Japanese washi paper texture
 * - Restrained typography and buttery-smooth navigation
 */

export default function PostPage({ post, onNavigate }) {
  const handleBack = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    } else {
      window.location.href = '/';
    }
  };

  const handleSelectPost = (href, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <div
      className="post-page text-[#161514] font-sans selection:bg-[#EAE5D9] selection:text-[#161514] transition-colors duration-300 ease-out"
      style={{ backgroundColor: post.paper }}
    >
      {/* 1. Responsive Watercolor Desk Artwork with Seamless GPU Crossfade */}
      <div className="post-art" aria-hidden="true">
        {POSTS.map((item) => {
          const isCurrent = item.id === post.id;
          return (
            <picture
              key={item.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-out pointer-events-none ${
                isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <source media="(max-aspect-ratio: 1/1)" srcSet={item.mobileArt} />
              <source media="(max-width: 640px)" srcSet={item.mobileArt} />
              <img
                src={item.art}
                alt=""
                decoding="async"
                className="w-full h-full object-cover object-bottom"
              />
            </picture>
          );
        })}
      </div>

      {/* 2. Soft paper wash so header marks stay crisp */}
      <div
        className="post-scrim transition-all duration-300"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${post.paper} 0%, ${post.paper}e6 35%, transparent 100%)`,
        }}
      />

      {/* 3. Tactile Japanese paper micro-texture */}
      <div
        className="fixed inset-0 pointer-events-none z-30 paper-texture opacity-90"
        aria-hidden="true"
      />

      {/* 4. Minimalist Header Navigation */}
      <header className="relative z-20 w-full max-w-[860px] mx-auto px-5 sm:px-8 pt-6 sm:pt-10 select-none">
        <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#8C867E]">
          <a
            href="/"
            onClick={handleBack}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 -ml-2 rounded-lg text-[#57534E] hover:text-[#161514] hover:bg-black/[0.04] active:scale-95 transition-all duration-150 cursor-pointer touch-manipulation"
            aria-label="Back to home page"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-stone-400 group-hover:-translate-x-0.5 transition-transform duration-150" />
            <span>Back</span>
          </a>

          {/* Discreet Blog Switcher: Refined Segmented Control */}
          <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-black/[0.04] backdrop-blur-xs">
            {POSTS.map((item) => {
              const isActive = item.id === post.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={(e) => handleSelectPost(item.href, e)}
                  className={`pressable px-2.5 py-1 rounded-md text-[11px] font-mono transition-all duration-200 cursor-pointer select-none touch-manipulation ${
                    isActive
                      ? 'bg-white text-[#161514] font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
                      : 'text-[#78716C] hover:text-[#161514] hover:bg-white/40'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  blog#{item.number}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* 5. Minimal Center Focus (Zen Ma / 間) */}
      <main
        key={post.id}
        className="relative z-20 w-full max-w-[720px] mx-auto px-6 sm:px-8 mt-12 sm:mt-20 flex flex-col items-center text-center select-none animate-fade-in-up"
        style={{ animationDuration: '280ms' }}
      >
        <span className="text-[10.5px] sm:text-[11px] font-mono text-[#8C867E] tracking-wider uppercase mb-2">
          {post.date} · {post.readTime}
        </span>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#161514]">
          {post.title}
        </h1>
      </main>
    </div>
  );
}

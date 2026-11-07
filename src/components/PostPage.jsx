import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
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

  const isBlog1 = post.id === 'how-i-started';

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
          backgroundImage: `linear-gradient(to bottom, ${post.paper} 0%, ${post.paper}f0 40%, transparent 100%)`,
        }}
      />

      {/* 3. Tactile Japanese paper micro-texture */}
      <div
        className="fixed inset-0 pointer-events-none z-30 paper-texture opacity-90"
        aria-hidden="true"
      />

      {/* 4. Minimalist Sticky Header Navigation */}
      <header 
        className="sticky top-0 z-40 w-full max-w-[860px] mx-auto px-5 sm:px-8 pt-5 sm:pt-7 pb-4 select-none backdrop-blur-md transition-colors"
        style={{
          backgroundColor: `${post.paper}e6`,
          maskImage: 'linear-gradient(to bottom, black calc(100% - 14px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black calc(100% - 14px), transparent 100%)',
        }}
      >
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

      {/* 5. Article Content & Layout */}
      <main
        key={post.id}
        className="relative z-20 w-full max-w-[700px] mx-auto px-6 sm:px-10 py-6 sm:py-10 my-3 sm:my-6 rounded-3xl bg-[#F6EDE6]/80 backdrop-blur-xs border border-stone-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.02)] flex flex-col animate-fade-in"
        style={{ animationDuration: '300ms' }}
      >
        {/* Article Meta Header */}
        <div className="mb-8 sm:mb-12 border-b border-stone-200/60 pb-6 sm:pb-8">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#8C867E] tracking-wider uppercase mb-2.5">
            <span>#{post.number}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#161514] leading-[1.25]">
            {post.title}
          </h1>
        </div>

        {/* Story Body */}
        {isBlog1 ? (
          <article className="prose-clean text-[15px] sm:text-[16px] leading-[1.8] text-[#2B2927] space-y-5">
            <p className="text-[15.5px] sm:text-[16.5px] text-[#1E1D1B] font-normal leading-[1.75]">
              I don't wanna make this something like those movies where the main character says,{' '}
              <em className="text-[#161514] italic">
                &ldquo;Ever since I was a kid, I was always curious about technology...&rdquo;
              </em>{' '}
              and then proceeds to build a fucking rocket at the age of 8.
            </p>

            <p className="font-medium text-[#161514]">
              Nah, that's not my story.
            </p>

            <p>
              When I was a kid, I just had an interest in building things, like any regular kid. Opening electrical stuff, motors, wires, lights, and trying to understand how they worked. I had a little knowledge about these things too.
            </p>

            <p className="text-[#57534E] italic font-medium">
              Now, how did I get that knowledge?
            </p>

            <p>
              My father is an all-rounder. He's a civil worker, but he can do pretty much everything. Plumbing, carpentry, electrical work, you name it. Whenever he was working, I'd be standing nearby, helping him with whatever I could. That's basically how I learned a few things.
            </p>

            <div className="py-1">
              <div className="w-12 h-[1px] bg-stone-300/80 my-4" />
            </div>

            <p>
              Then, when I was around 11, I got my first laptop.
            </p>

            <p>
              And honestly, I thought I'd never really use it that much. But as time passed, I started getting interested in it.
            </p>

            <p>
              I used to play games like Candy Crush, Asphalt 8, and Hill Climb Racing. And I still remember the first software I downloaded was VLC Media Player.
            </p>

            <p className="font-semibold text-[#161514] tracking-tight">
              Truly goated.
            </p>

            <p>
              Then the interest started building up, and I discovered coding.
            </p>

            <p>
              Not because I was thinking about how apps were built or anything like that. Nah, I just wanted to look cool in my class.
            </p>

            <p>
              Back then, there was this app called WhiteHat Jr, and their ads kept showing up on my laptop. So I got curious and decided to find out what coding actually was.
            </p>

            <p className="font-mono text-[13.5px] text-stone-500">
              This was when I was in 9th grade, around 12 years old.
            </p>

            <p>
              The first coding lecture I watched was by Shradha Khapra. And yeah, I had a crush on her back then. Don't judge me.
            </p>

            <p>
              I watched her web development video and learned HTML and CSS. I built a few websites and even a Tic Tac Toe game.
            </p>

            {/* Clickable Tic Tac Toe Link */}
            <div className="my-3">
              <a
                href="https://codexceedtct.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group pressable inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900/5 hover:bg-stone-900/10 border border-stone-300/80 text-[13.5px] font-medium text-[#161514] shadow-2xs hover:border-stone-400 transition-all duration-150 active:scale-95"
              >
                <span>Check out my Tic Tac Toe game</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </a>
            </div>

            <p>
              Well, I basically copied the whole code from the lecture. But hey, everyone starts somewhere.
            </p>

            <p>
              I just kept exploring after that. Later, I learned JavaScript too.
            </p>

            <p className="text-stone-600">
              The first proper website I made was:
            </p>

            {/* Clickable GixelMC Link */}
            <div className="my-2">
              <a
                href="https://gixelmc.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group pressable inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900/5 hover:bg-stone-900/10 border border-stone-300/80 font-mono text-[13px] text-[#161514] shadow-2xs hover:border-stone-400 transition-all duration-150 active:scale-95"
              >
                <span>https://gixelmc.netlify.app/</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </a>
            </div>

            <p>
              This was around the time I started playing Minecraft on my laptop. I mean, I had played Minecraft before, but then I switched to playing it on my own laptop.
            </p>

            <p className="p-3 rounded-xl bg-stone-900/[0.03] border border-stone-200/80 text-[13.5px] font-mono text-stone-600 leading-relaxed">
              Btw, that laptop had some Intel Pentium processor, 4GB of RAM, and 128MB of shared graphics memory. Not exactly a beast, but it did the job.
            </p>

            <p>
              I used to play A LOT of Minecraft back then.
            </p>

            <p>
              And man, I had so many friends on Discord. Playing all day after school, joining SMPs, hanging out with people online.
            </p>

            <p className="italic text-[#161514]">
              Oh my lord, I still remember those days.
            </p>

            <p className="font-semibold text-[#161514] tracking-tight">
              Those were the days.
            </p>

            <p>
              And somewhere along the way, my interest in coding kept growing. I started exploring more things, learning new stuff, and building whatever I could.
            </p>

            <p className="text-stone-600">
              I still play Minecraft, btw.
            </p>

            <div className="py-1">
              <div className="w-12 h-[1px] bg-stone-300/80 my-4" />
            </div>

            <p className="font-medium text-[#161514]">
              So yeah, that's pretty much how I started.
            </p>

            <p>
              I really like my journey so far. I'm still learning, still improving, and still trying to figure things out.
            </p>

            <p className="text-[#57534E]">
              Although, I'm kinda stuck these days. But I'll find a way out. That's just how it goes, I guess.
            </p>

            <p>
              And if you've read this whole thing and wanna connect with me, hop onto my Discord. We can chat.
            </p>

            {/* Clickable Discord Redirect Button (Exact user requirement) */}
            <div className="pt-3 pb-2">
              <a
                href="https://discord.com/users/codexceed"
                target="_blank"
                rel="noopener noreferrer"
                className="group pressable inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium text-[13.5px] shadow-[0_2px_10px_rgba(88,101,242,0.22)] hover:shadow-[0_4px_16px_rgba(88,101,242,0.32)] transition-all duration-200 active:scale-95 select-none"
                aria-label="Connect with me on Discord"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span>Connect with me on Discord</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </a>
            </div>

            <p className="pt-2 font-medium text-[#161514]">
              See ya.
            </p>
          </article>
        ) : (
          /* Blog 2 Placeholder */
          <div className="py-12 flex flex-col items-center justify-center text-center text-stone-500 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-stone-400">
              Note in progress
            </span>
            <p className="text-sm max-w-sm">
              Reflections on finding client zero, pitch psychology, and delivering the first paid creative project.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

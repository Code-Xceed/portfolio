import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

/**
 * Ultra-minimal, non-generic Zen footer task bar.
 * Expansive width with generous center breathing room (Ma),
 * and precision micro-interactions.
 */
export default function Footer({ onScrollToTop }) {
  return (
    <footer className="relative z-10 w-full max-w-[860px] mx-auto px-6 sm:px-8 mt-auto pt-4 sm:pt-6 pb-6 sm:pb-8">
      {/* 1px Minimal Divider Line with generous breathing room */}
      <div className="w-full border-t border-[rgba(22,21,20,0.08)] pt-4 sm:pt-5">
        
        {/* DESKTOP & TABLET VIEW (sm and up): Expansive single-row task bar with wide center Ma */}
        <div className="hidden sm:flex items-center justify-between text-xs font-mono text-[#8C867E]">
          {/* Left: Identity – Built with Vibe & Code (No green dot as requested) */}
          <div className="flex items-center gap-2 select-none shrink-0">
            {/* Identity */}
            <span className="font-sans font-medium text-[#161514] tracking-tight text-[12.5px] sm:text-[13px]">
              Aditya Rathore
            </span>

            <span className="text-stone-300 font-normal select-none">–</span>

            {/* Philosophy mark */}
            <span className="text-stone-500 tracking-tight font-mono text-[11.5px] sm:text-[12px]">
              Built with Vibe &amp; Code
            </span>
          </div>

          {/* Generous Center Space (Ma / 間) naturally formed by max-w-[860px] and justify-between */}

          {/* Right: Discreet Tactile Links & Back to Top */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-stone-500 select-none shrink-0">
            <a
              href="https://github.com/Code-Xceed"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link pressable inline-flex items-center gap-1 px-1.5 py-0.5 rounded hover:text-[#161514] hover:bg-black/[0.035] transition-all duration-150"
              title="GitHub profile"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-150" />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-rathore-110125385"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link pressable inline-flex items-center gap-1 px-1.5 py-0.5 rounded hover:text-[#161514] hover:bg-black/[0.035] transition-all duration-150"
              title="LinkedIn profile"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-150" />
            </a>

            {onScrollToTop && (
              <button
                type="button"
                onClick={onScrollToTop}
                className="group/top pressable inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[#57534E] hover:text-[#161514] hover:bg-black/[0.035] transition-all duration-150 cursor-pointer active:scale-95"
                aria-label="Scroll to top of page"
              >
                <span>Top</span>
                <ArrowUp className="w-3 h-3 opacity-60 group-hover/top:-translate-y-0.5 transition-transform duration-150" />
              </button>
            )}
          </div>
        </div>

        {/* MOBILE VIEW (< sm): Perfectly balanced, never squished or clipped */}
        <div className="flex sm:hidden flex-col gap-2.5 text-[11px] font-mono text-[#8C867E]">
          {/* Mobile Top Row: Identity – Built with Vibe & Code (No green dot) */}
          <div className="flex items-center justify-between select-none">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="font-sans font-medium text-[#161514] tracking-tight text-[12px] truncate">
                Aditya Rathore
              </span>
              <span className="text-stone-300 font-normal select-none">–</span>
              <span className="text-stone-500 tracking-tight text-[10.5px] truncate">
                Built with Vibe &amp; Code
              </span>
            </div>
          </div>

          {/* Mobile Bottom Row: Clean tactile action links */}
          <div className="flex items-center justify-between text-stone-500 select-none pt-0.5">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Code-Xceed"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1 py-0.5 hover:text-[#161514] transition-colors duration-150 active:scale-95"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-50" />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-rathore-110125385"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1 py-0.5 hover:text-[#161514] transition-colors duration-150 active:scale-95"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-50" />
              </a>
            </div>

            {onScrollToTop && (
              <button
                type="button"
                onClick={onScrollToTop}
                className="group/top inline-flex items-center gap-1 py-0.5 text-[#57534E] hover:text-[#161514] transition-colors duration-150 active:scale-95 cursor-pointer"
                aria-label="Scroll to top of page"
              >
                <span>Top</span>
                <ArrowUp className="w-3 h-3 opacity-60" />
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}

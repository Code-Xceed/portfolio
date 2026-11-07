import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import InterestsExperience from './components/InterestsExperience';
import Footer from './components/Footer';
import BotanicalBorders from './components/BotanicalBorders';
import JapaneseZenEffects from './components/JapaneseZenEffects';
import PostPage from './components/PostPage';
import MinecraftExplorePage from './components/MinecraftExplorePage';
import VideoEditingExplorePage from './components/VideoEditingExplorePage';
import { POSTS, postFromPath } from './components/blogPosts';

/**
 * Universal Route Resolver: Maps pathnames to blogs or dedicated explore sheets
 */
export function resolveRoute(path) {
  if (!path || path === '/' || path === '') return null;
  const clean = path.toLowerCase().replace(/\/+$/, '') + '/';

  if (clean.includes('/interests/minecraft') || clean === '/minecraft/') {
    return {
      type: 'minecraft',
      path: '/interests/minecraft/',
      paper: '#F7F3EC',
    };
  }

  if (clean.includes('/interests/video-editing') || clean.includes('/video-editing') || clean === '/video/') {
    return {
      type: 'video',
      path: '/interests/video-editing/',
      paper: '#F7F3EC',
    };
  }

  const post = postFromPath(path);
  if (post) {
    return {
      type: 'blog',
      path: post.href || post.link,
      post,
      paper: post.paper,
    };
  }

  return null;
}

export default function App() {
  const initialRoute = resolveRoute(window.location.pathname);
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const [activeRoute, setActiveRoute] = useState(() => initialRoute);
  const [sheetState, setSheetState] = useState(() => (initialRoute ? 'active' : 'idle'));
  const [isSheetMounted, setIsSheetMounted] = useState(() => Boolean(initialRoute));
  const [isPageMounted, setIsPageMounted] = useState(false);
  const sheetContainerRef = useRef(null);

  useEffect(() => {
    // Coordinated first-load reveal: ensures DOM, styles, and assets are ready before revealing
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsPageMounted(true);
      });
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Eagerly preload blog and explore backgrounds so there is zero image decode latency or flash
  useEffect(() => {
    POSTS.forEach((post) => {
      const img = new Image();
      img.src = post.art;
      const mImg = new Image();
      mImg.src = post.mobileArt;
    });

    ['/minecraft-bg.webp', '/videoeditor-bg.webp'].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Keyboard navigation: Escape closes open sheet
  useEffect(() => {
    if (!isSheetMounted) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeSheet('/', true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSheetMounted]);

  // Scroll sheet container to top whenever active view route changes
  useEffect(() => {
    if (isSheetMounted && sheetContainerRef.current) {
      sheetContainerRef.current.scrollTop = 0;
    }
  }, [activeRoute?.path, isSheetMounted]);

  // Lock body scroll when a sheet view is active
  useEffect(() => {
    if (isSheetMounted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSheetMounted]);

  // Direct sheet-to-sheet switch: transitions content directly without unmounting or visiting home page
  const switchRoute = (targetRoute, href, updateHistory = true) => {
    if (updateHistory) {
      window.history.pushState(null, '', href);
    }
    setCurrentPath(href);
    setActiveRoute(targetRoute);
    // Keep sheetState as 'active' so the sheet container NEVER flashes or reveals the home page!
    setSheetState('active');
  };

  const openSheet = (targetRoute, href, updateHistory = true) => {
    if (updateHistory) {
      window.history.pushState(null, '', href);
    }
    setCurrentPath(href);
    setActiveRoute(targetRoute);
    setSheetState('entering');
    setIsSheetMounted(true);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSheetState('active');
      });
    });
  };

  const closeSheet = (targetHref = '/', updateHistory = true) => {
    setSheetState('exiting');
    setTimeout(() => {
      setIsSheetMounted(false);
      setActiveRoute(null);
      setSheetState('idle');
    }, 240);
    if (updateHistory && window.location.pathname !== targetHref) {
      window.history.pushState(null, '', targetHref);
      setCurrentPath(targetHref);
    }
  };

  const navigateTo = (href) => {
    const targetRoute = resolveRoute(href);
    if (targetRoute) {
      // If a sheet is already open, directly switch views with zero home page flashing!
      if (isSheetMounted && activeRoute) {
        if (targetRoute.path !== activeRoute.path) {
          switchRoute(targetRoute, href, true);
        }
      } else {
        openSheet(targetRoute, href, true);
      }
    } else {
      closeSheet(href, true);
    }
  };

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const route = resolveRoute(window.location.pathname);
      setCurrentPath(window.location.pathname);
      if (route) {
        if (isSheetMounted && activeRoute) {
          if (route.path !== activeRoute.path) {
            switchRoute(route, window.location.pathname, false);
          }
        } else {
          openSheet(route, window.location.pathname, false);
        }
      } else {
        closeSheet('/', false);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isSheetMounted, activeRoute]);

  const handleExploreClick = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isReceded = isSheetMounted && sheetState === 'active';

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

      {/* 4. Main Home Canvas (gently recedes with depth when a sheet is open, and gracefully reveals on initial open) */}
      <div 
        className={`w-full flex-1 flex flex-col justify-between ${
          isReceded ? 'home-canvas-receded' : 'home-canvas-resting'
        } ${isPageMounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-out`}
      >
        <main className="relative z-10 w-full flex-1 flex flex-col items-center">
          {/* Step 1: Hero Section */}
          <Hero onExploreClick={handleExploreClick} />

          {/* Step 2: Selected Works / Projects Section */}
          <SelectedWorks />

          {/* Step 3: Interests and Experience Section */}
          <InterestsExperience onNavigate={navigateTo} />
        </main>

        {/* Step 4: Ultra-Minimal Single-Row Zen Footer */}
        <Footer onScrollToTop={handleScrollToTop} onNavigate={navigateTo} />
      </div>

      {/* 5. Tactile Floating Sheet (Buttery smooth in-DOM transition for Blogs & Explore Views) */}
      {isSheetMounted && activeRoute && (
        <div
          ref={sheetContainerRef}
          className={`blog-sheet-container ${
            activeRoute.type === 'blog' ? 'overflow-hidden' : 'overflow-y-auto'
          } ${
            sheetState === 'entering'
              ? 'blog-sheet-enter'
              : sheetState === 'active'
              ? 'blog-sheet-active'
              : 'blog-sheet-exit'
          }`}
          style={{ backgroundColor: activeRoute.paper }}
          aria-modal="true"
          role="dialog"
        >
          {activeRoute.type === 'blog' && (
            <PostPage post={activeRoute.post} onNavigate={navigateTo} />
          )}
          {activeRoute.type === 'minecraft' && (
            <MinecraftExplorePage onNavigate={navigateTo} />
          )}
          {activeRoute.type === 'video' && (
            <VideoEditingExplorePage onNavigate={navigateTo} />
          )}
        </div>
      )}
    </div>
  );
}

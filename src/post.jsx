import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import PostPage from './components/PostPage.jsx'
import { POSTS, postFromPath } from './components/blogPosts.js'
import './index.css'

function StandalonePostApp() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (href) => {
    if (href === '/') {
      window.location.href = '/';
      return;
    }
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        window.history.pushState(null, '', href);
        setCurrentPath(href);
      });
    } else {
      window.history.pushState(null, '', href);
      setCurrentPath(href);
    }
  };

  const post = postFromPath(currentPath) ?? POSTS[0];

  return <PostPage post={post} onNavigate={navigateTo} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StandalonePostApp />
  </React.StrictMode>,
)

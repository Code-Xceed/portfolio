/**
 * Curated Blog Notes.
 * Shared by the home page list, footer links, and each individual blog page.
 */

export const BLOG_INDEX = '/blogs/how-i-started/';

export const POSTS = [
  {
    id: 'how-i-started',
    number: '1',
    title: 'How I Started',
    date: "Nov '26",
    readTime: '4 min',
    href: '/blogs/how-i-started/',
    link: '/blogs/how-i-started/',
    art: '/blogs/blog-1-bg.webp',
    mobileArt: '/blogs/blog-1-mobile.webp',
    paper: '#F6EDE6',
    artFocus: 'center bottom',
  },
  {
    id: 'how-i-got-my-first-client',
    number: '2',
    title: 'How I Got My First Client',
    date: "Oct '26",
    readTime: '5 min',
    href: '/blogs/how-i-got-my-first-client/',
    link: '/blogs/how-i-got-my-first-client/',
    art: '/blogs/blog-2-bg.webp',
    mobileArt: '/blogs/blog-2-mobile.webp',
    paper: '#FCF4ED',
    artFocus: 'center bottom',
  },
];

/** Resolve a post from any pathname, with or without trailing slash. */
export function postFromPath(pathname = '') {
  if (!pathname) return null;
  const clean = pathname.replace(/^https?:\/\/[^/]+/, '').split('?')[0].split('#')[0].replace(/\/+$/, '');
  const slug = clean.split('/').pop()?.toLowerCase();
  return (
    POSTS.find(
      (post) =>
        post.id.toLowerCase() === slug ||
        post.number === slug ||
        post.number === clean.replace(/^\/blogs\/?/, '') ||
        post.href.replace(/\/+$/, '').toLowerCase() === clean ||
        post.link?.replace(/\/+$/, '').toLowerCase() === clean
    ) ?? null
  );
}

import { IConfig } from 'next-sitemap';

// Dynamische blogroutes ophalen
const fetchBlogPaths = async (): Promise<string[]> => {
  // Voorbeeld: Haal blogposts op via een API
  const response = await fetch('https://rtms-kliniek.nl/api/blog');
  const blogPosts = await response.json();

  // Dynamische blogroutes genereren
  return blogPosts.map((post: { slug: string }) => `/blog/${post.slug}`);
};

const config: IConfig = {
  siteUrl: process.env.SITE_URL || 'https://rtms-kliniek.nl', // Je domeinnaam
  generateRobotsTxt: true, // Genereer robots.txt bestand
  changefreq: 'daily', // Veranderingsfrequentie
  priority: 0.7, // Prioriteit voor pagina's
  sitemapSize: 5000, // Aantal links per sitemapbestand
  exclude: ['/admin', '/secret'], // Paden uitsluiten
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' },
    ],
  },
  // Dynamische paden toevoegen
  additionalPaths: async (config) => {
    // Haal dynamische blogroutes op
    const blogPaths = await fetchBlogPaths();
    return blogPaths.map((path) => ({
      loc: path, // De URL
      changefreq: 'weekly', // Frequentie voor blogs
      priority: 0.8, // Prioriteit van blogs
    }));
  },
};

export default config;

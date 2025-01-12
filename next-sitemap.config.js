/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://rtms-kliniek.nl', // Your domain
  generateRobotsTxt: true, // Generate robots.txt file
  changefreq: 'daily', // Frequency of page updates
  priority: 0.7, // Priority for pages
  sitemapSize: 5000, // Number of links per sitemap file
  exclude: ['/admin', '/secret'], // Exclude specific paths
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' },
    ],
  },
};

module.exports = config;

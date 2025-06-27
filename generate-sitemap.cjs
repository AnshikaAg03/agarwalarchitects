// File: generate-sitemap.cjs
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Your website pages
const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 }
];

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
const writeStream = createWriteStream(sitemapPath);

const sitemap = new SitemapStream({ hostname: 'https://www.agarwalarchitects.com' });

sitemap.pipe(writeStream);
links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('✅ Sitemap generated at public/sitemap.xml');
});

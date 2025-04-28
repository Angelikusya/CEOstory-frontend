// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Нужно для корректной работы __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = 'https://ceostory.ru';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/business-stories', changefreq: 'weekly', priority: 0.9 },
  { url: '/batashovr-story ', changefreq: 'monthly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.6 },
  { url: '/tariffs', changefreq: 'monthly', priority: 0.6 },
  { url: '/signup', changefreq: 'monthly', priority: 0.3 },
  { url: '/signin', changefreq: 'monthly', priority: 0.3 },
  { url: '/documents/privacy-policy', changefreq: 'yearly', priority: 0.2 },
  { url: '/documents/personal-data', changefreq: 'yearly', priority: 0.2 },
  { url: '/documents/terms-of-use', changefreq: 'yearly', priority: 0.2 },
  { url: '/documents/personal-data-form', changefreq: 'yearly', priority: 0.2 },
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));

  sitemap.pipe(writeStream);
  links.forEach(link => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('✅ sitemap.xml создан!');
};

generateSitemap();
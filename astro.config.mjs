import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // DA CONFERMARE: dominio definitivo (tenere allineato con src/data/site.ts e public/robots.txt)
  site: 'https://www.84010pizzeria.it',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !/\/404\//.test(page),
      changefreq: 'monthly',
      lastmod: new Date(),
      serialize: (item) => ({ ...item, priority: item.url.endsWith('.it/') ? 1.0 : 0.3 }),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  server: { port: Number(process.env.PORT) || 4360 },
});

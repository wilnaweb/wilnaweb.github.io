// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const [repoOwner] = (process.env.GITHUB_REPOSITORY ?? 'wilnaweb/wilnaweb.github.io').split('/');
const githubPagesSite = `https://${repoOwner}.github.io`;

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? githubPagesSite,
  base: process.env.BASE_PATH ?? '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
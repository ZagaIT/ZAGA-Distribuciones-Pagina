// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  vite: {
    plugins: [tailwindcss()]
  },
  // 1. Forzamos el uso del optimizador local de Astro
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  // 2. Le decimos al adaptador de Cloudflare que no toque las imágenes
  adapter: cloudflare({
    imageService: 'passthrough'
  })
});
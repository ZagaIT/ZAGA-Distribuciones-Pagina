// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    // Reactiva el optimizador de imágenes local de Astro (Sharp)
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  adapter: cloudflare({
    // Apaga el intento de usar el servicio de imágenes de Cloudflare
    imageService: 'passthrough'
  })
});
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
  adapter: cloudflare({
    // Esto fuerza a Astro a comprimir y generar las imágenes localmente al compilar
    // como archivos estáticos puros, eliminando las peticiones a /_image
    imageService: 'compileLocal'
  })
});
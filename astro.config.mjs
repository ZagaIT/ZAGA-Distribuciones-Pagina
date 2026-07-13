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
  adapter: cloudflare({
    // ESTA ES LA CLAVE: Obliga a Astro a usar Sharp (local) y apaga el servicio de pago de Cloudflare
    imageService: 'compile'
  })
});
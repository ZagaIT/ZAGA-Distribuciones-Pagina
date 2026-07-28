// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.zagadistribuciones.com',
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-MX',
          en: 'en-US',
        },
      },
    }),
  ],
  // Fuente display del preset "Voltaje".
  // Astro la descarga y auto-hospeda en el build: no hay peticiones a
  // Google Fonts en producción.
  fonts: [
    {
      // Preset "Voltaje": condensada industrial
      provider: fontProviders.google(),
      name: 'Archivo Black',
      cssVariable: '--font-display-industrial',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Impact', 'Arial Black', 'sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()]
  },
  adapter: cloudflare({
    // ESTA ES LA CLAVE: Obliga a Astro a usar Sharp (local) y apaga el servicio de pago de Cloudflare
    imageService: 'compile'
  })
});

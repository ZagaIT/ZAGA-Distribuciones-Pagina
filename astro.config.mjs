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
    {
      // Dirección "Industrial-Técnico": display condensada para títulos
      // de sección y hero, siempre en MAYÚSCULAS.
      provider: fontProviders.google(),
      name: 'Barlow Condensed',
      cssVariable: '--font-display-condensed',
      weights: [600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Oswald', 'Arial Narrow', 'sans-serif'],
    },
    {
      // Cuerpo de texto.
      provider: fontProviders.google(),
      name: 'Inter Tight',
      cssVariable: '--font-body-tight',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Inter', 'system-ui', 'sans-serif'],
    },
    {
      // Datos, etiquetas y números: el mono es señalético, no decorativo.
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono-data',
      weights: [400, 500, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'monospace'],
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

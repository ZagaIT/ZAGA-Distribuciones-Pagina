# ZAGA Distribuciones — Sitio web

Sitio web corporativo de **ZAGA Distribuciones**, distribuidora de equipo y material
eléctrico en Tampico, Tamaulipas, con servicio en todo México.

🌐 **[www.zagadistribuciones.com](https://www.zagadistribuciones.com)**

Sitio estático bilingüe (español / inglés) construido con [Astro](https://astro.build)
y desplegado en [Cloudflare Pages](https://pages.cloudflare.com).

---

## Índice

- [Stack](#stack)
- [Requisitos](#requisitos)
- [Puesta en marcha](#puesta-en-marcha)
- [Comandos](#comandos)
- [Variables de entorno](#variables-de-entorno)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Cómo editar el contenido](#cómo-editar-el-contenido)
- [Internacionalización (i18n)](#internacionalización-i18n)
- [Presets de estilo](#presets-de-estilo)
- [SEO](#seo)
- [Despliegue](#despliegue)
- [Datos del negocio](#datos-del-negocio)

---

## Stack

| Tecnología | Uso |
| :--- | :--- |
| [Astro 7](https://astro.build) | Framework — generación estática (`output: 'static'`) |
| [Tailwind CSS 4](https://tailwindcss.com) | Estilos, vía plugin de Vite |
| [@astrojs/cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) | Adaptador de despliegue |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Sitemap con anotaciones de idioma |
| [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | CLI de Cloudflare |

Las fuentes se descargan y **auto-hospedan en el build** mediante la API de fuentes de
Astro: en producción no se hace ninguna petición a Google Fonts.

## Requisitos

- **Node.js >= 22.12.0** (declarado en `engines` de `package.json`)
- npm

Si usas [nvm](https://github.com/nvm-sh/nvm):

```sh
nvm use 22
```

## Puesta en marcha

```sh
git clone https://github.com/ZagaIT/ZAGA-Distribuciones-Pagina.git
cd ZAGA-Distribuciones-Pagina
npm install
npm run dev
```

El sitio queda en `http://localhost:4321`.

## Comandos

Todos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compila el sitio de producción en `./dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `npm run astro ...` | Comandos del CLI de Astro (`astro add`, `astro check`) |

## Variables de entorno

Se definen en un archivo `.env` en la raíz. **`.env` está en `.gitignore` y no debe
subirse al repositorio.**

| Variable | Requerida | Descripción |
| :--- | :--- | :--- |
| `PUBLIC_GA_ID` | No | ID de Google Analytics (`G-XXXXXXXXXX`). Si está vacía, el script de GA simplemente no se inyecta. |
| `CLOUDFLARE_TOKEN` | Solo para desplegar por CLI | Token de API de Cloudflare. No se necesita si el despliegue es automático desde GitHub. |

```sh
# .env
PUBLIC_GA_ID=G-XXXXXXXXXX
CLOUDFLARE_TOKEN=...
```

> El prefijo `PUBLIC_` es de Astro e indica que la variable se expone al navegador.
> Nunca le pongas ese prefijo a un secreto.

## Estructura del proyecto

```text
/
├── public/                     # Servido tal cual en la raíz del dominio
│   ├── robots.txt              # Incluye permisos para crawlers de IA (GEO)
│   ├── favicon-48.png          # Favicon (generado desde logoZaga.png)
│   ├── og-image.png            # Imagen para redes sociales (1200x630)
│   └── pdfs/                   # Fichas técnicas descargables
├── src/
│   ├── config/
│   │   └── site.ts             # ← Datos del negocio (fuente única de verdad)
│   ├── i18n/
│   │   ├── ui.ts               # ← Todos los textos, en ES y EN
│   │   └── utils.ts            # Helpers de traducción
│   ├── layouts/
│   │   └── Layout.astro        # <head>, SEO, schema.org, navbar y footer
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── WhatsAppButton.astro
│   │   ├── PresetSwitcher.astro
│   │   └── views/              # Contenido de cada página (compartido ES/EN)
│   ├── pages/
│   │   ├── *.astro             # Rutas en español  → /servicios/
│   │   └── en/*.astro          # Rutas en inglés   → /en/servicios/
│   ├── assets/
│   │   └── marcas/             # Logos de marcas distribuidas
│   └── styles/
│       └── global.css          # Tailwind + variables de los presets
├── astro.config.mjs
└── package.json
```

### El patrón `pages` / `views`

Las páginas de `src/pages/` son deliberadamente mínimas: solo importan una vista.

```astro
---
import ServiciosView from '../components/views/ServiciosView.astro';
---
<ServiciosView />
```

El contenido real vive en `src/components/views/`. Así **una sola vista sirve a los dos
idiomas** — detecta el idioma desde la URL y saca los textos de `src/i18n/ui.ts`. Al
editar una vista, cambian ambas versiones a la vez.

## Cómo editar el contenido

| Qué quieres cambiar | Dónde |
| :--- | :--- |
| Teléfono, correo, dirección, WhatsApp | [`src/config/site.ts`](src/config/site.ts) |
| Cualquier texto visible de la web | [`src/i18n/ui.ts`](src/i18n/ui.ts) |
| Títulos y descripciones SEO | [`src/i18n/ui.ts`](src/i18n/ui.ts) (claves `seo.*`) |
| Estructura de una página | `src/components/views/` |
| Logos de marcas | `src/assets/marcas/` |
| Fichas técnicas en PDF | `public/pdfs/` |

`site.ts` alimenta simultáneamente los datos de contacto visibles, el botón de WhatsApp
y los datos estructurados de schema.org. **Cambiar el teléfono ahí lo actualiza en todo
el sitio.**

## Internacionalización (i18n)

- Idioma por defecto: **español**, sin prefijo en la URL (`/servicios/`)
- Inglés bajo el prefijo `/en/` (`/en/servicios/`)

Los textos se centralizan en `src/i18n/ui.ts`:

```ts
export const ui = {
  es: { 'nav.about': 'Nosotros', /* ... */ },
  en: { 'nav.about': 'About Us',  /* ... */ },
};
```

Y se usan dentro de un componente así:

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<h1>{t('nav.about')}</h1>
```

Si a una clave le falta la traducción al inglés, `t()` cae automáticamente al español.

### Para agregar una página nueva

1. Crea la vista en `src/components/views/MiPagina.astro`
2. Agrega los textos a `ui.es` **y** a `ui.en` en `src/i18n/ui.ts`
3. Crea `src/pages/mipagina.astro` y `src/pages/en/mipagina.astro`, ambos importando la vista
4. Enlázala desde el navbar **con barra final** (ver [SEO](#seo))

## Presets de estilo

El sitio incluye un selector de paletas y tipografías (`PresetSwitcher.astro`), pensado
como **herramienta temporal de revisión con el cliente**. La elección se guarda en
`localStorage` bajo la clave `zaga-preset` y se aplica antes del primer render para
evitar parpadeo.

**Solo paleta:** Original · Neón Fiusha · Ámbar Industrial · Esmeralda
**Paleta + tipografía:** Voltaje · Alto Voltaje · Retro Neón · Taller

Cuando se apruebe una paleta definitiva, hay que quitar `<PresetSwitcher />` de
`Navbar.astro` y dejar fija la elegida en `global.css`.

## SEO

El sitio trae una configuración de SEO técnico completa, gestionada desde
[`src/layouts/Layout.astro`](src/layouts/Layout.astro):

- URLs canónicas autogeneradas, siempre con barra final
- `hreflang` para español, inglés y `x-default`
- Open Graph y Twitter Cards
- Datos estructurados schema.org: `Organization` + `LocalBusiness` y `WebSite`,
  con dirección, teléfonos y coordenadas geográficas
- Sitemap con anotaciones de idioma (`sitemap-index.xml`)
- `robots.txt` con permisos explícitos para crawlers de IA (GPTBot, ClaudeBot,
  PerplexityBot y otros), de cara a aparecer en respuestas de motores generativos

> [!IMPORTANT]
> **Los enlaces internos deben llevar barra final.** Cloudflare Pages redirige
> `/servicios` a `/servicios/` con un 307, y esos saltos innecesarios aparecen en Google
> Search Console como "Página con redirección". Usa `href="/servicios/"`, no
> `href="/servicios"`.

### Redirecciones de dominio

Configuradas en el panel de Cloudflare, **no en este repositorio**:

- Regla de redirección 301 de `zagadistribuciones.com` → `https://www.zagadistribuciones.com`
- "Always Use HTTPS" activado en SSL/TLS → Edge Certificates

El dominio canónico es **`www.zagadistribuciones.com`**.

## Despliegue

El sitio se despliega en **Cloudflare Pages**. El build genera:

- `dist/client/` — archivos estáticos que se sirven públicamente
- `dist/server/` — artefactos del adaptador

Configuración en Cloudflare Pages:

| Ajuste | Valor |
| :--- | :--- |
| Build command | `npm run build` |
| Build output directory | `dist/client` |
| Node version | `22` |

Recuerda definir `PUBLIC_GA_ID` en las variables de entorno del proyecto en Cloudflare;
las de tu `.env` local no se suben.

Las imágenes se optimizan **en el build** con Sharp (`imageService: 'compile'`), para no
depender del servicio de imágenes de pago de Cloudflare.

## Datos del negocio

**ZAGA Distribuciones** — Suministro e instalación de equipo y material eléctrico.

- 📍 Héroes de Chapultepec 1507 Norte, C.P. 89060, Tampico, Tamaulipas, México
- 📞 [(833) 107-3278](tel:+528331073278) · [(833) 362-9238](tel:+528333629238)
- 💬 [WhatsApp](https://wa.me/528331073278)
- ✉️ distribuciones.zaga25@gmail.com

**Líneas de producto:** conductores eléctricos · tubería conduit y accesorios · control y
distribución · iluminación profesional · sistemas de protección (pararrayos y puesta a
tierra) · ferretería y acabados.

Distribuidores de Soldexel, Condumex, Siemens, Square D, ABB, Philips, Truper, Comex y
más, incluyendo cable antirrobo CCS (Copperclad y Alumoclad).

---

© ZAGA Distribuciones. Todos los derechos reservados.

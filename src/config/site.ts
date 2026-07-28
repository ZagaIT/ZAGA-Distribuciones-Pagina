/**
 * Datos centrales del negocio para SEO y datos estructurados.
 * Editar aquí actualiza automáticamente los metadatos de todo el sitio.
 */
export const SITE = {
  url: 'https://www.zagadistribuciones.com',
  name: 'ZAGA Distribuciones',
  legalName: 'ZAGA Distribuciones',

  address: {
    streetAddress: 'Héroes de Chapultepec 1507 Norte',
    locality: 'Tampico',
    region: 'Tamaulipas',
    postalCode: '89060',
    countryCode: 'MX',
  },

  phones: {
    primary: '+52 833 107 3278',
    primaryPlain: '+528331073278',
    secondary: '+52 833 362 9238',
    secondaryPlain: '+528333629238',
  },

  emails: {
    primary: 'distribuciones.zaga25@gmail.com',
    secondary: 'asistente.zaga25@gmail.com',
  },

  whatsapp: 'https://wa.me/528331073278',

  // Perfiles sociales (Facebook, Instagram, LinkedIn, etc.).
  // Agregar las URLs completas cuando existan; alimentan el "sameAs" de schema.org.
  socialProfiles: [] as string[],

  // Coordenadas geográficas del local (mejoran el SEO local).
  geo: {
    latitude: 22.2246084 as number | null,
    longitude: -97.8442978 as number | null,
  },

  ogImage: '/og-image.png',
} as const;

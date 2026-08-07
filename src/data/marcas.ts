/**
 * Catálogo de marcas distribuidas por ZAGA Distribuciones.
 *
 * Este archivo alimenta la grilla filtrable de la página de Marcas.
 * Para agregar una marca nueva basta con añadir un objeto a `marcas` y
 * colocar su logo en `src/assets/marcas/` — el logo se enlaza solo si el
 * nombre del archivo coincide con `name` (ignorando mayúsculas, espacios
 * y signos). Si no hay logo, la tarjeta muestra el nombre en texto.
 *
 * IMPORTANTE: las descripciones y etiquetas son un borrador basado en el
 * giro público de cada fabricante. Revisar con ZAGA antes de publicar:
 * conviene que reflejen lo que ZAGA realmente distribuye de cada marca,
 * no todo el catálogo del fabricante.
 *
 * PENDIENTE — logos por reemplazar. Estos archivos de src/assets/marcas/ no
 * son logotipos sino fotos de producto o banners promocionales, y en la
 * tarjeta se ven recortados y sin fuerza. Hace falta el logo oficial en PNG
 * con fondo transparente (idealmente apaisado, ~1200px de ancho):
 *   Condumex.jpg · argos.jpg · viakon.jpg · Indiana Wire & Cable.jpg
 *   General Cable.png · condulac.jpg · KOBREX.jpg
 */

/** Categorías del catálogo. El `id` se usa en los filtros y en la URL (#id). */
export const categorias = [
  { id: 'conductores',  titleKey: 'brands.cat.title.conductores',  descKey: 'brands.cat.conductores'  },
  { id: 'tuberia',      titleKey: 'brands.cat.title.tuberia',      descKey: 'brands.cat.tuberia'      },
  { id: 'control',      titleKey: 'brands.cat.title.control',      descKey: 'brands.cat.control'      },
  { id: 'iluminacion',  titleKey: 'brands.cat.title.iluminacion',  descKey: 'brands.cat.iluminacion'  },
  { id: 'proteccion',   titleKey: 'brands.cat.title.proteccion',   descKey: 'brands.cat.proteccion'   },
  { id: 'ferreteria',   titleKey: 'brands.cat.title.ferreteria',   descKey: 'brands.cat.ferreteria'   },
  { id: 'construccion', titleKey: 'brands.cat.title.construccion', descKey: 'brands.cat.construccion' },
  { id: 'varios',       titleKey: 'brands.cat.title.varios',       descKey: 'brands.cat.varios'       },
] as const;

export type CategoriaId = (typeof categorias)[number]['id'];

export interface Marca {
  /** Debe coincidir con el nombre del archivo del logo en src/assets/marcas/. */
  name: string;
  categoria: CategoriaId;
  /** 1–2 líneas sobre qué fabrica la marca. */
  desc: string;
  /** 2–3 etiquetas cortas de producto. Se muestran como pills. */
  tags: string[];
  /** Sitio oficial del fabricante. Omitir si no aplica. */
  url?: string;
}

export const marcas: Marca[] = [
  // ── Conductores Eléctricos ──────────────────────────────────────────────
  {
    name: 'CONDUMEX',
    categoria: 'conductores',
    desc: 'Fabricante mexicano líder en cables y conductores de cobre para baja y media tensión, uso residencial, comercial e industrial.',
    tags: ['Cables', 'Cobre', 'Media tensión'],
    url: 'https://www.condumex.com.mx/',
  },
  {
    name: 'ARGOS',
    categoria: 'conductores',
    desc: 'Conductores eléctricos de cobre y aluminio para instalaciones residenciales, comerciales e industriales.',
    tags: ['Cables', 'Cobre', 'Aluminio'],
    url: 'https://www.argos.mx/',
  },
  {
    name: 'VIAKON',
    categoria: 'conductores',
    desc: 'Conductores de cobre y aluminio para construcción, industria y distribución de energía, con amplia cobertura nacional.',
    tags: ['Cables', 'Construcción', 'Industrial'],
    url: 'https://www.viakon.com/',
  },
  {
    name: 'Indiana Wire & Cable',
    categoria: 'conductores',
    desc: 'Alambres y cables de cobre para instalaciones eléctricas residenciales, comerciales y de uso rudo.',
    tags: ['Alambre', 'Cable', 'Uso rudo'],
    url: 'https://www.indiana.com.mx/',
  },
  {
    name: 'General Cable',
    categoria: 'conductores',
    desc: 'Conductores de baja, media y alta tensión para energía, control, instrumentación y aplicaciones industriales.',
    tags: ['Media tensión', 'Control', 'Instrumentación'],
    url: 'https://www.generalcable.com/',
  },
  {
    name: 'Condulac',
    categoria: 'conductores',
    desc: 'Cables y conductores eléctricos para instalaciones de baja tensión en obra residencial, comercial e industrial.',
    tags: ['Cables', 'Baja tensión'],
    url: 'https://condulac.com.mx/',
  },
  {
    name: 'KOBREX',
    categoria: 'conductores',
    desc: 'Conductores eléctricos de cobre para instalaciones residenciales, comerciales e industriales.',
    tags: ['Cables', 'Cobre'],
    url: 'https://kobrex.com.mx/',
  },

  // ── Tubería Conduit y Fittings ──────────────────────────────────────────
  {
    name: 'Crouse-Hinds by EATON',
    categoria: 'tuberia',
    desc: 'Referente mundial en conexiones, cajas y accesorios conduit para áreas peligrosas clasificadas y ambientes severos.',
    tags: ['Áreas clasificadas', 'Conduit', 'Fittings'],
    url: 'https://www.eaton.com/mx/es-mx/products/electrical-circuit-protection/crouse-hinds-series.html',
  },
  {
    name: 'KILLARK',
    categoria: 'tuberia',
    desc: 'Productos eléctricos a prueba de explosión: cajas, conexiones y luminarias para áreas peligrosas clasificadas.',
    tags: ['A prueba de explosión', 'Áreas clasificadas'],
    url: 'https://www.hubbell.com/killark/en',
  },
  {
    name: 'RAWELT',
    categoria: 'tuberia',
    desc: 'Fabricante mexicano de conexiones, cajas y accesorios conduit de aluminio y acero para instalaciones industriales.',
    tags: ['Conduit', 'Aluminio', 'Industrial'],
    url: 'https://www.rawelt.com.mx/',
  },
  {
    name: 'Appleton',
    categoria: 'tuberia',
    desc: 'Conexiones, cajas y sistemas de canalización para instalaciones industriales y áreas peligrosas.',
    tags: ['Conduit', 'Áreas clasificadas'],
    url: 'https://www.emerson.com/en-us/automation/appleton',
  },
  {
    name: 'CONDUCCASA',
    categoria: 'tuberia',
    desc: 'Fabricante mexicano de tubería conduit metálica y accesorios de canalización para instalaciones eléctricas.',
    tags: ['Conduit', 'Canalización'],
    url: 'https://conduccasa.com/',
  },
  {
    name: 'Ternium',
    categoria: 'tuberia',
    desc: 'Productor siderúrgico de aceros planos y largos, tubería y perfiles para construcción e industria.',
    tags: ['Acero', 'Tubería', 'Perfiles'],
    url: 'https://mx.ternium.com/',
  },
  {
    name: 'Hylsa',
    categoria: 'tuberia',
    desc: 'Productos de acero y tubería estructural para aplicaciones de construcción e infraestructura.',
    tags: ['Acero', 'Tubería estructural'],
  },
  {
    name: 'INDALUM',
    categoria: 'tuberia',
    desc: 'Tubería conduit y perfiles de aluminio para canalización eléctrica y aplicaciones arquitectónicas.',
    tags: ['Aluminio', 'Conduit', 'Perfiles'],
  },
  {
    name: 'Thomas & Betts',
    categoria: 'tuberia',
    desc: 'Conectores, abrazaderas y accesorios de canalización eléctrica para instalaciones industriales y comerciales.',
    tags: ['Conectores', 'Canalización', 'Fittings'],
    url: 'https://www.tnb.com/',
  },

  // ── Equipo de Control y Distribución ────────────────────────────────────
  {
    name: 'SQUARE D',
    categoria: 'control',
    desc: 'Marca de Schneider Electric especializada en interruptores, centros de carga y tableros de distribución.',
    tags: ['Interruptores', 'Tableros', 'Centros de carga'],
    url: 'https://www.se.com/mx/es/product-category/squared/',
  },
  {
    name: 'SIEMENS',
    categoria: 'control',
    desc: 'Líder global en automatización, control industrial, tableros de distribución y equipo de media tensión.',
    tags: ['Automatización', 'Tableros', 'Control'],
    url: 'https://www.siemens.com/mx/es.html',
  },
  {
    name: 'ABB',
    categoria: 'control',
    desc: 'Tecnología en electrificación y automatización: interruptores, variadores, arrancadores y equipo de potencia.',
    tags: ['Automatización', 'Variadores', 'Interruptores'],
    url: 'https://new.abb.com/mx',
  },
  {
    name: 'OMRON',
    categoria: 'control',
    desc: 'Componentes de automatización industrial: relevadores, sensores, controladores y equipo de seguridad.',
    tags: ['Sensores', 'Relevadores', 'Automatización'],
    url: 'https://www.omron.mx/',
  },
  {
    name: 'Allen-Bradley',
    categoria: 'control',
    desc: 'Marca de Rockwell Automation en control industrial: PLCs, arrancadores, botoneras y equipo de maniobra.',
    tags: ['PLC', 'Control industrial', 'Maniobra'],
    url: 'https://www.rockwellautomation.com/es-mx.html',
  },
  {
    name: 'MOELLER',
    categoria: 'control',
    desc: 'Equipo de maniobra y protección eléctrica: contactores, interruptores y componentes de control.',
    tags: ['Contactores', 'Protección', 'Maniobra'],
  },
  {
    name: 'BALLUFF',
    categoria: 'control',
    desc: 'Sensórica industrial y sistemas de identificación para automatización de procesos y manufactura.',
    tags: ['Sensores', 'Automatización', 'Industrial'],
    url: 'https://www.balluff.com/es-mx/',
  },
  {
    name: 'ARROW HART',
    categoria: 'control',
    desc: 'Dispositivos de cableado de grado industrial: contactos, clavijas, apagadores y conectores.',
    tags: ['Contactos', 'Clavijas', 'Apagadores'],
    url: 'https://www.eaton.com/',
  },
  {
    name: 'LEVITON',
    categoria: 'control',
    desc: 'Dispositivos de cableado, apagadores, contactos y soluciones de red para instalaciones eléctricas.',
    tags: ['Apagadores', 'Contactos', 'Redes'],
    url: 'https://www.leviton.com.mx/',
  },
  {
    name: 'bticino',
    categoria: 'control',
    desc: 'Marca del grupo Legrand en apagadores, contactos y placas de diseño para instalaciones residenciales y comerciales.',
    tags: ['Apagadores', 'Contactos', 'Placas'],
    url: 'https://www.bticino.com.mx/',
  },

  // ── Iluminación ─────────────────────────────────────────────────────────
  {
    name: 'PHILCO-SLP-BRILLA-MAX',
    categoria: 'iluminacion',
    desc: 'Iluminación LED residencial, comercial e industrial. Distribución oficial de ZAGA Distribuciones.',
    tags: ['LED', 'Luminarias', 'Distribución oficial'],
  },
  {
    name: 'tecnolite',
    categoria: 'iluminacion',
    desc: 'Marca mexicana de iluminación decorativa, técnica y LED para el hogar, comercio e industria.',
    tags: ['LED', 'Decorativa', 'Técnica'],
    url: 'https://www.tecnolite.mx/',
  },
  {
    name: 'PHILIPS Lighting',
    categoria: 'iluminacion',
    desc: 'Referente mundial en iluminación LED y sistemas de alumbrado profesional y conectado.',
    tags: ['LED', 'Alumbrado', 'Profesional'],
    url: 'https://www.lighting.philips.com.mx/',
  },
  {
    name: 'Dimas Lighting',
    categoria: 'iluminacion',
    desc: 'Luminarias LED para proyectos comerciales e industriales. Distribución oficial de ZAGA Distribuciones.',
    tags: ['LED', 'Industrial', 'Distribución oficial'],
  },
  {
    name: 'MAGG',
    categoria: 'iluminacion',
    desc: 'Iluminación LED y luminarias decorativas para aplicaciones residenciales y comerciales.',
    tags: ['LED', 'Luminarias', 'Decorativa'],
    url: 'https://magg.com.mx/',
  },
  {
    name: 'LAITING',
    categoria: 'iluminacion',
    desc: 'Luminarias LED y accesorios de iluminación para proyectos residenciales y comerciales.',
    tags: ['LED', 'Luminarias'],
  },

  // ── Sistemas de Protección ──────────────────────────────────────────────
  {
    name: 'TOTAL GROUND',
    categoria: 'proteccion',
    desc: 'Sistemas de puesta a tierra, pararrayos y protección contra descargas atmosféricas.',
    tags: ['Puesta a tierra', 'Pararrayos', 'Apantallamiento'],
    url: 'https://www.totalground.com/',
  },
  {
    name: 'AMESA',
    categoria: 'proteccion',
    desc: 'Herrajes y materiales para sistemas de puesta a tierra y protección eléctrica.',
    tags: ['Puesta a tierra', 'Herrajes'],
  },
  {
    name: 'ENERGAIN',
    categoria: 'proteccion',
    desc: 'Soluciones de protección eléctrica y respaldo de energía para instalaciones críticas.',
    tags: ['Protección', 'Respaldo de energía'],
  },
  {
    name: 'TECNOLED PLUS',
    categoria: 'proteccion',
    desc: 'Componentes de protección e iluminación LED para instalaciones eléctricas.',
    tags: ['Protección', 'LED'],
  },

  // ── Ferretería y Tornillería ────────────────────────────────────────────
  {
    name: 'TRUPER',
    categoria: 'ferreteria',
    desc: 'La marca mexicana de herramienta más reconocida: herramienta manual, eléctrica, jardinería y ferretería general.',
    tags: ['Herramienta', 'Ferretería', 'Eléctrica'],
    url: 'https://www.truper.com/',
  },
  {
    name: 'VOLTECK',
    categoria: 'ferreteria',
    desc: 'Material eléctrico y herramienta del grupo Truper: cables, apagadores, contactos y accesorios.',
    tags: ['Material eléctrico', 'Herramienta'],
    url: 'https://www.truper.com/volteck/',
  },
  {
    name: 'PRETUL',
    categoria: 'ferreteria',
    desc: 'Herramienta y ferretería de uso general del grupo Truper, con excelente relación calidad-precio.',
    tags: ['Herramienta', 'Ferretería'],
    url: 'https://www.truper.com/pretul/',
  },
  {
    name: 'FOSET',
    categoria: 'ferreteria',
    desc: 'Línea de plomería, fontanería y accesorios para baño del grupo Truper.',
    tags: ['Plomería', 'Fontanería', 'Baño'],
    url: 'https://www.truper.com/foset/',
  },
  {
    name: 'FIERO',
    categoria: 'ferreteria',
    desc: 'Herramienta profesional y de alto desempeño del grupo Truper para uso industrial y taller.',
    tags: ['Herramienta', 'Profesional'],
    url: 'https://www.truper.com/fiero/',
  },
  {
    name: 'Klintek',
    categoria: 'ferreteria',
    desc: 'Productos de limpieza, mantenimiento y químicos para el hogar, taller e industria.',
    tags: ['Limpieza', 'Mantenimiento', 'Químicos'],
    url: 'https://www.truper.com/klintek/',
  },
  {
    name: 'HERMEX',
    categoria: 'ferreteria',
    desc: 'Herrajes, tornillería y accesorios de fijación para carpintería, construcción y ferretería.',
    tags: ['Herrajes', 'Tornillería', 'Fijación'],
    url: 'https://www.truper.com/hermex/',
  },

  // ── Construcción y Acabados ─────────────────────────────────────────────
  {
    name: 'Holcim',
    categoria: 'construccion',
    desc: 'Cemento, concreto y agregados para obra civil, infraestructura y construcción en general.',
    tags: ['Cemento', 'Concreto', 'Agregados'],
    url: 'https://www.holcim.com.mx/',
  },
  {
    name: 'HELVEX',
    categoria: 'construccion',
    desc: 'Fabricante mexicano de grifería, muebles de baño y soluciones sanitarias de alta durabilidad.',
    tags: ['Grifería', 'Sanitarios', 'Baño'],
    url: 'https://www.helvex.com.mx/',
  },
  {
    name: 'RUGO',
    categoria: 'construccion',
    desc: 'Grifería, válvulas y accesorios para instalaciones hidráulicas y sanitarias.',
    tags: ['Grifería', 'Válvulas', 'Hidráulico'],
    url: 'https://rugo.com.mx/',
  },
  {
    name: 'APASCO',
    categoria: 'construccion',
    desc: 'Cemento y productos para construcción de amplia presencia en el mercado mexicano.',
    tags: ['Cemento', 'Construcción'],
  },
  {
    name: 'LAMOSA',
    categoria: 'construccion',
    desc: 'Recubrimientos cerámicos, pisos y adhesivos para proyectos residenciales y comerciales.',
    tags: ['Cerámica', 'Pisos', 'Adhesivos'],
    url: 'https://www.lamosa.com/',
  },
  {
    name: 'CATO',
    categoria: 'construccion',
    desc: 'Impermeabilizantes, selladores y recubrimientos para protección de techos y superficies.',
    tags: ['Impermeabilizante', 'Selladores'],
  },
  {
    name: 'Fester',
    categoria: 'construccion',
    desc: 'Especialista en impermeabilización, selladores y sistemas de protección para la construcción.',
    tags: ['Impermeabilizante', 'Selladores', 'Protección'],
    url: 'https://www.fester.com.mx/',
  },
  {
    name: 'CREST',
    categoria: 'construccion',
    desc: 'Adhesivos, boquillas y morteros para la instalación de recubrimientos cerámicos.',
    tags: ['Adhesivos', 'Boquillas', 'Morteros'],
    url: 'https://www.crest.com.mx/',
  },
  {
    name: 'cemix',
    categoria: 'construccion',
    desc: 'Morteros, adhesivos, estucos y productos secos para acabados y construcción.',
    tags: ['Morteros', 'Adhesivos', 'Estucos'],
    url: 'https://www.cemix.com/',
  },
  {
    name: 'Berel',
    categoria: 'construccion',
    desc: 'Pinturas, recubrimientos e impermeabilizantes para uso arquitectónico e industrial.',
    tags: ['Pinturas', 'Recubrimientos'],
    url: 'https://www.berel.com.mx/',
  },
  {
    name: 'Sayer',
    categoria: 'construccion',
    desc: 'Pinturas y recubrimientos arquitectónicos, automotrices e industriales.',
    tags: ['Pinturas', 'Recubrimientos', 'Industrial'],
    url: 'https://www.sayerlack.com.mx/',
  },
  {
    name: 'Comex',
    categoria: 'construccion',
    desc: 'La marca de pinturas más reconocida de México: arquitectónicas, impermeabilizantes y texturizados.',
    tags: ['Pinturas', 'Impermeabilizante', 'Texturizados'],
    url: 'https://www.comex.com.mx/',
  },
  {
    name: 'BEHR',
    categoria: 'construccion',
    desc: 'Pinturas y tintes de alto desempeño para interiores y exteriores.',
    tags: ['Pinturas', 'Tintes'],
    url: 'https://www.behr.com/',
  },

  // ── Varios ──────────────────────────────────────────────────────────────
  {
    name: '3M',
    categoria: 'varios',
    desc: 'Cintas de aislar, empalmes, conectores, abrasivos y equipo de protección personal para el ramo eléctrico.',
    tags: ['Cintas', 'Empalmes', 'EPP'],
    url: 'https://www.3m.com.mx/',
  },
];

const fs = require('fs');

const catalogCategories = [
  {
    name: "Conductores Eléctricos",
    brands: ['CONDUMEX', 'ARGOS', 'VIAKON', 'Indiana Wire & Cable', 'General Cable', 'ondulac', 'KOBREX']
  },
  {
    name: "Tubería Conduit y Fittings",
    brands: ['Crouse-Hinds by EATON', 'KILLARK', 'RAWELT', 'Appleton', 'CONDUCCASA', 'Ternium', 'Hylsa', 'INDALUM S.A.', 'Thomas & Betts']
  },
  {
    name: "Equipo de Control y Distribución",
    brands: ['SQUARE D', 'SIEMENS', 'ABB', 'OMRON', 'Allen-Bradley', 'MOELLER', 'BALLUFF', 'ARROW HART', 'LEVITON', 'bticino']
  },
  {
    name: "Iluminación",
    brands: ['PHILCO-SLP-BRILLA-MAX', 'tecnolite', 'PHILIPS Lighting', 'Dimas Lighting', 'MAGG', 'LAITING']
  },
  {
    name: "Sistemas de Protección",
    brands: ['TOTAL GROUND', 'AMESA', 'ENERGAIN', 'TECNOLED PLUS']
  },
  {
    name: "Ferretería y Tornillería",
    brands: ['TRUPER', 'VOLTECK', 'PRETUL', 'FOSET', 'FIERO', 'Klintek', 'HERMEX']
  },
  {
    name: "Construcción y Acabados",
    brands: ['Holcim', 'HELVEX', 'RUGO', 'APASCO', 'LAMOSA', 'CATO', 'Fester', 'CREST', 'cemix', 'Berel', 'Sayer', 'Comex', 'BEHR']
  },
  {
    name: "Varios",
    brands: ['3M']
  }
];

const normalizeBrandName = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

const files = fs.readdirSync('src/assets/marcas');
const normalizedFiles = files.map(f => ({
  file: f,
  normalized: normalizeBrandName(f.split('.').slice(0, -1).join('.'))
}));

const allBrands = catalogCategories.flatMap(c => c.brands);

const missingBrands = [];

allBrands.forEach(b => {
  const norm = normalizeBrandName(b);
  const match = normalizedFiles.find(f => f.normalized === norm);
  if (!match) {
    missingBrands.push(b);
  }
});

console.log("Missing matches for brands:", missingBrands);

// Also list files not used
const unusedFiles = normalizedFiles.filter(f => !allBrands.some(b => normalizeBrandName(b) === f.normalized));
console.log("Files not matching any brand:", unusedFiles.map(u => u.file));


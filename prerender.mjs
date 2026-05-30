import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DIST = 'dist';

const routes = [
  { path: 'about',      title: 'À Propos - VéloRouge Strasbourg | Notre Histoire et Mission',                                    desc: "Découvrez l'histoire de VéloRouge, notre passion pour Strasbourg et notre engagement envers le tourisme durable." },
  { path: 'visitors',   title: 'Nos Expériences - VéloRouge | Visites Guidées en Vélo Électrique à Strasbourg',                  desc: 'Découvrez nos 4 expériences uniques en vélo électrique à Strasbourg. Coucher de soleil, bars de Petite France et plus. 49€ par personne.' },
  { path: 'residents',  title: 'Forfait Mobilités Durables - VéloRouge | Location Vélo Éligible FMD',                            desc: "Profitez du Forfait Mobilités Durables avec VéloRouge. Jusqu'à 900€ de remboursement pour vos locations de vélos électriques." },
  { path: 'safe-smart', title: 'Sécurité & Technologie - VéloRouge | Vélos Électriques Connectés',                              desc: 'Découvrez nos vélos électriques intelligents avec GPS, antivol, détection d\'accident et suivi en temps réel à Strasbourg.' },
  { path: 'contact',    title: 'Contact - VéloRouge Strasbourg | Nous Contacter',                                               desc: 'Contactez VéloRouge pour vos questions sur nos visites guidées en vélo électrique à Strasbourg. Réservations et informations.' },
];

const base = readFileSync(join(DIST, 'index.html'), 'utf-8');

for (const route of routes) {
  const dir = join(DIST, route.path);
  mkdirSync(dir, { recursive: true });

  // Inject page-specific title, description and canonical into the static HTML
  let html = base
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${route.desc}"`)
    .replace(/<link rel="canonical"[^>]*>/, '')
    .replace('</head>', `<link rel="canonical" href="https://velorouge.fr/${route.path}" />\n</head>`);

  writeFileSync(join(dir, 'index.html'), html);
  console.log(`✅ Generated /${route.path}/index.html`);
}

console.log('\n🎉 Pre-render complete — all routes have static HTML for Google.');

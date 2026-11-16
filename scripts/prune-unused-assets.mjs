/**
 * Prune post-build: astro:assets/Vite emette l'ORIGINALE di ogni immagine
 * importata anche quando in pagina usiamo solo le versioni WebP ottimizzate
 * (è il caso della galleria progetti: ~100 originali a piena risoluzione mai
 * referenziati). Qui rimuoviamo dai bundle solo i file immagine di dist/_astro
 * che non compaiono in nessun HTML/CSS generato. Sicuro per definizione:
 * cancella esclusivamente ciò che non è linkato da nessuna parte.
 */
import { readdir, readFile, stat, unlink } from 'node:fs/promises';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const ASSET_DIR = join(DIST, '_astro');
const PRUNABLE = /\.(jpe?g|png|gif|tiff?|avif)$/i; // NON i .webp: quelli sono gli output usati

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = await walk(DIST);
// Testo di tutti gli HTML/CSS/JS: se un nome file vi compare, è referenziato.
const textFiles = files.filter((f) => /\.(html|css|js|xml|json)$/i.test(f));
let haystack = '';
for (const f of textFiles) haystack += await readFile(f, 'utf8');

const candidates = files.filter((f) => f.startsWith(ASSET_DIR) && PRUNABLE.test(f));
let removed = 0;
let bytes = 0;
for (const f of candidates) {
  if (!haystack.includes(basename(f))) {
    bytes += (await stat(f)).size;
    await unlink(f);
    removed++;
  }
}
console.log(`prune: rimossi ${removed} originali non referenziati (${(bytes / 1048576).toFixed(1)} MB)`);

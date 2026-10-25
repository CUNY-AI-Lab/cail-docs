// Checks that every relative link and asset in the documentation sets resolves
// to a file in this repository. Root-relative and absolute links belong to the
// app that serves each set and are left alone.
//
//   node scripts/check-links.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sets = ['sandbox', 'stem-splitter', 'systems-mapping'];
const failures = [];

const isLocal = raw => raw && !/^(?:[a-z][a-z0-9+.-]*:|\/|#)/i.test(raw);

function check(file, raw) {
  if (!isLocal(raw)) return;
  const target = decodeURIComponent(raw.split(/[?#]/, 1)[0]);
  if (!target) return;
  const resolved = path.resolve(path.dirname(file), target);
  if (!resolved.startsWith(repo + path.sep) || !fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
    failures.push(`${path.relative(repo, file)} -> ${raw}`);
  }
}

for (const set of sets) {
  const dir = path.join(repo, set);
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const text = fs.statSync(file).isFile() && /\.(html|md)$/.test(name) ? fs.readFileSync(file, 'utf8') : null;
    if (text === null) continue;
    if (name.endsWith('.html')) {
      for (const match of text.matchAll(/\b(?:href|src)="([^"]*)"/g)) check(file, match[1].replace(/&amp;/g, '&'));
    } else {
      for (const match of text.matchAll(/!?\[[^\]]*\]\(\s*(?:<([^>]*)>|([^\s)]*))(?:\s+["'][^)]*["'])?\s*\)/g)) check(file, match[1] ?? match[2]);
    }
  }
}

if (failures.length) {
  console.error('Broken local references:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`Links check passed across ${sets.join(', ')}.`);

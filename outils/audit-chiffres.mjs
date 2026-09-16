// Repere les chiffres et preuves sociales affiches sur le site, pour verifier
// lesquels reposent sur des faits. Outil de relecture, il ne modifie rien.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const MOTIFS = [
  /randomuser/i,
  /\b9[0-9]\s*%/,
  /\b100\s*%/,
  /satisfait/i,
  /\bclients?\b.*\b\d{2,}\b/i,
  /\+\s*\d[\d\s]*\s*(projets|clients|articles|agents)/i,
];

const IGNORE = new Set(["node_modules", ".git", "dist", "Media", "public"]);
const out = [];

function parcourir(d) {
  for (const nom of readdirSync(d)) {
    if (IGNORE.has(nom)) continue;
    const c = join(d, nom);
    if (statSync(c).isDirectory()) {
      parcourir(c);
      continue;
    }
    if (!/\.(tsx?|json)$/.test(nom)) continue;
    readFileSync(c, "utf8")
      .split(/\r?\n/)
      .forEach((l, i) => {
        if (MOTIFS.some((m) => m.test(l))) {
          out.push(`${c}:${i + 1}  ${l.trim().slice(0, 130)}`);
        }
      });
  }
}

parcourir(".");
console.log(out.join("\n"));
console.log(`\n${out.length} lignes a verifier.`);

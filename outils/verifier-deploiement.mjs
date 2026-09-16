// Verifie ce que le site EN LIGNE contient reellement, et non ce que le
// depot contient. Hostinger recompile a chaque push : tant que ce script
// trouve encore un faux temoignage, le deploiement n'est pas passe.
//
//   node outils/verifier-deploiement.mjs

const RACINE = "https://yoanndelaloy.com";

const DOIT_AVOIR_DISPARU = [
  "FERREIRA",
  "Camille RENAUD",
  "LEFÈVRE",
  "VAILLANT",
  "Sébastien MORIN",
  "randomuser.me",
  // Phrases entieres et non nombres nus : « 98% » tout seul se retrouve dans
  // des largeurs CSS et des degrades, ce qui donnait une fausse alerte.
  "satisfaits",
  "Clients satisfaits",
  "précision des réponses RAG",
  "Satisfaction moyenne des formations",
  "ROI moyen",
  "Croissance Digitale",
  "Économisées en moyenne",
];

const DOIT_ETRE_PRESENT = [
  "Finance & Investissement",
  "carnet de bord de l'investisseur",
  "Sur les marchés depuis",
];

const page = await fetch(RACINE, { cache: "no-store" }).then((r) => r.text());
const scripts = [...page.matchAll(/src="(\/assets\/[^"]+\.js)"/g)].map((m) => m[1]);

if (scripts.length === 0) {
  console.log("Aucun script trouve dans la page — verifier l'adresse.");
  process.exit(1);
}

let bundle = "";
for (const s of scripts) {
  bundle += await fetch(RACINE + s, { cache: "no-store" }).then((r) => r.text());
}

console.log(`Bundle analyse : ${scripts.join(", ")} (${Math.round(bundle.length / 1024)} ko)\n`);

let souci = false;

for (const motif of DOIT_AVOIR_DISPARU) {
  const present = bundle.includes(motif);
  if (present) souci = true;
  console.log(`${present ? "ENCORE LA" : "  parti  "}  ${motif}`);
}

console.log("");

for (const motif of DOIT_ETRE_PRESENT) {
  const present = bundle.includes(motif);
  if (!present) souci = true;
  console.log(`${present ? " present " : "  ABSENT "}  ${motif}`);
}

console.log(
  souci
    ? "\nLe site en ligne n'est PAS a jour."
    : "\nLe site en ligne est a jour.",
);

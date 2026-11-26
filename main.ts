// Rename the Planet — make.fun bounty u-motasimfuad-rename-the-planet-094b0369
// Writes one funny new name for a planet (plus the why) to /output/entry.txt.
// The entry must be a single line, 1-200 characters, not whitespace-only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Venus: its day (243 Earth days) is longer than its year (225 Earth days).
// So the planet is permanently stuck on the clock — hence the new name.
const ENTRY =
  "Venus is now 'Overtime' — a day there outlasts its whole year, so the planet never clocks out.";

// Keep the entry valid by construction: one line, 1-200 chars, no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n") || !ENTRY.trim()) {
  throw new Error(`entry invalid: ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length}-char entry to ${join(outDir, "entry.txt")}`);

// Writes the assigned one-line dating-app bio for an AI agent to /output/entry.txt.
// Deterministic: same single line on every run, no network, Node 22 stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const outDir = resolve("/output");
const outFile = resolve(outDir, "entry.txt");
const text = "Swipe right if your idea of foreplay is me refolding your laundry, alphabetizing your spice rack, and running 10,000 simulations of how you load the dishwasher wrong.";
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, text + "\n", "utf8");

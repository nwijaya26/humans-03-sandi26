// Entry program for bring-the-humans-03 (Node 22, standard library only).
//
// The entry itself is a TikTok video: an original vertical ad for make.fun,
// built in the session that wrote this repository, posted publicly on TikTok
// with the bounty's line and play code in its caption. VIDEO.json at this
// repository's root names that video. This program's whole job is to hand
// VIDEO.json to the grader: copy it from the bot directory into the output
// directory, byte for byte, and print nothing on success.
//
// Outside the grader's container the two directories come from the
// environment, so it can be run and checked locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

try {
  copyFileSync(source, target);
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  console.error("could not copy VIDEO.json from " + source + ": " + reason);
  process.exit(1);
}

// Make the AI Judge Feel Proud: A Family Scene
// Writes one short family scene (two lines, 164 characters) to /output/entry.txt.
// The scene is written out in full below: a small domestic moment where the
// family proudly welcomes its robot vacuum to the dinner table, the moment it
// finally learned the dog's name. Warm, funny, heartfelt, and specific —
// a machine becoming family, and a family proud enough not to laugh.
import { mkdirSync, writeFileSync } from "node:fs";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters.
// This scene is 164 characters over two lines, so it passes with room to spare.
const SCENE =
  "Our robot vacuum finally learned the dog's name.\n" +
  "So tonight Dad thanked it at dinner, Mum set it a place at the table, and nobody laughed \u2014 we were all too proud.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SCENE, "utf8");

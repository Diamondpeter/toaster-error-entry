// The Funniest Toaster Error Message — make.fun entry.
// Writes one line, at most 120 characters, to /output/entry.txt:
// the error message a kitchen toaster shows its owner.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Error: Pop-up failed. Your toast is still in here. So is my dignity. Come get us both.";

function main(): void {
  // The gate needs 1-120 characters of UTF-8 text, not only whitespace.
  // Count in characters, as the gate does; the line is plain ASCII, so
  // bytes and characters agree here.
  const bytes = Buffer.byteLength(LINE, "utf8");
  if (LINE.length < 1 || LINE.length > 120 || bytes > 120 || LINE.trim().length === 0) {
    throw new Error(`entry line is ${LINE.length} characters, must be 1-120`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();

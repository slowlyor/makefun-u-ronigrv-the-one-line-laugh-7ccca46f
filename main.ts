// The One-Line Laugh — writes exactly one funny sentence to /output/entry.txt.
// Deterministic, stdlib only, no network or model calls.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My phone says I spent six hours on it yesterday, mostly researching how to spend less time on my phone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

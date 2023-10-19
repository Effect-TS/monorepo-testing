import { defineProject } from "vitest/config"

import path from "node:path"


export default defineProject({
  test: {
    include: ["test/**/*.ts"],
    exclude: ["test/util.ts", "test/utils/**/*.ts"],
    globals: true
  },
  resolve: {
    alias: {
      "effect": path.join(__dirname, "src"),
      "effect-test": path.join(__dirname, "test"),
    }
  }
})

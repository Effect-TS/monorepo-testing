/// <reference types="vitest" />
import path from "node:path"
import { defineProject } from "vitest/config"

export default defineProject({
  test: {
    include: ["test/**/*.ts"],
    exclude: ["test/util.ts", "test/utils/**/*.ts"],
    globals: true
  },
  resolve: {
    alias: {
      "effect": path.join(__dirname, "src"),
      "effect-test": path.join(__dirname, "test")
    }
  }
})

import * as path from "path"
import { defineProject } from "vitest/config"

// This is a workaround, see https://github.com/vitest-dev/vitest/issues/4744
export default defineProject({
  test: {
    alias: {
      "effect-test": path.join(__dirname, "packages/effect/test"),
      "effect": path.join(__dirname, "packages/effect/src")
    }
  }
})

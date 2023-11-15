import * as path from "path"
import { defineWorkspace, mergeConfig, type UserWorkspaceConfig } from "vitest/config"

// Remaining issues:
// - Random failures (browser): https://github.com/vitest-dev/vitest/issues/4497
// - Alias resolution (browser, has workaround): https://github.com/vitest-dev/vitest/issues/4744
// - Workspace optimization: https://github.com/vitest-dev/vitest/issues/4746

const defineProject = (pkg: string, name: string, config?: UserWorkspaceConfig["test"]) =>
  mergeConfig({
    extends: "vitest.aliases.ts",
    root: path.join(__dirname, pkg),
    test: { name, ...config }
  }, config)

export default defineWorkspace([
  defineProject("packages/effect", "effect", {
    fakeTimers: {
      toFake: undefined
    }
  }),
  defineProject("packages/effect", "effect:edge", {
    fakeTimers: {
      toFake: undefined
    },
    environment: "edge-runtime"
  }),
  defineProject("packages/effect", "effect:chromium", {
    fakeTimers: {
      toFake: undefined
    },
    browser: {
      provider: "playwright",
      name: "chromium",
      enabled: true,
      headless: true
    }
  })
])
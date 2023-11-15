import { defineConfig, mergeConfig } from "vitest/config"
import sharedConfig from "../../vitest.shared"

export default mergeConfig(
  sharedConfig,
  defineConfig({
    test: {
      include: ["./test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      exclude: ["./test/util.ts", "./test/utils/**/*.ts", "./test/**/*.init.ts"],
      browser: {
        name: "chromium",
        provider: "playwright",
        headless: true
      },
      fakeTimers: { toFake: undefined }
    },
  })
)

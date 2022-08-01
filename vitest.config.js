import { defineConfig } from "vitest/config";

export default defineConfig({
    define: {
        "import.meta.vitest": "undefined",
    },
    test: {
        globals: true,
        includeSource: ["src/**/*.{js,ts}"],
        coverage: {
            reporter: ["text", "html"],
        },
        environment: "jsdom",
        setupFiles: "./src/test/test-setup.js"
    },
});

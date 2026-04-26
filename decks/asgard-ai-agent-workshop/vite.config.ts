/// <reference types="vitest/config" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Allow ngrok subdomain wildcards so tunnels can reach the dev server.
    // (Vite 5+ blocks unknown Host headers by default.)
    allowedHosts: [".ngrok-free.app", ".ngrok.app", ".ngrok.io"],
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});

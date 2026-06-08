import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "node_modules"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["deck-kit/*"],
              message: "Import from 'deck-kit' (the barrel), not deep paths.",
            },
          ],
        },
      ],
    },
  },
  {
    // Slides MUST export `meta` and `notes` alongside the default component
    // (the slide module contract). React Refresh's "only-export-components"
    // rule is not useful here — slides are content, not stateful UI.
    files: ["src/slides/**/*.tsx"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
]);

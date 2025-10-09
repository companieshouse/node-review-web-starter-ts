// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      // Temporarily turn off @typescript-eslint/no-explicit-any
      "@typescript-eslint/no-explicit-any": "off",
      // Sometimes in Express middlewares there are unused variables,
      // for these exceptions we can use an underscore, e.g. _next.
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    }
  }
);

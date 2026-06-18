import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import eslintPluginAva from 'eslint-plugin-ava';
import eslintPluginImportX, { flatConfigs as eslintPluginImportXConfigs } from 'eslint-plugin-import-x';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginSecurity from 'eslint-plugin-security';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

// tag::rules[]
const rules = {
  ...eslintPluginAva.configs.recommended.rules,
  ...eslintPluginImportXConfigs.recommended.rules,
  ...eslintPluginPromise.configs.recommended.rules,
  ...eslintPluginSecurity.configs.recommended.rules,
  ...eslintPluginUnicorn.configs.recommended.rules,
  // https://prettier.io/docs/en/integrating-with-linters.html#use-eslint-to-run-prettier
  // https://github.com/prettier/eslint-plugin-prettier#options
  'prettier/prettier': [
    'error',
    // https://prettier.io/docs/en/configuration.html#basic-configuration
    {
      // https://prettier.io/docs/en/options.html#quotes
      singleQuote: true,
      // https://prettier.io/docs/en/options.html#semicolons
      semi: true,
      // https://prettier.io/docs/en/options.html#tab-width
      tabWidth: 2,
      // https://prettier.io/docs/en/options.html#print-width
      printWidth: 120,
    },
  ],
  // https://eslint.org/docs/rules/no-unused-vars#ignorerestsiblings
  'no-unused-vars': ['error', { ignoreRestSiblings: true }],
  // https://eslint.org/docs/rules/prefer-const
  'prefer-const': 'error',
  // https://eslint.org/docs/rules/no-alert
  'no-alert': 'error',
  // https://eslint.org/docs/rules/no-console
  'no-console': 'error',
  // https://eslint.org/docs/rules/no-var
  'no-var': 'error',
  // https://eslint.org/docs/rules/linebreak-style
  'linebreak-style': ['error', 'unix'],
  // https://eslint.org/docs/rules/complexity
  complexity: ['error', { max: 20 }],
  // https://eslint.org/docs/rules/max-statements
  'max-statements': ['error', { max: 15 }],
  // https://eslint.org/docs/rules/max-statements-per-line
  'max-statements-per-line': ['error', { max: 1 }],
  // https://eslint.org/docs/rules/max-nested-callbacks
  'max-nested-callbacks': ['error', { max: 3 }],
  // https://eslint.org/docs/rules/max-depth
  'max-depth': ['error', { max: 4 }],
  // https://eslint.org/docs/rules/max-params
  'max-params': ['error', { max: 3 }],
  // https://eslint.org/docs/rules/no-nested-ternary
  'no-nested-ternary': 'error',
  // https://eslint.org/docs/rules/no-trailing-spaces
  'no-trailing-spaces': 'error',
  // https://eslint.org/docs/rules/one-var
  'one-var': ['error', 'never'],
  // https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/prefer-power-assert.md
  'ava/prefer-power-assert': 'warn',
  // https://github.com/import-js/eslint-plugin-import/issues/2703
  'import-x/no-unresolved': 'off',
  'unicorn/filename-case': [
    'error',
    {
      ignore: ['__tests__'],
      multipleFileExtensions: false,
    }
  ],
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v52.0.0/docs/rules/no-anonymous-default-export.md
  'unicorn/no-anonymous-default-export': 'off',
};
// end::rules[]

const plugins = {
  ava: eslintPluginAva,
  'import-x': eslintPluginImportX,
  promise: eslintPluginPromise,
  security: eslintPluginSecurity,
  unicorn: eslintPluginUnicorn,
  js,
};

const settings = {
  'import-x/core-modules': ['ava'],
};

export default defineConfig([
  globalIgnores(['**/node_modules', '**/coverage', '/__tests__', '**/vendor.d.ts']),
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    extends: ['js/recommended'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules,
    plugins,
    settings,
  },
  {
    files: ['**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx'],
    extends: ['js/recommended', tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      globals: {
        ...globals.node,
      },
    },
    // tag::ts-rules[]
    rules: {
      ...rules,
      // The base no-unused-vars rule is disabled in favour of the TypeScript-aware one.
      // https://typescript-eslint.io/rules/no-unused-vars/
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    },
    // end::ts-rules[]
    plugins: {
      ...plugins,
      '@typescript-eslint': tseslint.plugin,
    },
    settings,
  },
  eslintPluginPrettier,
]);

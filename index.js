const unicorn = require('eslint-plugin-unicorn');

module.exports = {
  env: {
    es6: true,
    node: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:ava/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:unicorn/recommended',
  ],
  rules:
  // tag::rules[]
  {
    // eslint-plugin-unicorn will only produce warnings for now
    ...Object.fromEntries(Object.entries(unicorn.configs.recommended.rules).map(
      ([rule, setting]) => setting === 'error' ? [rule, 'warn'] : [rule, setting]
    )),
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
    complexity: ['error', { max: 5 }],
    // https://eslint.org/docs/rules/max-statements
    'max-statements': ['error', { max: 10 }],
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['error', { max: 1 }],
    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': ['error', { max: 2 }],
    // https://eslint.org/docs/rules/max-depth
    'max-depth': ['error', { max: 2 }],
    // https://eslint.org/docs/rules/max-params
    'max-params': ['error', {max: 3}],
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',
    // https://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],
    // https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/prefer-power-assert.md
    'ava/prefer-power-assert': 'warn',
  },
  // end::rules[]
};

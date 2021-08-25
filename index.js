module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:node/recommended',
    'plugin:promise/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules:
  // tag::rules[]
  {
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
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
    'node/no-unpublished-import': 'off',
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
    'max-statements': ['error', { max: 7 }],
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['error', { max: 1 }],
    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': ['error', { max: 2 }],
    // https://eslint.org/docs/rules/max-depth
    'max-depth': ['error', { max: 2 }],
    // https://eslint.org/docs/rules/max-params
    'max-params': ['error', {max: 3}],
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',
    // https://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],
  },
  // end::rules[]
};

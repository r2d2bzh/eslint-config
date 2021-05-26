module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules":
  // tag::rules[]
  {
    // https://prettier.io/docs/en/integrating-with-linters.html#use-eslint-to-run-prettier
    // https://github.com/prettier/eslint-plugin-prettier#options
    "prettier/prettier": [
      "error",
      // https://prettier.io/docs/en/configuration.html#basic-configuration
      {
        // https://prettier.io/docs/en/options.html#quotes
        "singleQuote": true,
        // https://prettier.io/docs/en/options.html#semicolons
        "semi": true,
        // https://prettier.io/docs/en/options.html#tab-width
        "tabWidth": 2,
        // https://prettier.io/docs/en/options.html#print-width
        "printWidth": 120
      }
    ],
    // https://eslint.org/docs/rules/no-unused-vars#ignorerestsiblings
    "no-unused-vars": ["error", { "ignoreRestSiblings": true }],
    // https://eslint.org/docs/rules/prefer-const
    "prefer-const": "error",
    // https://eslint.org/docs/rules/no-console
    "no-console": "off",
    // https://eslint.org/docs/rules/no-var
    "no-var": "error",
    // https://eslint.org/docs/rules/linebreak-style
    "linebreak-style": ["error", "unix"],
    // https://eslint.org/docs/rules/complexity
    "complexity": [1, 5],
    // https://eslint.org/docs/rules/max-statements
    "max-statements": [1, 7],
    "max-statements-per-line": [1, {
      "max": 1
    }],
    "max-nested-callbacks": [1, 2],
    "max-depth": [1, {
      "max": 2
    }],
  }
  // end::rules[]
};

const path = require('path')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    'jsx-control-statements/jsx-control-statements': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-control-statements/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'jsx-control-statements',
    'prettier',
  ],
  rules: {
    'no-extra-semi': 2,
    quotes: ['error', 'single'],
    'no-unused-vars': 0,
    'jsx-control-statements/jsx-use-if-tag': 0,
  },
}

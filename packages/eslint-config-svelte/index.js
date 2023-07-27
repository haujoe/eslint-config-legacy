// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: [
    '@flynoe/eslint-config-ts',
    'plugin:svelte/recommended',
    // For Prettier
    'plugin:svelte/prettier',
  ],
  parserOptions: {
    extraFileExtensions: ['.svelte'],
  },
  overrides: [
    {
      plugins: ['svelte'],
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
})

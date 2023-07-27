# @flynoe/eslint-config and @flynoe/prettier-config

[![npm](https://img.shields.io/npm/v/@flynoe/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@flynoe/eslint-config)

> Forked from [so1ve/eslint-config](https://github.com/so1ve/eslint-config)

## Features

Strongly opinionated to satisfy the author([@flynoe](https://github.com/flynoe))'s need. It aims to make every part of code to have the same looking - anyone who writes code will be formatted in the same style. It also tries to unify the code logic, for example, it will change negated comparison(`!(a == 1)`) to a not-negated version(`a != 1` and change functions with a lone return statement to an arrow function sorthand, and the rest will be converted to function declaration.

- Double quotes, with semi
- Use tabs for indent
- Auto fix for formatting (Powered by [Prettier](https://github.com/prettier/prettier))
- TypeScript, Vue, React, Svelte, Solid out-of-box!
- Lint also for json, yaml, markdown, html
- Sorted imports, dangling commas for cleaner commit diff
- Autofix for syntax errors, e.g. automatically add `async` keyword when using `await` in a non-async function
- Focused on consistent code style, with custom rules to enforce style
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint prettier @flynoe/eslint-config @flynoe/prettier-config
```

### Config `.eslintrc` and `.prettierrc.cjs`

```json
{
  "extends": "@flynoe"
}
```

```js
module.exports = require('@flynoe/prettier-config')
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint . && prettier . --check",
    "lint:fix": "eslint . -- fix && prettier . --write"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.vscode-prettier",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

Published under [Apache-2.0 License](./LICENCE).

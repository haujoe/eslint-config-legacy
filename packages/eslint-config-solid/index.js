// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
	extends: [
		"@flynoe/eslint-config-ts",
		"plugin:solid/typescript",
		"plugin:solid/recommended",
	],
});

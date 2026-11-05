import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

const typescriptConfigs = /** @type {import('eslint').Linter.Config[]} */ (
	tsPlugin.configs['flat/recommended']
);

export default [
	{
		ignores: [
			'.DS_Store',
			'.env',
			'.env.*',
			'!.env.example',
			'.svelte-kit/**',
			'build/**',
			'package/**',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock'
		]
	},
	js.configs.recommended,
	...typescriptConfigs,
	...svelte.configs['flat/base'],
	{
		files: ['**/*.{js,ts,svelte}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tsParser
			}
		},
		rules: {
			'no-undef': 'off',
			'@typescript-eslint/no-explicit-any': 'off'
		}
	}
];

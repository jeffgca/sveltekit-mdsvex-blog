import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import mdsvexConfig from './mdsvex.config.js';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sveltekit({
			extensions: ['.svelte', ...(mdsvexConfig.extensions ?? [])],
			preprocess: [mdsvex(mdsvexConfig)],
			adapter: adapter({ strict: false })
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

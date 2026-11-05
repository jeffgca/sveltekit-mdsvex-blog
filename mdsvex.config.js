import remarkGithub from 'remark-github';
import remarkAbbr from 'remark-abbr';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { defineMDSveXConfig as defineConfig } from 'mdsvex';

// Rehype's Root-specific tree type is compatible at runtime but narrower than mdsvex's Plugin type.
const rehypePlugins = /** @type {import('mdsvex').MdsvexOptions['rehypePlugins']} */ (
	/** @type {unknown} */ ([
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap'
			}
		]
	])
);

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [
		[
			remarkGithub,
			{
				// TODO: Replace with your own repository
				repository: 'https://github.com/mvasigh/sveltekit-mdsvex-blog.git'
			}
		],
		remarkAbbr
	],
	rehypePlugins
});

export default config;

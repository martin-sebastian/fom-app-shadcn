import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Alias configuration
		alias: {
			'@': './src', // Alias '@' to './src'
			$lib: './src/lib' // Alias '$lib' to './src/lib'
		}
	}
};

export default config;

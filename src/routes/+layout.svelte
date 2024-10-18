<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import { Sun, Moon } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
	import '../app.css';
</script>

<!-- Watch for theme changes -->
<ModeWatcher />
<div class="app">
	<header>
		<div class="flex justify-between border-b border-gray-200 p-4 dark:border-gray-800">
			<div class="flex justify-start">
				<a href="/" class="mr-4">Home</a>
				<a href="/about" class="mr-4">About</a>
			</div>
			<div class="flex justify-end">
				<!-- Include the light switch button inside the layout -->
				<button class="flex" on:click={toggleMode}>
					<Sun class="scale-100 transition-all dark:rotate-90 dark:scale-0" />
					<Moon class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span class="sr-only">Toggle theme</span>
				</button>
			</div>
		</div>
	</header>

	<main>
		<slot></slot>
	</main>

	<footer>
		<div class="flex w-full border-t border-gray-200 p-4 dark:border-gray-800">
			<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import 'uno.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>vowsmarry</title>
</svelte:head>

{@render children?.()}

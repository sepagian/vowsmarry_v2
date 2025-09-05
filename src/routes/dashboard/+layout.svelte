<script>
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import AppSidebar from '$lib/components/sidebar/app-sidebar.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="alternate icon" href="/favicon.ico" />
	<title>Dashboard - WedPlan</title>
</svelte:head>

<ModeWatcher />

<Sidebar.Provider>
	<AppSidebar />
	<main class="flex flex-1 flex-col overflow-y-auto">
		{@render children()}
	</main>
</Sidebar.Provider>

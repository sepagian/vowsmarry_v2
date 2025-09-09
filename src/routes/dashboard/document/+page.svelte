<script lang="ts">
	import SectionCards from '$lib/components/section/section-cards.svelte';

	const overviewCards = [
		{
			title: '2',
			description: 'All Documents',
			actionClass: 'i-lucide:badge-check',
			actionColor: 'bg-green-500 text-white',
			footer: 'Updated 5 minutes ago'
		},
		{
			title: '5',
			description: 'Processed',
			actionClass: 'i-lucide:badge-minus',
			actionColor: 'bg-yellow-500 text-white',
			footer: 'Updated 10 minutes ago'
		},
		{
			title: '0',
			description: 'Pending',
			actionClass: 'i-lucide:badge-alert',
			actionColor: 'bg-red-500 text-white',
			footer: 'Updated 2 minutes ago'
		},
		{
			title: '7',
			description: 'Total',
			actionClass: 'i-lucide:badge-info',
			actionColor: 'bg-blue-500 text-white',
			footer: 'Updated 1 hour ago'
		}
	];
	const overviewTitle = 'Document Overview';
</script>

<div class="flex flex-1 flex-col gap-4 py-4 max-w-screen-lg mx-auto">
	<SectionCards {overviewCards} {overviewTitle} />
</div>

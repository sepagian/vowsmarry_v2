<script>
	import SectionCards from '$lib/components/sidebar/section-cards.svelte';
	import SiteHeader from '$lib/components/sidebar/site-header.svelte';

	const data = [
		{
			title: '12',
			description: 'Tasks',
			action: 'Active',
			footer: 'Updated 5 minutes ago'
		},
		{
			title: 'Rp50.000.000',
			description: 'Budget',
			footer: 'Updated 10 minutes ago'
		},
		{
			title: '5',
			description: 'Document',
			action: 'Today',
			footer: 'Updated 2 minutes ago'
		},
		{
			title: '4',
			description: 'Vendor',
			action: 'This Month',
			footer: 'Updated 1 hour ago'
		}
	];
</script>

<SiteHeader />
<div class="flex flex-col">
	<SectionCards {data} />
</div>

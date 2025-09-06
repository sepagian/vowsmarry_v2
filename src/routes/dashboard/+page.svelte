<script>
	import SiteHeader from '$lib/components/sidebar/site-header.svelte';
	import SectionCards from '$lib/components/section/section-cards.svelte';
	import SectionTodo from '$lib/components/section/section-todo.svelte';

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
<div class="flex flex-col gap-4">
	<SectionCards {data} />
	<SectionTodo />
</div>

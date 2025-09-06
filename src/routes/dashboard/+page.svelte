<script>
	import SiteHeader from '$lib/components/sidebar/site-header.svelte';
	import SectionCards from '$lib/components/section/section-cards.svelte';
	import SectionTodo from '$lib/components/section/section-todo.svelte';
	import SectionBudget from '$lib/components/section/section-budget.svelte';

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

	const budgetData = [
		{
			title: 'Rp20.000.000',
			description: 'Total Budget',
			footer: 'Updated 1 day ago'
		},
		{
			title: 'Rp15.000.000',
			description: 'Amount Spent',
			footer: 'Updated 2 days ago'
		},
		{
			title: 'Rp5.000.000',
			description: 'Remaining Budget',
			footer: 'Updated 3 days ago'
		}
	];
</script>

<SiteHeader />
<div class="flex flex-col gap-4">
	<SectionCards {data} />
	<SectionTodo />
	<SectionBudget {budgetData} />
</div>

<script>
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
			title: 'Rp50.000.000',
			description: 'Total Budget',
			footer: 'Updated 1 day ago'
		},
		{
			title: 'Rp30.000.000',
			description: 'Amount Spent',
			footer: 'Updated 2 days ago'
		},
		{
			title: 'Rp20.000.000',
			description: 'Remaining Budget',
			footer: 'Updated 3 days ago'
		}
	];

	const tasks = [
		{
			title: 'Create Wedding Website',
			description: 'Design and launch the wedding website for guests.',
			status: 'on-going'
		},
		{
			title: 'Send Invitations',
			description: 'Mail out physical invitations to all guests.',
			status: 'pending'
		},
		{
			title: 'Book Photographer',
			description: 'Finalize and book the wedding photographer.',
			status: 'complete'
		}
	];
</script>

<div class="flex flex-1 flex-col gap-4 py-4 min-h-[calc(100vh-3rem)]">
	<SectionCards {data} />
	<SectionTodo {tasks} />
	<SectionBudget {budgetData} />
</div>

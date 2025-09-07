<script>
	import SectionCards from '$lib/components/section/section-cards.svelte';
	import SectionTodo from '$lib/components/section/section-todo.svelte';
	import SectionBudget from '$lib/components/section/section-budget.svelte';
	import SectionDocs from '$lib/components/section/section-docs.svelte';

	const overviewCards = [
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

	const budgetCards = [
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
			description: 'Design and launch the wedding website for guests.'
		},
		{
			title: 'Send Invitations',
			description: 'Mail out physical invitations to all guests.'
		},
		{
			title: 'Book Photographer',
			description: 'Finalize and book the wedding photographer.'
		}
	];

	const docsCards = [
		{
			title: '1',
			description: 'Completed',
			footer: 'Updated 1 day ago'
		},
		{
			title: '1',
			description: 'In Progress',
			footer: 'Updated 2 days ago'
		},
		{
			title: '2',
			description: 'Overdue',
			footer: 'Updated 3 days ago'
		},
		{
			title: '4',
			description: 'Total',
			footer: 'Updated 3 days ago'
		}
	];
</script>

<div class="flex flex-1 flex-col gap-8 py-4 min-h-[calc(100vh-3rem)]">
	<SectionCards {overviewCards} />
	<SectionTodo {tasks} />
	<SectionBudget {budgetCards} />
	<SectionDocs {docsCards} />
</div>

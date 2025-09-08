<script lang="ts">
	import SectionCards from '$lib/components/section/section-cards.svelte';
	import SectionTodo from '$lib/components/section/section-todo.svelte';

	const overviewCards = [
		{
			title: '2',
			description: 'Completed',
			footer: 'Updated 5 minutes ago'
		},
		{
			title: '5',
			description: 'Pending',
			footer: 'Updated 10 minutes ago'
		},
		{
			title: '0',
			description: 'Overdue',
			footer: 'Updated 2 minutes ago'
		},
		{
			title: '7',
			description: 'Total',
			footer: 'Updated 1 hour ago'
		}
	];

	const overviewTitle = 'Task Overview';

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
</script>

<div class="flex flex-1 flex-col gap-8 py-4">
	<SectionCards {overviewCards} {overviewTitle} />
	<SectionTodo {tasks} />
</div>

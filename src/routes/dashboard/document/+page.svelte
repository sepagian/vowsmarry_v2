<script lang="ts">
	import SectionCards from '$lib/components/section/section-cards.svelte';
	import SectionDocs from '$lib/components/section/section-docs.svelte';

	const overviewCards = [
		{
			title: '2',
			description: 'Legal & Formal',
			actionClass: 'i-lucide:scale',
			actionColor: 'bg-green-500 text-white',
			footer: 'Updated 5 minutes ago'
		},
		{
			title: '5',
			description: 'Vendor & Finance',
			actionClass: 'i-lucide:scroll-text',
			actionColor: 'bg-yellow-500 text-white',
			footer: 'Updated 10 minutes ago'
		},
		{
			title: '3',
			description: 'Guests & Ceremony',
			actionClass: 'i-lucide:book-open-check',
			actionColor: 'bg-blue-500 text-white',
			footer: 'Updated 2 minutes ago'
		},
		{
			title: '7',
			description: 'Personal & Keepsakes',
			actionClass: 'i-lucide:heart',
			actionColor: 'bg-red-500 text-white',
			footer: 'Updated 1 hour ago'
		}
	];
	const overviewTitle = 'Document Overview';

	const docsCards = [
		{
			title: 'Marriage License',
			description: 'Official paperwork required to legally tie the knot.',
			footer: 'Uploaded on Sep 1, 2025'
		},
		{
			title: 'Venue Contract',
			description: 'Agreement with Rosewood Hall including deposit details.',
			footer: 'Uploaded on Aug 28, 2025'
		},
		{
			title: 'Photography Agreement',
			description: 'Package details and payment terms for wedding photography.',
			footer: 'Uploaded on Aug 25, 2025'
		},
		{
			title: 'Ceremony Program',
			description: 'Running order of events including readings and vows.',
			footer: 'Last edited on Sep 3, 2025'
		},
		{
			title: 'Vows Draft',
			description: 'Personal vow draft, marked as private.',
			footer: 'Saved on Sep 5, 2025'
		},
		{
			title: 'Budget Spreadsheet',
			description: 'Detailed expense tracking for all vendors and extras.',
			footer: 'Updated on Sep 7, 2025'
		}
	];
</script>

<div class="flex flex-1 flex-col gap-4 py-4 max-w-screen-lg mx-auto">
	<SectionCards {overviewCards} {overviewTitle} />
	<SectionDocs {docsCards} />
</div>

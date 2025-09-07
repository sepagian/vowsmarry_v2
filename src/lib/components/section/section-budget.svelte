<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index';
	import * as Card from '$lib/components/ui/card/index';
	import ExpenseTable from '$lib/components/table/expense-table.svelte';

	let {
		budgetCards
	}: {
		budgetCards: {
			title: string;
			description: string;
			action?: string;
			footer: string;
		}[];
	} = $props();
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col px-6">
		<h2 class="text-base font-bold text-neutral-600">Budget & Expenses</h2>
	</div>

	<div class="flex flex-col gap-1">
		<div
			class="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-6"
		>
			{#each budgetCards as data (data.description)}
				<Card.Root class="@container/card shrink-0 w-64 sm:w-auto gap-2">
					<Card.Header>
						<Card.Description>{data.description}</Card.Description>
						<Card.Title class="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
							{data.title}
						</Card.Title>
						<Card.Action>
							{#if data.action}
								<Badge variant="outline">{data.action}</Badge>
							{/if}
						</Card.Action>
					</Card.Header>
					<Card.Footer class="flex-col items-start text-sm">
						<div class="line-clamp-1 flex font-medium">
							{data.footer}
						</div>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>

		<div class="flex flex-col px-6">
			<ExpenseTable />
		</div>
	</div>
</div>

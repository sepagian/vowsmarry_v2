<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index';
	import * as Card from '$lib/components/ui/card/index';

	let {
		data
	}: {
		data: {
			title: string;
			description: string;
			action?: string;
			footer: string;
		}[];
	} = $props();
</script>

<div class="flex flex-col px-6">
	<h2 class="text-base font-bold text-neutral-600">Quick Glance</h2>
</div>

<div
	class="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6"
>
	{#each data as data (data.description)}
		<Card.Root class="@container/card shrink-0 w-64 sm:w-auto">
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

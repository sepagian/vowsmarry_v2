<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index';
	import * as Card from '$lib/components/ui/card/index';

	let {
		docsCards
	}: {
		docsCards: {
			description: string;
			type: DocType;
			action?: string;
			footer: string;
		}[];
	} = $props();

	const typeOptions: {
		value: DocType;
		label: string;
		icon: string;
	}[] = [
		{ value: 'legal-formal', label: 'Legal & Formal', icon: 'i-lucide:scale' },
		{ value: 'vendor-finance', label: 'Vendor & Finance', icon: 'i-lucide:scroll-text' },
		{ value: 'guest-ceremony', label: 'Guest & Ceremony', icon: 'i-lucide:book-open-check' },
		{ value: 'personal-keepsake', label: 'Personal & Keepsake', icon: 'i-lucide:heart' }
	];

	function getType(type: DocType) {
		return typeOptions.find((s) => s.value === type)?.label ?? '';
	}
	function getIcon(type: DocType) {
		return typeOptions.find((s) => s.value === type)?.icon ?? '';
	}
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col px-6">
		<h2 class="text-base font-bold text-neutral-600">Paperwork</h2>
	</div>

	<div class="flex flex-col gap-1">
		<div
			class="flex gap-4 scroll-smooth grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 px-6"
		>
			{#each docsCards as data (data.description)}
				<Card.Root class="@container/card flex flex-col justify-between items-start">
					<Card.Header>
						<div class="flex flex-col gap-2">
							<div class="inline-flex items-center gap-2">
								<Card.Description class="font-bold tracking-tight w-52 sm:w-fit capitalize">
									{data.description}
								</Card.Description>
							</div>
							<span class="rounded-md inline-flex items-center gap-1 text-xs font-medium">
								<div class={`${getIcon(data.type)}`}></div>
								{getType(data.type)}</span
							>
						</div>
						<Card.Action>
							{#if data.action}
								<Badge variant="outline">{data.action}</Badge>
							{/if}
						</Card.Action>
					</Card.Header>
					<Card.Footer>
						<div class="inline-flex items-center rounded-md text-xs gap-2 font-medium">
							<div class="i-lucide:calendar"></div>
							{data.footer}
						</div>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</div>
</div>

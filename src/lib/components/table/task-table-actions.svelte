<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	export let status: string;
	export let onChange: (newStatus: string) => void;

	const statusOptions = [
		{ value: 'Complete', color: 'bg-green-600 text-white' },
		{ value: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
		{ value: 'On Progress', color: 'bg-sky-200 text-sky-800' }
	];

	function getColor(status: string) {
		return (
			statusOptions.find((s) => s.value === status)?.color ?? 'bg-neutral-100 text-neutral-800'
		);
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={`rounded-md text-sm ${getColor(status)}`}>
		<button class={`rounded-md px-3 py-1 text-sm font-medium ${getColor(status)}`}>
			{status}
		</button>
	</DropdownMenu.Trigger>

	<DropdownMenu.Content class="bg-white">
		{#each statusOptions as s (s.value)}
			<DropdownMenu.Item class="flex items-center gap-2" onclick={() => onChange(s.value)}>
				{#if s.value === status}
					<div class="i-lucide:check h-4 w-4 text-gray-500"></div>
				{:else}
					<span class="h-4 w-4"></span>
				{/if}

				<span class={`inline-flex rounded-md px-2 py-1 text-xs font-medium ${s.color}`}>
					{s.value}
				</span>
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>

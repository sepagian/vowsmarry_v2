<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	export let status: Task['status'];
	export let onChange: (newStatus: Task['status']) => void;

	const statusOptions = [
		{ value: 'Complete', color: 'bg-green-600 text-white', icon: 'i-lucide:alarm-clock-check' },
		{
			value: 'Pending',
			color: 'bg-yellow-100 text-yellow-800',
			icon: 'i-lucide:alarm-clock-minus'
		},
		{ value: 'On Progress', color: 'bg-sky-200 text-sky-800', icon: 'i-lucide:alarm-clock' }
	];

	function getColor(status: Task['status']) {
		return (
			statusOptions.find((s) => s.value === status)?.color ?? 'bg-neutral-100 text-neutral-800'
		);
	}
	function getIcon(status: Task['status']) {
		return statusOptions.find((s) => s.value === status)?.icon ?? 'i-lucide:alarm-clock-minus';
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={`rounded-md text-sm ${getColor(status)}`}>
		<button
			class={`rounded-md px-3 inline-flex items-center gap-2 py-1 text-sm font-medium ${getColor(status)}`}
		>
			<div class={`${getIcon(status)}`}></div>
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

				<span
					class={`inline-flex rounded-md items-center gap-2 px-2 py-1 text-xs font-medium ${s.color}`}
				>
					<div class={`${s.icon}`}></div>
					{s.value}
				</span>
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>

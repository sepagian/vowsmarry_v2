<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { Button } from '$lib/components/ui/button/index';
	import * as Select from '$lib/components/ui/select/index';

	type TaskStatus = 'complete' | 'on-going' | 'pending';

	let {
		tasks
	}: {
		tasks: {
			title: string;
			description: string;
			status: TaskStatus;
		}[];
	} = $props();

	const statusOptions: { value: TaskStatus; label: string }[] = [
		{ value: 'complete', label: 'Complete' },
		{ value: 'on-going', label: 'Ongoing' },
		{ value: 'pending', label: 'Pending' }
	];
</script>

<!-- Header -->
<div class="flex px-6 justify-between items-center">
	<h2 class="text-base font-bold text-neutral-600">Upcoming Tasks</h2>
	<Button variant="outline" size="sm" class="items-center">
		<div class="i-lucide:plus"></div>
		<span class="hidden lg:inline">Add Task</span>
	</Button>
</div>

<!-- Profile completion alert -->
<div class="flex flex-col px-6 gap-4">
	<Card.Root class="@container/card flex flex-row justify-between items-center">
		<div class="w-full">
			<Card.Header>
				<Card.Title class="leading-6 text-base">Almost ready to plan your big day 🎉</Card.Title>
			</Card.Header>
			<Card.Content class="text-sm">
				<p>Complete your wedding profile to see tasks, invitations, and more.</p>
			</Card.Content>
		</div>
		<div class="w-fit justify-end flex px-6">
			<Button variant="outline" size="icon">
				<div class="i-lucide:chevron-right"></div>
			</Button>
		</div>
	</Card.Root>

	<!-- Task list -->
	{#each tasks as task (task.title)}
		<Card.Root class="@container/card flex flex-row justify-between items-center">
			<div class="w-full">
				<Card.Header>
					<Card.Title class="leading-6 text-base">{task.title}</Card.Title>
				</Card.Header>
				<Card.Content class="text-sm">
					<p>{task.description}</p>
				</Card.Content>
			</div>
			<div class="w-fit justify-end flex px-6">
				<Select.Root type="single" name="taskStatus" bind:value={task.status}>
					<Select.Trigger class="w-48 border border-neutral-300">
						{statusOptions.find((s) => s.value === task.status)?.label ?? 'Select status'}
					</Select.Trigger>
					<Select.Content class="w-48">
						<Select.Group>
							<Select.Label>Status</Select.Label>
							{#each statusOptions as status (status.value)}
								<Select.Item value={status.value} label={status.label}>
									{status.label}
								</Select.Item>
							{/each}
						</Select.Group>
					</Select.Content>
				</Select.Root>
			</div>
		</Card.Root>
	{/each}
</div>

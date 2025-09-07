<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index';
	import * as Select from '$lib/components/ui/select/index';
	import { Button } from '$lib/components/ui/button/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Textarea } from '$lib/components/ui/textarea/index';

	const categories = [
		{ value: 'accommodation', label: 'Accommodation' },
		{ value: 'catering', label: 'Catering' },
		{ value: 'decoration', label: 'Decoration' },
		{ value: 'entertainment', label: 'Entertainment' },
		{ value: 'makeup-attire', label: 'Make-up & Attire' },
		{ value: 'paperwork', label: 'Paperwork' },
		{ value: 'photo-video', label: 'Photo & Video' },
		{ value: 'venue', label: 'Venue' },
		{ value: 'miscellaneous', label: 'Miscellaneous' }
	];

	const priorities = [
		{ value: 'low', label: 'Low' },
		{ value: 'medium', label: 'Medium' },
		{ value: 'high', label: 'High' }
	];

	let value = $state('');

	const triggerCategory = $derived(
		value ? categories.find((c) => c.value === value)?.label : 'Pick a category'
	);

	const triggerPriority = $derived(
		value ? priorities.find((p) => p.value === value)?.label : 'Choose priority level'
	);
</script>

<Dialog.Content class="sm:max-w-[425px] bg-neutral-100">
	<Dialog.Header>
		<Dialog.Title>Add New Task</Dialog.Title>
		<Dialog.Description>
			<p>Write down what needs to be done for your wedding journey.</p>
		</Dialog.Description>
	</Dialog.Header>
	<div class="flex flex-col gap-4 py-4">
		<div class="flex flex-col items-start gap-2">
			<Label for="taskName" class="text-right">Task Title *</Label>
			<Input id="taskName" placeholder="e.g. Book the photographer" class="col-span-3" />
		</div>
		<div class="flex flex-col gap-2">
			<Label for="taskDescription" class="text-right">Description</Label>
			<Textarea
				id="taskDescription"
				placeholder="Add details or notes (optional)"
				class="col-span-3"
			/>
		</div>
		<div class="flex flex-col gap-2">
			<Label for="taskCategory" class="text-right">Category</Label>
			<Select.Root type="single" name="taskCategory" bind:value>
				<Select.Trigger class="w-full">
					{triggerCategory}
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						{#each categories as category (category.value)}
							<Select.Item value={category.value} label={category.label}>
								{category.label}
							</Select.Item>
						{/each}
					</Select.Group>
				</Select.Content>
			</Select.Root>
		</div>
		<div class="flex flex-col gap-2">
			<Label for="taskPriority" class="text-right">Priority</Label>
			<Select.Root type="single" name="taskPriority" bind:value>
				<Select.Trigger class="w-full">
					{triggerPriority}
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						{#each priorities as priority (priority.value)}
							<Select.Item value={priority.value} label={priority.label}>
								{priority.label}
							</Select.Item>
						{/each}
					</Select.Group>
				</Select.Content>
			</Select.Root>
		</div>
		<div class="flex flex-col gap-2">
			<Label for="taskDue" class="text-right">Due Date</Label>
			<Input type="date" id="taskDue" class="w-full" placeholder="Select date..." />
		</div>
	</div>
	<Dialog.Footer>
		<Button type="submit">Add Task</Button>
	</Dialog.Footer>
</Dialog.Content>

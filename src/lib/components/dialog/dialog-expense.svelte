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

	const statuses = [
		{ value: 'paid', label: 'Paid' },
		{ value: 'unpaid', label: 'Unpaid' }
	];

	let value = $state('');

	const triggerCategory = $derived(
		value ? categories.find((c) => c.value === value)?.label : 'Pick a category'
	);

	const triggerStatus = $derived(
		value ? statuses.find((p) => p.value === value)?.label : 'Payment status'
	);
</script>

<Dialog.Content class="sm:max-w-[425px] bg-neutral-100">
	<Dialog.Header>
		<Dialog.Title>Add an Expense</Dialog.Title>
		<Dialog.Description>
			<p>Keep track of where the budget goes — from flowers to fireworks.</p>
		</Dialog.Description>
	</Dialog.Header>
	<div class="flex flex-col gap-4 py-4">
		<div class="flex flex-col items-start gap-2">
			<Label for="expenseName" class="text-right">Expense Title *</Label>
			<Input id="expenseName" placeholder="e.g. Down payment for venue" class="col-span-3" />
		</div>
		<div class="flex flex-col gap-2">
			<Label for="expenseDescription" class="text-right">Description</Label>
			<Textarea
				id="expenseDescription"
				placeholder="Add details or notes (optional)"
				class="col-span-3"
			/>
		</div>
		<div class="flex flex-col gap-2">
			<Label for="expenseAmount" class="text-right">Amount</Label>
			<Input id="expenseAmount" placeholder="e.g. 2,500,000" class="col-span-3" />
		</div>

		<div class="flex flex-col gap-2">
			<Label for="expenseCategory" class="text-right">Category</Label>
			<Select.Root type="single" name="expenseCategory" bind:value>
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
			<Label for="expenseStatus" class="text-right">Status</Label>
			<Select.Root type="single" name="expenseStatus" bind:value>
				<Select.Trigger class="w-full">
					{triggerStatus}
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						{#each statuses as status (status.value)}
							<Select.Item value={status.value} label={status.label}>
								{status.label}
							</Select.Item>
						{/each}
					</Select.Group>
				</Select.Content>
			</Select.Root>
		</div>
		<div class="flex flex-col gap-2">
			<Label for="expenseDue" class="text-right">Date</Label>
			<Input type="date" id="expenseDue" class="w-full" placeholder="Select date..." />
		</div>
	</div>
	<Dialog.Footer>
		<Button type="submit">Add Expense</Button>
	</Dialog.Footer>
</Dialog.Content>

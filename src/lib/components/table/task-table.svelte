<script lang="ts">
	import {
		type ColumnDef,
		type ColumnFiltersState,
		type PaginationState,
		type RowSelectionState,
		type SortingState,
		type VisibilityState,
		type FilterFn,
		getCoreRowModel,
		getFilteredRowModel,
		getPaginationRowModel,
		getSortedRowModel
	} from '@tanstack/table-core';
	import { createRawSnippet } from 'svelte';
	import TaskTableCheckbox from './task-table-checkbox.svelte';
	import TaskTableActions from './task-table-actions.svelte';
	import * as Table from '$lib/components/ui/table/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import { Input } from '$lib/components/ui/input/index';
	import {
		FlexRender,
		createSvelteTable,
		renderComponent,
		renderSnippet
	} from '$lib/components/ui/data-table/index';
	import DialogTask from '../dialog/dialog-task.svelte';

	type Task = {
		id: string;
		title: string;
		description?: string;
		category: string;
		priority: 'Low' | 'Medium' | 'High';
		status: 'Pending' | 'On Progress' | 'Completed';
		date: string;
	};

	let { data }: { data: Task[] } = $props();

	const categoryColors: Record<string, string> = {
		accommodation: 'bg-blue-100 text-blue-800',
		catering: 'bg-red-100 text-red-800',
		decoration: 'bg-pink-100 text-pink-800',
		entertainment: 'bg-purple-100 text-purple-800',
		'makeup-attire': 'bg-rose-100 text-rose-800',
		paperwork: 'bg-amber-100 text-amber-800',
		'photo-video': 'bg-green-100 text-green-800',
		venue: 'bg-indigo-100 text-indigo-800',
		miscellaneous: 'bg-gray-100 text-gray-800'
	};

	const priorityColors: Record<Task['priority'], string> = {
		Low: 'bg-green-100 text-green-800',
		Medium: 'bg-yellow-100 text-yellow-800',
		High: 'bg-red-100 text-red-800'
	};

	const columns: ColumnDef<Task>[] = [
		{
			id: 'select',
			header: ({ table }) =>
				renderComponent(TaskTableCheckbox, {
					checked: table.getIsAllPageRowsSelected(),
					indeterminate: table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
					onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
					'aria-label': 'Select all'
				}),
			cell: ({ row }) =>
				renderComponent(TaskTableCheckbox, {
					checked: row.getIsSelected(),
					onCheckedChange: (value) => row.toggleSelected(!!value),
					'aria-label': 'Select row'
				}),
			enableSorting: false,
			enableHiding: false
		},
		{
			accessorKey: 'description',
			header: () => {
				const headerSnippet = createRawSnippet(() => ({
					render: () => `<div class="font-semibold">Task Description</div>`
				}));
				return renderSnippet(headerSnippet, '');
			},
			cell: ({ row }) => {
				const snippet = createRawSnippet<[{ category: string; description: string }]>(
					(getValue) => {
						const { category, description } = getValue();
						const colorClass = categoryColors[category] ?? 'bg-gray-100 text-gray-800';
						return {
							render: () =>
								`<div class="flex items-center gap-2">
             <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${colorClass}">
               ${category}
             </span>
             <span>${description}</span>
           </div>`
						};
					}
				);

				return renderSnippet(snippet, {
					category: row.original.category as string,
					description: row.original.description as string
				});
			}
		},
		{
			accessorKey: 'date',
			header: () => {
				const amountHeaderSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="font-semibold">Due Date</div>`
					};
				});
				return renderSnippet(amountHeaderSnippet, '');
			},
			cell: ({ row }) => {
				const taskSnippet = createRawSnippet<[string]>((getDate) => {
					const date = getDate();
					return {
						render: () =>
							`<div class="flex flex-row gap-2 items-center"><div class="i-lucide:calendar"></div>${date}</div>`
					};
				});

				return renderSnippet(taskSnippet, row.getValue('date'));
			}
		},
		{
			accessorKey: 'priority',
			header: () => {
				const amountHeaderSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="font-semibold">Priority</div>`
					};
				});
				return renderSnippet(amountHeaderSnippet, '');
			},
			cell: ({ row }) => {
				const snippet = createRawSnippet<[{ priority: Task['priority'] }]>((get) => {
					const { priority } = get();
					const colorClass = priorityColors[priority];
					return {
						render: () =>
							`<span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${colorClass}">
           ${priority}
         </span>`
					};
				});

				return renderSnippet(snippet, { priority: row.original.priority });
			}
		},

		{
			id: 'actions',
			accessorKey: 'status',
			header: () => {
				const amountHeaderSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="font-semibold">Status</div>`
					};
				});
				return renderSnippet(amountHeaderSnippet, '');
			},
			enableHiding: false,
			cell: ({ row }) => renderComponent(TaskTableActions, { status: row.original.status })
		}
	];

	let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 10 });
	let sorting = $state<SortingState>([]);
	let columnFilters = $state<ColumnFiltersState>([]);
	let rowSelection = $state<RowSelectionState>({});
	let columnVisibility = $state<VisibilityState>({});

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		state: {
			get pagination() {
				return pagination;
			},
			get sorting() {
				return sorting;
			},
			get columnVisibility() {
				return columnVisibility;
			},
			get rowSelection() {
				return rowSelection;
			},
			get columnFilters() {
				return columnFilters;
			}
		},
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onPaginationChange: (updater) => {
			if (typeof updater === 'function') {
				pagination = updater(pagination);
			} else {
				pagination = updater;
			}
		},
		onSortingChange: (updater) => {
			if (typeof updater === 'function') {
				sorting = updater(sorting);
			} else {
				sorting = updater;
			}
		},
		onColumnFiltersChange: (updater) => {
			if (typeof updater === 'function') {
				columnFilters = updater(columnFilters);
			} else {
				columnFilters = updater;
			}
		},
		onColumnVisibilityChange: (updater) => {
			if (typeof updater === 'function') {
				columnVisibility = updater(columnVisibility);
			} else {
				columnVisibility = updater;
			}
		},
		onRowSelectionChange: (updater) => {
			if (typeof updater === 'function') {
				rowSelection = updater(rowSelection);
			} else {
				rowSelection = updater;
			}
		}
	});
</script>

<div class="w-full px-6">
	<div class="flex items-center py-4 gap-4">
		<Input
			placeholder="Filter category..."
			value={(table.getState().globalFilter as string) ?? ''}
			oninput={(e) => {
				const val = e.currentTarget.value;
				table.getColumn('description')?.setFilterValue(val);
				table.getColumn('category')?.setFilterValue(val);
			}}
			onchange={(e) => {
				const val = e.currentTarget.value;
				table.getColumn('description')?.setFilterValue(val);
				table.getColumn('category')?.setFilterValue(val);
			}}
			class="max-w-sm border-1 border-neutral-200"
		/>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="outline" class="ml-auto items-center">
						<div class="i-lucide:columns-2"></div>
						View
						<div class="i-lucide:chevron-down ml-2"></div>
					</Button>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="end">
				{#each table.getAllColumns().filter((col) => col.getCanHide()) as column (column)}
					<DropdownMenu.CheckboxItem
						class="capitalize"
						bind:checked={() => column.getIsVisible(), (v) => column.toggleVisibility(!!v)}
					>
						{column.id}
					</DropdownMenu.CheckboxItem>
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({ variant: 'outline', size: 'default' })}>
				<div class="i-lucide:plus p-2"></div>
				<span class="hidden lg:inline">Add Task</span>
			</Dialog.Trigger>
			<DialogTask />
		</Dialog.Root>
	</div>
	<div class="rounded-md border">
		<Table.Root>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row>
						{#each headerGroup.headers as header (header.id)}
							<Table.Head class="[&:has([role=checkbox])]:pl-3">
								{#if !header.isPlaceholder}
									<FlexRender
										content={header.column.columnDef.header}
										context={header.getContext()}
									/>
								{/if}
							</Table.Head>
						{/each}
					</Table.Row>
				{/each}
			</Table.Header>
			<Table.Body>
				{#each table.getRowModel().rows as row (row.id)}
					<Table.Row data-state={row.getIsSelected() && 'selected'}>
						{#each row.getVisibleCells() as cell (cell.id)}
							<Table.Cell class="[&:has([role=checkbox])]:pl-3">
								<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
							</Table.Cell>
						{/each}
					</Table.Row>
				{:else}
					<Table.Row>
						<Table.Cell colspan={columns.length} class="h-24 text-center">No results.</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<div class="flex items-center justify-end space-x-2 pt-4">
		<div class="text-muted-foreground flex-1 text-sm">
			{table.getFilteredSelectedRowModel().rows.length} of
			{table.getFilteredRowModel().rows.length} row(s) selected.
		</div>
		<div class="space-x-2">
			<Button
				variant="outline"
				size="sm"
				onclick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
			>
				Previous
			</Button>
			<Button
				variant="outline"
				size="sm"
				onclick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
			>
				Next
			</Button>
		</div>
	</div>
</div>

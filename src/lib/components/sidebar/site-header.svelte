<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index';
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import { Separator } from '$lib/components/ui/separator/index';
	import AppearanceSwitcher from '../appearance-switcher.svelte';
	import { Button } from '$lib/components/ui/button/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
</script>

<div
	class="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-16 p-6 justify-between items-center gap-2 transition-[width,height] ease-linear"
>
	<div class="flex items-center gap-2">
		<Sidebar.Trigger class="h-4 w-4" />
		<Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item class="hidden md:block">
					<Breadcrumb.Link href="#">Building Your Application</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator class="hidden md:block" />
				<Breadcrumb.Item>
					<Breadcrumb.Page>Data Fetching</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</div>
	<div class="flex justify-end gap-4">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<Button variant="outline" size="sm" class="h-9"
					>Quick Actions
					<div class="i-lucide:chevron-down ml-auto"></div></Button
				>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Group>
					<DropdownMenu.Item>New Task</DropdownMenu.Item>
					<DropdownMenu.Item>Add Expense</DropdownMenu.Item>
					<DropdownMenu.Item>Upload Document</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>

		<AppearanceSwitcher />
	</div>
</div>

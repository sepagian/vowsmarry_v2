<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index';
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import { Separator } from '$lib/components/ui/separator/index';
	import AppearanceSwitcher from '../appearance-switcher.svelte';
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
	<AppearanceSwitcher />
</div>

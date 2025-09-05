<script lang="ts" module>
	const items = {
		user: {
			id: '1',
			name: 'Mawar Melati',
			email: 'm@example.com'
		},
		navMain: [
			{
				title: 'Planner',
				url: '##',
				icon: 'i-lucide:calendar',
				isActive: true,
				items: [
					{ title: 'Paperwork', icon: 'i-lucide:file-text', url: '/dashboard/paperwork' },
					{ title: 'Budget', icon: 'i-lucide:badge-dollar-sign', url: '/dashboard/budget' },
					{ title: 'Tasks', icon: 'i-lucide:check-square', url: '/dashboard/tasks' },
					{ title: 'Vendors', icon: 'i-lucide:users', url: '/dashboard/vendor' },
					{ title: 'Dresscode', icon: 'i-lucide:shirt', url: '/dashboard/dresscode' },
					{ title: 'Rundown', icon: 'i-lucide:list-check', url: '/dashboard/rundown' },
					{ title: 'Saving', icon: 'i-lucide:piggy-bank', url: '/dashboard/saving' },
					{ title: 'Dowry', icon: 'i-lucide:gem', url: '/dashboard/dowry' },
					{ title: 'Souvenir', icon: 'i-lucide:gift', url: '/dashboard/souvenir' }
				]
			},
			{
				title: 'Invitation',
				url: '##',
				icon: 'i-lucide:mail',
				items: [
					{ title: 'Overview', icon: 'i-lucide:briefcase', url: '/dashboard/invitation/' },
					{ title: 'Templates', icon: 'i-lucide:layout', url: '/dashboard/invitation/template' },
					{ title: 'Couple Details', icon: 'i-lucide:user', url: '/dashboard/invitation/details' },
					{ title: 'Guests', icon: 'i-lucide:users', url: '/dashboard/invitation/guests' },
					{ title: 'RSVP', icon: 'i-lucide:check-square', url: 'dashboard/invitation/rsvp' },
					{ title: 'Gallery', icon: 'i-lucide:image', url: '/dashboard/invitation/gallery' },
					{ title: 'Gifts', icon: 'i-lucide:gift', url: '/dashboard/invitation/gift' },
					{
						title: 'Love Story',
						icon: 'i-lucide:book-open',
						url: '/dashboard/invitation/love-story'
					}
				]
			}
		]
	};
</script>

<script lang="ts">
	import NavMain from './nav-main.svelte';
	import NavUser from './nav-user.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index';

	import type { ComponentProps } from 'svelte';

	let {
		ref = $bindable(null),
		collapsible = 'icon',
		variant = 'sidebar',
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root class="h-[calc(100svh-var(--header-height))]!" {collapsible} {variant} {...restProps}>
	<Sidebar.Content class="bg-base-200">
		<NavMain items={items.navMain} />
	</Sidebar.Content>
	<Sidebar.Footer class="bg-base-200">
		<NavUser user={items.user} />
	</Sidebar.Footer>
</Sidebar.Root>

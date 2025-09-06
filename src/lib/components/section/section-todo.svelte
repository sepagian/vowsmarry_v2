<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { Button } from '$lib/components/ui/button/index';
</script>

<div class="flex flex-col px-6">
	<h2 class="text-base font-bold text-neutral-600">Tasks</h2>
</div>

<div class="flex flex-col px-6">
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
			<Button variant="outline" size="icon"><div class="i-lucide:chevron-right"></div></Button>
		</div>
	</Card.Root>
</div>

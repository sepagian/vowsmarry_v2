<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { Button } from '$lib/components/ui/button/index';
</script>

<div class="flex flex-col px-6">
	<h2 class="text-base font-bold text-neutral-600">To do</h2>
</div>

<div class="flex flex-col px-6">
	<Card.Root class="@container/card flex flex-row justify-between items-center">
		<div class="sm:w-full">
			<Card.Header>
				<Card.Title>Complete your wedding information</Card.Title>
			</Card.Header>
			<Card.Content>
				<p>Submit your wedding information to start planning</p>
			</Card.Content>
		</div>
		<div class="justify-end flex px-6">
			<Button variant="outline" size="icon"><div class="i-lucide:chevron-right"></div></Button>
		</div>
	</Card.Root>
</div>

<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index';
	import { categoryOptions } from '$lib/constants/constants';

	export let description: Task['description'];
	export let category: Task['category'];

	function getCategoryColor(category: Task['category']) {
		return categoryOptions.find((c) => c.value === category)?.color ?? 'bg-gray-200 text-gray-800';
	}
</script>

<span class="flex items-center gap-2">
	<Badge
		class={`inline-flex items-center rounded-md px-2 py-1 text-xs gap-2 font-medium ${getCategoryColor(category)}`}
		>{category}
	</Badge>
	<span>{description}</span>
</span>

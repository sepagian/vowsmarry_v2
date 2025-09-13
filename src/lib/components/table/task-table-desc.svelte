<script lang="ts">
	import { categoryOptions } from '$lib/constants/constants';

	export let description: Task['description'];
	export let category: Task['category'];

	function getCategoryData(category: Task['category']) {
		return categoryOptions.find((c) => c.value === category) ?? {
			color: 'bg-gray-200 text-gray-800',
			icon: 'i-lucide:more-horizontal'
		};
	}

	$: categoryData = getCategoryData(category);
</script>

<span class="flex items-center gap-2">
	<span
		class="inline-flex items-center rounded-md px-2 py-1 text-xs gap-2 font-medium {categoryData.color}"
	>
		<div class={categoryData.icon}></div>
		{category}
	</span>
	<span>{description}</span>
</span>

<script lang="ts">
	import FiveStar from './FiveStar.svelte';
	export let name: string;
	export let avatar: string;
	export let title: string;
	export let content: string;
</script>

<div
	class="h-56 px-5 py-3 space-y-3 text-sm bg-white rounded-lg shadow-sm w-80"
>
	<div class="flex items-center gap-2">
		<img src={avatar} alt={title} class="rounded-full size-8" />
		<div>
			<div class="font-medium">{name}</div>
			<div class="text-xs text-stone-600">{title}</div>
		</div>
	</div>
	<FiveStar />
	<div class="whitespace-pre-line text-stone-600">{content}</div>
</div>

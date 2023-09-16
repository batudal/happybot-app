<script lang="ts">
	export let text = 'Button';
</script>

<div class="flex">
	<div class={`h-[52px] relative`}>
		<div
			class="relative z-0 top-1 left-1 bg-happy-dark border-happy-black border-solid border-2 rounded-full px-5 py-2.5"
		>
			<p class="uppercase font-bold select-none whitespace-nowrap">{text}</p>
		</div>
		<div
			class="absolute z-0 top-1 left-1 bg-happy-dark border-happy-black border-solid border-2 rounded-full px-5 py-2.5"
		>
			<p class="uppercase font-bold select-none whitespace-nowrap">{text}</p>
		</div>
		<div
			class="button cursor-pointer absolute top-0 left-0 flex flex-row z-10 bg-happy-yellow
    hover:bg-happy-yellow_dark border-happy-black border-solid border-2 rounded-full px-5 py-2.5"
		>
			<p class="uppercase font-bold select-none whitespace-nowrap">{text}</p>
		</div>
	</div>
</div>

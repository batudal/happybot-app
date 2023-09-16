<script lang="ts">
	export let text = 'tag';
	export let color = 'bg-happy-light_blue';
</script>

<div class="flex">
	<div class={`h-[52px] relative`}>
		<div
			class="relative z-0 top-1 left-1 bg-happy-dark border-happy-black border-solid border-[3px] px-3 py-2"
		>
			<p class="uppercase font-bold select-none whitespace-nowrap tight">{text}</p>
		</div>
		<div
			class="absolute z-0 top-1 left-1 bg-happy-dark border-happy-black border-solid border-[3px] px-3 py-2"
		>
			<p class="uppercase font-bold select-none whitespace-nowrap tight">{text}</p>
		</div>
		<div
			class={`button cursor-pointer absolute top-0 left-0 flex flex-row z-10 ${color} 
     border-happy-black border-solid border-[3px] px-3 py-2`}
		>
			<p class="uppercase font-bold select-none whitespace-nowrap tight">{text}</p>
		</div>
	</div>
</div>

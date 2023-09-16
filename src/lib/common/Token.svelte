<script>
	import Tag from './Tag.svelte';
</script>

<div class="flex">
	<div class="relative flex w-full">
		<div
			class="h-[94px] w-full bg-white border-[3px] border-happy-black z-10 pl-7 py-4 pr-4 flex flex-row justify-between"
		>
			<div class="flex flex-col justify-start uppercase">
				<h3 class="text-2xl font-bold text-happy-dark line-clamp-1">Happy Token</h3>
				<p class="text-base text-happy-dark font-bold">block #42938417</p>
			</div>
			<div class="flex flex-row gap-3">
				<Tag text="verified" color="bg-happy-light_pink" />
				<Tag text="simulated" color="bg-happy-light_green" />
				<Tag text="deployed" color="bg-happy-light_blue" />
			</div>
		</div>
		<div
			class="absolute h-[94px] bg-happy-dark border-[3px] border-happy-black bottom-[-6px] right-[-6px] w-full z-0"
		/>
	</div>
</div>

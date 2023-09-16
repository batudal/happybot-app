<script lang="ts">
	export let image = './icons/telegram.svg';
	export let alt = 'Telegram';
</script>

<div class="h-[52px] relative">
	<div
		class="relative z-0 top-1 left-1 bg-happy-dark border-happy-black border-solid border-2 rounded-full px-3 py-2.5"
	>
		<img src={image} class="w-[28px] h-[28px]" {alt} />
	</div>
	<div
		class="absolute z-0 top-1 left-1 bg-happy-dark border-happy-black border-solid border-2 rounded-full px-3 py-2.5"
	>
		<img src={image} class="w-[28px] h-[28px]" {alt} />
	</div>
	<div
		class="button cursor-pointer absolute top-0 left-0 flex flex-row z-10 bg-happy-yellow
    hover:bg-happy-yellow_dark border-happy-black border-solid border-2 rounded-full px-3 py-2.5"
	>
		<img src={image} class="w-[28px] h-[28px]" {alt} draggable="false" />
	</div>
</div>

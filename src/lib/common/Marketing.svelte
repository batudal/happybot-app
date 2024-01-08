<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import MarketingMaterial from './MarketingMaterial.svelte';
	register();
	let images = [
		'./marketing/american_psycho.webp',
		'./marketing/big_short.webp',
		'./marketing/big_short_2.webp',
		'./marketing/gladiator.webp',
		'./marketing/psycho.webp',
		'./marketing/wolf.webp',
		'./marketing/wolf_2.webp'
	];
	let swiper_cont: any;
	onMount(() => {
		setInterval(() => {
			swiper_cont.swiper.slideNext();
		}, 5000);
	});
</script>

<div class="relative w-full flex flex-col items-center">
	<img
		src="./bg_middle.svg"
		alt="Background"
		class="absolute w-full max-h-[1200px] top-0"
		draggable="false"
	/>
	<div class="relative w-full">
		<img
			src="./card_bg_blue.svg"
			alt="Green card background"
			class="absolute bottom-0 right-0 z-10"
			draggable="false"
		/>
		<MarketingMaterial />
		<div
			class="w-full max-w-[1280px] max-h-[720px] border-4 border-happy-black rounded-[24px] box-border overflow-hidden"
		>
			<swiper-container bind:this={swiper_cont} speed="1000" loop="true" slides-per-view="1">
				{#each images as image}
					<swiper-slide>
						<img src={image} alt="Wolf" class="w-full" />
					</swiper-slide>
				{/each}
			</swiper-container>
		</div>
	</div>
</div>

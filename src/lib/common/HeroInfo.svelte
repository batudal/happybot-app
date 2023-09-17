<script>
	import Button from './Button.svelte';
</script>

<div
	class="relative w-[632px] bg-happy-light border-4 border-happy-black rounded-[24px] px-12 box-border pt-[72px] pb-32"
>
	<img
		src="./card_bg.svg"
		alt="Green card background"
		class="absolute bottom-[-4px] right-[-4px]"
		draggable="false"
	/>
	<img
		src="./badges/binance_badge.svg"
		alt="Binance Smart Chain"
		class="absolute top-[-24px] right-[164px] z-10 hover:rotate-3 hover:translate-x-[4px] hover:translate-y-[-4px] transition-all duration-200 ease-in-out"
	/>
	<img
		src="./badges/pancake_badge.svg"
		alt="Binance Smart Chain"
		class="absolute top-[-24px] right-[94px] z-10 hover:rotate-3 hover:translate-x-[4px] hover:translate-y-[-4px] transition-all duration-200 ease-in-out"
	/>
	<img
		src="./badges/telegram_badge.svg"
		alt="Binance Smart Chain"
		class="absolute top-[-24px] right-[24px] z-10 hover:rotate-3 hover:translate-x-[4px] hover:translate-y-[-4px] transition-all duration-200 ease-in-out"
	/>
	<h1 class="text-5xl font-bold">
		Painless Trading <br />on PancakeSwap
	</h1>
	<p class="text-2xl font-bold antialiased pt-8" style="letter-spacing: -0.075rem;">
		The Cakebot team places a strong emphasis on user experience, providing a user-friendly design
		that stands out from competitors in the market.
	</p>
	<div class="absolute bottom-[-20px] right-[16px]">
		<Button text="read introduction" />
	</div>
</div>

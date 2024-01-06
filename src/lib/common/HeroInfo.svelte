<script>
	import Button from './Button.svelte';
</script>

<div class="flex relative" style="box-shadow: 0px 0px 250px 0px rgba(255, 221, 2, 0.50);">
	<div
		class="absolute w-[800px] h-[464px] bottom-[-12px] right-[-12px] bg-happy-dark border-4 border-happy-black rounded-[24px] z-0"
	/>
	<div
		class="relative w-[800px] h-[464px] bg-happy-light border-4 border-happy-black rounded-[24px] px-12 box-border pt-[72px] pb-32
  z-10"
	>
		<img
			src="./card_bg_left.svg"
			alt="Green card background"
			class="absolute bottom-[-4px] left-[-4px]"
			draggable="false"
		/>
		<img
			src="./badges/ethereum_badge.svg"
			alt="Binance Smart Chain"
			class="absolute top-[-24px] right-[94px] z-10 hover:rotate-3 hover:translate-x-[4px] hover:translate-y-[-4px] transition-all duration-200 ease-in-out"
			draggable="false"
		/>
		<img
			src="./badges/scroll_badge.svg"
			alt="Binance Smart Chain"
			class="absolute top-[-24px] right-[24px] z-10 hover:rotate-3 hover:translate-x-[4px] hover:translate-y-[-4px] transition-all duration-200 ease-in-out"
			draggable="false"
		/>
		<div class="flex flex-row items-start gap-8 z-10">
			<img src="./scroll_logo.svg" class="w-[132px] h-[132px] mt-[-12px]" alt="Scroll Network" />
			<div class="flex flex-col">
				<h1 class="text-5xl font-bold">
					Tierless Launchpad on
					<span class="underlined">Scroll Network</span>
				</h1>
				<p class="text-2xl font-bold antialiased pt-8" style="letter-spacing: -0.075rem;">
					Happybot is a blazing fast telegram bot that aims to bolster your on-chain trading
					performance by providing a friendly, streamlined interface.
				</p>
			</div>
		</div>
		<a
			class="absolute bottom-[-20px] left-[16px]"
			href="https://docs.happybot.lol/blog/introduction"
			draggable="false"
		>
			<Button text="read introduction" />
		</a>
	</div>
</div>

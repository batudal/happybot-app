<script>
	import Button from './Button.svelte';
	import Typewriter from 'svelte-typewriter';
</script>

<div class="flex relative">
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
		<div class="flex flex-row items-start gap-4 z-10">
			<img src="./scroll_logo.svg" class="w-[132px] h-[132px] mt-[-8px]" alt="Scroll Network" />
			<div class="flex flex-col">
				<div class="text-5xl font-bold">
					<Typewriter mode="loop" wordInterval={5000}>
						<h1>Tierless Launchpad</h1>
						<h1>MEV Provider</h1>
						<h1>DEX Aggregator</h1>
					</Typewriter>
					for <span class="underlined">Scroll Network</span>
				</div>
				<p class="text-2xl font-bold antialiased pt-8" style="letter-spacing: -0.075rem;">
					Happybot is a blazing fast mev provider that aims to bolster your Scroll legacy by
					providing a friendly, streamlined interface.
				</p>
			</div>
		</div>
		<a
			class="absolute bottom-[-20px] left-[16px]"
			href="https://docs.happybot.lol/blog/introduction"
			target="_blank"
			draggable="false"
		>
			<Button text="read introduction" />
		</a>
	</div>
</div>

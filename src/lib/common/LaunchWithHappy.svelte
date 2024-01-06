<script>
	import Button from './Button.svelte';
</script>

<div
	class="relative w-[800px] h-[300px] bg-happy-light border-4 border-happy-black rounded-[24px] px-12 box-border py-12"
>
	<img
		src="./card_bg.svg"
		alt="Green card background"
		class="absolute bottom-[-4px] right-[-4px]"
		draggable="false"
	/>
	<img
		src="./happy_launch.png"
		alt="Happy logo"
		class="absolute right-[-20px] bottom-[20px] w-[240px] z-10"
		draggable="false"
	/>
	<div class="flex flex-col items-start max-w-[480px]">
		<h1 class="text-5xl font-bold">
			Launch on
			<span class="underlined">Happy</span>
		</h1>
		<p class="text-2xl font-bold antialiased pt-8" style="letter-spacing: -0.075rem;">
			Don’t miss the chance and super-charge your IDO launch!
		</p>
	</div>
	<a
		class="absolute bottom-[-20px] left-[16px]"
		href="https://docs.happybot.lol/blog/introduction"
		draggable="false"
	>
		<Button text="apply for launchpad" />
	</a>
</div>

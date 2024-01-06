<script>
	import Button from './Button.svelte';
	import IconButton from './IconButton.svelte';
	import LaunchingSoon from './LaunchingSoon.svelte';
</script>

<div class="flex flex-row justify-between w-full max-w-[1320px] box-content px-6 py-12">
	<a href="/" draggable="false">
		<img src="./logotype.svg" alt="Happybot Logo" draggable="false" />
	</a>
	<div class="flex flex-row gap-3">
		<a href="https://t.me/happy_tg_bot" target="_blank" draggable="false">
			<IconButton image="./icons/telegram.svg" alt="Telegram" />
		</a>
		<a href="https://x.com/happybotlol" target="_blank" draggable="false">
			<IconButton image="./icons/twitter.svg" alt="Twitter" />
		</a>
		<a href="https://docs.happybot.lol" target="_blank" draggable="false">
			<Button text="docs" />
		</a>
		<div class="relative">
			<Button text="open the app" />
			<LaunchingSoon />
		</div>
	</div>
</div>

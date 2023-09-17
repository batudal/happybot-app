<script lang="ts">
	import Button from './Button.svelte';
	import Token from './Token.svelte';
	import { browser } from '$app/environment';
	import { env } from '$env/dynamic/public';
	import { flip } from 'svelte/animate';

	export let latest_tokens: any;
	let tokens: any[] = [];
	$: reverse_tokens = [...tokens].reverse();

	if (browser) {
		const socket = new WebSocket(`${env.PUBLIC_WSS_URL}/wss`);
		socket.onmessage = function (event) {
			let deployed_token = JSON.parse(event.data);
			tokens.push(deployed_token);
			tokens = [...tokens];
		};
	}
</script>

<div class="flex relative">
	<div
		class="relative w-[632px] h-[500px] bg-happy-light border-4 border-happy-black rounded-[24px] z-10"
	>
		<img
			src="./card_bg_left.svg"
			alt="Green card background"
			class="absolute bottom-[-4px] left-[-4px] z-20"
			draggable="false"
		/>
		<div class="absolute bottom-[-26px] left-[16px] z-30">
			<Button text="join test channel" />
		</div>
		<div class="px-6 py-4 bg-happy-dark rounded-t-[16px]">
			<div class="flex flex-row w-full items-center justify-between">
				<div class="flex flex-row gap-2 items-center">
					<div class="blink w-[12px] h-[12px] rounded-full bg-happy-green" />
					<p class="uppercase font-bold text-base text-happy-light">live feed</p>
				</div>
				<img src="./icons/binance_logotype.svg" alt="Binance" />
			</div>
		</div>
		<div class="p-6 pb-0 h-[436px] overflow-y-hidden flex">
			<div class="w-full flex flex-col gap-4">
				{#if reverse_tokens && reverse_tokens.length > 0}
					{#each reverse_tokens as token}
						<Token {token} />
					{/each}
				{/if}
				{#each latest_tokens as token (token._id)}
					<div animate:flip>
						<Token {token} />
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div
		class="absolute w-[632px] h-[500px] bottom-[-12px] right-[-12px] bg-happy-dark border-4 border-happy-black rounded-[24px] z-0"
	/>
</div>

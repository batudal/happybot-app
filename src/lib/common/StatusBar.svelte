<script lang="ts">
	const getEthPrice = async () => {
		return fetch('https://api.scrollscan.com/api?module=stats&action=ethprice')
			.then((res) => res.json())
			.then((res) => {
				return parseFloat(res.result.ethusd);
			});
	};
</script>

<div class="fixed top-0 flex flex-row w-full bg-happy-dark py-1 justify-center z-50">
	<p class="text-happy-light text-base font-bold antialiased whitespace-nowrap">
		{#await getEthPrice() then ethPrice}
			ETH PRICE: <span class="text-happy-scroll">${ethPrice.toFixed(2)}</span> •
		{/await}
		HAPPY TOKEN PRICE: <span class="text-happy-scroll">N/A</span>
		• STAKE APR:
		<span class="text-happy-scroll">N/A</span>
		• BOT VOLUME(24HR): <span class="text-happy-scroll">N/A</span>
		• GROSS VOLUME: <span class="text-happy-scroll">N/A</span>
		• LATEST SCROLL BLOCK: <span class="text-happy-scroll">N/A</span>
	</p>
</div>

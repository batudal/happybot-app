<script lang="ts">
	import HeroFeed from '$lib/common/HeroFeed.svelte';
	import HeroInfo from '$lib/common/HeroInfo.svelte';
	import Navbar from '$lib/common/Navbar.svelte';
	export let data: any;
</script>

<svelte:head>
	<title>happybot</title>
</svelte:head>
<div
	class="relative w-full background flex flex-col items-center overflow-y-scroll"
	style="height:100vh; background-image: url('./bg.svg')"
>
	<div class="py-8 w-full flex flex-col items-center">
		<Navbar />
	</div>
	<div class="max-w-[1320px] w-full flex flex-col lg:flex-row items-center gap-14 pb-24">
		<HeroInfo />
		<HeroFeed latest_tokens={data.tokens} />
	</div>
</div>

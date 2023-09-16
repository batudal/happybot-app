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
	class="relative w-full background flex flex-col items-center"
	style="height:100vh; background-image: url('./bg.svg')"
>
	<div class="h-[32px]" />
	<Navbar />
	<div class="h-[32px]" />
	<div class="max-w-[1320px] w-full flex flex-row items-center justify-between pb-24">
		<HeroInfo />
		<HeroFeed latest_tokens={data.tokens} />
	</div>
</div>

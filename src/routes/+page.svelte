<script lang="ts">
	import HeroInfo from '$lib/common/HeroInfo.svelte';
	import LaunchWithHappy from '$lib/common/LaunchWithHappy.svelte';
	import Marketing from '$lib/common/Marketing.svelte';
	import Navbar from '$lib/common/Navbar.svelte';

	let y = 0;
	let height = 0;
	let view_height = 0;
	let view_width = 0;
	$: CLOUD_TRANSLATION = (view_width * 2) / 3;
	let path = 0;
	let transform_scale = 0;
	$: moveClouds(y);
	function moveClouds(y: number) {
		let scaled = scale(y + view_height, view_height, height, 0, CLOUD_TRANSLATION);
		transform_scale = scaled;
		if (scaled < CLOUD_TRANSLATION / 2) {
			path = -scaled;
		} else {
			path = -(CLOUD_TRANSLATION - scaled);
		}
	}
	function scale(
		number: number,
		inMin: number,
		inMax: number,
		outMin: number,
		outMax: number
	): number {
		return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
	}
</script>

<svelte:window bind:innerHeight={view_height} bind:innerWidth={view_width} bind:scrollY={y} />
<svelte:head>
	<title>happybot</title>
</svelte:head>
<div
	bind:clientHeight={height}
	class="relative w-full bg-happy-light_blue flex flex-col items-center"
>
	<img
		src="./cloud.svg"
		alt="Cloud"
		class="floating fixed"
		style={`left:0;left: ${path}px;bottom:160px;bottom: ${160 + transform_scale / 4}px`}
		draggable="false"
	/>
	<img
		src="./cloud_2.svg"
		alt="Cloud"
		class="floating-2 fixed"
		style={`right:0;right: ${path}px;bottom:360px; bottom: ${360 - transform_scale / 4}px`}
		draggable="false"
	/>
	<img
		src="./bg_top_right.svg"
		alt="Background"
		class="absolute w-[435px] h-[243px] top-0 right-0"
		draggable="false"
	/>
	<img
		src="./bg_bottom_left.svg"
		alt="Background"
		class="absolute w-full max-w-[1435px] bottom-0 left-0"
		draggable="false"
	/>
	<div class="py-8 w-full flex flex-col items-center box-border">
		<Navbar />
	</div>
	<div class="w-full flex flex-col items-center gap-32">
		<HeroInfo />
		<Marketing />
		<LaunchWithHappy />
		<div class="h-[120px]" />
	</div>
</div>

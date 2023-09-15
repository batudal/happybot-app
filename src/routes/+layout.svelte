<script>
	import BrandBar from '$lib/common/BrandBar.svelte';
	import StatusBar from '$lib/common/StatusBar.svelte';
	import '../app.css';
</script>

<StatusBar />
<slot />
<BrandBar />

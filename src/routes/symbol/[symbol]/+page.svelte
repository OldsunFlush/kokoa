<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>{data.name}</h1>
<h2>{data.symbol} - {data.exchange} ({data.country}) - {data.type}</h2>
<p>{data.description}</p>

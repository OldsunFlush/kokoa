<script lang="ts">
	import Button from '../components/Button.svelte';
</script>

<svelte:head>
	<title>My title</title>
</svelte:head>

<h1 class="text-3xl font-bold underline">Hello world!</h1>
<Button />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>

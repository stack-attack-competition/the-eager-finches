<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
</style>

<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
	<Nav {segment}/>

	<div class="android-content mdl-layout__content">
		<slot></slot>
	</div>
</div>
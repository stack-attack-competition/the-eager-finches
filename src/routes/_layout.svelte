<script>
	import Nav from '../components/Nav.svelte';

	let menuIsOpen = false;
</script>

<style lang="scss">

	.mdl-layout__content {
		max-width: 1000px;
		left: 0;
		right: 0;
		margin: auto;
	}
</style>

<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
	<Nav isOpen={menuIsOpen} on:menutoggle={(ev) => menuIsOpen = ev.detail}/>

	<div class="android-content mdl-layout__content m-t-1">
		<slot></slot>
	</div>
	<div class="mdl-layout__obfuscator" class:is-visible={menuIsOpen} on:click={() => menuIsOpen = false}></div>
</div>
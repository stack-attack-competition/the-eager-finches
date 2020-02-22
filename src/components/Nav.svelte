<script>
	let isOpen = false;
</script>

<style>

</style>

<div class="android-header mdl-layout__header mdl-layout__header--waterfall">
	<div class="mdl-layout__header-row">
          <span class="android-title mdl-layout-title">
<!--            <img class="android-logo-image" src="images/android-logo.png" alt="logo">-->
          </span>
		<!-- Add spacer, to align navigation to the right in desktop -->
		<div class="android-header-spacer mdl-layout-spacer"></div>
<!--		<div class="android-search-box mdl-textfield mdl-js-textfield mdl-textfield&#45;&#45;expandable mdl-textfield&#45;&#45;floating-label mdl-textfield&#45;&#45;align-right mdl-textfield&#45;&#45;full-width">-->
<!--			<label class="mdl-button mdl-js-button mdl-button&#45;&#45;icon" for="search-field">-->
<!--				<i class="material-icons">search</i>-->
<!--			</label>-->
<!--			<div class="mdl-textfield__expandable-holder">-->
<!--				<input class="mdl-textfield__input" type="text" id="search-field">-->
<!--			</div>-->
<!--		</div>-->
		<!-- Navigation -->
		<div class="android-navigation-container">
			<nav class="android-navigation mdl-navigation">
				<a class="mdl-navigation__link mdl-typography--text-uppercase" href="/challenge">Challenges</a>
			</nav>
		</div>
		<!-- if logger in -->
		<div class="android-navigation-container">
			<span>
				Hello, USER
			</span>
		</div>
		<button class="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
			<i class="material-icons">person</i>
		</button>
		<ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">
			<li class="mdl-menu__item">Profile</li>
			<li class="mdl-menu__item">Logout</li>
		</ul>
		<!-- visitor -->
		<div class="android-navigation-container">
			<nav class="android-navigation mdl-navigation">
				<a class="mdl-navigation__link mdl-typography--text-uppercase" href="/challenge">Register</a>
				<a class="mdl-navigation__link mdl-typography--text-uppercase" href="/challenge">Login</a>
			</nav>
		</div>
	</div>
</div>

<div class="android-drawer mdl-layout__drawer">
        <span class="mdl-layout-title">
<!--          <img class="android-logo-image" src="images/android-logo-white.png" alt="logo">-->
        </span>
	<nav class="mdl-navigation">
		<a class="mdl-navigation__link" href="/challenge">Challenges</a>
		<div class="android-drawer-separator"></div>
	</nav>
</div>
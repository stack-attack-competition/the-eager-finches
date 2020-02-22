<script>
    import {isLoggedIn, userName} from '../store';
    import {createEventDispatcher} from 'svelte';

    export let isOpen = false;

    const dispatch = createEventDispatcher();

    const menuToggle = () => {
        isOpen = !isOpen;
        dispatch('menutoggle', isOpen);
    };

    function logout() {
        isLoggedIn.set(false);
    }
</script>

<style>
    .android-header {
        background-color: #4a4a55;
    }

    .android-logo-image {
        max-width: 100px;
    }
</style>

<div class="android-header mdl-layout__header mdl-layout__header--waterfall">
    <div aria-expanded={isOpen} role="button" tabindex="0" class="mdl-layout__drawer-button"
         on:click={() => menuToggle()}>
        <i class="material-icons">menu</i>
    </div>
    <div class="mdl-layout__header-row">
        <span class="android-title mdl-layout-title">
          <img class="android-logo-image" src="svelte-logo-horizontal.svg" alt="logo">
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
                <a class="mdl-navigation__link mdl-typography--text-uppercase" href="/challenges">Challenges</a>
            </nav>
        </div>
        <!-- if logger in -->
        {#if $isLoggedIn}
            <div class="android-navigation-container">
			<span>
				Hello, {$userName}
			</span>
            </div>
            <span class="android-mobile-title mdl-layout-title">
			</span>
            <a href="/me">
                <button class="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect"
                        id="more-button">
                    <i class="material-icons">person</i>
                </button>
            </a>
            <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">
                <li class="mdl-menu__item">Profile</li>
                <li class="mdl-menu__item">Logout</li>
            </ul>
        {/if}
            <!-- visitor -->
        <div class="android-navigation-container">
            <nav class="android-navigation mdl-navigation">
                {#if !$isLoggedIn}
                    <a class="mdl-navigation__link mdl-typography--text-uppercase"
                       href="/auth/registration"
                       id="registerNavButton">Register</a>
                    <a class="mdl-navigation__link mdl-typography--text-uppercase" href="/auth/login"
                       id="loginNavButton">Login</a>
                {/if}
            </nav>
        </div>
    </div>
</div>

<div class="android-drawer mdl-layout__drawer" class:is-visible={isOpen}>
        <span class="mdl-layout-title">
          <img class="android-logo-image" src="svelte-logo-horizontal.svg" alt="logo">
        </span>
    <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="/me">User Profile</a>
        <a class="mdl-navigation__link" href="/my-challenges">My Challenges</a>
        <a class="mdl-navigation__link" href="/my-bets">My Bets</a>
        <a class="mdl-navigation__link" href="#" on:click={logout}>Logout</a>
        <div class="android-drawer-separator"></div>
    </nav>
</div>

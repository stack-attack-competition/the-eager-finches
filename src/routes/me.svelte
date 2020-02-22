<!--suppress NpmUsedModulesInstalled -->
<script>
    import {onMount} from 'svelte';
    import {goto} from '@sapper/app';
    import {isLoggedIn, userName, email, pictureUrl} from '../store';

    onMount(() => {
        if (!$isLoggedIn) {
            goto('/auth/login');
        }
    });
</script>

<style lang="scss">
    .mdl-textfield {
        display: block;
    }
</style>

<svelte:head>
    <title>Me</title>
</svelte:head>

<h1>Me</h1>

<div>
    <div class="mdl-textfield mdl-js-textfield is-dirty">
        <input class="mdl-textfield__input is-focused" type="text" id="registrationUserNameInput" bind:value={$userName}
               disabled>
        <label class="mdl-textfield__label" for="registrationUserNameInput">Name</label>
    </div>

    <div class="mdl-textfield mdl-js-textfield is-dirty">
        <input class="mdl-textfield__input is-focused" type="text" id="registrationEmailInput" bind:value={$email}
               disabled>
        <label class="mdl-textfield__label" for="registrationEmailInput">Email</label>
    </div>

    <div class="m-b-1">
        <!--suppress HtmlUnknownTarget -->
        <img src={$pictureUrl} alt="">
    </div>
</div>

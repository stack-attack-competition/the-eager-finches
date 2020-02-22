<!--suppress NpmUsedModulesInstalled -->
<script>
    import {goto} from '@sapper/app';
    import {isLoggedIn, userName} from '../../store';

    let email = '';
    let password = '';
    let errorList = [];

    async function submit() {
        errorList = [];

        let response;
        response = await fetch(process.env.BACKEND_URL + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        if (!response.ok) {
            errorList = ['Wrong email or password.'];
        } else {
            isLoggedIn.set(true);
            const {firstName, lastName} = await response.json();
            userName.set(firstName + ' ' + lastName);
            goto('/');
        }
    }

    function focus() {
        const el = this;
        const parent = el.parentElement;
        parent.classList.add('is-focused');
    }

    function blur() {
        const el = this;
        const parent = el.parentElement;
        parent.classList.remove('is-focused');
    }
</script>

<style lang="scss">
    .mdl-textfield {
        display: block;
    }
</style>

<svelte:head>
    <title>Login</title>
</svelte:head>

<h1>Registration</h1>

<form on:submit|preventDefault={submit}>
    <div class="mdl-textfield mdl-js-textfield {email ? 'is-dirty': null}">
        <input class="mdl-textfield__input" type="text" id="loginEmailInput" bind:value={email} on:focus={focus} on:blur={blur}>
        <label class="mdl-textfield__label" for="loginEmailInput">Email</label>
    </div>

    <div class="mdl-textfield mdl-js-textfield {password ? 'is-dirty': null}">
        <input class="mdl-textfield__input" type="password" id="loginPasswordInput" bind:value={password} on:focus={focus} on:blur={blur}>
        <label class="mdl-textfield__label" for="loginPasswordInput">Email</label>
    </div>

    {#if errorList.length > 0}
        <div>
            Errors:
            <ul>
                {#each errorList as error}
                    <li>
                        {error}
                    </li>
                {/each}
            </ul>
        </div>
    {/if}

    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
            id="loginSubmitButton"
            on:click={submit}>
        Login
    </button>
</form>

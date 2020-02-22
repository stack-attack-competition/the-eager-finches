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
            const {firstName, lastName } = await response.json();
            userName.set(firstName + ' ' + lastName);
            goto('/');
        }
    }
</script>

<style lang="scss">
    label {
        display: block;

        input {
            float: right;
        }
    }
</style>

<svelte:head>
    <title>Login</title>
</svelte:head>

<h1>Registration</h1>

<div>
    <label>
        Email
        <input bind:value={email} id="loginEmailInput">
    </label>

    <label>
        Password
        <input type="password" bind:value={password} id="loginPasswordInput">
    </label>

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
</div>

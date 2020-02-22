<!--suppress NpmUsedModulesInstalled -->
<script>
    import {goto} from '@sapper/app';
    import {isLoggedIn, userName} from '../../store';

    let email = 'dosa.balint@3pixel.hu';
    let password = 'kismacska';
    let firstName = 'Bálint';
    let lastName = 'Dósa';
    let pictureUrl = 'http://www.gravatar.com/avatar/c02f9e12fd44c17c0ce3b4255aa27b14';
    let errorList = [];

    function validateUrl() {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(pictureUrl);
    }

    async function submit() {
        let response;
        response = await fetch(process.env.BACKEND_URL + '/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, firstName, lastName, pictureUrl})
        });

        if (!response.ok) {
            const error = await response.json();
            if (typeof error.message === "string") {
                errorList = [error.message];
            } else {
                errorList = error.message.map(item => Object.values(item.constraints)).flat();
            }
        } else {
            isLoggedIn.set(true);
            userName.set(firstName + ' ' + lastName);
            goto('/');
        }
    }

    function focus() {
        const el = this;
        const parent = el.parentElement;
        console.log(el);
        parent.classList.add('is-focused');
    }

    function blur() {
        const el = this;
        const parent = el.parentElement;
        console.log(el);
        parent.classList.remove('is-focused');
    }
</script>

<style lang="scss">
    .mdl-textfield{
        display: block;
    }
</style>

<svelte:head>
    <title>Registration</title>
</svelte:head>

<h1>Registration</h1>

<form on:submit|preventDefault={submit}>

    <div class="mdl-textfield mdl-js-textfield {email ? 'is-dirty': null}">
        <input class="mdl-textfield__input" type="text" id="email" bind:value={email} on:focus={focus} on:blur={blur}>
        <label class="mdl-textfield__label" for="email">Email</label>
<!--        <span class="mdl-textfield__error">{error}</span>-->
    </div>

    <div class="mdl-textfield mdl-js-textfield {password ? 'is-dirty': null}">
        <input class="mdl-textfield__input" type="text" id="password" bind:value={password} on:focus={focus} on:blur={blur}>
        <label class="mdl-textfield__label" for="password">Password</label>
    </div>

    <div class="mdl-textfield mdl-js-textfield {firstName ? 'is-dirty': null}">
        <input class="mdl-textfield__input" type="text" id="firstName" bind:value={firstName} on:focus={focus} on:blur={blur}>
        <label class="mdl-textfield__label" for="firstName">First name</label>
    </div>

    <div class="mdl-textfield mdl-js-textfield {lastName ? 'is-dirty': null}">
        <input class="mdl-textfield__input" type="text" id="lastName" bind:value={lastName} on:focus={focus} on:blur={blur}>
        <label class="mdl-textfield__label" for="lastName">Last name</label>
    </div>

    <div class="mdl-textfield mdl-js-textfield {pictureUrl ? 'is-dirty': null}" class:is-invalid={!validateUrl(pictureUrl)}>
        <input class="mdl-textfield__input" type="text" id="pictureUrl" bind:value={pictureUrl} on:focus={focus} on:blur={blur}>
        <label class="mdl-textfield__label" for="pictureUrl">Image URL</label>
        {#if !validateUrl(pictureUrl)}
            <span class="mdl-textfield__error">Invalid picture URL</span>
        {/if}
    </div>
    {#if validateUrl(pictureUrl)}
        <div class="m-b-1">
            <!--suppress HtmlUnknownTarget -->
            <img src={pictureUrl} alt="">
        </div>
    {/if}


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

    <button class="mdl-button mdl-button--raised mdl-button--colored" type="submit" on:click={submit}>Submit</button>
</form>

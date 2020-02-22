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
    <title>Registration</title>
</svelte:head>

<h1>Registration</h1>

<div>
    <label>
        Email
        <input bind:value={email}>
    </label>

    <label>
        Password
        <input type="password" bind:value={password}>
    </label>

    <label>
        First name
        <input bind:value={firstName}>
    </label>

    <label>
        Last name
        <input bind:value={lastName}>
    </label>

    <label>
        Image URL
        <input bind:value={pictureUrl}>
    </label>

    {#if validateUrl(pictureUrl)}
        <div>
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

    <button on:click={submit}>Submit</button>
</div>

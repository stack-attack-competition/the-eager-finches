<svelte:head>
    <title>Registration</title>
</svelte:head>

<style lang="scss">
    label {
        display: block;
        input{
            float: right;
        }
    }
</style>

<h1>Registration</h1>

<form>
    <label>
        Email
        <input>
    </label>

    <label>
        Password
        <input type="password">
    </label>

    <label>
        First name
        <input>
    </label>

    <label>
        Last name
        <input>
    </label>

    <label>
        Image URL
        <input>
    </label>
</form>

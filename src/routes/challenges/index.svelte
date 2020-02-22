<script context="module">
    export async function preload(page) {
        const apiCalls = [
            this.fetch(process.env.BACKEND_URL_MOCKED + '/users'),
            this.fetch(process.env.BACKEND_URL_MOCKED + '/challenges'),
            this.fetch(process.env.BACKEND_URL_MOCKED + '/bets')
        ];
        const [userResponse, challengesResponse, betsResponse] = await Promise.all(apiCalls);

        if (!userResponse.ok || !challengesResponse.ok || !betsResponse.ok ) {
            throw new Error("Fetching failed");
        }

        const users = await userResponse.json();
        const challenges = await challengesResponse.json();
        const bets = await betsResponse.json();

        return {
            authors: users,
            challenges: challenges,
            bets: bets
        };
    }
</script>

<script>
    import ChallengeList from "../../components/Challenge/ChallengeList.svelte";

    export let authors = [];
    export let challenges = [];
    export let bets = [];

    // $: console.log(challenges);
    // $: console.log(bets);

    export let error = null;
</script>

{#if !error}
    <ChallengeList {authors} {challenges} {bets}>

    </ChallengeList>
{:else}
    <pre>{error}</pre>
{/if}

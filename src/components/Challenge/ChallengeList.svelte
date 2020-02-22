<script>
    import _ from 'lodash';

    export let authors = [];
    export let challenges = [];
    export let bets = [];

    let filteredChallenges = [];
    let mappedAuthors = {};

    $: {
        // mappedAuthors = _.reduce(authors, (acc, author) => ({ ...acc, [author.id]: author }), {} )
        mappedAuthors = _.reduce(authors, (acc, author, index) => ({ ...acc, [index]: author }), {} )
    }

    $: {
        filteredChallenges = _.orderBy(challenges, a => new Date(a.endDate).getTime(), 'desc');
        calculateBets();
    }

    let groupedBets = {};

    function calculateBets() {
        const response = {};
        bets = [];
        // Object.entries(_.groupBy(bets, 'challenge')).forEach(([ challengeId, challenges ]) => {
        filteredChallenges.forEach(challenge => {
            const like = Math.floor(Math.random() * 100) + 1;
            const unlike = Math.floor(Math.random() * 100) + 1;
            response[challenge.id] = {
                like: like,
                unlike: unlike,
                total: like + unlike,
            }
        });

        groupedBets = response;
    }

</script>

<style>
    table {
        table-layout: fixed;
    }
    td{
        word-break: break-word;
    }
    td.long-text-ellipsis{
        text-overflow: ellipsis;
        max-width: 300px;
        overflow-x: hidden;
    }
</style>

<table class="mdl-data-table mdl-shadow--2dp">
    <thead>
    <tr>
        <th class="mdl-data-table__cell--non-numeric">Avatar</th>
        <th>Name</th>
        <th>Description</th>
        <th>Total pot</th>
        <th>Like</th>
        <th>Unike</th>
        <th>Active</th>
        <th>Succeeded</th>
    </tr>
    </thead>
    <tbody>
    {#each filteredChallenges as challenge, i (challenge.id)}
        <tr>
            <td><img src={mappedAuthors[i] && mappedAuthors[i].pictureUrl} alt="avatar" /></td>
            <td class="long-text-ellipsis"><a href="/challenges/{challenge.id}">{challenge.title}</a></td>
            <td class="long-text-ellipsis">{challenge.description}</td>
            <td>${groupedBets[challenge.id] && groupedBets[challenge.id].total}</td>
            <td>${groupedBets[challenge.id] && groupedBets[challenge.id].like}</td>
            <td>${groupedBets[challenge.id] && groupedBets[challenge.id].unlike}</td>
            <td><i class="material-icons">{challenge.isActive ? 'check': 'close'}</i></td>
            <td><i class="material-icons">{challenge.outcome ? 'add_circle': 'remove_circle'}</i></td>
        </tr>
    {/each}
    </tbody>
</table>

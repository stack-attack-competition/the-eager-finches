<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].html
		// const betsRes = await this.fetch(process.env.BACKEND_URL_MOCKED+`/bets/${params.slug}`);
		const res = await this.fetch(process.env.BACKEND_URL_MOCKED+`/challenges/${params.slug}`);
		const data = await res.json();

		console.log(data);

		if (!res.ok) {
			this.error(res.status, data.message);
		}

		const userRes = await this.fetch(process.env.BACKEND_URL_MOCKED+`/users/${data.author}`);
		const user = await userRes.json();

		if (!userRes.ok) {
			this.error(userRes.status, user.message);
		}

		// TODO: switch with upper for real backend
		const betsRes = await this.fetch(process.env.BACKEND_URL_MOCKED+`/bets`);
		const bets = await betsRes.json();

		if (!betsRes.ok) {
			this.error(userRes.status, bets.message);
		}


		return { challenge: data, user, bets };
	}
</script>

<script>
	export let challenge;
	export let user;
	export let bets;

</script>

<style lang="scss">
	h1.mdl-cell{
		display: flex;
		align-items: center;
	}
	div.section__circle-container {
		border-radius: 80px;
		display: inline-block;
		overflow: hidden;
		img {
			max-width: 80px;
		}
	}
	.mdl-grid {
		width: 100%;
		display: flex;
		align-items: center;
		align-content: center;
		&.center{
			text-align: center;
			.mdl-cell{
				align-items: center;
				align-content: center;
				display: flex;
				justify-content: center;
			}
		}
	}

	table {
		min-width: 100%;
		table-layout: fixed;
	}
	td{
		word-break: break-word;
	}
	td.long-text-ellipsis{
		text-overflow: ellipsis;
		max-width: 200px;
		overflow-x: hidden;
	}
</style>

<svelte:head>
	<title>{challenge.title}</title>
</svelte:head>
<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
	<div class="mdl-card mdl-cell mdl-cell--12-col">
		<div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
			<h1 class="mdl-cell mdl-cell--12-col m-b-3">
				<div class="section__circle-container">
					<img src="{user.pictureUrl}" alt="profilePic"/>
				</div>
				{challenge.title}
			</h1>
			<div class="mdl-grid">
				<div class="section__text mdl-cell mdl-cell--12-col">
					{challenge.description}
				</div>
			</div>
			<div class="mdl-grid center">
				<div class="mdl-cell mdl-cell--3-col"><i class="material-icons m-r-1">attach_money</i>{Math.floor(Math.random() * 1000) +1}</div>
				<div class="mdl-cell mdl-cell--3-col"><i class="material-icons m-r-1">thumb_up</i>{Math.floor(Math.random() * 50) +1}</div>
				<div class="mdl-cell mdl-cell--3-col"><i class="material-icons m-r-1">thumb_down</i>{Math.floor(Math.random() * 50) +1}</div>
				<div class="mdl-cell mdl-cell--3-col">
					<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Bet</button>
				</div>
			</div>
		</div>
	</div>
	<table class="mdl-data-table mdl-shadow--2dp">
		<thead>
		<tr>
			<th class="mdl-data-table__cell--non-numeric">Date</th>
			<th>Name</th>
			<th>Amount</th>
			<th>Bet Type</th>
		</tr>
		</thead>
		<tbody>
		{#each bets as bet, i (bet.id)}
			<tr>
				<td>{bet.datetime}</td>
				<td class="long-text-ellipsis">{bet.author}</td>
				<td><i class="material-icons">attach_money</i>{bets.amount}</td>
				<td><i class="material-icons">{bet.inFavor ? 'thumb_up': 'thumb_down'}</i></td>
			</tr>
		{/each}
		</tbody>
	</table>
</section>

<div class='content'>

</div>
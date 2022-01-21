<script lang="ts" context="module">
</script>

<script lang="ts">
	let input;

	const login = async () => {
		const body = { token: input };
		const res = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { 'content-type': 'application/json' }
		});
		if (res.ok) {
			console.log(res.status);
		}
	};
</script>

<h1>Welcome to Issue-Crawler</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>{input}</p>
<input type="text" class="bg-cyan-400" bind:value={input} />
<div>
	<button on:click={login}>Login</button>
</div>

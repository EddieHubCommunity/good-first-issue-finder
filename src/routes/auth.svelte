<script lang="ts">
  import { goto } from '$app/navigation';
  import Card from '$lib/components/card.svelte';

  let loginInput = '';

  const login = async () => {
    const body = { token: loginInput };
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'content-type': 'application/json' },
    });
    if (res.ok) {
      goto('/');
    }
  };
</script>

<div class="flex flex-col items-center justify-center">
  <input
    placeholder="Login"
    id="login-input"
    class="mb-4 p-2 rounded-lg outline-none border-2"
    type="text"
    bind:value={loginInput}
  />
  <button class="bg-cyan-500 p-2 rounded-lg" on:click={() => login()}>Login</button>
</div>

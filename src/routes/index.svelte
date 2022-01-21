<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ session }) => {
    if (!session.token) {
      return {
        status: 302,
        redirect: 'auth',
      };
    }
    return {};
  };
</script>

<h1>Welcome to Issue-Crawler</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

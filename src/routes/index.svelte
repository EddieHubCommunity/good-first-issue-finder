<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ session, fetch }) => {
    if (!session.token) {
      return {
        status: 302,
        redirect: 'auth',
      };
    }

    const res = await fetch(
      'https://api.github.com/search/issues?q=is:issue%20is:open%20label:%22good%20first%20issue%22%20org:EddieHubCommunity',
      {
        headers: {
          Authorization: `token ${session.token}`,
        },
      },
    );

    if (res.ok) {
      const data = await res.json();
      return {
        props: {
          issues: data.items,
        },
      };
    }
  };
</script>

<script lang="ts">
  export let issues: any[];
</script>

<h1>Welcome to Issue-Crawler</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{JSON.stringify(issues)}

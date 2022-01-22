<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import type { Item } from '../lib/types/github.type';

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
          issues: data.items as Item[],
        },
      };
    }
  };
</script>

<script lang="ts">
  import IssueCard from '../lib/components/issue-card.svelte';
  export let issues: Item[];
</script>

<div class="space-y-4">
  {#each issues as issue}
    <IssueCard {issue} />
  {/each}
</div>

<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ session, fetch }) => {
    const res = await fetch('/api/get-issues');

    if (res.ok) {
      const data = await res.json();
      return {
        props: {
          data: data as IssueResponse,
        },
      };
    }
  };
</script>

<script lang="ts">
  import IssueCard from '../lib/components/issue-card.svelte';
  import type { IssueResponse } from '../lib/types/github.types';
  export let data: IssueResponse;
</script>

<div class="space-y-4">
  {#each data.items as issue}
    <IssueCard {issue} />
  {/each}
</div>

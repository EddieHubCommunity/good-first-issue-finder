<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch }) => {
    const res = await fetch('/api/get-issues');

    if (res.ok) {
      const data = await res.json();
      return {
        props: {
          data: data as SearchResponse,
        },
      };
    }
    const data = await res.json();
    return {
      error: data.message,
    };
  };
</script>

<script lang="ts">
  import IssueCard from '../lib/components/issue-card.svelte';
  import Search from '$lib/components/search.svelte';
  import type { Edge, SearchResponse } from '../global';
  export let data: SearchResponse;

  let searchString = '';
  let searchResult = data.edges;

  const performSearch = () => {
    searchResult = data.edges.filter((el) =>
      el.node.title.toLowerCase().includes(searchString.toLowerCase()),
    );
  };
</script>

<div class="mb-4 flex justify-center">
  <Search bind:searchTerm={searchString} on:keyup={() => performSearch()} />
</div>
<div class="space-y-4">
  {#each searchResult as node}
    <IssueCard issue={node.node} />
  {/each}
</div>

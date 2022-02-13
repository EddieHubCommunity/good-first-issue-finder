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
  import Filter from '../lib/components/filter.svelte';
  import { selectedLabels } from '$lib/stores/selected-labels.store';
  import type { SearchResponse } from '../global';
  export let data: SearchResponse;

  let searchString = '';
  let filteredLabels = data.edges;
  let searchItems = data.edges;

  $: $selectedLabels, filterLabels();
  const filterLabels = () => {
    filteredLabels = data.edges.filter((dataset) =>
      $selectedLabels.every((label) =>
        dataset.node.labels.edges.some((edge) => edge.node.name === label),
      ),
    );
  };

  const performSearch = () => {
    searchItems = data.edges.filter((el) =>
      el.node.title.toLowerCase().includes(searchString.toLowerCase()),
    );
  };

  $: intersectedArray = filteredLabels.filter((item) => searchItems.includes(item));
</script>

<div class="mb-8 flex flex-col items-center justify-center">
  <Search bind:searchTerm={searchString} on:keyup={() => performSearch()} />

  <Filter tags={data.labels} />
</div>
{#if intersectedArray.length > 0}
  <div class="mb-4 space-y-4">
    {#each intersectedArray as node}
      <IssueCard issue={node.node} />
    {/each}
  </div>
{:else}
  <div class="text-center">Unfortuately there was no issue found</div>
{/if}

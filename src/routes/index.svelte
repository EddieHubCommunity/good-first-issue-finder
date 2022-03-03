<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch, url }) => {
    let globalParam = false;
    const globalQuery = 'is:open label:"EddieHub:good-first-issue" no:assignee';
    const orgQuery = 'is:open label:"good first issue" org:EddieHubCommunity no:assignee';

    try {
      globalParam = JSON.parse(url.searchParams.get('global'));
    } catch (err) {
      globalParam = false;
    }

    const postBody: { query: string } = globalParam ? { query: globalQuery } : { query: orgQuery };

    const res = await fetch('/api/get-issues', {
      method: 'POST',
      body: JSON.stringify(postBody),
    });

    if (res.ok) {
      const data = await res.json();
      return {
        props: {
          data: data as SearchResponse,
          checked: globalParam,
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
  import IssueCard from '$lib/components/issue-card.svelte';
  import Search from '$lib/components/search.svelte';
  import Filter from '$lib/components/filter.svelte';
  import Toggle from '$lib/components/toggle.svelte';
  import { selectedLabels } from '$lib/stores/selected-labels.store';
  import type { SearchResponse } from '../global';
  import { goto } from '$app/navigation';
  export let data: SearchResponse;
  export let checked: boolean;

  $: searchString = '';
  $: filteredLabels = data.edges;
  $: searchItems = data.edges;

  $: $selectedLabels, filterLabels();
  const filterLabels = () => {
    filteredLabels = data.edges.filter((dataset) =>
      $selectedLabels.every((label) =>
        dataset.node.labels.edges.some((edge) => edge.node.name === label),
      ),
    );
  };

  const onChangeHandler = async () => {
    if (checked) {
      await goto('?global=true');
      performSearch();
      return;
    }
    await goto('?global=false');
    performSearch();
  };

  const performSearch = () => {
    searchItems = data.edges.filter((el) =>
      el.node.title.toLowerCase().includes(searchString.toLowerCase()),
    );
  };

  $: intersectedArray = filteredLabels.filter((item) => searchItems.includes(item));
</script>

<header class="mb-8 flex flex-col items-center justify-center">
  <div class="mb-4">
    <Toggle
      id="toggle"
      bind:checked
      labelLeft="Organization"
      labelRight="Global"
      on:change={onChangeHandler}
    />
  </div>
  <Search bind:searchTerm={searchString} on:keyup={() => performSearch()} />

  <Filter tags={data.labels} />
</header>
{#if intersectedArray.length > 0}
  <div class="mb-4 space-y-4">
    {#each intersectedArray as node}
      <IssueCard issue={node.node} />
    {/each}
  </div>
{:else}
  <div class="text-center">Unfortuately there was no issue found</div>
{/if}

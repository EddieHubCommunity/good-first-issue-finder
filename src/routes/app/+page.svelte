<script lang="ts">
  import IssueCard from '$lib/components/issue-card.svelte';
  import Search from '$lib/components/search.svelte';
  import Filter from '$lib/components/filter.svelte';
  import LoadMore from '$lib/components/load-more.svelte';
  import Toggle from '$lib/components/toggle.svelte';
  import Seo from '$lib/components/seo.svelte';

  import { selectedLabels } from '$lib/stores/selected-labels.store';
  import type { SearchResponse } from '../../global';
  import { goto } from '$app/navigation';
  import type { PageData } from './$types';
  import { query } from '$lib/constants.json';
  import { navigating } from '$app/stores';
  import Loader from '$lib/components/loader.svelte';
  export let data: PageData;

  let { checked } = data;
  let loadDisabled = false;
  $: githubData = data.data;

  $: searchString = '';
  $: filteredLabels = githubData.edges;
  $: searchItems = githubData.edges;

  $: $selectedLabels, filterLabels();
  const filterLabels = () => {
    filteredLabels = githubData.edges.filter((githubDataset) =>
      $selectedLabels.every((label) =>
        githubDataset.node.labels.edges.some((edge) => edge.node.name === label),
      ),
    );
  };

  const fetchMore = async () => {
    loadDisabled = true;
    const res = await fetch('/api/get-issues', {
      method: 'POST',
      body: JSON.stringify({
        after: githubData.pageInfo.endCursor,
        query: checked ? query.global : query.org,
      }),
    });
    if (res.ok) {
      const respData = (await res.json()) as SearchResponse;
      githubData.edges = [...githubData.edges, ...respData.edges];
      githubData.pageInfo = respData.pageInfo;
      const uniqueLabels = [...githubData.labels, ...respData.labels];
      githubData.labels = [...new Set(uniqueLabels)];
    }
    loadDisabled = false;
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
    searchItems = githubData.edges.filter((el) =>
      el.node.title.toLowerCase().includes(searchString.toLowerCase()),
    );
  };

  $: intersectedArray = filteredLabels.filter((item) => searchItems.includes(item));

  // SEO Parameters
  const title = 'Dashboard | Good First Issue Finder';
  const metadescription =
    'Find good first issues by either querying the EddieHub organization or the community';
</script>

<Seo {title} {metadescription} />

<div class="flex flex-col items-center justify-center">
  <div class="mb-4">
    <div class="justify-self-center">
      <Toggle
        id="toggle"
        bind:checked
        labelLeft="EddieHub"
        labelRight="GitHub"
        on:change={onChangeHandler}
      />
    </div>
  </div>
  <Search bind:searchTerm={searchString} on:keyup={() => performSearch()} />
</div>
{#if $navigating}
  <div class="mt-8 flex items-center justify-center gap-4">
    <Loader background="off-background" /> Loading...
  </div>
{:else}
  <div class="mb-8 flex flex-col items-center">
    <Filter tags={githubData.labels} />
  </div>
  {#if intersectedArray.length > 0}
    <div class="mb-4 space-y-4">
      {#each intersectedArray as node}
        <IssueCard issue={node.node} />
      {/each}
      {#if githubData.pageInfo.hasNextPage}
        <div class="flex items-center justify-center">
          <LoadMore isDisabled={loadDisabled} on:load={fetchMore} />
        </div>
      {/if}
    </div>
  {:else}
    <div class="text-center">Unfortunately, there were no issues found.</div>
  {/if}
{/if}

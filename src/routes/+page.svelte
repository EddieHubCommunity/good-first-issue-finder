<script lang="ts">
  import IssueCard from '$lib/components/issue-card.svelte';
  import Search from '$lib/components/search.svelte';
  import Filter from '$lib/components/filter.svelte';
  import Toggle from '$lib/components/toggle.svelte';
  import ThemeSwitcher from '../lib/components/theme-switcher.svelte';
  import { selectedLabels } from '$lib/stores/selected-labels.store';
  import type { SearchResponse } from '../global';
  import { goto } from '$app/navigation';
  export let data: { data: SearchResponse; checked: boolean };

  let { data: githubData, checked } = data;

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
</script>

<header class="my-8 flex flex-col items-center justify-center">
  <div class="mb-8 grid w-full grid-cols-5 items-center gap-3">
    <img src="/images/hubber.png" class="w-8 object-contain md:w-12" alt="hubber" />
    <p class="col-span-3 justify-self-center text-center text-sm md:text-lg">
      EddieHub Issue-Crawler for finding
      <strong class="whitespace-nowrap">good-first-issues</strong>
    </p>
    <div class="justify-self-end">
      <ThemeSwitcher />
    </div>
  </div>
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

  <Filter tags={githubData.labels} />
</header>
{#if intersectedArray.length > 0}
  <main class="mb-4 space-y-4">
    {#each intersectedArray as node}
      <IssueCard issue={node.node} />
    {/each}
  </main>
{:else}
  <main class="text-center">Unfortunately, there were no issues found.</main>
{/if}

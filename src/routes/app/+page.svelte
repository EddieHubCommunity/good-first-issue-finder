<script lang="ts">
  import LoadMore from '$lib/components/load-more.svelte';
  import Toggle from '$lib/components/toggle.svelte';
  import Seo from '$lib/components/seo.svelte';

  import { goto, disableScrollHandling, afterNavigate } from '$app/navigation';
  import type { PageData } from './$types';
  import { query } from '$lib/constants.json';
  import Loader from '$lib/components/loader.svelte';
  import { createInfiniteQuery } from '@tanstack/svelte-query';
  import { fetchIssues } from '$lib/data';
  import { selectedLabels } from '$lib/stores/selected-labels.store';
  import IssueCard from '$lib/components/issue-card.svelte';
  import Filter from '$lib/components/filter.svelte';
  import Search from '$lib/components/search.svelte';
  import Modal from '$lib/components/modal.svelte';
  export let data: PageData;

  let { checked } = data;

  let searchString = '';
  let showFilterModal = false;

  if (!checked) checked = false;

  $: issues = createInfiniteQuery({
    queryKey: ['issues', { global: checked }],
    queryFn: ({ pageParam }) => fetchIssues(checked ? query.global : query.org, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.pageInfo.hasNextPage) return lastPage.pageInfo.endCursor;
      return undefined;
    },
  });

  afterNavigate(() => {
    disableScrollHandling();
  });

  const onChangeHandler = async () => {
    if (checked) {
      await goto('?global=true', { noScroll: true });
      return;
    }
    await goto('?global=false', { noScroll: true });
  };

  const onFilterButtonClick = () => {
    showFilterModal = true;
  };

  const onCloseFilterModal = () => {
    showFilterModal = false;
  };

  const onFilterClear = () => {
    $selectedLabels = [];
  };

  $: uniqueTags = $issues.data?.pages?.reduce((acc, page) => {
    page.labels.forEach((label) => {
      if (!acc.includes(label)) {
        acc.push(label);
      }
    });
    return acc;
  }, [] as string[]);

  $: filteredResponse = $issues.data?.pages?.flatMap((page) => {
    return page.edges
      .filter((edge) => {
        const labels = edge.node.labels.edges.map((node) => node.node.name);
        return $selectedLabels.every((label) => labels.includes(label));
      })
      .filter((edge) => {
        if (searchString === '') {
          return true;
        }
        const title = edge.node.title.toLowerCase();
        return title.includes(searchString.toLowerCase());
      });
  });

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
  <div class="flex justify-center">
    <Search bind:searchTerm={searchString} />
    <div class="flex items-center justify-center">
      <button
        class="default-transition ml-2 mr-2 gap-4 rounded-xl bg-skin-off-background py-1.5 px-2 shadow-standard dark:shadow-dark max-sm:text-sm"
        on:click={onFilterButtonClick}
      >
        Filters
        <span class="rounded-lg bg-primary-100 px-1 text-xs font-medium text-white">
          {$selectedLabels.length}
        </span>
      </button>
      {#if $selectedLabels.length}
        <button on:click={onFilterClear} class="rounded-lg bg-skin-off-background p-1">
          <svg
            class="block h-4 w-4 fill-current text-gray-700 dark:text-gray-400"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path
              d="M6 6l10 10M16 6l-10 10"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      {/if}
    </div>
  </div>
</div>

<Modal
  showModal={showFilterModal}
  title={'Filters'}
  showFooter={false}
  on:close={onCloseFilterModal}
>
  <Filter tags={uniqueTags || []} />
</Modal>

{#if $issues.isInitialLoading}
  <div class="mt-8 flex items-center justify-center gap-4">
    <Loader background="off-background" /> Loading...
  </div>
{:else if filteredResponse}
  <div class="mb-8 hidden flex-col items-center">
    <Filter tags={uniqueTags || []} />
  </div>
  {#if filteredResponse.length < 1}
    <div class="mt-4 text-center">Unfortunately, there were no issues found.</div>
  {:else}
    <div class="mb-4 mt-6 space-y-4">
      {#each filteredResponse as edge}
        <IssueCard issue={edge.node} />
      {/each}
    </div>
    {#if $issues.hasNextPage}
      <div class="flex items-center justify-center">
        <LoadMore isDisabled={$issues.isFetchingNextPage} on:load={() => $issues.fetchNextPage()} />
      </div>
    {/if}
  {/if}
{/if}

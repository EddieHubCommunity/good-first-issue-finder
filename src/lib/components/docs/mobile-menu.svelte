<script lang="ts">
  import { menu } from '$lib/contents/docs-menu';
  import { navigating } from '$app/stores';
  let isShown = false;

  $: if ($navigating) {
    isShown = false;
  }
</script>

<div>
  {#if isShown}
    <ul class="divide-y divide-gray-300 dark:divide-gray-700">
      {#each menu as item}
        <li class="py-4">
          <a class="flex h-full w-full items-center" data-sveltekit-prefetch href={item.href}
            >{item.name}</a
          >
        </li>
      {/each}
    </ul>
  {:else}
    <button class="py-4" on:click={() => (isShown = true)}>All Topics</button>
  {/if}
</div>

<script lang="ts">
  import Loader from './loader.svelte';
  import { createEventDispatcher } from 'svelte';

  export let isDisabled = false;
  const dispatch = createEventDispatcher();
</script>

<button
  disabled={isDisabled}
  on:click={() => dispatch('load')}
  class="flex items-center justify-center gap-4 rounded-lg bg-skin-off-background p-2 transition-all delay-[50] duration-200 hover:shadow-lg dark:hover:shadow-dark"
  >{#if isDisabled}
    <Loader /> Loading...
  {:else}
    Load More
  {/if}
</button>

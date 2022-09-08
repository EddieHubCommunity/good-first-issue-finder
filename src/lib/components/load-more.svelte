<script lang="ts">
  import Loader from './loader.svelte';
  import { createEventDispatcher } from 'svelte';

  export let isDisabled = false;
  const dispatch = createEventDispatcher();
</script>

<button
  disabled={isDisabled}
  on:click={() => dispatch('load')}
  class="default-transition flex items-center justify-center gap-4 rounded-lg bg-skin-off-background p-2 hover:shadow-lg dark:hover:shadow-dark"
  >{#if isDisabled}
    <Loader /> Loading...
  {:else}
    Load More
  {/if}
</button>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let isDisabled = false;
  const dispatch = createEventDispatcher();
</script>

<button
  disabled={isDisabled}
  on:click={() => dispatch('load')}
  class="flex gap-4 rounded-lg border border-gray-500 bg-skin-off-background p-2 transition-all delay-[50] duration-200 hover:shadow-lg dark:hover:shadow-dark"
>
  Load More
</button>

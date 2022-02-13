<script lang="ts">
  import { selectedLabels } from '$lib/stores/selected-labels.store';
  export let tags: string[];
  let selection = [];

  $: selection, run();
  const run = () => {
    selectedLabels.set(selection);
  };
</script>

<div class="mt-4 text-center">
  {#each tags as tag}
    <input class="hidden" value={tag} bind:group={selection} type="checkbox" id={tag} />
    <label
      class="my-1 mr-2 inline-block cursor-pointer select-none rounded-xl border-[1px] border-gray-500 py-1 px-2 text-sm transition-all duration-200"
      for={tag}>{@html tag}</label
    >
  {/each}
</div>

<style lang="postcss">
  input:checked + label {
    @apply border-eddiehub-200 bg-eddiehub-200 text-white;
  }
</style>

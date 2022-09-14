<script lang="ts">
  import { selectedLabels } from '$lib/stores/selected-labels.store';
  import Checkbox from './checkbox.svelte';
  export let tags: string[];
  let selection: string[] = [];

  $: selection, run();
  const run = () => {
    selectedLabels.set(selection);
  };
</script>

<ul class="mt-4 grid w-full grid-cols-3">
  {#each tags as tag}
    <li>
      <Checkbox bind:group={selection} label={tag} value={tag} />
    </li>
  {/each}
</ul>

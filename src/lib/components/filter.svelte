<script lang="ts">
  import { selectedLabels } from '$lib/stores/selected-labels.store';
  import Checkbox from './checkbox.svelte';
  export let tags: string[];
  let selection: string[] = [...$selectedLabels];

  $: tags = tags.sort((a, b) => a.localeCompare(b));

  $: selection, run();
  const run = () => {
    $selectedLabels = selection;
  };
</script>

<ul class="mt-8 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {#each tags as tag}
    <li>
      <Checkbox bind:group={selection} label={tag} value={tag} />
    </li>
  {/each}
</ul>

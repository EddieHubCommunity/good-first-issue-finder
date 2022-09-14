<script lang="ts">
  import Checkbox from './checkbox.svelte';
  import { selectedLabels } from '$lib/stores/selected-labels.store';
  import type { SearchResponse } from '../../global';
  let labelSelection: string[] = [];
  let languageSelection: string[] = [];

  let showMoreLabels = false;

  export let data: SearchResponse;

  $: labels = data.labels;
  $: languages = data.languages;
  $: labels, resetLabels();

  const resetLabels = () => {
    showMoreLabels = false;
  };

  $: labelSelection, run();
  const run = () => {
    selectedLabels.set(labelSelection);
  };
</script>

<div>
  <div class="mt-4">
    <h2>Labels</h2>
    {#if !showMoreLabels}
      <ul>
        {#each labels.slice(0, 4) as tag}
          <li>
            <Checkbox bind:group={labelSelection} value={tag} label={tag} />
          </li>
        {/each}
      </ul>
      <button on:click={() => (showMoreLabels = !showMoreLabels)}>Show more</button>
    {:else}
      <ul>
        {#each labels as tag}
          <li>
            <Checkbox bind:group={labelSelection} value={tag} label={tag} />
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <div class="mt-4">
    <h2>Languages</h2>
    <ul>
      {#each languages as language}
        <li>
          <Checkbox bind:group={languageSelection} label={language} value={language} />
        </li>
      {/each}
    </ul>
  </div>
</div>

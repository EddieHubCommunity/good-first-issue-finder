<script lang="ts">
  import Checkbox from './checkbox.svelte';
  export let tags: string[];
  export let group: string[];

  $: tags = [...new Set(tags)].sort((a, b) => a.localeCompare(b));
</script>

<form class="mt-8 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {#each tags as tag}
    <Checkbox bind:group label={tag} value={tag} />
  {/each}
</form>

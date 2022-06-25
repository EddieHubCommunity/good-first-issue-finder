<script lang="ts">
  import { onMount } from 'svelte';

  export let searchTerm: string;
  let element: HTMLElement;
  let placeholder = 'Search';
  onMount(() => {
    if (!navigator.userAgent.toLowerCase().match(/mobile/i)) {
      const platformKey = /(Mac)/i.test(navigator.userAgent) ? '⌘' : 'Ctrl';
      placeholder += ` ${platformKey}+K`;
    }
  });
  const handleBodyKeyDown = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      element.focus();
    }
  };
</script>

<svelte:body on:keydown={handleBodyKeyDown} />
<input
  bind:this={element}
  on:change
  on:keyup
  class="rounded-xl py-2 px-4 leading-4 shadow-standard"
  bind:value={searchTerm}
  type="search"
  {placeholder}
/>

<style>
  input[type='search']::-webkit-search-cancel-button {
    display: none;
  }
</style>

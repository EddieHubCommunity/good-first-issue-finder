<script lang="ts">
  import { onMount } from 'svelte';

  let theme: 'system' | 'light' | 'dark';
  onMount(() => {
    let storedTheme = localStorage.getItem('theme');
    if (storedTheme === null || storedTheme === 'system') {
      theme = 'system';
    } else if (storedTheme === 'light') {
      theme = 'light';
    } else {
      theme = 'dark';
    }
  });

  const setLight = () => {
    if (theme == 'dark') {
      document.body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
      theme = 'light';
    } else {
      document.body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
      theme = 'dark';
    }
  };
</script>

<div data-test-id="theme-switch" class="flex flex-col sm:flex-row">
  <button
    class="  text-m border-black p-2 dark:border-white md:p-3 md:text-base"
    title="Switch light"
    on:click={setLight}
    ><i
      class:active={theme === 'light'}
      class="fa-solid fa-sun text-skin-off dark:text-skin-text-highlight"
    />
  </button>
</div>

<style lang="postcss">
  .active {
    @apply !text-primary-100;
  }
</style>

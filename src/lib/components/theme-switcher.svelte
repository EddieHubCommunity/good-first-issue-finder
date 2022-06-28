<script lang="ts">
  import { onMount } from 'svelte';

  let theme: 'system' | 'light' | 'dark';
  onMount(() => {
    let storedTheme = localStorage.getItem('theme');
    if (storedTheme === null || storedTheme === 'system') {
      theme = 'system';
    } else if (storedTheme === 'dark') {
      theme = 'dark';
    } else {
      theme = 'light';
    }
  });
  const setLight = () => {
    document.body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
    theme = 'light';
  };
  const setDark = () => {
    document.body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
    theme = 'dark';
  };
  const setSystem = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.replace('light', 'dark');
    } else {
      document.body.classList.replace('dark', 'light');
    }
    localStorage.setItem('theme', 'system');
    theme = 'system';
  };
</script>

<div class="flex divide-x divide-gray-500">
  <button class="p-2" on:click={setSystem}
    ><i
      class:active={theme === 'system'}
      class="fa-solid fa-gear text-skin-off mr-1 dark:text-skin-text-highlight"
    />System</button
  >
  <button class="p-2" on:click={setLight}
    ><i
      class:active={theme === 'light'}
      class="fa-solid fa-sun text-skin-off mr-1 dark:text-skin-text-highlight"
    />Light</button
  >
  <button class="p-2" on:click={setDark}
    ><i
      class:active={theme === 'dark'}
      class="fa-solid fa-moon text-skin-off mr-1 dark:text-skin-text-highlight"
    />Dark</button
  >
</div>

<style lang="postcss">
  .active {
    @apply !text-skin-primary;
  }
</style>

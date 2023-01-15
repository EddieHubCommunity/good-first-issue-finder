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

<div data-test-id="theme-switch" class="flex flex-col sm:flex-row">
  <button
    class="border-b border-black p-2 text-xs dark:border-white sm:border-b-0 sm:border-r md:p-3 md:text-base"
    title="System Theme"
    on:click={setSystem}
    ><i
      class:active={theme === 'system'}
      class="fa-solid fa-gear text-skin-off dark:text-skin-text-highlight"
    /></button
  >
  <button
    class="border-b border-black p-2 text-xs dark:border-white sm:border-b-0 sm:border-r md:p-3 md:text-base"
    title="Light Theme"
    on:click={setLight}
    ><i
      class:active={theme === 'light'}
      class="fa-solid fa-sun text-skin-off dark:text-skin-text-highlight"
    /></button
  >
  <button class="p-2 text-xs md:p-3 md:text-base" title="Dark Theme" on:click={setDark}
    ><i
      class:active={theme === 'dark'}
      class="fa-solid fa-moon text-skin-off dark:text-skin-text-highlight"
    /></button
  >
</div>

<style lang="postcss">
  .active {
    @apply !text-primary-100;
  }
</style>

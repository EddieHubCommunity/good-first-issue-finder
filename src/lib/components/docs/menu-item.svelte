<script lang="ts">
  import { page } from '$app/stores';
  export let menuItem: { name: string; href: string };

  $: isActivePage = $page.url.pathname === menuItem.href;
</script>

<a class:active={isActivePage} data-sveltekit-prefetch href={menuItem.href}>{menuItem.name}</a>

<style lang="postcss">
  .active {
    @apply text-skin-primary;
  }
</style>

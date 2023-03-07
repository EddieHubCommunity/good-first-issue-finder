<script lang="ts">
  import Menu from '$lib/components/docs/menu.svelte';
  import MobileMenu from '$lib/components/docs/mobile-menu.svelte';
</script>

<div class="flex flex-col lg:flex-row">
  <div class="sticky top-4 hidden w-1/5 self-start lg:block">
    <Menu />
  </div>
  <div class="mb-4 w-full lg:hidden">
    <MobileMenu />
  </div>
  <div class="w-full border-gray-300 dark:border-gray-600 lg:w-3/5 lg:border-x lg:px-8">
    <slot />
  </div>
  <div class="hidden w-1/5  lg:block" />
</div>

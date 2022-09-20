<script lang="ts">
  import Menu from '$lib/components/docs/menu.svelte';
</script>

<div class="flex">
  <div class="sticky top-4 hidden w-1/5 self-start lg:block">
    <Menu />
  </div>
  <div class="w-full border-gray-300 dark:border-gray-600 lg:w-3/5 lg:border-x lg:px-8">
    <slot />
  </div>
  <div class="hidden w-1/5  lg:block" />
</div>

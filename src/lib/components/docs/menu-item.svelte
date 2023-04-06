<script lang="ts">
  import { page } from '$app/stores';
  export let menuItem: { name: string; href: string };

  $: isActivePage = $page.url.pathname === menuItem.href;
</script>

<a
  class={isActivePage ? 'text-primary-100  md:font-bold' : 'hover:text-primary-300'}
  class:active={isActivePage}
  href={menuItem.href}>{menuItem.name}</a
>

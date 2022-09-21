<script lang="ts">
  import { menu } from '$lib/contents/docs-menu';
  import MenuItem from './menu-item.svelte';
</script>

<ul class="space-y-4">
  {#each menu as item}
    <li>
      <MenuItem menuItem={item} />
    </li>
  {/each}
</ul>

<script lang="ts">
  import type { Item } from '../types/github.type';
  import Card from './card.svelte';

  export let issue: Item;
</script>

<Card>
  <a
    class="transition duration-100 underline hover:no-underline"
    href={issue.html_url}
    target="_blank"
  >
    {issue.title}</a
  >
</Card>

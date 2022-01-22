<script lang="ts">
  import type { Item } from '../types/github.type';
  import Card from './card.svelte';

  export let issue: Item;
</script>

<Card>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <img class="object-contain mr-4" src="/images/githubmark.png" alt="github" />
      <a
        class="transition duration-100 underline hover:no-underline mr-4"
        href={issue.html_url}
        target="_blank"
      >
        {issue.title}</a
      >
    </div>
    <a href={`https://gitpod.io/#${issue.html_url}`} target="_blank">
      <img src="/images/open-in-gitpod.svg" alt="open-in-gitpod" /></a
    >
  </div>
</Card>

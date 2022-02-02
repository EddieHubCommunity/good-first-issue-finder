<script lang="ts">
  import type { Node } from '../types/github.types';
  import Card from './card.svelte';

  export let issue: Node;
</script>

<Card>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <img class="object-contain mr-4" src="/images/githubmark.svg" width="32" alt="github" />
      <a
        class="transition duration-100 underline hover:no-underline mr-4"
        href={issue.url}
        target="_blank"
      >
        {issue.title}</a
      >
    </div>
    <a
      class="hidden sm:block flex-shrink-0"
      href={`https://gitpod.io/#${issue.url}`}
      target="_blank"
    >
      <img class="object-fill" src="/images/open-in-gitpod.svg" alt="open-in-gitpod" /></a
    >
  </div>
</Card>

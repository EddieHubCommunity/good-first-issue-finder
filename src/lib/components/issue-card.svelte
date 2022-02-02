<script lang="ts">
  import type { Node } from '../types/github.types';
  import Card from './card.svelte';

  export let issue: Node;
</script>

<Card>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <img class="mr-4 object-contain" src="/images/githubmark.svg" width="32" alt="github" />
      <a
        class="mr-4 underline transition duration-100 hover:no-underline"
        href={issue.url}
        target="_blank"
      >
        {issue.title}</a
      >
    </div>
    <a
      class="hidden flex-shrink-0 sm:block"
      href={`https://gitpod.io/#${issue.url}`}
      target="_blank"
    >
      <img class="object-fill" src="/images/open-in-gitpod.svg" alt="open-in-gitpod" /></a
    >
  </div>
</Card>

<script>
  import Link from '$lib/components/index/link.svelte';
  import Card from '$lib/components/card.svelte';
  import SvelteCard from '$lib/components/index/svelte-card.svelte';
  import GraphqlCard from '$lib/components/index/graphql-card.svelte';
  import PlaywrightCard from '$lib/components/index/playwright-card.svelte';
</script>

<div class="mt-12 flex flex-col items-center gap-16 px-4">
  <div class="space-y-8">
    <h1
      class="mx-auto bg-gradient-to-r from-primary-100 via-accent-magenta to-accent-cyan bg-clip-text text-center text-3xl font-bold text-transparent dark:to-primary-400 md:text-6xl"
    >
      Good-first-issue-finder
    </h1>
    <h2 class="max-w-2xl text-center md:text-xl">
      Your entry point for finding good first issues in the EddieHub Organization and in the
      community
    </h2>
    <div class="flex justify-center">
      <Link variant="primary" href="/app">Get started</Link>
    </div>
  </div>
  <div class="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
    <SvelteCard />
    <GraphqlCard />
    <PlaywrightCard />
  </div>
</div>

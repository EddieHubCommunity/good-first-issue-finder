<script>
  import SvelteCard from '$lib/components/index/svelte-card.svelte';
  import GraphqlCard from '$lib/components/index/graphql-card.svelte';
  import PlaywrightCard from '$lib/components/index/playwright-card.svelte';
  import HeroImage from '$lib/components/index/hero-image.svelte';
  import Hero from '$lib/components/index/hero.svelte';
</script>

<div class="mt-16 flex flex-col items-center gap-16 px-4 lg:mt-32 lg:gap-32">
  <Hero />
  <HeroImage />
  <div class="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
    <SvelteCard />
    <GraphqlCard />
    <PlaywrightCard />
  </div>
</div>

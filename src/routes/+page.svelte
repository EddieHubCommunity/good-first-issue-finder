<script>
  import SvelteCard from '$lib/components/index/svelte-card.svelte';
  import GraphqlCard from '$lib/components/index/graphql-card.svelte';
  import PlaywrightCard from '$lib/components/index/playwright-card.svelte';
  import HeroImage from '$lib/components/index/hero-image.svelte';
  import Hero from '$lib/components/index/hero.svelte';
  import TailwindCard from '$lib/components/index/tailwind-card.svelte';
  import GithubCard from '$lib/components/index/github-card.svelte';
  import OverviewCard from '$lib/components/index/overview-card.svelte';
</script>

<div class="mt-16 flex flex-col items-center gap-16 px-4 lg:mt-32 lg:gap-32">
  <Hero />
  <HeroImage />
</div>
<section
  class="section-full mt-20 flex flex-col items-center bg-white pt-20 pb-40 dark:bg-neutral-0 lg:mt-40"
>
  <h2
    class="mb-4 bg-gradient-to-r from-primary-100 via-accent-magenta to-accent-cyan bg-clip-text text-2xl font-bold text-transparent dark:to-primary-400 lg:mb-8 lg:text-4xl"
  >
    Features
  </h2>
  <div class="mx-auto flex w-[90%] max-w-5xl flex-col items-center gap-4 lg:gap-32">
    <OverviewCard
      heading="Find Good first issues"
      description="in the Eddiehub Github Organization or in the entire Eddiehub organization"
    />
    <OverviewCard
      textFieldAlignment="right"
      heading="Filter by labels"
      description="Filter the returned data by labels, to specify and narrow down the search even more"
    />
    <OverviewCard
      heading="Serach"
      description="Search the Github Issues for specific words or phrases"
    />

    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100"
      ><path
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14Z"
      /></svg
    >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100"
      ><path
        d="M16 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-14.5 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm0-14.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM4.75 3a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 4.75 3Zm0 14.5a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 4.75 17.5Zm14.5 0a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Z"
      /><path
        d="M13.405 1.72a.75.75 0 0 1 0 1.06L12.185 4h4.065A3.75 3.75 0 0 1 20 7.75v8.75a.75.75 0 0 1-1.5 0V7.75a2.25 2.25 0 0 0-2.25-2.25h-4.064l1.22 1.22a.75.75 0 0 1-1.061 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM4.75 7.25A.75.75 0 0 1 5.5 8v8A.75.75 0 0 1 4 16V8a.75.75 0 0 1 .75-.75Z"
      /></svg
    > -->
  </div>
</section>
<section class="mt-20 flex flex-col items-center space-y-8 lg:mt-20">
  <h2
    class="bg-gradient-to-r from-primary-100 via-accent-magenta to-accent-cyan bg-clip-text text-2xl font-bold text-transparent dark:to-primary-400 lg:text-4xl"
  >
    Techstack
  </h2>
  <p>The tools used in this application</p>
  <div class="mx-auto flex w-full max-w-5xl flex-wrap justify-center gap-8">
    <SvelteCard />
    <GraphqlCard />
    <TailwindCard />
    <GithubCard />
    <PlaywrightCard />
  </div>
</section>

<style>
  .section-full {
    margin-left: calc(-49.5vw + 50%);
    width: 99vw;
  }
</style>

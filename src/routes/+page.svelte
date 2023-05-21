<script>
  import SvelteCard from '$lib/components/index/svelte-card.svelte';
  import GraphqlCard from '$lib/components/index/graphql-card.svelte';
  import PlaywrightCard from '$lib/components/index/playwright-card.svelte';
  import HeroImage from '$lib/components/index/hero-image.svelte';
  import Hero from '$lib/components/index/hero.svelte';
  import TailwindCard from '$lib/components/index/tailwind-card.svelte';
  import GithubCard from '$lib/components/index/github-card.svelte';
  import OverviewCard from '$lib/components/index/overview-card.svelte';
  import Seo from '$lib/components/seo.svelte';

  const title = 'Good First Issue Finder by EddieHub';
  const metadescription =
    'Good First Issue Finder helps new open source contributors pave their path into the world of open source through good first issues.';
</script>

<Seo {title} {metadescription} />

<div class="mt-16 flex flex-col items-center gap-16 px-4 lg:mt-32 lg:gap-32">
  <Hero />
  <HeroImage />
</div>
<section
  class="section-full mt-12 flex flex-col items-center bg-white pb-12 pt-12 dark:bg-neutral-200 lg:mt-40 lg:pb-40 lg:pt-20"
>
  <h2
    class="mb-4 bg-gradient-to-r from-primary-100 via-accent-magenta to-accent-cyan bg-clip-text text-3xl font-bold text-transparent dark:to-primary-400 lg:mb-8 lg:text-4xl"
  >
    Features
  </h2>
  <div class="mx-auto flex w-[90%] max-w-5xl flex-col items-center gap-4 lg:gap-32">
    <OverviewCard
      heading="Find Good first issues"
      description="in the Eddiehub Github Organization or in the entire Eddiehub organization"
    >
      <svg
        class="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
        slot="image"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-label="disc image"
      >
        <title>disc image</title>
        <defs>
          <linearGradient id="0" x1="0" y1="0.51" x2="1" y2="0.49">
            <stop offset="0%" stop-color="#ff5a00" />
            <stop offset="100%" stop-color="#eb00eb" />
          </linearGradient>
        </defs>
        <path
          fill="url(#0)"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14Z"
        /></svg
      >
    </OverviewCard>
    <OverviewCard
      textFieldAlignment="right"
      heading="Filter by labels"
      description="Filter the returned data by labels, to specify and narrow down the search even more"
    >
      <i
        slot="image"
        class="fa-solid fa-filter bg-gradient-to-tr from-primary-100 via-accent-magenta to-primary-200 bg-clip-text text-5xl text-transparent lg:text-8xl"
        role="img"
        aria-label="filter image"
        title="filter image"
      />
    </OverviewCard>
    <OverviewCard
      heading="Search"
      description="Search the Github Issues for specific words or phrases"
    >
      <i
        slot="image"
        class="fa-solid fa-magnifying-glass bg-gradient-to-r from-primary-100 to-accent-magenta bg-clip-text text-5xl text-transparent lg:text-8xl"
        role="img"
        aria-label="magnifying glass"
        title="magnifying glass"
      />
    </OverviewCard>
  </div>
</section>
<section class="mb-12 mt-12 flex flex-col items-center space-y-8 lg:mb-20 lg:mt-20">
  <h2
    class="bg-gradient-to-r from-primary-100 via-accent-magenta to-accent-cyan bg-clip-text text-3xl font-bold text-transparent dark:to-primary-400 lg:text-4xl"
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

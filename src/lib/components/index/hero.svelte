<script lang="ts">
  import Link from '$lib/components/index/link.svelte';
</script>

<head>
  <link rel="stylesheet" href="css/index.css" />
</head>

<div class="space-y-8">
  <h1
    class="gradient-flow webkit-bg-clip-text mx-auto inline-block max-w-3xl bg-gradient-to-r
   from-primary-100 via-accent-magenta to-accent-cyan bg-clip-text text-center text-3xl font-bold text-transparent md:text-6xl"
  >
    Good-first-issue-finder
  </h1>

  <h2 class="max-w-2xl text-center md:text-xl">
    Your entry point for finding good first issues in the EddieHub Organization and in the community
  </h2>
  <div class="flex justify-center">
    <Link variant="primary" href="/app">Get started</Link>
  </div>
</div>

<style lang="postcss">
  .gradient-flow {
    background-size: 200% 100%;
    animation: gradientAnimation 2s linear infinite alternate-reverse;
  }

  @media (prefers-reduced-motion: reduce) {
    .md\:text-6xl {
      animation: none;
      background-size: 100% 100%;
    }
  }

  @media (min-width: 768px) {
    .md\:text-6xl {
      font-size: 3.75rem;
      line-height: 1;
    }
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
</style>

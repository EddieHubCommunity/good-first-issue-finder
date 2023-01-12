<script>
  import Link from '$lib/components/index/link.svelte';
</script>

<div class="mt-12 flex flex-col items-center px-4">
  <div class="space-y-8">
    <h1
      class="mx-auto bg-gradient-to-r from-skin-primary via-[#ff00ff] to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent dark:to-[#e3ff00] md:text-6xl"
    >
      Good-first-issue-finder
    </h1>
    <h2 class="max-w-2xl text-center md:text-xl">
      Your entry point for finding good first issues in the EddieHub Organization and in the
      community
    </h2>
    <div class="flex justify-center gap-8">
      <Link variant="primary" href="/app">Get started</Link>
      <Link variant="secondary" href="/docs">Read docs</Link>
    </div>
  </div>
</div>

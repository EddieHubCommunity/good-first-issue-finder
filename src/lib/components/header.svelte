<script lang="ts">
  import ThemeSwitcher from './theme-switcher.svelte';
</script>

<header class="my-8">
  <div class="grid w-full grid-cols-5 items-center gap-3">
    <img src="/images/hubber.png" class="w-8 object-contain md:w-12" alt="hubber" />
    <p class="col-span-3 justify-self-center text-center text-sm md:text-lg">
      EddieHub Issue-Crawler for finding
      <strong class="whitespace-nowrap">good-first-issues</strong>
    </p>
    <div class="justify-self-end">
      <ThemeSwitcher />
    </div>
  </div>
</header>

<script lang="ts">
  import ThemeSwitcher from './theme-switcher.svelte';
  import PackageVersion from './package-version.svelte';
</script>

<footer class="mt-auto w-full bg-skin-off-background py-4">
  <div class="mx-auto flex w-[90%] max-w-[1440px] items-center justify-between">
    <ThemeSwitcher />
    <PackageVersion />
    <ul class="flex list-none items-center justify-center gap-8">
      <li>
        <a
          data-test-id="discord-btn"
          class="transition duration-200 hover:text-skin-primary active:text-skin-primary"
          href="http://discord.eddiehub.org"
          target="_blank"
          aria-label="Discord"><i class="fa-brands fa-discord fa-xl" /></a
        >
      </li>
      <li>
        <a
          data-test-id="github-btn"
          target="_blank"
          class="transition duration-200 hover:text-skin-primary active:text-skin-primary"
          href="http://github.eddiehub.org"
          aria-label="Github"><i class="fa-brands fa-github fa-xl" /></a
        >
      </li>
    </ul>
  </div>
</footer>

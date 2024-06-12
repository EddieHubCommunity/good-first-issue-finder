<script>
  import { onMount } from 'svelte';

  let theme;

  onMount(() => {
    // Simulate theme change (replace with your actual theme logic)
    theme = 'light';
  });
</script>

<footer class="mt-auto w-full bg-skin-off-background py-4">
  <div class="mx-auto flex w-[90%] max-w-[1440px] items-center justify-between">
    <span>Theme: {theme}</span>

    <span>v1.0.0</span>

    <ul class="flex list-none items-center justify-center gap-8">
      <li>
        <a
          data-test-id="discord-btn"
          class="transition duration-200 hover:text-[#7289da] active:text-primary-100"
          href="http://discord.eddiehub.org"
          target="_blank"
          rel="noreferrer"
          aria-label="Discord"><i class="fa-brands fa-discord fa-xl" title="Discord" /></a
        >
      </li>
      <li>
        <a
          data-test-id="github-btn"
          target="_blank"
          rel="noreferrer"
          class="transition duration-200 hover:text-[#333333] active:text-primary-100 dark:hover:text-[#fafafa]"
          href="http://github.eddiehub.org"
          aria-label="Github"><i class="fa-brands fa-github fa-xl" title="Github" /></a
        >
      </li>
      <li>
        <a
          data-test-id="linkedin-btn"
          target="_blank"
          rel="noreferrer"
          class="transition duration-200 hover:text-[#0e76a8] active:text-primary-100"
          href="http://linkedin.com/company/eddiehub"
          aria-label="LinkedIn"><i class="fab fa-linkedin fa-xl" title="LinkedIn" /></a
        >
      </li>
    </ul>
  </div>
</footer>

<style>
  /* Increase specificity to potentially override conflicting styles */
  footer a {
    color: inherit; /* Inherit from parent or base styles */
    transition: color 0.2s ease-in-out; /* Adjust transition duration if needed */
  }

  footer a:hover {
    color: #7289da;
  }

  footer a:active {
    color: text-primary-100; /* Replace with your primary color class */
  }

  /* Add dark mode styles if applicable */
  .dark footer a:hover {
    color: #fff; /* Adjust hover color for dark mode */
  }
</style>

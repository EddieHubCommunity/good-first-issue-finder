<script lang="ts">
  import ProfilePicture from './profile-picture.svelte';
  import { page } from '$app/stores';
  export let username: string | undefined;

  const navItems = [{ name: 'Docs', path: '/docs' }];
</script>

<header class="my-8 flex flex-wrap items-center justify-between">
  <a href="/">
    <img src="/images/hubber.png" class="w-8 object-contain md:w-12" alt="hubber" />
  </a>
  <div class="flex items-center gap-4 lg:gap-8">
    <ul>
      {#each navItems as item}
        <li>
          <a
            class="default-transition text-skin-text-highlight decoration-transparent hover:underline hover:decoration-inherit"
            class:active={$page.url.pathname.includes(item.path)}
            href={item.path}>{item.name}</a
          >
        </li>
      {/each}
    </ul>
    {#if username}
      <ProfilePicture {username} />
    {:else}
      <a
        data-test-id="login-btn"
        class="default-transition rounded-xl bg-skin-text px-4 py-2 text-skin-off-background hover:bg-primary-100 dark:bg-skin-text-highlight dark:text-skin-background dark:hover:bg-primary-100"
        href="/login">Login</a
      >
    {/if}
  </div>
</header>

<style lang="postcss">
  .active {
    @apply underline decoration-inherit;
  }
</style>

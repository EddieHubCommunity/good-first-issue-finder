<script lang="ts">
  import ProfilePicture from './profile-picture.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  export let username: string;

  const navItems = [{ name: 'Docs', path: '/docs' }];
  let closeHamburgerMenu: () => void;
  let burger: Element;
  let menu: Element;
  let closeButton: Element;

  onMount(() => {
    closeHamburgerMenu = () => {
      menu?.classList.add('hidden');
    };

    burger?.addEventListener('click', () => {
      menu?.classList.toggle('hidden');
    });

    closeButton?.addEventListener('click', closeHamburgerMenu);
  });
</script>

<header class="my-8 flex flex-wrap items-center justify-between">
  <a href="/">
    <img src="/images/hubber.png" class="w-8 object-contain md:w-12" alt="hubber" />
  </a>
  <div class="lg:hidden">
    <button class="navbar-burger flex items-center p-3 text-neutral-900" bind:this={burger}>
      <svg
        class="block h-4 w-4 fill-current"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        color="green"
      >
        <title>Mobile menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </div>
  <div class="hidden items-center gap-4 lg:flex lg:gap-8">
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

  <!-- hamburger menu for smaller devices(below lg)-->
  <div class="navbar-menu absolute z-50 hidden" bind:this={menu}>
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50" />
    <nav
      class="fixed top-0 left-0 bottom-0 flex w-5/6 max-w-sm flex-col overflow-y-auto bg-neutral-100 py-6 px-6"
    >
      <div class="mb-8 flex items-center justify-between">
        <a href="/" on:click={closeHamburgerMenu}>
          <img src="/images/hubber.png" class="w-8 object-contain md:w-12" alt="hubber" />
        </a>
        <button class="navbar-close" bind:this={closeButton}>
          <svg
            class="h-6 w-6 cursor-pointer text-gray-400 text-neutral-900 dark:hidden"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <svg
            class="hidden h-6 w-6 cursor-pointer text-gray-400 text-neutral-900 dark:block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="flex flex-col items-center gap-4 gap-8 ">
        {#if username}
          <ProfilePicture {username} />
        {/if}
        <ul>
          {#each navItems as item}
            <li>
              <a
                on:click={closeHamburgerMenu}
                class="default-transition text-skin-text-highlight decoration-transparent hover:underline hover:decoration-inherit"
                class:active={$page.url.pathname.includes(item.path)}
                href={item.path}
                >{item.name}
              </a>
            </li>
          {/each}
        </ul>
        {#if !username}
          <a
            data-test-id="login-btn"
            class="default-transition rounded-xl bg-skin-text px-4 py-2 text-skin-off-background hover:bg-primary-100 dark:bg-skin-text-highlight dark:text-skin-background dark:hover:bg-primary-100"
            href="/login"
            on:click={closeHamburgerMenu}>Login</a
          >
        {/if}
      </div>
    </nav>
  </div>
</header>

<style lang="postcss">
  .active {
    @apply underline decoration-inherit;
  }
</style>

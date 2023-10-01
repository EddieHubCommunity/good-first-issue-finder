<script lang="ts">
  import showHamburgerMenu from '$lib/stores/show-hamburger-menu';
  import { showHideOverflowY } from '$lib/util/hide-overflow';
  import ProfilePicture from '../profile-picture.svelte';
  import { beforeNavigate } from '$app/navigation';
  import { page } from '$app/stores';

  export let username: string | undefined;
  export let navItems: { name: string; path: string }[];

  beforeNavigate(() => {
    closeHamburgerMenu();
  });

  function closeHamburgerMenu() {
    $showHamburgerMenu = false;
    showHideOverflowY(false);
  }
</script>

{#if $showHamburgerMenu}
  <div class="navbar-menu absolute z-50">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50" />
    <nav
      class="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto bg-neutral-900 px-6 py-6 dark:bg-neutral-100"
    >
      <div class="mb-8 flex items-center justify-end">
        <button class="navbar-close h-6 w-6" on:click={closeHamburgerMenu}>
          <svg
            class="cursor-pointer fill-skin-text-highlight"
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
      <div class="flex flex-col items-center gap-4">
        {#if username}
          <ProfilePicture {username} />
        {/if}
        <ul class="space-y-6">
          {#each navItems as item}
            <li class="px-3">
              <a
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
            class="default-transition mt-6 rounded-xl bg-skin-text px-4 py-2 text-skin-off-background hover:bg-primary-100 dark:bg-skin-text-highlight dark:text-skin-background dark:hover:bg-primary-100"
            href="/login">Login</a
          >
        {/if}
      </div>
    </nav>
  </div>
{/if}

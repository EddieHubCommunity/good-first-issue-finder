<script lang="ts">
  import { beforeNavigate } from '$app/navigation';
  import { createPopper, type Instance } from '@popperjs/core';
  import { tick, onMount } from 'svelte';
  export let username: string;
  let displayPopover = false;

  let popperInstance: Instance | null = null;

  beforeNavigate(() => {
    displayPopover = false;
    destroyInstance();
  });

  function createInstance() {
    popperInstance = createPopper(root, popover, {
      placement: 'bottom-end',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    });
  }

  function destroyInstance() {
    if (popperInstance) {
      popperInstance.destroy();
      popperInstance = null;
    }
  }

  async function togglePopper() {
    displayPopover = !displayPopover;
    await tick();
    if (popperInstance === null) {
      createInstance();
    } else {
      destroyInstance();
    }
  }

  function handleOutsideClick(event: MouseEvent) {
    if (root && popover) {
      const target = event.target as Node;
      if (!root.contains(target) && !popover.contains(target)) {
        displayPopover = false;
        destroyInstance();
      }
    }
  }

  onMount(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  });

  let root: HTMLElement;
  let popover: HTMLElement;
</script>

<div>
  <button class="hidden lg:flex" on:click={togglePopper}>
    <img
      bind:this={root}
      class="rounded-full hover:shadow-lg dark:hover:shadow-dark"
      width="48"
      height="48"
      src="https://www.github.com/{username}.png"
      alt="Github profile picture of {username}"
    />
  </button>
  {#if displayPopover}
    <div
      role="tooltip"
      bind:this={popover}
      class="absolute flex w-screen max-w-xs flex-col items-center justify-center rounded-xl bg-skin-off-background p-4"
    >
      <div class="flex flex-col items-center justify-center gap-4">
        <img
          class="rounded-full"
          alt="Github profile picture of {username}"
          src="https://www.github.com/{username}.png"
          width="96"
          height="96"
        />
        <div class="font-semibold">{username}</div>
      </div>
      <div class="my-2 w-full border-[0.5px] border-skin-text-highlight" />
      <a
        href="/api/authentication/logout"
        class="default-transition underline decoration-primary-100 hover:decoration-transparent"
        >Sign out</a
      >
    </div>
  {/if}
  <!-- smaller devices -->
  <div
    class="flex w-screen max-w-xs flex-col items-center justify-center rounded-xl bg-skin-off-background p-4 lg:hidden"
  >
    <div class="flex flex-col items-center justify-center gap-4">
      <img
        class="rounded-full"
        alt="Github profile picture of {username}"
        src="https://www.github.com/{username}.png"
        width="96"
        height="96"
      />
      <div class="font-semibold">{username}</div>
    </div>
    <div class="my-2 w-full border-[0.5px] border-skin-text-highlight" />
    <a
      href="/api/authentication/logout"
      class="default-transition underline decoration-primary-100 hover:decoration-transparent"
      >Sign out</a
    >
  </div>
</div>

<script lang="ts">
  import { createPopper, type Instance } from '@popperjs/core';
  import { tick } from 'svelte';
  export let username: string;
  let displayPopover = false;

  let popperInstance: Instance | null = null;

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

  let root: HTMLElement;
  let popover: HTMLElement;
</script>

<div>
  <button on:click={togglePopper}>
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
        class="default-transition underline decoration-skin-primary hover:decoration-transparent"
        >Sign out</a
      >
    </div>
  {/if}
</div>

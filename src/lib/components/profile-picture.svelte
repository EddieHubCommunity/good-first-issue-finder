<script lang="ts">
  import { createPopper, type Instance } from '@popperjs/core';
  import { tick } from 'svelte';
  export let username: string;
  let displayPopover = false;

  let popperInstance: Instance | null = null;

  function createInstance() {
    popperInstance = createPopper(image, popover, {
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

  let image: HTMLElement;
  let popover: HTMLElement;
</script>

<div>
  <img
    on:click={togglePopper}
    bind:this={image}
    class="cursor-pointer rounded-full transition-all delay-[50] duration-200 hover:shadow-lg"
    width="48"
    height="48"
    src="https://www.github.com/{username}.png"
    alt="Github profile picture of {username}"
  />
  {#if displayPopover}
    <div
      role="tooltip"
      bind:this={popover}
      class="absolute flex w-screen max-w-xs flex-col items-center justify-center rounded-xl bg-skin-off-background p-4"
    >
      <div class="flex flex-col items-center justify-center gap-4">
        <img
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
        class="underline decoration-skin-primary transition-all delay-[50] duration-200 hover:decoration-transparent"
        >Sign out</a
      >
    </div>
  {/if}
</div>

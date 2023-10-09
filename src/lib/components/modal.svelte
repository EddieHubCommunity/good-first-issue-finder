<script lang="ts">
  import { Dialog } from 'radix-svelte';

  export let title: string;
  export let amount: string[];
  export let clearFilter: () => void;
  let rootOpen: boolean;
  let rootModal = true;
  let contentOpenAutoFocus = true;
  let contentCloseAutoFocus = true;
</script>

<Dialog.Root bind:modal={rootModal} bind:open={rootOpen}>
  <Dialog.Trigger
    class="default-transition ml-2 mr-2 gap-4 rounded-xl bg-skin-off-background px-2 py-1.5 shadow-standard focus:outline-none focus:ring
    focus:ring-black dark:shadow-dark max-sm:text-sm"
  >
    {title}
    <span class="rounded-lg bg-primary-100 px-1 text-xs font-medium text-white">
      {amount.length}
    </span>
  </Dialog.Trigger>
  {#if amount.length >= 1}
    <button on:click={clearFilter} class="rounded-lg bg-skin-off-background p-1">
      <svg
        class="block h-4 w-4 fill-current text-gray-700 dark:text-gray-400"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Close</title>
        <path
          d="M6 6l10 10M16 6l-10 10"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  {/if}
  <Dialog.Portal>
    <Dialog.Overlay class="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
    <Dialog.Content
      class="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw]
			translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-[25px]
			shadow-lg focus:outline-none dark:bg-neutral-100"
      openAutoFocus={contentOpenAutoFocus}
      closeAutoFocus={contentCloseAutoFocus}
    >
      <Dialog.Title class="m-0 text-lg font-medium text-black dark:text-gray-400"
        >Filters</Dialog.Title
      >

      <slot />

      <div class="mt-[25px] flex justify-end gap-4">
        <Dialog.Close>Close</Dialog.Close>
      </div>

      <Dialog.Close
        class="text-vermilion-800 hover:bg-vermilion-100 focus:shadow-vermilion-400 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none
			items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-black"
        aria-label="Close"
      >
        <svg
          class="block h-4 w-4 fill-current text-gray-700 dark:text-gray-400"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Close</title>
          <path
            d="M6 6l10 10M16 6l-10 10"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>

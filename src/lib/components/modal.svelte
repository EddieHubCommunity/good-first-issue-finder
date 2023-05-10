<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  export let showModal: boolean;
  export let title: string;
  export let showFooter: boolean;

  const dispatch = createEventDispatcher();

  onMount(() => {
    window.addEventListener('keydown', handleEscape);
  });

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      dispatch('close');
    }
  };
</script>

{#if showModal}
  <div
    class="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
  >
    <div
      class="modal-dimension w-4/5 overflow-y-auto rounded-lg bg-skin-background shadow-xl dark:shadow-dark"
    >
      <div
        class="sticky top-0 flex justify-between border-b border-gray-200 bg-inherit px-5 py-2 dark:border-gray-500"
      >
        <div class="text-lg font-bold">{title}</div>
        <button class="p-1" on:click={() => dispatch('close')}>
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
      </div>
      <div class="mb-6 px-5">
        <slot />
      </div>
      {#if showFooter}
        <div
          class="sticky bottom-0 mt-5 flex justify-end border-t border-gray-200 bg-inherit px-4 py-2 dark:border-gray-500"
        >
          <button
            on:click={() => dispatch('onFooterCancel')}
            class="default-transition  mr-2 rounded-xl border px-3 py-1 text-gray-600 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            on:click={() => dispatch('onFooterOk')}
            class="default-transition rounded-xl bg-primary-100 px-3 py-1 text-white"
          >
            Ok
          </button>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .modal-dimension {
    max-height: 600px;
    max-width: 800px;
  }
</style>

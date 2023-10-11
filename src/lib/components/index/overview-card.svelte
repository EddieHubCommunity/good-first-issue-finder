<script lang="ts">
  export let heading: string;
  export let description: string;
  export let textFieldAlignment: 'left' | 'right' = 'left';
</script>

<div
  class="flex w-full items-center justify-center gap-4 lg:gap-0 {textFieldAlignment === 'left'
    ? 'flex-wrap-reverse'
    : 'flex-wrap'} rounded-xl p-8"
>
  {#if textFieldAlignment === 'right'}
    <div class="flex w-full justify-center lg:w-1/2"><slot name="image" /></div>
  {/if}
  <div class="flex w-full flex-col items-center gap-4 lg:w-1/2">
    <h3 class="text-center text-xl font-bold text-skin-text-highlight">{heading}</h3>
    <!-- eslint-disable -->
    <p class="px-0 text-center lg:px-8">{@html description}</p>
    <slot />
  </div>
  {#if textFieldAlignment === 'left'}
    <div class="flex w-full justify-center lg:w-1/2"><slot name="image" /></div>
  {/if}
</div>

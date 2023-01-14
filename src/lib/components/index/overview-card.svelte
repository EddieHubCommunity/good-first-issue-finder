<script lang="ts">
  import { right } from '@popperjs/core';

  export let heading: string;
  export let description: string;
  export let textFieldAlignment: 'left' | 'right' = 'left';
</script>

<div
  class="flex w-full {textFieldAlignment === 'left'
    ? 'flex-wrap-reverse'
    : 'flex-wrap'} rounded-xl p-8"
>
  {#if textFieldAlignment === 'right'}
    <div class="w-full lg:w-3/5"><slot name="image" /></div>
  {/if}
  <div class="flex w-full flex-col gap-4 lg:w-2/5">
    <h3 class="text-xl font-bold text-skin-text-highlight ">{heading}</h3>
    <p>{@html description}</p>
    <slot />
  </div>
  {#if textFieldAlignment === 'left'}
    <div class="w-full lg:w-3/5"><slot name="image" /></div>
  {/if}
</div>

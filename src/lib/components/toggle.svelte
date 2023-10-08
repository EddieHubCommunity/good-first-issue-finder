<script lang="ts">
  export let checked: boolean;
  export let labelLeft: string;
  export let labelRight: string;
  export let id: string;
</script>

<div
  class="inline-flex items-center justify-center space-x-1 rounded-full bg-skin-off-background px-2 py-2 shadow-standard transition-all duration-200 dark:shadow-dark"
>
  <!-- eslint-disable -->
  <label
    class="cursor-pointer rounded-full px-2 font-semibold transition-all duration-200"
    class:inversed={!checked}
    for={id}>{@html labelLeft}</label
  >
  <div><input class="hidden" bind:checked on:change {id} type="checkbox" /></div>
  <!-- eslint-disable -->
  <label
    class="cursor-pointer rounded-full px-2 font-semibold transition-all duration-200"
    class:inversed={checked}
    for={id}>{@html labelRight}</label
  >
</div>

<style lang="postcss">
  .inversed {
    @apply bg-primary-100 text-white;
  }
</style>

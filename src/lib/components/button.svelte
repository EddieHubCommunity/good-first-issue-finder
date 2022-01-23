<script lang="ts">
  import type { ButtonVariant } from '../types/button.type';

  export let label: string;
  export let variant: ButtonVariant = 'primary';
</script>

<button on:click class="p-2 rounded-lg drop-shadow bg-neutral-300 {variant}">{label}</button>

<style lang="postcss">
  .primary {
    @apply hover:bg-eddiehub-200 hover:text-white;
  }

  .secondary {
    @apply hover:bg-eddiehub-100 hover:text-slate-900;
  }
</style>

<script lang="ts">
  export let background: 'background' | 'off-background' = 'background';

  const backgroundMap = {
    background: 'border-skin-background',
    'off-background': 'border-skin-off-background',
  };
</script>

<div class="loader {backgroundMap[background]}" />

<style lang="postcss">
  .loader {
    @apply rounded-full border-[5px];
    border-top: 5px solid var(--color-primary);
    width: 2rem;
    height: 2rem;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

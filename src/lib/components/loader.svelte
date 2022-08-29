<div class="loader" />

<style lang="postcss">
  .loader {
    @apply rounded-full;
    border: 5px solid #f5f4f4;
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

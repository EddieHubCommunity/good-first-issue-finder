<script lang="ts">
</script>

<div class="relative">
  <div
    class="tilter absolute -inset-1 rounded-lg bg-primary-100 opacity-50 blur-lg transition-all duration-200"
  />

  <img
    class="relative w-full max-w-4xl rounded-2xl dark:hidden"
    src="/images/screenshot-light.png"
    alt="screenshot of the application in lightmode"
  />
  <img
    class="relative hidden w-full max-w-4xl rounded-2xl dark:block"
    src="/images/screenshot-dark.png"
    alt="screenshot of the application in lightmode"
  />
</div>

<style lang="postcss">
  .tilter {
    animation: tilt 10s linear infinite;
  }
  @keyframes tilt {
    0%,
    50%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(1deg);
    }
    75% {
      transform: rotate(-1deg);
    }
  }
</style>

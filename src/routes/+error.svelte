<script>
  import { page } from '$app/stores';
</script>

<div class="my-auto flex w-full flex-col items-center justify-center gap-2">
  {#if $page.status === 404}
    <img
      src="images/404-dark.gif"
      alt="404 error gif"
      class="w-1/1 hidden rounded object-cover dark:block lg:w-1/3"
    />
    <img
      src="images/404-light.gif"
      alt="404 error gif"
      class="w-1/1 rounded object-cover dark:hidden lg:w-1/3"
    />
    <p class="text-center text-xl">OOPS! The requested resource doesn't exist</p>
  {:else if $page.status === 500}
    <img src="images/500.gif" alt="500 error gif" class="w-1/1 rounded object-cover lg:w-1/3" />
    <p class="text-center text-xl">OOPS! There is some internal issue</p>
  {:else}
    <p class="text-center text-xl">It seems there has been an error, sorry about that</p>
  {/if}
  <a
    class="default-transition text-lg text-skin-text-highlight decoration-transparent hover:underline hover:decoration-inherit"
    href="/">Navigate To Home</a
  >
</div>

<script lang="ts">
  export let username: string;
</script>

<header class="my-8 flex flex-wrap items-center justify-between">
  <div>
    <img src="/images/hubber.png" class="w-8 object-contain md:w-12" alt="hubber" />
  </div>
  {#if username}
    <div>
      Welcome {username},
      <a
        href="/api/authentication/logout"
        class="font-semibold underline decoration-skin-primary transition-all delay-[50] duration-200 hover:decoration-transparent"
        >Sign Out</a
      >
    </div>
  {:else}
    <a class="rounded-xl bg-skin-primary p-2 text-white" href="/login">Login</a>
  {/if}
</header>

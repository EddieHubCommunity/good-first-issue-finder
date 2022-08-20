<script lang="ts">
  import ProfilePicture from './profile-picture.svelte';
  export let username: string;
</script>

<header class="my-8 flex flex-wrap items-center justify-between">
  <div>
    <img src="/images/hubber.png" class="w-8 object-contain md:w-12" alt="hubber" />
  </div>
  {#if username}
    <ProfilePicture {username} />
  {/if}
</header>

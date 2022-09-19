<script lang="ts">
  import Card from '$lib/components/card.svelte';
</script>

<div class="flex w-full items-center justify-center">
  <Card class="flex w-full max-w-md flex-col items-center gap-4">
    <h2 class="text-2xl font-semibold">Login</h2>
    <p>Please Login with your Github Account</p>
    <a href="/api/authentication/login" class="flex gap-4 rounded-lg bg-[#171515] p-2">
      <img width="20" height="20" src="/images/githubmark-dark.svg" alt="Github Icon" />
      <div id="github-login-btn" class="text-[#dadadade]">Login with Github</div>
    </a>
  </Card>
</div>

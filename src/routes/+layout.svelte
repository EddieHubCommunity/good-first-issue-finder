<script lang="ts">
  import '../app.css';
  import Footer from '$lib/components/footer.svelte';
  import Header from '$lib/components/header.svelte';
  import { setContext } from 'svelte';
  import { versionKey } from '$lib/util/version';

  export let data: { username: string; version: string };

  setContext(versionKey, data.version);
</script>

<div class="flex min-h-screen flex-col">
  <div class="float-none mx-auto my-0 w-[90%] max-w-[1440px]">
    <Header username={data.username} />
    <slot />
  </div>
  <Footer />
</div>

<script lang="ts">
  import '../app.css';
  import Footer from '$lib/components/footer.svelte';
  import Header from '$lib/components/header.svelte';

  export let data: { username: string };
</script>

<div class="flex min-h-screen flex-col">
  <div class="float-none mx-auto my-0 w-[90%] max-w-[1400px]">
    <Header username={data.username} />
    <slot />
  </div>
  <Footer />
</div>

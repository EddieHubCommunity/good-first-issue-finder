<script>
  import '../app.css';
  import Nav from '$lib/components/nav.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <div class="w-[1400px] mx-auto my-0">
    <Nav />
    <slot />
  </div>
</div>

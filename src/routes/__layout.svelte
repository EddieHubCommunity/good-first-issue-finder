<script>
  import '../app.css';
  import Nav from '$lib/components/nav.svelte';
</script>

<div class="flex flex-col min-h-screen max-w-[1400px] w-[90%] mx-auto my-0 float-none">
  <Nav />
  <div class="text-center mb-8">
    Eddiehub Issue-Crawler for finding <b>good-first-issues</b>
  </div>
  <slot />
</div>

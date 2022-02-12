<script>
  import '../app.css';
  import Nav from '$lib/components/nav.svelte';
  import Footer from '$lib/components/footer.svelte';
</script>

<div class="float-none mx-auto my-0 flex min-h-screen w-[90%] max-w-[1400px] flex-col">
  <Nav />
  <div class="mb-8 text-center">
    Eddiehub Issue-Crawler for finding <b>good-first-issues</b>
  </div>
  <slot />
  <Footer />
</div>

<script>
  import '../app.css';
  import Nav from '$lib/components/nav.svelte';
  import Footer from '$lib/components/footer.svelte';
</script>

<div class="flex min-h-screen flex-col">
  <div class="float-none mx-auto my-0 w-[90%] max-w-[1400px]">
    <Nav />
    <div class="mb-8 text-center">
      Eddiehub Issue-Crawler for finding <b>good-first-issues</b>
    </div>
    <slot />
  </div>
  <Footer />
</div>

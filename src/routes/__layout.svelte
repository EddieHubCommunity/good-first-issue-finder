<script>
  import '../app.css';
  import Footer from '$lib/components/footer.svelte';
</script>

<div class="flex min-h-screen flex-col">
  <div class="float-none mx-auto my-0 w-[90%] max-w-[1400px]">
    <slot />
  </div>
  <Footer />
</div>

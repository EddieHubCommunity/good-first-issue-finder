<script lang="ts">
  import '../app.css';
  import Footer from '$lib/components/footer.svelte';
  import Header from '$lib/components/header.svelte';
  import { QueryClientProvider } from '@tanstack/svelte-query';
  import { setContext } from 'svelte';
  import { versionKey } from '$lib/util/version';
  import type { LayoutData } from './$types';

  export let data: LayoutData;

  setContext(versionKey, data.version);
</script>

<QueryClientProvider client={data.queryClient}>
  <div class="flex min-h-screen flex-col overflow-hidden">
    <div class="float-none mx-auto my-0 w-[90%] max-w-[1440px] pb-8">
      <Header username={data.username} />
      <main>
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</QueryClientProvider>

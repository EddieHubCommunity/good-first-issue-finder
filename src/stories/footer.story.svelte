<script lang="ts">
  import Footer from '$lib/components/footer.svelte';
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;
  import { versionKey } from '$lib/util/version';
  import { setContext } from 'svelte';

  setContext(versionKey, '1.0.0');

  const { Story } = Hst;
</script>

<Story title="Composed/Footer">
  <Footer />
</Story>

<script lang="ts">
  import Loader from '../lib/components/loader.svelte';
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  const { Story } = Hst;
</script>

<Story title="Components/Loader">
  <Loader />
</Story>

<script lang="ts">
  import Loader from '$lib/components/loader.svelte';
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  const { Story, Variant } = Hst;
</script>

<Story title="Components/Loader">
  <Variant title="background">
    <Loader /></Variant
  >
  <Variant title="off-background">
    <Loader background="off-background" />
  </Variant>
</Story>

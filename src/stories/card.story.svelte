<script lang="ts">
  import Card from '$lib/components/card.svelte';
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  const { Story } = Hst;
</script>

<Story title="Components/Card">
  <Card>This is a card component</Card>
</Story>

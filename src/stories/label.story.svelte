<script lang="ts">
  import Label from '$lib/components/label.svelte';
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  const { Story, Text } = Hst;

  let color = '#f343f4';
  let text = 'My Label';
</script>

<Story title="Components/Labels">
  <svelte:fragment slot="controls">
    <Text bind:value={color} title="color" />
    <Text bind:value={text} title="text" />
    <pre>{JSON.stringify({ color, text }, null, 2)}</pre>
  </svelte:fragment>
  <Label {color} {text} />
</Story>

<style lang="postcss">
  pre {
    @apply m-2 rounded-lg bg-gray-200 p-2 text-sm;
  }
</style>

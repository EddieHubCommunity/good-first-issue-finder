<script lang="ts">
  import Label from '../lib/components/label.svelte';
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  const { Story } = Hst;

  let color = '#f343f4';
  let text = 'My Label';
</script>

<Story title="Labels">
  <Label {color} {text} />
</Story>

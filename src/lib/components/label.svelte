<script lang="ts">
  import { calculateFontColor } from '$lib/util/font-color-calculator';
  export let text: string;
  export let color: string;

  $: processedColor = color.startsWith('#') ? color : `#${color}`;
</script>

<div
  class="mr-2 inline-block rounded-2xl border-[1px] px-3 py-1 text-xs font-semibold"
  style="border-color: {processedColor === '#ffffff'
    ? '#000'
    : processedColor}; background-color: {processedColor}; color: {calculateFontColor(
    processedColor,
    0.7,
  )}"
>
  <!-- eslint-disable -->
  {@html text}
</div>

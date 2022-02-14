<script lang="ts">
  import fontColorContrast from 'font-color-contrast';
  export let text: string;
  export let color: string;

  $: processedColor = color.startsWith('#') ? color : `#${color}`;
</script>

<div
  class="mr-2 inline-block rounded-2xl border-[1px] py-1 px-3 text-xs font-semibold"
  style="border-color: {processedColor === '#ffffff'
    ? '#000'
    : processedColor}; background-color: {processedColor}; color: {fontColorContrast(
    processedColor,
    0.7,
  )}"
>
  {@html text}
</div>

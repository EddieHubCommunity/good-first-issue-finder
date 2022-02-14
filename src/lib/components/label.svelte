<script lang="ts">
  export let text: string;
  export let color: string;

  const getColorByBgColor = (bgColor: string) => {
    if (!bgColor) {
      return '';
    }
    return parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2 ? '#000' : '#fff';
  };

  $: processedColor = color.startsWith('#') ? color : `#${color}`;
</script>

<div
  class="mr-2 inline-block rounded-2xl border-[1px] py-2 px-4 text-xs font-semibold"
  style="border-color: {processedColor === '#ffffff'
    ? '#000'
    : processedColor}; background-color: {processedColor}; color: {getColorByBgColor(
    processedColor,
  )}"
>
  {@html text}
</div>

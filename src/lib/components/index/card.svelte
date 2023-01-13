<script lang="ts">
  let className = '';
  export { className as class };
</script>

<div
  class="flex min-h-[300px] w-full flex-col items-center rounded-2xl border border-skin-off-background bg-skin-off-background shadow-xl {className}"
>
  <slot />
</div>

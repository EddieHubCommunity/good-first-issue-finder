<script lang="ts">
  let clazz = '';
  export { clazz as class };
</script>

<div class="card rounded-xl bg-skin-off-background p-4 shadow-standard {clazz}">
  <slot />
</div>

<script lang="js">
  /**
   * @type {string}
   */
  export let title;
</script>

<div class="prose max-w-none dark:prose-invert">
  <h1>{title}</h1>
  <slot />
</div>

<svelte:head>
  <link rel="stylesheet" href="/prism.css" />
</svelte:head>

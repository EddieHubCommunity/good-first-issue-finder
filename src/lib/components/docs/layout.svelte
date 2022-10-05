<!-- script has to be js for mdsvex -->
<script lang="js">
  import Seo from '../seo.svelte';

  /**
   * @type {string}
   */
  export let title;
  export let metadescription = 'Documentation for Good First Issue Finder by EddieHub';
  /**
   * @type {string}
   */
  let seotitle;

  if (title) {
    seotitle = title + ' | Docs | Good First Issue Finder';
  } else {
    seotitle = 'Docs | Good First Issue Finder';
  }
</script>

<Seo title={seotitle} {metadescription} />

<div class="prose max-w-none dark:prose-invert">
  <h1>{title}</h1>
  <slot />
</div>

<svelte:head>
  <link rel="stylesheet" href="/prism.css" />
</svelte:head>

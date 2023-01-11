<script lang="ts">
  export let title: string;
  export let metadescription: string;
  export let image: { url: string; alt: string } | null = null;
  export let article = false;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={metadescription} />

  <!-- OG Tags -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={metadescription} />
  <meta property="og:locale" content="en_US" />
  {#if article}
    <meta property="og:type" content="article" />
  {/if}
  {#if image}
    <meta property="og:image" content={image.url} />
    <meta property="og:image:alt" content={image.alt} />
  {/if}

  <!-- Twitter -->
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={metadescription} />
  <meta name="”twitter:card”" content="”summary_large_image”" />
  {#if image}
    <meta name="twitter:image" content={image.url} />
    <meta name="twitter:image:alt" content={image.alt} />
  {/if}
</svelte:head>

<script lang="ts">
  let className = '';
  export let repo: string;
  export let repoLink = '';
  export let owner: string;
  export { className as class };
</script>

<a class={className} href={repoLink}>{owner}/{repo}</a>

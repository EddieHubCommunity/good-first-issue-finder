<script lang="ts">
  import RepoHeader from '$lib/components/repo-header.svelte';
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  const { Story, Text } = Hst;

  let owner = 'EddieHubCommunity';
  let repo = 'good-first-issue-finder';
  let repoLink = 'https://www.github.com/eddiehubcommunity/good-first-issue-finder';
</script>

<Story title="Components/Repo-Header">
  <svelte:fragment slot="controls">
    <Text bind:value={owner} title="owner" />
    <Text bind:value={repo} title="repo" />
    <Text bind:value={repoLink} title="repoLink" />
  </svelte:fragment>
  <RepoHeader {owner} {repo} {repoLink} />
</Story>

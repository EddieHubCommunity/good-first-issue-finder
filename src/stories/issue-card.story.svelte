<script lang="ts">
  import IssueCard from '$lib/components/issue-card.svelte';
  import type { Node } from '../global';
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  const { Story } = Hst;

  let data: Node = {
    url: 'https://github.com/EddieHubCommunity/LinkFree/issues/1944',
    title: '[FEATURE] Add React components and pages to Storybook',
    createdAt: '2022-10-11T12:26:04Z',
    labels: {
      edges: [
        {
          node: {
            color: 'ffffff',
            name: '⭐ goal: addition',
          },
        },
        {
          node: {
            color: '7f0799',
            name: 'good first issue',
          },
        },
        {
          node: {
            color: '62A1A6',
            name: '🔢 points: 2',
          },
        },
        {
          node: {
            color: '883255',
            name: 'Hacktoberfest',
          },
        },
        {
          node: {
            color: 'F7DBD3',
            name: 'Next JS branch',
          },
        },
        {
          node: {
            color: '4DECBD',
            name: 'EPIC',
          },
        },
      ],
    },
    repository: {
      name: 'LinkFree',
      url: 'https://github.com/EddieHubCommunity/LinkFree',
      primaryLanguage: {
        color: '#f1e05a',
        name: 'JavaScript',
        id: 'MDg6TGFuZ3VhZ2UxNDA=',
      },
      owner: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/66388388?v=4',
        login: 'EddieHubCommunity',
      },
      codeOfConduct: {
        name: 'Contributor Covenant',
      },
      licenseInfo: {
        name: 'MIT License',
      },
    },
  };
</script>

<Story title="Composed/Issue-Card">
  <IssueCard issue={data} />
</Story>

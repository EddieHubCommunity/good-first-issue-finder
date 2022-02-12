import type { RequestHandler } from '@sveltejs/kit';
import { Octokit } from 'octokit';

export const get: RequestHandler = async () => {
  const token = process.env['VITE_TOKEN'];
  if (!token) return { status: 500, body: { message: 'please provide a token' } };
  const octokit = new Octokit({ auth: token });
  const { search } = (await octokit.graphql(
    `query EddieHubIssues($queryString: String! $skip: Int!) {
      search(first: $skip, query: $queryString, type: ISSUE) {
        issueCount
        edges {
          node {
            ... on Issue {
              url
              title
              repository {
                name
                url
                owner {
                  login
                }
              }
            }
          }
        }
      }
    }`,
    {
      queryString: 'is:open label:"good first issue" org:EddieHubCommunity no:assignee',
      skip: 50,
    },
  )) as any;

  return {
    status: 200,
    body: search,
  };
};

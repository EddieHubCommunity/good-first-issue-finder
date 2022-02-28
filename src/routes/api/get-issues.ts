import type { RequestHandler } from '@sveltejs/kit';
import { Octokit } from 'octokit';
import type { SearchResponse } from '../../global';

type Response = { search: SearchResponse };

export const post: RequestHandler = async ({ request }) => {
  const token = process.env['VITE_TOKEN'];
  if (!token) return { status: 500, body: { message: 'please provide a token' } };

  const body = await request.json();

  const octokit = new Octokit({ auth: token });
  const { search }: Response = await octokit.graphql(
    `query EddieHubIssues($queryString: String!, $skip: Int!) {
      search(first: $skip, query: $queryString, type: ISSUE) {
        issueCount
        edges {
          node {
            ... on Issue {
              url
              title
              labels(first: $skip) {
                edges {
                  node {
                    color
                    name
                  }
                }
              }
              repository {
                name
                url
                primaryLanguage {
                  color
                  name
                  id
                }
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
      queryString: body.query,
      skip: 50,
    },
  );

  const labels = search.edges.map((el) => el.node.labels.edges.map((label) => label.node.name));
  const merged = [].concat(...labels);
  const labelSet = new Set<string>(merged);
  const normalizedLabels: string[] = Array.from(labelSet);

  const returnBody = { ...search, ...{ labels: normalizedLabels } };

  return {
    status: 200,
    body: returnBody,
  };
};

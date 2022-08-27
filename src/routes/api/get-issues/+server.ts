import { json as json$1 } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { Octokit } from 'octokit';
import cookie from 'cookie';
import type { SearchResponse } from '../../../global';

type Response = { search: SearchResponse };

export const POST: RequestHandler = async ({ request }) => {
  const token = cookie.parse(request.headers.get('cookie') || '').access_token || '';

  if (!token) {
    return new Response(JSON.stringify({ message: 'Please authenticate to use this endpoint' }), {
      status: 401,
    });
  }

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
              createdAt
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
                  avatarUrl
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

  return json$1(returnBody, { status: 200 });
};

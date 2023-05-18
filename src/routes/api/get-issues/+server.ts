import { json as json$1 } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Octokit } from 'octokit';
import type { Edge, LabelEdge, SearchResponse } from '../../../global';

type Response = { search: SearchResponse };

export const POST: RequestHandler = async ({ request, cookies }) => {
  const token = cookies.get('access_token') || '';

  if (!token) {
    return new Response(JSON.stringify({ message: 'Please authenticate to use this endpoint' }), {
      status: 401,
    });
  }

  const body = (await request.json()) as { query: string; after?: string };

  const octokit = new Octokit({ auth: token });
  const { search }: Response = await octokit.graphql(
    `query EddieHubIssues($queryString: String!, $skip: Int!, $after: String) {
  search(first: $skip, query: $queryString, type: ISSUE, after: $after) {
    issueCount
    pageInfo {
      hasNextPage
      endCursor
    }
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
            codeOfConduct {
              id
              name
              url
            }
            licenseInfo {
              name
              id
            }
          }
        }
      }
    }
  }
}`,
    {
      queryString: body.query,
      skip: 10,
      after: body.after,
    },
  );

  const labels = search.edges.flatMap((el: Edge) =>
    el.node.labels.edges.map((label: LabelEdge) => label.node.name),
  );

  const uniqueLabels = [...new Set(labels)];
  const returnBody = { ...search, ...{ labels: uniqueLabels } };

  return json$1(returnBody, { status: 200 });
};

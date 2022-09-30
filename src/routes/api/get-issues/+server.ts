import { json as json$1 } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { Octokit } from 'octokit';
import cookie from 'cookie';
import type { SearchResponse } from 'src/global';

type Response = { search: SearchResponse };

export const POST: RequestHandler = async ({ request }) => {
  const token = cookie.parse(request.headers.get('cookie') || '').access_token || '';

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
  const labels = search.edges.map((el) => el.node.labels.edges.map((label) => label.node.name));
  const merged = labels.reduce((acc, val) => {
    return acc.concat(val);
  });
  const uniqueLabels = [...new Set(merged)];
  const returnBody = { ...search, ...{ labels: uniqueLabels } };

  return json$1(returnBody, { status: 200 });
};

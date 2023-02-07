import type { SearchResponse } from '../global';

const url = '/api/get-issues';

export async function fetchIssuesLoad(query: { query: string }, loadFetch: typeof window.fetch) {
  const response = await loadFetch(url, {
    method: 'POST',
    body: JSON.stringify(query),
  });
  const data = await response.json();
  return data as SearchResponse;
}

export async function fetchIssues(query: string, endCursor: string) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ query, after: endCursor }),
  });
  const data = await response.json();
  return data as SearchResponse;
}

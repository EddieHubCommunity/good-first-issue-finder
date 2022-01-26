import type { RequestHandler } from '@sveltejs/kit';
import { Octokit } from 'octokit';

export const get: RequestHandler = async () => {
  const octokit = new Octokit({ auth: import.meta.env.VITE_TOKEN });
  const response = await octokit.request('GET /search/issues', {
    q: 'is:issue is:open label:"good first issue" org:EddieHubCommunity no:assignee',
  });
  return {
    status: 200,
    body: response.data,
  };
};

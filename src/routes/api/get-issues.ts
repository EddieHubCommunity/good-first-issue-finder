import type { RequestHandler } from '@sveltejs/kit';
import { Octokit } from 'octokit';

export const get: RequestHandler = async () => {
  const token = process.env['VITE_TOKEN'];
  if (!token) return { status: 500, body: { message: 'please provide a token' } };
  const octokit = new Octokit({ auth: token });
  const response = await octokit.request('GET /search/issues', {
    q: 'is:issue is:open label:"good first issue" org:EddieHubCommunity no:assignee',
  });
  return {
    status: 200,
    body: response.data,
  };
};

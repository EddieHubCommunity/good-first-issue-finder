import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

const ghAuthURL = 'https://github.com/login/oauth/authorize';
const clientId = env.FINDER_GITHUB_CLIENT_ID;
export const GET: RequestHandler = async ({ cookies }) => {
  const csrfState = Math.random().toString(36).substring(7);
  const csrfCookie = cookies.serialize('state', csrfState, {
    maxAge: 1000 * 60 * 3,
    httpOnly: true,
  });

  return new Response(null, {
    status: 302,
    headers: {
      'set-cookie': csrfCookie,
      location: `${ghAuthURL}?client_id=${clientId}&state=${csrfState}`,
    },
  });
};

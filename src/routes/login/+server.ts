import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';
import { env } from '$env/dynamic/private';

const ghAuthURL = 'https://github.com/login/oauth/authorize';
const clientId = env.GITHUB_CLIENT_ID;
export const GET: RequestHandler = async () => {
  const csrfState = Math.random().toString(36).substring(7);
  const csrfCookie = cookie.serialize('state', csrfState, {
    maxAge: 1000 * 60 * 3,
    httpOnly: true,
  });

  return new Response(JSON.stringify(''), {
    status: 302,
    headers: {
      'set-cookie': csrfCookie,
      location: `${ghAuthURL}?client_id=${clientId}&state=${csrfState}`,
    },
  });
};

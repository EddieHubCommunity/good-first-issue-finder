import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

export const GET: RequestHandler = async ({ locals }) => {
  locals.user = '';
  const expiry = new Date('Thu, 01 Jan 1970 00:00:00 GMT');
  const invalidAccessToken = cookie.serialize('access_token', '', {
    expires: expiry,
    httpOnly: true,
    path: '/',
  });
  const invalidUsername = cookie.serialize('user', '', {
    expires: expiry,
    httpOnly: true,
    path: '/',
  });

  const headers = new Headers();
  headers.append('set-cookie', invalidAccessToken);
  headers.append('set-cookie', invalidUsername);
  headers.append('location', '/');

  return new Response(null, {
    status: 302,
    headers,
  });
};

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals, cookies }) => {
  locals.user = '';
  const expiry = new Date('Thu, 01 Jan 1970 00:00:00 GMT');
  const invalidAccessToken = cookies.serialize('access_token', '', {
    expires: expiry,
    httpOnly: true,
    path: '/',
  });
  const invalidUsername = cookies.serialize('user', '', {
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

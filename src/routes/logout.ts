import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

export const get: RequestHandler = async () => {
  const signOutCookie = cookie.serialize('token', '', {
    maxAge: 0,
    secure: true,
    sameSite: 'strict',
  });
  return {
    status: 302,
    headers: { 'set-cookie': signOutCookie, location: '/' },
  };
};

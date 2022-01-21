import type { GetSession, Handle } from '@sveltejs/kit';
import cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');

	event.locals.token = cookies.token;
	return await resolve(event);
};

export const getSession: GetSession = ({ locals }) => {
	return {
		token: locals.token
	};
};

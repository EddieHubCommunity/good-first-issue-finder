import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const a = cookie.serialize('token', body.token, {
		httpOnly: true,
		secure: true,
		path: '/',
		sameSite: 'lax',
		maxAge: 60 * 60 * 24
	});

	return {
		status: 200,
		headers: { 'set-cookie': a }
	};
};

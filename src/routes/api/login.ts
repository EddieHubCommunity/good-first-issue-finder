import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();
	if (!body.token) {
		return {
			status: 400
		};
	}
	const isValidToken = await getUser(body.token);
	if (!isValidToken) return { status: 400 };
	console.log(isValidToken);
	const token = cookie.serialize('token', body.token, {
		httpOnly: true,
		secure: true,
		path: '/',
		sameSite: 'strict'
	});
	const user = cookie.serialize('username', isValidToken, {
		httpOnly: true,
		secure: true,
		path: '/',
		sameSite: 'strict'
	});

	return {
		status: 200,
		headers: { 'set-cookie': token }
	};
};

const getUser = async (token: string) => {
	const res = await fetch('https://api.github.com/user', {
		headers: { authorization: `token ${token}` }
	});
	if (res.ok) {
		const data = await res.json();
		return data.login;
	}
	return false;
};

import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();
	console.log(body);

	const a = cookie.serialize('token', body.token, { httpOnly: true, secure: true });

	console.log(a);
	return {
		status: 200,
		headers: { 'set-cookie': a }
	};
};

// const cookies = cookie.parse(request.headers.cookie || '');
// let signedCookies = cookieParser.signedCookies(cookies, [COOKIE_SECRET]);
// signedCookies = cookieParser.JSONCookies(signedCookies);
// const jwtToken = signedCookies['jwt'];

import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async () => {
  return json({ version: env.npm_package_version });
};

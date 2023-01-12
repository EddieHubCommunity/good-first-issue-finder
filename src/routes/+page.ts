import { error, redirect, type Load } from '@sveltejs/kit';
import { query } from '$lib/constants.json';
import type { SearchResponse } from '../global';

export const load: Load = async ({ fetch, url, parent }) => {
  const parentData = await parent();
  if (!parentData.username) {
    throw redirect(307, '/login');
  }
  let globalParam = false;

  try {
    globalParam = JSON.parse(url.searchParams.get('global') as string);
  } catch (err) {
    globalParam = false;
  }

  const postBody: { query: string } = globalParam ? { query: query.global } : { query: query.org };

  const res = await fetch('/api/get-issues', {
    method: 'POST',
    body: JSON.stringify(postBody),
  });
  if (res.ok) {
    const data = await res.json();
    return {
      data: data as SearchResponse,
      checked: globalParam,
    };
  }
  if (res.status === 401) {
    throw redirect(307, '/login');
  }
  const data = await res.json();
  throw error(500, data.message);
};

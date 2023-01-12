import { error, redirect, type Load } from '@sveltejs/kit';
import type { SearchResponse } from '../global';

export const load: Load = async ({ fetch, url, parent }) => {
  const parentData = await parent();
  if (!parentData.username) {
    throw redirect(307, '/login');
  }
  let globalParam = false;
  const globalQuery = 'is:open archived:false label:"EddieHub:good-first-issue" no:assignee';
  const orgQuery =
    'is:open archived:false label:"good first issue" org:EddieHubCommunity no:assignee';

  try {
    globalParam = JSON.parse(url.searchParams.get('global') as string);
  } catch (err) {
    globalParam = false;
  }

  const postBody: { query: string } = globalParam ? { query: globalQuery } : { query: orgQuery };

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

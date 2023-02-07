import { redirect } from '@sveltejs/kit';
import { query } from '$lib/constants.json';
import type { PageLoad } from './$types';
import { fetchIssuesLoad } from '$lib/data';

export const load: PageLoad = async ({ fetch, url, parent }) => {
  const { username, queryClient } = await parent();
  if (!username) {
    throw redirect(307, '/login');
  }
  let globalParam = false;

  try {
    globalParam = JSON.parse(url.searchParams.get('global') as string);
  } catch (err) {
    globalParam = false;
  }

  const postBody: { query: string } = globalParam ? { query: query.global } : { query: query.org };

  await queryClient.prefetchQuery({
    queryKey: ['issues', { global: globalParam }],
    queryFn: () => fetchIssuesLoad(postBody, fetch),
  });

  return {
    checked: globalParam,
  };
};

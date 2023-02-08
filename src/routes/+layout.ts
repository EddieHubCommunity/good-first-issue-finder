import { browser } from '$app/environment';
import { QueryClient } from '@tanstack/svelte-query';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, data }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });

  const res = await fetch('/api/version');
  if (res.ok) {
    const resData = (await res.json()) as { version: string };
    return {
      ...data,
      version: resData.version,
      queryClient,
    };
  }
};

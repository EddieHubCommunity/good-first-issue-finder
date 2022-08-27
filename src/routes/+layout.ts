import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, data }) => {
  const res = await fetch('/api/version');
  if (res.ok) {
    const resData = (await res.json()) as { version: string };
    return {
      ...data,
      version: resData.version,
    };
  }
};

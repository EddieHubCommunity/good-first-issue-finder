import type { LayoutServerLoad } from '../../.svelte-kit/types/src/routes/$types';

export const load: LayoutServerLoad = ({ locals }): { username: string } => {
  return {
    username: locals.user,
  };
};

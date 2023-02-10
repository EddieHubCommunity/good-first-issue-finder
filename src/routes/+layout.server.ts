import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }): { username: string } => {
  return {
    username: locals.user,
  };
};

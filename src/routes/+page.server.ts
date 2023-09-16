import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch('http://localhost/latest?limit=4');
  const tokens = await res.json();
  return { tokens: tokens };
};


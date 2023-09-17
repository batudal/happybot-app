import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch(`${env.PRIVATE_API_URL}/latest?limit=4`);
  const tokens = await res.json();
  return { tokens: tokens };
};


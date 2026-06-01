import { createDirectus, graphql } from '@directus/sdk';
import { DIRECTUS_URL } from "$env/static/private";
export const directus = createDirectus(
  DIRECTUS_URL
).with(graphql());
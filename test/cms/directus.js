import { createDirectus, graphql } from '@directus/sdk';
const DIRECTUS_URL = process.env.DIRECTUS_URL
export const directus = createDirectus(
    DIRECTUS_URL
).with(graphql());
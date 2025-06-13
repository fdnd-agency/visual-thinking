import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

import { MethodExamplesQuery } from '$lib/index.js'
export const load = async ({ params }) => {
	const { slug } = params;
	const queryUrl = MethodExamplesQuery(gql, slug);

	return await hygraph.request(queryUrl);
};
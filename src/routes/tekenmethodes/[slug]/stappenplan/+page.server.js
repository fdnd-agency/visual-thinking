import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

import methodStepsQuery from '$lib/queries/methodsUrl.js';

export const load = async ({ params }) => {
	const { slug } = params;
	const queryUrl = methodStepsQuery(gql, slug);

	return await hygraph.request(queryUrl);
};
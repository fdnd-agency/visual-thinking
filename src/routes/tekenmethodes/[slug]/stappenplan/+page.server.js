import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

import { MethodStepsQuery } from '$lib/index.js'
export const load = async ({ params }) => {
	const { slug } = params;
	const queryUrl = MethodStepsQuery(gql, slug);

	return await hygraph.request(queryUrl);
};
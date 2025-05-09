import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

import { MethodDescriptionQuery } from '$lib/index.js'
export const load = async ({ params }) => {
	const { slug } = params;
	const query = MethodDescriptionQuery(gql, slug);

	const data = await hygraph.request(query);

    return data;
}
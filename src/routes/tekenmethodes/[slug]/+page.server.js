import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

import methodDescriptionQuery from "$lib/queries/method.js";

export const load = async ({ params }) => {
	const { slug } = params;
	const query = methodDescriptionQuery(gql, slug);

	const data = await hygraph.request(query);

    return data;
}
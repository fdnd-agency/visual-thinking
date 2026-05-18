import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";
import { directus, fetchReadFromDirectus } from "../../../lib/utils/directus.js";

export const load = async ({ params }) => {
  const { slug } = params;

  const graphqlQuery = `
    query CategoryBySlug {
      adconnect_kennisclip_category(filter: { slug: { _eq: "${slug}"} }) {
        slug
        title
        youTubeLink
        content
      }
    }
  `
    const knowledgeClipData = await fetchReadFromDirectus(graphqlQuery); 
    return knowledgeClipData.adconnect_kennisclip_category[0];
};

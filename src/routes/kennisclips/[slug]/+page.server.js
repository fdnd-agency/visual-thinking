import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";
import { directus, fetchReadFromDirectus } from "../../../lib/utils/directus.js";

export const load = async ({ params }) => {
  const { slug } = params;

  const graphqlQuery = `
    query CategoryBySlug {
      vt_kennisclips(filter: { slug: { _eq: "${slug}"} }) {
        slug
        titel
        youtube_link
        beschrijving
      }
    }
  `
    const knowledgeClipData = await fetchReadFromDirectus(graphqlQuery); 
    return knowledgeClipData.vt_kennisclips[0];
};

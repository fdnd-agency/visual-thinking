import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export const load = async ({ params }) => {
  const { slug } = params;

  const query = gql`
    query CategoryBySlug {
      category(where: { slug: "${slug}" }) {
        slug
        title
        youTubeLink
        content {
          html
        }
      }
    }
  `;

  const data = await hygraph.request(query);

  return {
    clip: data.category
  };
};

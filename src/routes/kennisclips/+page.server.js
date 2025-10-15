import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export const load = async () => {
  const query = gql`
    query AllCategories {
      categories {
        slug
        title
        youTubeLink
        introduction
        content {
          html
        }
      }
    }
  `;

  const data = await hygraph.request(query);

  return {
    clips: data.categories
  };
};

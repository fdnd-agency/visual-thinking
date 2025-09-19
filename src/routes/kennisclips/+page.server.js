import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query VisualThinking {
      categories(first: 10) {
        title
        youTubeLink
        content {
          html
        }
      }
    }
  `;

  return await hygraph.request(query);

  
}


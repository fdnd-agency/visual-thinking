import { gql } from "graphql-request";
import { h as hygraph } from "../../../chunks/hygraph.js";
async function load() {
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
export {
  load
};

import { gql } from "graphql-request";
import { h as hygraph } from "../../chunks/hygraph.js";
async function load() {
  let query = gql`
    query Home {
      page(where: {id: "clv8j3yo84g2107unotjahr7y"}) {
        title
        content {
          html
        }
      }
    }
  `;
  const data = await hygraph.request(query);
  return data;
}
export {
  load
};

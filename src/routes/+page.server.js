import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
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
  
  return data
}
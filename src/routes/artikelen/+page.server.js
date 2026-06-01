import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query Articles {
      page(where: {id: "clv8dqjvwum6i07w4u8fwvnsu"}) {
        title
        content {
          html
        }
      }
      
      articles(first:6) {
        visual {
          url
        }
        title
        intro
        slug
      }
    }
  `;
  const data = await hygraph.request(query);
  
  return data
}

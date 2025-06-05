import { gql } from "graphql-request";
import { h as hygraph } from "../../../chunks/hygraph.js";
async function load() {
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
  return data;
}
export {
  load
};

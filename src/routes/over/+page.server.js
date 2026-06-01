import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ url }) {
  let query = gql`
  query About {
    page(where: {id: "clv8dd2bhtwu607w49x2wmn7y"}) {
      title
      content {
        html
      }
    }
  }`;

  const data = await hygraph.request(query);

  return data;
}
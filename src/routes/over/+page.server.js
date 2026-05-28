import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";
import { directus } from "../../lib/utils/directus";

export async function load({ url }) {
  // let query = gql`
  // query About {
  //   page(where: {id: "clv8dd2bhtwu607w49x2wmn7y"}) {
  //     title
  //     content {
  //       html
  //     }
  //   }
  // }`;
  const query = `query {
  adconnect_aboutpage{
  title
  content
  titel
  beschrijving
  }}`;

  const data = await directus.query(query);

  return data;
}

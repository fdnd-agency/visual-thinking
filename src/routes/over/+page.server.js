import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";
import { directus } from "../../lib/utils/directus";

export async function load({ url }) {

  const query = `
    query {
      vt_over_page{
        titel
        beschrijving
     }
  }
  `;

  const data = await directus.query(query);

  return {
    page: {
      title: data.vt_over_page[0].titel,
      content: data.vt_over_page[0].beschrijving
    }
  };
}
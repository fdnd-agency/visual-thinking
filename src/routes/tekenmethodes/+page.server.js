import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ url }) {
  const category = url.searchParams.get('categorie') || null;
  let filter = '';

  if (category !== null) {
      filter = `, where: {categories_some: {slug: "${category}"}}`;
  }

  let query = gql`
  query Methods {
    page(where: {id: "clv89bh0vn4z007unrv85gsw1"}) {
      title
      content {
        html
      }
    }

    methods(first: 100, ${filter}) {
      id
      slug
      title
      categories {
        title
        id
      }
      template {
        url(transformation: {document: {output: {format: webp}}})
        height
        width
      }
    }
  }`;

  const data = await hygraph.request(query);

  return data;
}
import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";


export async function load({ url }) {
  const categories = url.searchParams.getAll('filter')
  let filter

  categories && categories.length > 0 
  // This is where the data is being fetched and filtered throught Hygraph to get the right data. 
          ? filter = `, where: {categories_some: {slug_in: ${JSON.stringify(categories)}}}` 
          : filter = ''

  let query = gql`
    query Methods {
      page(where: { id: "clv89bh0vn4z007unrv85gsw1" }) {
        title
        content {
          html
        }
      }
      methods(first: 100 ${filter}) {
        id
        slug
        title
        categories {
          title
          id
        }
        template {
          url(transformation: { document: { output: { format: webp } } })
          height
          width
        }
      }
      categories(first: 10) {
        slug
        title
      }
    }
  `

  const data = await hygraph.request(query, { categories });

  return data;
}
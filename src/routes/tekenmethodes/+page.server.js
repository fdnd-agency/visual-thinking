// import { gql } from "graphql-request";
// import { hygraph } from "$lib/utils/hygraph.js";
import { directus } from "$lib/utils/directus.js";

// export async function load({ url }) {
//   const categories = url.searchParams.getAll('filter')
//   let filter

//   categories && categories.length > 0
//   // This is where the data is being fetched and filtered throught Hygraph to get the right data.
//           ? filter = `, where: {categories_some: {slug_in: ${JSON.stringify(categories)}}}`
//           : filter = ''

// let query = gql`
//     query Methods {
//       page(where: { id: "clv89bh0vn4z007unrv85gsw1" }) {
//         title
//         content {
//           html
//         }
//       }
//       methods(first: 100 ${filter}) {
//         id
//         slug
//         title
//         categories {
//           title
//           id
//         }
//         template {
//           avif: url(
//             transformation: {
//               document: { output: { format: avif } }
//             }
//           )
//           webp: url(
//             transformation: {
//               document: { output: { format: webp } }
//             }
//           )
//           png: url(
//             transformation: {
//               document: { output: { format: png } }
//             }
//           )
//           height
//           width
//         }
//       }
//       categories(first: 10) {
//         slug
//         title
//       }
//     }
//   `;

//   const data = await hygraph.request(query, { categories });

//   return data;
// }

export async function load({ url }) {
  const categories = url.searchParams.getAll("filter");
  let filter;

  categories && categories.length > 0
    ? // This is where the data is being fetched and filtered throught Hygraph to get the right data.
      (filter = `, where: {categories_some: {slug_in: ${JSON.stringify(categories)}}}`)
    : (filter = "");

  const query = `
    query Tekenmethodes_Page {
      vt_tekenmethodes_page {
        titel
        beschrijving
        tekenmethodes {
          titel
          sjabloon
          duur
          beschrijving
        }
      }
    }
  `;

  let data;
  try {
    data = await directus.query(query);
  } catch (error) {
    console.error("Error loading kennisclips page:", error);
    console.error("Error details:", JSON.stringify(error.errors, null, 2));
    throw error;
  }

  const page = data.vt_tekenmethodes_page;
  const methods = page?.tekenmethodes || [];

  return { page, methods, categories };
}

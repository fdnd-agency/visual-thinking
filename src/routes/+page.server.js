import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";
import { directus } from "../lib/utils/directus";

export async function load() {
    try {
    const data = await directus.query(`
        query homePage {
            adconnect_homepage {
                title
                content
            }
        }`);
        console.log(data);
    return data;
    
  } catch (error) {
    console.error("Error loading home page:", error);
    console.error(error.errors[0].extensions)
    throw error;
  }

//   let query = gql`
//     query Home {
//       page(where: {id: "clv8j3yo84g2107unotjahr7y"}) {
//         title
//         content {
//           html
//         }
//       }
//     }
//   `;
//   const data = await hygraph.request(query);
  
//   return data
}
import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";


export const load = async ({ params }) => {
    const { slug } = params;
    const query = gql`
    query Category {
      category(where: { slug: "${slug}"}) {
 
        title
        

      }
    }
  `;

    return await hygraph.request(query);
}
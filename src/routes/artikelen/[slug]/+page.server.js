import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";


export const load = async ({ params }) => {
	const { slug } = params;
	const query = gql`
    query Article {
      article(where: { slug: "${slug}"}) {
        visual {
          url
        }
        title
        intro
        slug
        content {
            html
        }
      }
    }
  `;

    return await hygraph.request(query);
}
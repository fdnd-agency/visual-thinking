import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ params }) {
  const { slug } = params;
  let query = gql`
    query MiniCourse {
      miniCourse(where: {slug: "${slug}"}) {
        title
        slides {
          title
          content {
            html
          }
          image {
            url
          }
        }
      }
    }
  `;

  const variables = { slug };
  const request = await hygraph.request(query, variables);

  return {
    miniCourse: request.miniCourse,
  };
}

import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  const query = gql`
    query MiniCourses {
      page(where: {id: "clv8eb8jmw1hv07uncpsrut9l"}) {
        title
        content {
          html
        }
      }

      miniCourses {
        title
        slug
      }
    }
  `;

  const { page, miniCourses } = await hygraph.request(query);

  return { page, miniCourses };
}

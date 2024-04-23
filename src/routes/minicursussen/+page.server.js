import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {

  let query = gql`
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

  const data = await hygraph.request(query)

  return data;
}

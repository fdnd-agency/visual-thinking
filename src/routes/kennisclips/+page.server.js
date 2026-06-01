import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";



export const load = async () => {
  const query = gql`
    query AllCategories {
      page(where: {id: "cmhdhsj6agpqo06uylzxne5vd"}) {
        title
        content {
          html
        }
      }
      categories {
        slug
        title
        youTubeLink
        introduction
        content {
          html
        }
      }
    }
  `;

  const data = await hygraph.request(query);

  console.log(data);

  return {
    page: data.page,
    clips: data.categories
  };
};

import { gql } from "graphql-request";
import { h as hygraph } from "../../../../chunks/hygraph.js";
async function load({ params }) {
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
    miniCourse: request.miniCourse
  };
}
export {
  load
};

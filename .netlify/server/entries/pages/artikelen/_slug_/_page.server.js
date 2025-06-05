import { gql } from "graphql-request";
import { h as hygraph } from "../../../../chunks/hygraph.js";
const load = async ({ params }) => {
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
};
export {
  load
};

import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";
import { directus } from "../../lib/utils/directus";



export const load = async () => {
  // const query = gql`
  //   query AllCategories {
  //     page(where: {id: "cmhdhsj6agpqo06uylzxne5vd"}) {
  //       title
  //       content {
  //         html
  //       }
  //     }
  //     categories {
  //       slug
  //       title
  //       youTubeLink
  //       introduction
  //       content {
  //         html
  //       }
  //     }
  //   }
  // `;


  const directusquery = `
  query AllCategories {
    adconnect_kennisclip {
      title
    }

    adconnect_kennisclip_category {
      slug
      title
      youTubeLink
    }
  }
`;


  // const data = await hygraph.request(query);
  let data
  try {
    data = await directus.query(directusquery);
    console.log(data)
  } catch (error) {
    console.log(error)
    console.log(error.errors[0].extensions)
  }

  console.log(data);

  return {
    page: data.adconnect_kennisclip,
    clips: data.adconnect_kennisclip_category
  };
};

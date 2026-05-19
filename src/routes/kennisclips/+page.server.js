import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";
import { directus } from "../../lib/utils/directus";

export const load = async () => {


  const directusquery = `
  query AllCategories {
    adconnect_kennisclip {
      title
      category {
        slug
        title
        youTubeLink
     }
    }
  }
`;


  let data
  try {
    data = await directus.query(directusquery);
  } catch (error) {
    console.log(error)
    console.log(error.errors[0].extensions)
  }


  return {
    page: data.adconnect_kennisclip,
    clips: data.adconnect_kennisclip.category
  };
};

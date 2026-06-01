import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";
import { directus } from "../../lib/utils/directus";

export const load = async () => {


  const directusquery = `
  query AllCategories {
    vt_kennisclips_page {
      titel
      beschrijving
      kennisclips {
        slug
        titel
        youtube_link
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
    page: data.vt_kennisclips_page,
    clips: data.vt_kennisclips_page.kennisclips
  };
};

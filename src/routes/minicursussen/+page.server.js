import { directus } from "$lib/utils/directus.js";
import { DIRECTUS_URL } from "$env/static/private";

export async function load() {
  try {
    const data = await directus.query(`
      query minicursus_page {
        adconnect_minicursussen_page {
          title
          content
          titel
          beschrijving
        }
          
        adconnect_minicursussen {
          title
          slug
          image {
            id
          }
        }
      }
    `);

    return {
      cursussen: data.adconnect_minicursussen,
      page: data.adconnect_minicursussen_page,
      directusUrl: DIRECTUS_URL,
    };
  } catch (error) {
    console.error("Error loading home page:", error);
    console.error(error.errors[0].extensions);
    throw error;
  }
}

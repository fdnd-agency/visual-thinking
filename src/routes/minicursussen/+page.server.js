import { directus } from "$lib/utils/directus.js";
import { DIRECTUS_URL } from "$env/static/private";

export async function load() {
  try {
    const data = await directus.query(`
      query minicursus_page {
        vt_minicursussen_page {
          titel
          beschrijving
        }
          
        vt_minicursussen {
          titel
          slug
          afbeelding {
            id
          }
        }
      }
    `);

    return {
      cursussen: data.vt_minicursussen,
      page: data.vt_minicursussen_page,
      directusUrl: DIRECTUS_URL,
    };
  } catch (error) {
    console.error("Error loading home page:", error);
    console.error(error.errors[0].extensions);
    throw error;
  }
}

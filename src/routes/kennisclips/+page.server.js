import { directus } from "$lib/utils/directus.js";

export async function load() {
  const query = `
    query KennisclipPage {
      vt_kennisclips_page {
        titel
        beschrijving
        kennisclips {
          titel
          slug
          youtube_link
          beschrijving
        }
      }
    }
  `;

  let data;
  try {
    data = await directus.query(query);
  } catch (error) {
    console.error("Error loading kennisclips page:", error);
    console.error("Error details:", JSON.stringify(error.errors, null, 2));
    throw error;
  }

  const page = data.vt_kennisclips_page;
  const clips = page?.kennisclips || [];

  return { page, clips };
}

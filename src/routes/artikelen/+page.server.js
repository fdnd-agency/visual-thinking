import { directus } from "$lib/utils/directus.js";
import { DIRECTUS_URL } from "$env/static/private";

export async function load() {
  const query = `
    query Articles {
      adconnect_artikelen_page {
        title
        content
        artikelen(limit: 6) {
          title
          intro
          slug
          visual {
            id
          }
        }
      }
    }
  `;

  let data;
  try {
    data = await directus.query(query);
  } catch (error) {
    console.error("Error loading articles page:", error);
    console.error("Error details:", JSON.stringify(error.errors, null, 2));
    throw error;
  }

  const page = data.adconnect_artikelen_page;
  const articles = (page?.artikelen || []).map(article => ({
    ...article,
    visual: article.visual ? { url: `${DIRECTUS_URL}/assets/${article.visual.id}` } : null
  }));

  return { page, articles };
}

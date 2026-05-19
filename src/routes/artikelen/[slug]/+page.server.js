import { directus } from "$lib/utils/directus.js";
import { DIRECTUS_URL } from "$env/static/private";

export const load = async ({ params }) => {
  const { slug } = params;
  const query = `
    query Article {
      adconnect_artikel(filter: { slug: { _eq: "${slug}" } }) {
        title
        intro
        slug
        content
        visual {
          id
        }
      }
    }
  `;

  let data;
  try {
    data = await directus.query(query);
  } catch (error) {
    console.error("Error loading article:", error);
    console.error("GraphQL errors:", JSON.stringify(error.errors, null, 2));
    throw error;
  }

  const articleData = data.adconnect_artikel[0];

  if (!articleData) {
    throw new Error("Article not found");
  }

  const article = {
    ...articleData,
    visual: articleData.visual ? { url: `${DIRECTUS_URL}/assets/${articleData.visual.id}` } : null
  };

  return { article };
}
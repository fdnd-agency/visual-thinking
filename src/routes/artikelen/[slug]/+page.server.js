import { directus } from "$lib/utils/directus.js";
import { DIRECTUS_URL } from "$env/static/private";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const { slug } = params;
  const query = `
    query Article($slug: String!) {
      adconnect_artikel(filter: { slug: { _eq: $slug } }) {
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
    data = await directus.query(query, { slug });
  } catch (err) {
    console.error("Error loading article:", err);
    console.error("GraphQL errors:", JSON.stringify(err.errors, null, 2));
    throw err;
  }

  const articleData = data.adconnect_artikel[0];

  if (!articleData) {
    error(404, "Article not found");
  }

  const article = {
    ...articleData,
    visual: articleData.visual ? { url: `${DIRECTUS_URL}/assets/${articleData.visual.id}` } : null
  };

  return { article };
}
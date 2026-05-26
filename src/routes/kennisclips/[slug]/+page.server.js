import { directus } from "$lib/utils/directus.js";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const { slug } = params;
  const query = `
    query Kennisclip($slug: String!) {
      vt_kennisclips(filter: { slug: { _eq: $slug } }) {
        titel
        beschrijving
        slug
        youtube_link
      }
    }
  `;

  let data;
  try {
    data = await directus.query(query, { slug });
  } catch (err) {
    console.error("Error loading Knowledgeclip:", err);
    console.error("GraphQL errors:", JSON.stringify(err.errors, null, 2));
    throw err;
  }

  const clipData = data.vt_kennisclips[0];

  if (!clipData) {
    error(404, "Knowledgeclip not found");
  }

  return { clip: clipData };
};

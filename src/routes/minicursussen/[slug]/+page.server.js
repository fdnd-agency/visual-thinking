import { directus } from "$lib/utils/directus.js";
import { DIRECTUS_URL } from "$env/static/private";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { slug } = params;
  const query = `
      query MiniCourse($slug: String!) {
        vt_minicursussen(filter: { slug: { _eq: $slug } }) {
          titel
          slides {
            titel
            inhoud
            afbeelding {
              id
            }
          }
        }
      }
    `;

  let data;
  try {
    data = await directus.query(query, { slug });
  } catch (err) {
    console.error("Error loading minicursus:", err);
    throw err;
  }

  const courseData = data.vt_minicursussen?.[0];
  if (!courseData) {
    throw error(404, "Minicursus not found");
  }

  const miniCourse = {
    title: courseData.titel,
    slides: (courseData.slides ?? []).map(({ titel, inhoud, afbeelding }) => ({
      title: titel,
      content: inhoud ?? "",
      image: afbeelding ? { url: `${DIRECTUS_URL}/assets/${afbeelding.id}` } : null,
    })),
  };

  return { miniCourse };
}

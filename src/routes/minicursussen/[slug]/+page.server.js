import { directus } from "$lib/utils/directus.js";
import { DIRECTUS_URL } from "$env/static/private";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { slug } = params;
  const query = `
      query MiniCourse($slug: String!) {
        adconnect_minicursussen(filter: { slug: { _eq: $slug } }) {
          title
          slides {
            title
            content
            image { id }
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

  const courseData = data.adconnect_minicursussen?.[0];
  if (!courseData) {
    throw error(404, "Minicursus not found");
  }

  const miniCourse = {
    title: courseData.title,
    slides: (courseData.slides ?? []).map(({ title, content, image }) => ({
      title,
      content: content ?? "",
      image: image ? { url: `${DIRECTUS_URL}/assets/${image.id}` } : null,
    })),
  };

  return { miniCourse };
}

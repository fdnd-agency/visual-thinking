import { directus } from "$lib/utils/directus.js";
import { DIRECTUS_URL } from "$env/static/private";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const { slug } = params;
  const query = `
      query Voorbeelden($slug: String!) {
        vt_tekenmethodes(filter: { slug: { _eq: $slug } }) {
          titel
          slug
          pdf {
            id
          }
          voorbeelden {
            directus_files_id {
              id
            }
          }
        }
      }
    `;

  let data;
  try {
    data = await directus.query(query, { slug });
  } catch (error) {
    console.error("Error loading voorbeelden:", error);
    console.error("Error details:", JSON.stringify(error.errors, null, 2));
    throw error;
  }

  const method = data?.vt_tekenmethodes?.[0];
  if (!method) throw error(404, "Tekenmethode niet gevonden");

  return {
    ...method,
    pdf: method.pdf ? { url: `${DIRECTUS_URL}/assets/${method.pdf.id}` } : null,
    voorbeelden: (method?.voorbeelden || []).map((example) => ({
      url: `${DIRECTUS_URL}/assets/${example.directus_files_id.id}`,
    })),
  };
};

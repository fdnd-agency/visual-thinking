import { directus } from "$lib/utils/directus.js";
import { DIRECTUS_URL } from "$env/static/private";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const { slug } = params;
  const query = `
      query Tekenmethodes($slug: String!) {
        vt_tekenmethodes(filter: { slug: { _eq: $slug } }) {
          titel
          slug
          sjabloon {
            id
          }
          beschrijving
          pdf {
            id
          }
        }
      }
    `;

  let data;
  try {
    data = await directus.query(query, { slug });
  } catch (error) {
    console.error("Error loading tekenmethode:", error);
    console.error("Error details:", JSON.stringify(error.errors, null, 2));
    throw error;
  }

  const method = data?.vt_tekenmethodes?.[0];
  if (!method) throw error(404, "Tekenmethode niet gevonden");

  return {
    ...method,
    sjabloon: method.sjabloon
      ? { url: `${DIRECTUS_URL}/assets/${method.sjabloon.id}` }
      : null,
    pdf: method.pdf ? { url: `${DIRECTUS_URL}/assets/${method.pdf.id}` } : null,
  };
};

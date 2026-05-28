import { directus } from "$lib/utils/directus.js";
import { DIRECTUS_URL } from "$env/static/private";

export const load = async ({ params }) => {
  const { slug } = params;
  const query = `
      query Stappen($slug: String!) {
        vt_tekenmethodes(filter: { slug: { _eq: $slug } }) {
          titel
          slug
          duur
          pdf {
            id
          }
          categorieen {
            titel
          }
          materialen {
            titel
          }
          stappen {
            titel
            beschrijving
            visualisaties {
              directus_files_id {
                id
              }
            }
          }
        }
      }
    `;

  let data;
  try {
    data = await directus.query(query, { slug });
  } catch (error) {
    console.error("Error loading stappenplan:", error);
    console.error("Error details:", JSON.stringify(error.errors, null, 2));
    throw error;
  }

  const method = data?.vt_tekenmethodes?.[0];
  if (!method) return null;

  return {
    ...method,
    pdf: method.pdf ? { url: `${DIRECTUS_URL}/assets/${method.pdf.id}` } : null,
    stappen: (method?.stappen || []).map((stap) => ({
      ...stap,
      visualisaties: (stap?.visualisaties || []).map((visual) => ({
        url: `${DIRECTUS_URL}/assets/${visual.directus_files_id.id}`,
      })),
    })),
  };
};

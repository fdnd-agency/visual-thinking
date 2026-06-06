import { directus } from "$lib/utils/directus.js";
import { DIRECTUS_URL } from "$env/static/private";
import { error } from "@sveltejs/kit";

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
            vt_categorieen_id {
              titel
            }
          }
          materialen {
            vt_tekenmethodes_materialen_id {
              titel
            }
          }
          stappen {
            id
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
  if (!method) throw error(404, "Tekenmethode niet gevonden");

  return {
    ...method,
    pdf: method.pdf ? { url: `${DIRECTUS_URL}/assets/${method.pdf.id}` } : null,
    categories: method.categorieen.map((cat) => cat.vt_categorieen_id.titel),
    materials: method.materialen.map(
      (mat) => mat.vt_tekenmethodes_materialen_id.titel
    ),
    steps: (method?.stappen || [])
      .map((stap) => ({
        ...stap,
        visuals: (stap?.visualisaties || []).map((visual) => ({
          url: `${DIRECTUS_URL}/assets/${visual.directus_files_id.id}`,
        })),
      }))
      .sort((a, b) => a.id - b.id),
  };
};

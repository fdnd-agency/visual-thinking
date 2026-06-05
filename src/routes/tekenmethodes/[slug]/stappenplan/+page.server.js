import { directus } from "$lib/utils/directus.js";
import { DIRECTUS_URL } from "$env/static/private";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const { slug } = params;
  const query = `
      query Stappen($slug: String!) {
        vt_tekenmethodes(filter: { slug: { _eq: $slug } }) {
          titel
          id
          slug
          duur
          pdf {
            id
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

  const categoriesMaterialsQuery = `
      query TekenmethodeCategoriesMaterials($methodId: GraphQLStringOrFloat) {
        vt_tekenmethodes_vt_categorieen(filter: { vt_tekenmethodes_id: { id: { _eq: $methodId } } }) {
          vt_categorieen_id {
            titel
          }
        }
        vt_tekenmethodes_vt_tekenmethodes_materialen(filter: { vt_tekenmethodes_id: { id: { _eq: $methodId } } }) {
          vt_tekenmethodes_materialen_id {
            titel
          }
        }
      }
    `;

  let method;
  let catMatData;

  try {
    const data = await directus.query(query, { slug });
  } catch (error) {
    console.error("Error loading method data:", error);
    console.error("Error details:", JSON.stringify(error.errors, null, 2));
    throw error;
  }

  method = data?.vt_tekenmethodes?.[0];
  if (!method) throw error(404, "Tekenmethode niet gevonden");

  try {
    catMatData = await directus.query(categoriesMaterialsQuery, {
      methodId: method.id,
    });
  } catch (error) {
    console.error("Error loading materials and categories:", error);
    console.error("Error details:", JSON.stringify(error.errors, null, 2));
    throw error;
  }

  if (!catMatData) throw error(404, "materialen en categorieen niet gevonden");

  return {
    ...method,
    pdf: method.pdf ? { url: `${DIRECTUS_URL}/assets/${method.pdf.id}` } : null,
    categorieen: (catMatData?.vt_tekenmethodes_vt_categorieen || []).map(
      (item) => ({ titel: item?.vt_categorieen_id?.titel })
    ),
    materialen: (
      catMatData?.vt_tekenmethodes_vt_tekenmethodes_materialen || []
    ).map((item) => ({ titel: item?.vt_tekenmethodes_materialen_id?.titel })),
    stappen: (method?.stappen || []).map((stap) => ({
      ...stap,
      visualisaties: (stap?.visualisaties || []).map((visual) => ({
        url: `${DIRECTUS_URL}/assets/${visual.directus_files_id.id}`,
      })),
    })),
  };
};

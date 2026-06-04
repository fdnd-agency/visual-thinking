import { directus } from "$lib/utils/directus.js";
import { DIRECTUS_URL } from "$env/static/private";
import { error } from "@sveltejs/kit";

export async function load({ url }) {
  const categoryIDs = url.searchParams.getAll("filter");

  let filter = {};
  if (categoryIDs && categoryIDs.length > 0) {
    filter = {
      categorieen: {
        _or: categoryIDs.map((cat) => ({
          id: { _eq: cat },
        })),
      },
    };
  }

  const query = `
    query Tekenmethodes_Page($filter: vt_tekenmethodes_filter) {
      vt_categorieen {
        id
        titel
      }
      vt_tekenmethodes_page {
        titel
        beschrijving
        tekenmethodes(filter: $filter) {
          titel
          sjabloon {
            id
          }
          duur
          beschrijving
          slug
        }
      }
    }
  `;

  let data;
  try {
    data = await directus.query(query, { filter });
  } catch (error) {
    console.error("Error loading tekenmethodes page:", error);
    console.error("Error details:", JSON.stringify(error.errors, null, 2));
    throw error;
  }

  const categories = data.vt_categorieen || [];
  const page = data.vt_tekenmethodes_page;
  if (!page) throw error(404, "Pagina niet gevonden");
  const methods = (page?.tekenmethodes || [])
    .map((method) => ({
      ...method,
      sjabloon: method.sjabloon
        ? { url: `${DIRECTUS_URL}/assets/${method.sjabloon.id}` }
        : null,
    }))
    .sort((a, b) => (a.titel || "").localeCompare(b.titel || ""));

  return { page, methods, categories };
}

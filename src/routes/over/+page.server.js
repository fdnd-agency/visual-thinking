import { directus } from "../../lib/utils/directus";

export async function load() {
  const query = `
    query {
      vt_over_page {
        titel
        beschrijving
      }
    }
  `;

  const data = await directus.query(query);

  return {
    page: data.vt_over_page[0]
  };
}
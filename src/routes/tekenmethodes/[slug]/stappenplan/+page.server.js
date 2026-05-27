// import { gql } from 'graphql-request';
// import { hygraph } from '$lib/utils/hygraph.js';

// import { MethodStepsQuery } from '$lib/index.js'
// export const load = async ({ params }) => {
// 	const { slug } = params;
// 	const queryUrl = MethodStepsQuery(gql, slug);

// 	return await hygraph.request(queryUrl);
// };

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
    console.error("Error loading stappenplan:", error);
    console.error("Error details:", JSON.stringify(error.errors, null, 2));
    throw error;
  }
  data = (data?.vt_tekenmethodes || []).map((method) => ({
    ...method,
    pdf: method.pdf ? { url: `${DIRECTUS_URL}/assets/${method.pdf.id}` } : null,
  }));

  return data[0];
};

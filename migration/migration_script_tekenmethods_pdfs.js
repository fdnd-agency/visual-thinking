import {
  createDirectus,
  graphql,
  staticToken,
  updateItem,
  uploadFiles,
} from "@directus/sdk";
import { GraphQLClient } from "graphql-request";

const directusUrl = process.env.DIRECTUS_URL;
const directusToken = process.env.DIRECTUS_TOKEN; // Ensure DIRECTUS_TOKEN is available

const directus = createDirectus(directusUrl)
  .with(staticToken(directusToken))
  .with(graphql());

const hygraph = new GraphQLClient(process.env.HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_KEY}`,
  },
});

const query = `
  query Methods {
    methods {
      slug
      pdf {
        url
      }
    }
  }
`;

const Idquery = `
  query Tekenmethodes($slug: String!) {
    vt_tekenmethodes(filter: { slug: { _eq: $slug } }) {
      id
    }
  }
`;

async function migratePdfs() {
  try {
    const response = await hygraph.request(query);
    const methods = response.methods; // array of methods.
    const methodsWithPdfs = methods.filter((method) => method.pdf != null);

    console.log(
      `Found ${methodsWithPdfs.length} methods with PDFs. Starting migration...`
    );

    for (const methodWithPdf of methodsWithPdfs) {
      try {
        console.log(`Processing PDF for slug: ${methodWithPdf.slug}`);

        // 1. Fetch PDF from Hygraph
        const pdfResponse = await fetch(`${methodWithPdf.pdf.url}`);
        if (!pdfResponse.ok) {
          throw new Error(
            `Failed to fetch PDF for ${methodWithPdf.slug}: ${pdfResponse.statusText}`
          );
        }
        const pdfBlob = await pdfResponse.blob();

        // 2. Upload PDF to Directus
        const formData = new FormData();
        formData.append("file", pdfBlob, `${methodWithPdf.slug}.pdf`);
        const postPdfResponse = await directus.request(uploadFiles(formData));
        const pdfId = postPdfResponse.id;

        // 3. Find associated Tekenmethode in Directus
        const idResponse = await directus.query(Idquery, {
          slug: methodWithPdf.slug,
        });
        if (
          !idResponse.vt_tekenmethodes ||
          idResponse.vt_tekenmethodes.length === 0
        ) {
          console.warn(
            `[Warning] No vt_tekenmethodes found for slug: ${methodWithPdf.slug}. Skipping update.`
          );
          continue;
        }
        const tekenMethodeDirectusId = idResponse.vt_tekenmethodes[0].id;

        // 4. Update Tekenmethode with PDF ID
        await directus.request(
          updateItem("vt_tekenmethodes", tekenMethodeDirectusId, { pdf: pdfId })
        );

        console.log(`Successfully migrated PDF for ${methodWithPdf.slug}`);
      } catch (err) {
        console.error(`Error processing ${methodWithPdf.slug}:`, err);
      }
    }

    console.log("Migration completed.");
  } catch (err) {
    console.error("Migration failed:", err);
  }
}

migratePdfs();

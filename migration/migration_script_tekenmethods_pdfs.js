import {
  createDirectus,
  graphql,
  rest,
  updateItem,
  uploadFiles,
} from "@directus/sdk";
import { GraphQLClient } from "graphql-request";

const directus = createDirectus(process.env.DIRECTUS_URL)
  .with(graphql())
  .with(rest());
const hygraph = new GraphQLClient(process.env.HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_KEY}`,
  },
});

const query = `
  query Methods {
    methods(first: 100) {
      id
      slug
      pdf {
        id
        url
      }
      
    }
  }
`;

const response = await hygraph.request(query);

const methods = response.methods; // array of methods.
const methodsWithPdfs = methods.filter((method) => method.pdf != null);

// console.log(methodsWithPdfs);
// console.log(methodsWithPdfs.length)

const pdfBlobs = [];

for (const methodWithPdf of methodsWithPdfs) {
  const pdfResponse = await fetch(`${methodWithPdf.pdf.url}`);
  const data = await pdfResponse.blob();
  pdfBlobs.push({ methodSlug: methodWithPdf.slug, pdfData: data });
}

const Idquery = `
      query Tekenmethodes($slug: String!) {
        vt_tekenmethodes(filter: { slug: { _eq: $slug } }) {
          id
        }
      }
    `;

for (const pdf of pdfBlobs) {
  const formData = new FormData();
  formData.append("file", pdf.pdfData, `${pdf.methodSlug}.pdf`);
  const postPdfReponse = await directus.request(uploadFiles(formData));
  const pdfId = postPdfReponse.id;
  const idResponse = await directus.query(Idquery, { slug: pdf.methodSlug });
  const tekenMethodeDirectusId = idResponse.vt_tekenmethodes[0].id;
  const updateRelationShipTekenmethode = await directus.request(
    updateItem("vt_tekenmethodes", tekenMethodeDirectusId, { pdf: pdfId })
  );
}

console.log(pdfBlobs);

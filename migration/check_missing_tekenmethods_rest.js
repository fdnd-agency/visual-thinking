import { GraphQLClient } from "graphql-request";

const hygraphUrl = process.env.HYGRAPH_URL;
const directusUrl = process.env.DIRECTUS_URL;
const directusKey = process.env.DIRECTUS_KEY;

const hygraph = new GraphQLClient(hygraphUrl, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_KEY}`,
  },
});

// Query to fetch all tekenmethods from Hygraph
const hygraphQuery = `
  query Methods {
    methods(first: 100) {
      id
      slug
      title
      description {
        html
      }
      duration
    }
  }
`;

// Fetch tekenmethods from Hygraph
const hygraphResponse = await hygraph.request(hygraphQuery);
const hygraphMethods = hygraphResponse.methods;

console.log(`Fetched ${hygraphMethods.length} tekenmethods from Hygraph`);

// Fetch tekenmethods from Directus
if (!directusKey) {
  throw new Error("DIRECTUS_KEY is missing. Add it to your .env file.");
}

const directusResponse = await fetch(
  `${directusUrl}/items/vt_tekenmethodes?limit=-1&fields=titel,slug`,
  {
    headers: {
      Authorization: `Bearer ${directusKey}`,
      "Content-Type": "application/json",
    },
  }
);

const directusData = await directusResponse.json();
if (!directusResponse.ok) {
  throw new Error(
    `Directus request failed (${directusResponse.status} ${directusResponse.statusText}): ${JSON.stringify(directusData)}`
  );
}

if (!Array.isArray(directusData.data)) {
  throw new Error(
    `Unexpected Directus response shape. Expected { data: [] }, received: ${JSON.stringify(directusData)}`
  );
}

const directusMethods = directusData.data;

console.log(`Fetched ${directusMethods.length} tekenmethods from Directus`);

// Create a Set of Directus titles for quick lookup
const directusTitles = new Set(directusMethods.map((method) => method.titel));

// Find titles that are in Hygraph but not in Directus
const missingTitles = hygraphMethods
  .filter((method) => !directusTitles.has(method.title))
  .map((method) => method.title);

console.log(`\n=== Missing Tekenmethods in Directus ===`);
console.log(`Total missing: ${missingTitles.length}`);
console.log(`\nMissing titles:`);
missingTitles.forEach((title, index) => {
  console.log(`${index + 1}. ${title}`);
});

// Also output as JSON for easy copying
console.log(`\n=== JSON format ===`);
console.log(JSON.stringify(missingTitles, null, 2));

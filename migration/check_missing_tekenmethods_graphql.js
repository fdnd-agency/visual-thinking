import { createDirectus, graphql, staticToken } from "@directus/sdk";
import { GraphQLClient } from "graphql-request";

const hygraphUrl = process.env.HYGRAPH_URL;
const hygraphKey = process.env.HYGRAPH_KEY;
const directusUrl = process.env.DIRECTUS_URL;
const directusToken = process.env.DIRECTUS_TOKEN;

if (!directusToken) {
  throw new Error(
    "DIRECTUS_TOKEN or DIRECTUS_KEY is missing. Add it to your .env file."
  );
}

const hygraph = new GraphQLClient(hygraphUrl, {
  headers: {
    Authorization: `Bearer ${hygraphKey}`,
  },
});

const directus = createDirectus(directusUrl)
  .with(staticToken(directusToken))
  .with(graphql());

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

// Query to fetch all tekenmethods from Directus
const directusQuery = `
  query {
    vt_tekenmethodes(limit: -1) {
      titel
      slug
    }
  }
`;

async function checkMissing() {
  try {
    // Fetch tekenmethods from Hygraph
    const hygraphResponse = await hygraph.request(hygraphQuery);
    const hygraphMethods = hygraphResponse.methods;

    console.log(`Fetched ${hygraphMethods.length} tekenmethods from Hygraph`);

    // Fetch tekenmethods from Directus
    const directusResponse = await directus.query(directusQuery);
    const directusMethods = directusResponse.vt_tekenmethodes;

    if (!directusMethods) {
      throw new Error(
        "Unexpected Directus response: missing vt_tekenmethodes array"
      );
    }

    console.log(`Fetched ${directusMethods.length} tekenmethods from Directus`);

    // Create a Set of Directus titles for quick lookup
    const directusTitles = new Set(
      directusMethods.map((method) => method.titel)
    );

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

    if (missingTitles.length === 0) {
      console.log(
        "No missing tekenmethods found. All titles are present in Directus."
      );
    }

    // Also output as JSON for easy copying
    console.log(`\n=== JSON format ===`);
    console.log(JSON.stringify(missingTitles, null, 2));
  } catch (error) {
    console.error("Error checking for missing methods:", error);
  }
}

checkMissing();

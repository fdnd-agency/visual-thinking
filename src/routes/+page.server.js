import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";
import { directus } from "../lib/utils/directus";

export async function load() {
    try {
        const data = await directus.query(`
            query homePage {
                adconnect_homepage {
                    titel: title
                    beschrijving: content
                }
            }`);
        return data;
    
  } catch (error) {
    console.error("Error loading home page:", error);
    console.error(error.errors[0].extensions)
    throw error;
  }
}
import { createDirectus, graphql } from "@directus/sdk";
import { DIRECTUS_URL } from "$env/static/private";

const url = DIRECTUS_URL; 

if (url == undefined || url.length === 0) {
    throw new Error("Directus url is empty or undefined");
}

export const directus = createDirectus(DIRECTUS_URL).with(graphql())


export async function fetchReadFromDirectus(query) {
    try {
        const data = await directus.query(query)
        return data;
    } catch (error) {
        console.log(`Error fetching from directus: ${error}`);
        console.log(JSON.stringify(error.errors));
        throw error
        
    }
}
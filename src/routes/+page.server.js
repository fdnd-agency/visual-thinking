import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";
import { directus } from "../lib/utils/directus";

export async function load() {

    const response = await directus.query(`
        query homePage {
            vt_homepage {
                titel
                beschrijving
            }
        }`);
    const page = response.vt_homepage;
    return page;



}
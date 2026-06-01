import { describe, expect, it } from "vitest";
import { kennisclip_query, kennisclipSlugQuery } from "./queries/kennisclip";
import { directus } from "./directus";
import z, { json } from "zod";
import { directusKennisclipOoutputSchema, directusCategoryOutputSchema } from "./schemas/kennisclip_schema";

describe("testing kennisclip fetching data", () => {

    
    const directusInstance = directus;
    const schema = directusKennisclipOoutputSchema;

    it("Should fetch kennisclips for the kennisclips page from directus and not error", async () => {
        const query = kennisclip_query;
        let response;
        
        response = await directusInstance.query(query);    
        
        
        schema.parse(response.vt_kennisclips_page); // parse the incoming data to the schema we declared. Test should fail if output is not the same as the schema.

        expect(response).to.be.not.null;
        expect(response.vt_kennisclips_page.titel).toBeTypeOf("string");
        expect(response.vt_kennisclips_page.beschrijving).toBeTypeOf("string");
        expect(response.vt_kennisclips_page.kennisclips.length).toBeGreaterThan(0); 
    })

    it("Should fetch data for a particular kennisclip and not error", async () => {
        const slugQuery = kennisclipSlugQuery;
        const slugs = ["onderzoeken-en-begrijpen", "leren-over-jezelf"]

        let response
        
        response = await directus.query(kennisclipSlugQuery(slugs[0]));        
        const kennisclip = response.vt_kennisclips[0];
        directusCategoryOutputSchema.parse(kennisclip);
        
        expect(kennisclip.titel).toBeTypeOf("string");
        expect(kennisclip.youtube_link).toBeTypeOf("string");
        expect(kennisclip.beschrijving).toBeTypeOf("string")
    });

    
})
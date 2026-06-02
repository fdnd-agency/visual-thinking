import { describe, expect, it } from "vitest";
import { hygraphKennisclipSlugQuery, directusKennisclipSlugQuery, directusKennisclip_query, hygraphKennisClipsQuery, directusKennisclipsQuery } from "./queries/kennisclip";
import { directus } from "./directus";
import z, { json } from "zod";
import { directusKennisclipOoutputSchema, directusCategoryOutputSchema } from "./schemas/kennisclip_schema";
import { hygraph } from "./hygraph";
import * as cheerio from "cheerio";
import { normalizeHtml } from "./helpers/normalizeHtml";


describe("testing kennisclip fetching data", () => {

    const slugs = ["onderzoeken-en-begrijpen", "leren-over-jezelf"]
    const directusInstance = directus;
    const schema = directusKennisclipOoutputSchema;

    it("Should fetch kennisclips for the kennisclips page from directus and not error", async () => {
        const query = directusKennisclip_query;
        let response;
        
        response = await directusInstance.query(query);    
        
        
        schema.parse(response.vt_kennisclips_page); // parse the incoming data to the schema we declared. Test should fail if output is not the same as the schema.

        expect(response).to.be.not.null;
        expect(response.vt_kennisclips_page.titel).toBeTypeOf("string");
        expect(response.vt_kennisclips_page.beschrijving).toBeTypeOf("string");
        expect(response.vt_kennisclips_page.kennisclips.length).toBeGreaterThan(0); 
    })

    it("Should fetch data for a particular kennisclip and not error", async () => {
        const slugQuery = directusKennisclipSlugQuery;
        
        
        const response = await directus.query(directusKennisclipSlugQuery(slugs[0]));        
        const kennisclip = response.vt_kennisclips[0];
        directusCategoryOutputSchema.parse(kennisclip);
        
        expect(kennisclip.titel).toBeTypeOf("string");
        expect(kennisclip.youtube_link).toBeTypeOf("string");
        expect(kennisclip.beschrijving).toBeTypeOf("string")
    });

    it("Should be the same data in Hygraph and Directus for kennisclips", async () => {

        const hygraphQuery = hygraphKennisClipsQuery
        const directusKennisClipsQuery = directusKennisclipsQuery;

        // We fetch both from hygraph and directus
        const [directusResponse, hygraphResponse] = await Promise.all([directus.query(directusKennisClipsQuery), hygraph.request(hygraphQuery)]);
        
        
        // Here we normalize both the rich text fields because the different platforms store rich text differently.
        const normalizedHygraphContent = directusResponse.vt_kennisclips.map((kennisClip) => normalizeHtml(kennisClip.beschrijving));
        const normalizedDirectusContent = hygraphResponse.categories.map((kennisClip) => kennisClip.content.text = normalizeHtml(kennisClip.content.html));


        // Here we assert all the fields are equal.
        for (let i = 0; i < normalizedDirectusContent.length; i++) {
            const directusKennisClip = normalizedDirectusContent[i];
            const hygraphKennisCLip = normalizedHygraphContent[i];
            
            expect(hygraphKennisCLip.title).toEqual(directusKennisClip.titel)
            expect(hygraphKennisCLip.youTubeLink).toEqual(directusKennisClip.youtube_link)
            expect(hygraphKennisCLip.slug).toEqual(directusKennisClip.slug)
            expect(hygraphKennisCLip.content).toEqual(directusKennisClip.beschrijving);    
            
        }
        
        
    })

    
})
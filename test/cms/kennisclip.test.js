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
        const normalizedHygraphContent = hygraphResponse.categories.map(c => ({
            title: c.title,
            youTubeLink: c.youTubeLink,
            slug: c.slug,
            content: normalizeHtml(c.content.html)
        }));
        const normalizedDirectusContent = directusResponse.vt_kennisclips.map(c => ({
            ...c,
            beschrijving: normalizeHtml(c.beschrijving)
        }));

        const directusMap = new Map(
            normalizedDirectusContent.map((clip) => [
                clip.slug,
                clip
            ])
        );
        const hygraphMap = new Map(
            normalizedHygraphContent.map((clip) => [
                clip.slug,
                clip
            ])
        );

        // Here we assert all the fields are equal.
        for (const [slug, directusKennisCLip] of directusMap) {
            const hygraphKennisClip = hygraphMap.get(slug);


            expect(hygraphKennisClip.title).toEqual(directusKennisCLip.titel)
            expect(hygraphKennisClip.youTubeLink).toEqual(directusKennisCLip.youtube_link)
            expect(hygraphKennisClip.slug).toEqual(directusKennisCLip.slug)
            expect(hygraphKennisClip.content).toEqual(directusKennisCLip.beschrijving);

        }


    })


})
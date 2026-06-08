import { describe, expect, it } from "vitest";
import {
    hygraphKennisclipSlugQuery,
    directusKennisclipSlugQuery,
    directusKennisclip_query,
    hygraphKennisClipsQuery,
    directusKennisclipsQuery,
} from "./queries/kennisclip";
import { directus } from "./directus";
import z, { json } from "zod";
import { directusKennisclipOoutputSchema, directusCategoryOutputSchema } from "./schemas/kennisclip_schema";
import { hygraph } from "./hygraph";
import * as cheerio from "cheerio";
import { normalizeHtml } from "./helpers/normalizeHtml";

describe("testing kennisclip fetching data", () => {
    const slugs = ["onderzoeken-en-begrijpen", "leren-over-jezelf"];
    const directusInstance = directus;
    const schema = directusKennisclipOoutputSchema;

    it("Should fetch data for a particular kennisclip and not error", async () => {
        const slugQuery = directusKennisclipSlugQuery;

        const response = await directus.query(directusKennisclipSlugQuery(slugs[0]));
        const kennisclip = response.vt_kennisclips[0];
        directusCategoryOutputSchema.parse(kennisclip);

        expect(kennisclip.titel).toBeTypeOf("string");
        expect(kennisclip.youtube_link).toBeTypeOf("string");
        expect(kennisclip.beschrijving).toBeTypeOf("string");
    });

    it("Property Based Test: Should be the same data in Hygraph and Directus for kennisclips", async () => {
        const hygraphQuery = hygraphKennisClipsQuery;
        const directusKennisClipsQuery = directusKennisclipsQuery;

        // We fetch both from hygraph and directus
        const [directusResponse, hygraphResponse] = await Promise.all([
            directus.query(directusKennisClipsQuery),
            hygraph.request(hygraphQuery),
        ]);

        expect(directusResponse).toBeDefined();
        expect(hygraphResponse).toBeDefined();

        // Here we normalize both the rich text fields because the different platforms store rich text differently.
        const normalizedHygraphContent = hygraphResponse.categories.map((c) => ({
            title: c.title,
            youTubeLink: c.youTubeLink,
            slug: c.slug,
            content: normalizeHtml(c.content.html),
        }));
        const normalizedDirectusContent = directusResponse.vt_kennisclips.map((c) => ({
            ...c,
            beschrijving: normalizeHtml(c.beschrijving),
        }));

        const directusMap = new Map(normalizedDirectusContent.map((clip) => [clip.slug, clip]));
        const hygraphMap = new Map(normalizedHygraphContent.map((clip) => [clip.slug, clip]));

        const slugs = Array.from(directusMap.keys());
        console.log(slugs);

        // Here we assert all the fields are equal.
        for (let i = 0; i < 30; i++) {
            const slug = slugs[Math.floor(Math.random() * slugs.length)];
            const d = directusMap.get(slug);
            const h = hygraphMap.get(slug);
            
            expect(h).toBeDefined(); // property 1. We expect the hygraph slug to be the same.
            expect(h.title).toEqual(d.titel); // property 2. Expect content to be the same.
            expect(h.youTubeLink).toEqual(d.youtube_link);
            expect(h.slug).toEqual(d.slug);
            expect(h.content).toEqual(normalizeHtml(d.beschrijving));
        }
    });
});

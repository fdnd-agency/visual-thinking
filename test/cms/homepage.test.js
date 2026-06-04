import { describe, expect, it } from "vitest";
import { homepageDirectusQuery, homepageHygraphQuery } from "./queries/homepage";
import { directus } from "./directus";
import { hygraph } from "./hygraph";
import { normalizeHtml } from "./helpers/normalizeHtml";

describe("Tests for homepage", () => {


    it("should fetch homepage data from Directus.", async () => {
        const response = await directus.query(homepageDirectusQuery);
        expect(response.vt_homepage.titel).toBeTypeOf("string")
        expect(response.vt_homepage.titel).to.not.be.empty
        expect(response.vt_homepage.beschrijving).to.not.be.empty
    })

    it("should be the same data both in Hygraph and Directus", async () => {

        const [hygraphResponse, directusResponse] = await Promise.all([hygraph.request(homepageHygraphQuery), directus.query(homepageDirectusQuery)]);

        const normalizedHygraphResponse = {
            ...hygraphResponse.page,
            normalizedContent: normalizeHtml(hygraphResponse.page.content.html)
        }

        const normalizedDirectusResponse = {
            ...directusResponse.vt_homepage,
            normalizedBeschrijving: normalizeHtml(directusResponse.vt_homepage.beschrijving)
        }

        expect(normalizedHygraphResponse.title).toEqual(normalizedDirectusResponse.titel);
        expect(normalizedHygraphResponse.normalizedContent).toEqual(normalizedDirectusResponse.normalizedBeschrijving);
    })







})
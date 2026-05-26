import { assert, describe, expect, it } from "vitest";
import { kennisclip_query } from "./queries/kennisclip_slug";
import { directus } from "./directus";

describe("testing kennisclip fetching data", () => {

    const query = kennisclip_query;
    const directusInstance = directus;

    it("Should fetch data from directus and not error", async () => {

        const response = await directusInstance.query(query);

        expect(response).to.be.not.null;
        expect(response.adconnect_kennisclip.title).toBeTypeOf("string");
        expect(response.adconnect_kennisclip.content).toBeTypeOf("string");
    })
})
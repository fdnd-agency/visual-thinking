import { describe, expect, it } from "vitest";
import { directusMiniCursusSlugQuery, hygraphMiniCursusSlugQuery, directusMiniCursusesQuery, hygraphMiniCursusesQuery } from "./queries/minicursus";
import { directus } from "./directus";
import z, { json } from "zod";
import { directusMiniCursusOutputSchema, directusMiniCursusesOutputSchema, directusMinicursusSlideOutputSchema } from "./schemas/minicursus_schema";
import { hygraph } from "./hygraph";
import * as cheerio from "cheerio";
import { normalizeHtml } from "./helpers/normalizeHtml";

describe("testing minicursus fetching data", () => {
 
  const slugs = ["basisvormen", "handlettering"];
  const directusInstance = directus;
  const schema = directusMiniCursusOutputSchema;

  it("Should fetch data for a particular minicursus and not error", async () => {
    const slugQuery = directusMiniCursusSlugQuery;

    const response = await directus.query(directusMiniCursusSlugQuery(slugs[0]),);
    const minicursus = response.vt_minicursussen[0];
    directusMiniCursusOutputSchema.parse(minicursus);

    expect(minicursus.titel).toBeTypeOf("string");
    expect(minicursus.slug).toBeTypeOf("string");
    expect(Array.isArray(minicursus.slides)).toBe(true);
    expect(minicursus.slides[0]?.titel).toBeTypeOf("string");
  });

  it("Should be the same data in Hygraph and Directus for minicursuses", async () => {
    const hygraphQuery = hygraphMiniCursusesQuery;
    const directusMiniCursusesListQuery = directusMiniCursusesQuery;

    // We fetch both from Hygraph and Directus
    const [directusResponse, hygraphResponse] = await Promise.all([directus.query(directusMiniCursusesListQuery), hygraph.request(hygraphQuery),]);

    // normalize both the rich text field since Directus and Hygraph store rich text differently
    const normalizedHygraphContent = hygraphResponse.miniCourses.map((c) => ({
      title: c.title,
      slug: c.slug,
    }));
    const normalizedDirectusContent = directusResponse.vt_minicursussen.map((c) => ({
      ...c,
      title: c.titel,
  }));

    const directusMap = new Map(
      normalizedDirectusContent.map((course) => [
        course.slug,
        course
      ])
    );
    const hygraphMap = new Map(
      normalizedHygraphContent.map((course) => [
        course.slug,
        course
      ])
    );

    // Assert all fields are equal.
    for (const [slug, directusMiniCursus] of directusMap) {
      const hygraphMiniCursus = hygraphMap.get(slug);

      expect(hygraphMiniCursus).toBeDefined();
      expect(hygraphMiniCursus.title).toEqual(directusMiniCursus.title);
      expect(hygraphMiniCursus.slug).toEqual(directusMiniCursus.slug);
    }
  });
});
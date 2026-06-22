import { describe, expect, it } from "vitest";
import {
  directusMiniCursusSlugQuery,
  hygraphMiniCursusSlugQuery,
} from "./queries/minicursus";
import { directus } from "./directus";
import z, { json } from "zod";
import {
  directusMiniCursusOutputSchema, 
} from "./schemas/minicursus_schema";
import { hygraph } from "./hygraph";
import * as cheerio from "cheerio";
import { normalizeHtml } from "./helpers/normalizeHtml";

describe("testing minicursus fetching data", () => {
  const slug = ["basisvormen"];
  const directusInstance = directus;
  const schema = directusMiniCursusOutputSchema;

  it("Should fetch data for a particular minicursus and not error", async () => {
    const response = await directusInstance.query(directusMiniCursusSlugQuery(slug[0]));
    const minicursus = response.vt_minicursussen[0];
    schema.parse(minicursus);

    expect(minicursus.titel).toBeTypeOf("string");
    expect(minicursus.slug).toBeTypeOf("string");
    expect(Array.isArray(minicursus.slides)).toBe(true);
    expect(minicursus.slides[0]?.titel).toBeTypeOf("string");
  });

  it("Should have matching slide data (count, title, content) for the minicursus", async () => {
    const [directusCourseResponse, hygraphCourseResponse] = await Promise.all([
      directusInstance.query(directusMiniCursusSlugQuery(slug[0])),
      hygraph.request(hygraphMiniCursusSlugQuery(slug[0])),
    ]);

    const directusCourse = directusCourseResponse.vt_minicursussen[0];
    const hygraphCourse = hygraphCourseResponse.miniCourse;

    // Course title should match
    expect(directusCourse.titel).toEqual(hygraphCourse.title);

    // Same number of slides
    expect(directusCourse.slides.length).toEqual(hygraphCourse.slides.length);

    // Compare each slide, matched by position in the array
    directusCourse.slides.forEach((directusSlide, index) => {
      const hygraphSlide = hygraphCourse.slides[index];

      expect(directusSlide.titel).toEqual(hygraphSlide.title);

      const directusContent = normalizeHtml(directusSlide.inhoud ?? "");
      const hygraphContent = normalizeHtml(hygraphSlide.content.html ?? "");

      expect(directusContent).toEqual(hygraphContent);
    });
  });
});
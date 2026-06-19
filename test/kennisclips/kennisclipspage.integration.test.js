import { describe, it, expect } from "vitest";
import { directus } from "../../src/lib/utils/directus.js";

describe("Integration test - kennisclips pagina", () => {
  it("haalt echte kennisclips data op uit Directus", async () => {

    // Arrange
    // Hier maken we de GraphQL query klaar
    const query = `
            query kennisCLipPage {
                vt_kennisclips_page {
                    titel
                    beschrijving
                    kennisclips {
                        slug
                        titel
                        youtube_link
                    }
                }
            }
        `;

    // Act
    // Hier voeren we de query uit naar Directus
    const data = await directus.query(query);

    // Assert
    // Hier controleren we of de data correct terugkomt
    expect(data.vt_kennisclips_page).toBeDefined(); // check of de pagina bestaat
    expect(data.vt_kennisclips_page.titel).toBeDefined(); // check of titel bestaat
    expect(data.vt_kennisclips_page.beschrijving).toBeDefined(); // check of beschrijving bestaat
    expect(Array.isArray(data.vt_kennisclips_page.kennisclips)).toBe(true); // check of kennisclips een array is
  });
});
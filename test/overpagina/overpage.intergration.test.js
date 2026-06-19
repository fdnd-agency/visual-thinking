import { describe, it, expect } from "vitest";
import { directus } from "../../src/lib/utils/directus.js";

describe("Integration test - over pagina", () => {
  it("haalt echte data op uit Directus", async () => {

    // Arrange
    // Hier maken we de GraphQL query klaar
    const query = `
            query {
                vt_over_page {
                    titel
                    beschrijving
                }
            }
        `;

    // Act
    // Hier voeren we de query uit naar Directus
    const data = await directus.query(query);

    // Assert
    // Hier controleren we of de data klopt
    expect(data.vt_over_page).toBeDefined(); // check of data bestaat
    expect(data.vt_over_page.length).toBeGreaterThan(0); // check of er data in zit
    expect(data.vt_over_page[0].titel).toBeDefined(); // check of titel bestaat
  });
});
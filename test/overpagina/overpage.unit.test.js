import { describe, it, expect, vi } from "vitest";
import { load } from "../../src/routes/over/+page.server.js";
import { directus } from "../../src/lib/utils/directus.js";

vi.mock("../../src/lib/utils/directus.js", () => ({
    directus: {
        query: vi.fn()
    }
}));

describe("Unit test - over pagina", () => {
    it("geeft pagina data terug", async () => {
        // AAA: Arrange - zet de mock data klaar
        directus.query.mockResolvedValue({
            vt_over_page: [
                {
                    titel: "Over",
                    beschrijving: "<p>Over ons</p>"
                }
            ]
        });

        // AAA: Act - voer de functie uit
        const result = await load();

        // AAA: Assert - controleer het resultaat
        expect(result.page.titel).toBe("Over");
        expect(result.page.beschrijving).toContain("Over ons");
    });
});
import { describe, it, expect, vi, beforeEach } from "vitest";
import { load } from "../../src/routes/kennisclips/+page.server.js";
import { directus } from "../../src/lib/utils/directus.js";

vi.mock("../../src/lib/utils/directus.js", () => ({
    directus: {
        query: vi.fn()
    }
}));

describe("Unit test - kennisclips pagina", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("geeft page en clips terug vanuit Directus data", async () => {
        // AAA: Arrange - mock data met één clip
        directus.query.mockResolvedValue({
            vt_kennisclips_page: {
                titel: "Kennisclips",
                beschrijving: "<p>Beschrijving</p>",
                kennisclips: [
                    {
                        slug: "visual-thinking",
                        titel: "Visual Thinking",
                        youtube_link: "https://www.youtube.com/embed/test"
                    }
                ]
            }
        });

        // AAA: Act - laad de pagina data
        const result = await load();

        // AAA: Assert - controleer titel en clips
        expect(result.page.titel).toBe("Kennisclips");
        expect(result.clips).toHaveLength(1);
        expect(result.clips[0].slug).toBe("visual-thinking");
    });
});
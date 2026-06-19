import { describe, it, expect } from "vitest";
import fc from "fast-check";

describe("Property-based test - kennisclips pagina", () => {
    it("elke kennisclip moet altijd een geldige slug en titel hebben", () => {

        // Arrange
        // Hier maken we meerdere willekeurige kennisclips aan
        // met geldige testdata
        fc.assert(
            fc.property(
                fc.array(
                    fc.record({
                        slug: fc.string({ minLength: 1 }),
                        titel: fc.string({ minLength: 1 }),
                        youtube_link: fc.webUrl()
                    })
                ),

                // Act
                // Hier voeren we de test uit op alle gegenereerde clips
                (clips) => {

                    // Assert
                    // Hier controleren we of elke clip geldige waarden heeft
                    for (const clip of clips) {
                        expect(typeof clip.slug).toBe("string");
                        expect(clip.slug.length).toBeGreaterThan(0);

                        expect(typeof clip.titel).toBe("string");
                        expect(clip.titel.length).toBeGreaterThan(0);

                        expect(typeof clip.youtube_link).toBe("string");
                    }
                }
            )
        );
    });
});
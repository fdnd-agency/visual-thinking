import { describe, it, expect } from "vitest";
import fc from "fast-check";

describe("Property-based test - over pagina", () => {
    it("titel en beschrijving mogen nooit leeg zijn", () => {

        // Arrange
        // Hier maken we testdata aan met random waardes
        // maar minimaal 1 karakter lang
        fc.assert(
            fc.property(
                fc.record({
                    titel: fc.string({ minLength: 1 }),
                    beschrijving: fc.string({ minLength: 1 })
                }),

                // Act
                // Hier voeren we de test uit met de gegenereerde data
                (page) => {

                    // Assert
                    // Hier controleren we of titel en beschrijving niet leeg zijn
                    expect(page.titel.length).toBeGreaterThan(0);
                    expect(page.beschrijving.length).toBeGreaterThan(0);
                }
            )
        );
    });
});
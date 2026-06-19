import { test, expect } from "@playwright/test";

test.describe("End-to-end test - over pagina", () => {
    test("gebruiker kan de over pagina openen", async ({ page }) => {

        // Hier openen we de over pagina in de browser
        await page.goto("/over");

        // Hier controleren we of de titel zichtbaar is
        await expect(
            page.getByRole("heading", { name: "Over" })
        ).toBeVisible();
    });

    test("gebruiker ziet de beschrijving", async ({ page }) => {

        // Hier openen we opnieuw de over pagina
        await page.goto("/over");

        // Hier controleren we of de beschrijving zichtbaar is
        await expect(page.locator("section")).toBeVisible();
    });
});
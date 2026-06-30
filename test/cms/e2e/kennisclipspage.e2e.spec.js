import { test, expect } from "@playwright/test";

test.describe("End-to-end test - kennisclips pagina", () => {
    test("gebruiker kan de kennisclips pagina openen", async ({ page }) => {

        // Hier openen we de kennisclips pagina
        await page.goto("/kennisclips");

        // Hier controleren we of de titel en heading zichtbaar zijn
        await expect(page).toHaveTitle(/Visual Thinking|Kennisclips/i);
        await expect(
            page.getByRole("heading", { name: "Kennisclips" })
        ).toBeVisible();
    });

    test("gebruiker ziet kennisclips op de pagina", async ({ page }) => {

        // Hier openen we opnieuw de kennisclips pagina
        await page.goto("/kennisclips");

        // Hier zoeken we de eerste kennisclip iframe op
        const iframe = page.locator("iframe").first();

        // Hier controleren we of de kennisclip zichtbaar is
        await expect(iframe).toBeVisible();
    });
});
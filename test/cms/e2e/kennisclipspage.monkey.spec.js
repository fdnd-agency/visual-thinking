import { test, expect } from "@playwright/test";

test.describe("Monkey test - kennisclips pagina", () => {
    test("pagina blijft werken bij snel klikken en refreshen", async ({ page }) => {

        // Hier openen we de kennisclips pagina
        await page.goto("/kennisclips");

        // Hier klikken we meerdere keren op verschillende plekken
        for (let i = 0; i < 5; i++) {
            await page.mouse.click(200, 200);
            await page.mouse.click(400, 300);
            await page.mouse.click(600, 400);
        }

        // Hier refreshen we de pagina om te kijken of alles stabiel blijft
        await page.reload();

        // Hier controleren we of de pagina nog steeds goed zichtbaar is
        await expect(
            page.getByRole("heading", { name: "Kennisclips" })
        ).toBeVisible();
    });

    test("pagina crasht niet bij vreemde url na kennisclips", async ({ page }) => {

        // Hier openen we een ongeldige kennisclip route
        await page.goto("/kennisclips/dit-bestaat-niet-123");

        // Hier controleren we dat de pagina geen error titel laat zien
        await expect(page).not.toHaveTitle(/error/i);
    });
});
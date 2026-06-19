import { test, expect } from "@playwright/test";

test.describe("Monkey test - over pagina", () => {
    test("pagina blijft werken na veel klikken en refreshen", async ({ page }) => {

        // Hier openen we de over pagina
        await page.goto("/over");

        // Hier klikken we meerdere keren willekeurig op de pagina
        for (let i = 0; i < 20; i++) {
            await page.mouse.click(300, 300);
        }

        // Hier refreshen we de pagina om te kijken of alles blijft werken
        await page.reload();

        // Hier controleren we of de pagina nog steeds goed werkt
        await expect(
            page.getByRole("heading", { name: "Over" })
        ).toBeVisible();
    });

    test("pagina crasht niet bij vreemde route", async ({ page }) => {

        // Hier openen we een verkeerde route
        await page.goto("/over/test123");

        // Hier controleren we dat er geen error titel verschijnt
        await expect(page).not.toHaveTitle(/error/i);
    });
});
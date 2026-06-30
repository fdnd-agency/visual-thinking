// @ts-check
import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {

    await page.goto(`/`);

    const h1 = page.locator('h1');


    await expect(page).toHaveTitle(/Visual Thinking/);
    await expect(h1).toBeVisible();
    await expect(h1).toContainText('Visual Thinking');
    await expect(h1).toContainText('hbo');

});

test('homepage has description', async ({ page }) => {
    await page.goto(`/`);

    const description = page.locator('p').first(); // make sure we get the description here, there is another <p> element at the bottom of the document so playwright gets 2 elements. Maybe a fix is to use an id here.

    await expect(description).toBeVisible();
    await expect(description).toContainText('leert studenten en docenten hun gedachten')
})


test("Monkey test: random navigations", async ( { page } ) => {
    const pages = ['tekenmethodes', 'minicursussen', 'artikelen'];

    const amountOfNavigations = 50;

    for (let i = 0; i < amountOfNavigations; i++) {
        const specificPage = pages[Math.floor(Math.random() * pages.length)];
        await page.goto(specificPage);

        const content = await page.content();

        expect(content.toLowerCase()).not.toContain("internal server error");

        const h1 = await page.locator('h1').innerText()
        expect(h1).toBeDefined();
        expect(h1.length).toBeGreaterThan(0);
        console.log(h1);
    }
})


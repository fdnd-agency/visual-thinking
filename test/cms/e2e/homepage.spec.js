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


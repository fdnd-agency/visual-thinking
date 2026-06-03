// @ts-check
import { test, expect } from '@playwright/test';

test('kennisclip has title', async ({ page }) => {
    const slug = 'onderzoeken-en-begrijpen';

    await page.goto(`/kennisclips/${slug}`);
    console.log(await page.content())

    const h1 = page.locator('h1');

    await expect(h1).toBeVisible();
    await expect(h1).toContainText('Onderzoeken');
    await expect(page).toHaveTitle(/Visual Thinking/);
});

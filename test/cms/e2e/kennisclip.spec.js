// @ts-check
import { test, expect } from '@playwright/test';

test('kennisclip has title', async ({ page }) => {
    const slug = "Onderzoeken-en-begrijpen"
    await page.goto('/kennisclips/' + slug);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Visual Thinking/);
});

// @ts-check
import { test, expect } from '@playwright/test';

test('minicursus monkey test: overview -> detail -> carousel navigation', async ({ page }) => {
  // Arrange: pick a random course from the overview
  await page.goto('/minicursussen');
  const courseLinks = page.locator('a.course-card');
  await expect(courseLinks.first()).toBeVisible();
  const courseCount = await courseLinks.count();
  const randomCourse = courseLinks.nth(Math.floor(Math.random() * courseCount));

  // Act: navigate to the course detail page
  await randomCourse.click();

  // Assert: detail page loaded with the correct URL, carousel, and slides
  await expect(page).toHaveURL(/\/minicursussen\/.+/);
  await expect(page.locator('.carousel')).toBeVisible();

  // Wait for the page to hydrate before interacting: the carousel buttons are
  await page.waitForLoadState('networkidle');

  const slides = page.locator('article.slide');
  await expect(slides.first()).toBeVisible();
  // The detail page renders slide headings rather than a visible header title.
  await expect(slides.first().locator('h2')).toBeVisible();
  const slideCount = await slides.count();
  expect(slideCount).toBeGreaterThan(0);

  if (slideCount > 1) {
    // Arrange: locate the carousel and its navigation buttons
    const carousel = page.locator('.carousel');
    const nextButton = page.locator('button.scroll-btn.next');
    const prevButton = page.locator('button.scroll-btn.prev');
    await expect(nextButton).toBeVisible();
    await expect(prevButton).toBeVisible();

    // Act: navigate to the next slide
    await nextButton.click();

    // Assert: carousel scrolled forward off the first slide
    await expect.poll(() => carousel.evaluate((el) => el.scrollLeft)).toBeGreaterThan(0);

    // Act: navigate back to the first slide
    await prevButton.click();

    // Assert: carousel scrolled back to the start
    await expect.poll(() => carousel.evaluate((el) => el.scrollLeft)).toBe(0);
  }
});

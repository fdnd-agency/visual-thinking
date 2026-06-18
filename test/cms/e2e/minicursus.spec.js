// @ts-check
import { test, expect } from "@playwright/test";

test("minicursus overview page displays courses", async ({ page }) => {
  await page.goto("/minicursussen");

  const h1 = page.locator("h1");
  await expect(h1).toBeVisible();

  // Check that course cards are rendered
  const courseCards = page.locator(".course-card");
  const courseCount = await courseCards.count();

  expect(courseCount).toBeGreaterThan(0);
  await expect(page).toHaveTitle("Visual Thinking");
});

test("minicursus detail shows first slide heading", async ({ page }) => {
  const slug = "basisvormen";

  await page.goto(`/minicursussen/${slug}`);

  // Detail pages render slide headings rather than a visible `h1` title.
  await expect(page).toHaveTitle("Visual Thinking");

  const firstSlideHeading = page.getByRole("heading", { name: "Introductie" });
  await expect(firstSlideHeading).toBeVisible();
});

test("minicursus slides are visible and navigable", async ({ page }) => {
  const slug = "basisvormen";

  await page.goto(`/minicursussen/${slug}`);

  // Check that slides container exists
  const slidesContainer = page.locator(".carousel");
  await expect(slidesContainer).toBeVisible();

  // Check for slide content
  const slideContent = page.locator("article.slide");
  const slideCount = await slideContent.count();
  expect(slideCount).toBeGreaterThan(0);
});

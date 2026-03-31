/**
 * Badge Component Visual Regression Tests
 *
 * Playwright visual regression tests for Badge component
 */

import { test, expect } from '@playwright/test';

const STORYBOOK_URL = 'http://localhost:6006';
const BADGE_STORY_URL = `${STORYBOOK_URL}/iframe.html?id=components-badge`;

test.describe('Badge Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to storybook and wait for it to load
    await page.goto(BADGE_STORY_URL);
    await page.waitForLoadState('networkidle');
  });

  test('Default badge', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--default`);
    await expect(page.locator('.badge')).toBeVisible();
    await expect(page).toHaveScreenshot('badge-default.png');
  });

  test('Primary variant', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--primary`);
    await expect(page.locator('.badge')).toBeVisible();
    await expect(page).toHaveScreenshot('badge-primary.png');
  });

  test('Success variant', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--success`);
    await expect(page.locator('.badge')).toBeVisible();
    await expect(page).toHaveScreenshot('badge-success.png');
  });

  test('Warning variant', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--warning`);
    await expect(page.locator('.badge')).toBeVisible();
    await expect(page).toHaveScreenshot('badge-warning.png');
  });

  test('Danger variant', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--danger`);
    await expect(page.locator('.badge')).toBeVisible();
    await expect(page).toHaveScreenshot('badge-danger.png');
  });

  test('Small size', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--small`);
    await expect(page.locator('.badge')).toBeVisible();
    await expect(page).toHaveScreenshot('badge-small.png');
  });

  test('Medium size', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--medium`);
    await expect(page.locator('.badge')).toBeVisible();
    await expect(page).toHaveScreenshot('badge-medium.png');
  });

  test('Large size', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--large`);
    await expect(page.locator('.badge')).toBeVisible();
    await expect(page).toHaveScreenshot('badge-large.png');
  });

  test('Dot badge', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--dot`);
    await expect(page.locator('.badge')).toBeVisible();
    await expect(page).toHaveScreenshot('badge-dot.png');
  });

  test('Badge with number', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--with-number`);
    await expect(page.locator('.badge')).toBeVisible();
    await expect(page).toHaveScreenshot('badge-with-number.png');
  });

  test('All variants showcase', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--all-variants`);
    await expect(page.locator('.badge').first()).toBeVisible();
    await expect(page).toHaveScreenshot('badge-all-variants.png');
  });

  test('All sizes showcase', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--all-sizes`);
    await expect(page.locator('.badge').first()).toBeVisible();
    await expect(page).toHaveScreenshot('badge-all-sizes.png');
  });

  test('Dot sizes showcase', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--dot-sizes`);
    await expect(page.locator('.badge').first()).toBeVisible();
    await expect(page).toHaveScreenshot('badge-dot-sizes.png');
  });

  test('Badge with icon usage', async ({ page }) => {
    await page.goto(`${BADGE_STORY_URL}--with-icon`);
    await expect(page.locator('.badge').first()).toBeVisible();
    await expect(page).toHaveScreenshot('badge-with-icon.png');
  });
});

test.describe('Badge Responsive', () => {
  test('All variants on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BADGE_STORY_URL}--all-variants`);
    await expect(page.locator('.badge').first()).toBeVisible();
    await expect(page).toHaveScreenshot('badge-all-variants-mobile.png');
  });

  test('All sizes on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BADGE_STORY_URL}--all-sizes`);
    await expect(page.locator('.badge').first()).toBeVisible();
    await expect(page).toHaveScreenshot('badge-all-sizes-mobile.png');
  });

  test('All variants on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(`${BADGE_STORY_URL}--all-variants`);
    await expect(page.locator('.badge').first()).toBeVisible();
    await expect(page).toHaveScreenshot('badge-all-variants-tablet.png');
  });

  test('All variants on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`${BADGE_STORY_URL}--all-variants`);
    await expect(page.locator('.badge').first()).toBeVisible();
    await expect(page).toHaveScreenshot('badge-all-variants-desktop.png');
  });
});

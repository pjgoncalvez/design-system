/**
 * Collapse Component Visual Regression Tests
 *
 * Playwright visual regression tests for Collapse component
 */

import { test, expect } from '@playwright/test';

const STORYBOOK_URL = 'http://localhost:6006';
const COLLAPSE_STORY_URL = `${STORYBOOK_URL}/iframe.html?id=components-collapse`;

test.describe('Collapse Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to storybook and wait for it to load
    await page.goto(COLLAPSE_STORY_URL);
    await page.waitForLoadState('networkidle');
  });

  test('Default collapsed state', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--default`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-default.png');
  });

  test('Default expanded state', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--default-expanded`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-default-expanded.png');
  });

  test('Small size', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--small`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-small.png');
  });

  test('Medium size', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--medium`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-medium.png');
  });

  test('Large size', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--large`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-large.png');
  });

  test('Disabled state', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--disabled`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-disabled.png');
  });

  test('No border', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--no-border`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-no-border.png');
  });

  test('Rich content', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--rich-content`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-rich-content.png');
  });

  test('Controlled collapse', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--controlled`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-controlled.png');
  });

  test('Multiple collapses', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--multiple-collapses`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-multiple.png');
  });

  test('All sizes showcase', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--all-sizes`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-all-sizes.png');
  });

  test('Nested collapses', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--nested-collapses`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-nested.png');
  });

  test('Interactive example', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--interactive`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-interactive.png');
  });
});

test.describe('Collapse Interaction States', () => {
  test('Collapse expanded state', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--default`);
    const header = page.locator('.header').first();
    await expect(header).toBeVisible();
    await header.click();
    // Wait for animation to complete
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('collapse-expanded-state.png');
  });

  test('Collapse hover state', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--default`);
    const header = page.locator('.header').first();
    await expect(header).toBeVisible();
    await header.hover();
    await expect(page).toHaveScreenshot('collapse-hover.png');
  });

  test('Collapse focus state', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--default`);
    const header = page.locator('.header').first();
    await expect(header).toBeVisible();
    await header.focus();
    await expect(page).toHaveScreenshot('collapse-focus.png');
  });

  test('Multiple collapses with one expanded', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--multiple-collapses`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    // Click first collapse to expand it
    await page.locator('.header').first().click();
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('collapse-multiple-one-expanded.png');
  });

  test('Nested collapse interaction', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--nested-collapses`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    // Expand nested collapse
    const nestedHeader = page.locator('.header').nth(1);
    await nestedHeader.click();
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('collapse-nested-expanded.png');
  });
});

test.describe('Collapse Animation', () => {
  test('Collapse expand animation', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--default`);
    const header = page.locator('.header').first();
    await expect(header).toBeVisible();

    // Before click
    await expect(page).toHaveScreenshot('collapse-animation-before.png');

    // Click to expand
    await header.click();

    // Mid animation (150ms into 300ms animation)
    await page.waitForTimeout(150);
    await expect(page).toHaveScreenshot('collapse-animation-mid.png');

    // After animation complete
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot('collapse-animation-after.png');
  });

  test('Collapse collapse animation', async ({ page }) => {
    await page.goto(`${COLLAPSE_STORY_URL}--default-expanded`);
    const header = page.locator('.header').first();
    await expect(header).toBeVisible();

    // Click to collapse
    await header.click();

    // Mid animation
    await page.waitForTimeout(150);
    await expect(page).toHaveScreenshot('collapse-collapse-animation-mid.png');

    // After animation complete
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot('collapse-collapse-animation-after.png');
  });
});

test.describe('Collapse Responsive', () => {
  test('Default on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${COLLAPSE_STORY_URL}--default`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-default-mobile.png');
  });

  test('Multiple collapses on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${COLLAPSE_STORY_URL}--multiple-collapses`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-multiple-mobile.png');
  });

  test('All sizes on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${COLLAPSE_STORY_URL}--all-sizes`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-all-sizes-mobile.png');
  });

  test('Default on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(`${COLLAPSE_STORY_URL}--default`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-default-tablet.png');
  });

  test('Multiple collapses on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(`${COLLAPSE_STORY_URL}--multiple-collapses`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-multiple-tablet.png');
  });

  test('Default on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`${COLLAPSE_STORY_URL}--default`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-default-desktop.png');
  });

  test('Multiple collapses on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`${COLLAPSE_STORY_URL}--multiple-collapses`);
    await expect(page.locator('.collapse').first()).toBeVisible();
    await expect(page).toHaveScreenshot('collapse-multiple-desktop.png');
  });
});

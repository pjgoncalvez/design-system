/**
 * Button Component Visual Regression Tests
 *
 * Playwright visual regression tests for Button component
 */

import { test, expect } from '@playwright/test';

const STORYBOOK_URL = 'http://localhost:6006';
const BUTTON_STORY_URL = `${STORYBOOK_URL}/iframe.html?id=components-button`;

test.describe('Button Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to storybook and wait for it to load
    await page.goto(BUTTON_STORY_URL);
    await page.waitForLoadState('networkidle');
  });

  test('Primary button', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--primary`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-primary.png');
  });

  test('Secondary button', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--secondary`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-secondary.png');
  });

  test('Success button', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--success`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-success.png');
  });

  test('Warning button', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--warning`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-warning.png');
  });

  test('Danger button', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--danger`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-danger.png');
  });

  test('Ghost button', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--ghost`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-ghost.png');
  });

  test('Small button', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--small`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-small.png');
  });

  test('Medium button', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--medium`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-medium.png');
  });

  test('Large button', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--large`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-large.png');
  });

  test('Disabled button', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--disabled`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-disabled.png');
  });

  test('Loading button', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--loading`);
    await expect(page.locator('button').first()).toBeVisible();
    // Wait for spinner animation to start
    await page.waitForTimeout(100);
    await expect(page).toHaveScreenshot('button-loading.png');
  });

  test('Full width button', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--full-width`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-full-width.png');
  });

  test('All variants showcase', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--all-variants`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-all-variants.png');
  });

  test('All sizes showcase', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--all-sizes`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-all-sizes.png');
  });

  test('Disabled states showcase', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--disabled-states`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-disabled-states.png');
  });

  test('Loading states showcase', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--loading-states`);
    await expect(page.locator('button').first()).toBeVisible();
    // Wait for spinner animations to start
    await page.waitForTimeout(100);
    await expect(page).toHaveScreenshot('button-loading-states.png');
  });

  test('Button with icon', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--with-icon`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-with-icon.png');
  });

  test('Button group', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--button-group`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-group.png');
  });
});

test.describe('Button Hover States', () => {
  test('Primary button hover', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--primary`);
    const button = page.locator('button').first();
    await expect(button).toBeVisible();
    await button.hover();
    await expect(page).toHaveScreenshot('button-primary-hover.png');
  });

  test('Secondary button hover', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--secondary`);
    const button = page.locator('button').first();
    await expect(button).toBeVisible();
    await button.hover();
    await expect(page).toHaveScreenshot('button-secondary-hover.png');
  });

  test('Success button hover', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--success`);
    const button = page.locator('button').first();
    await expect(button).toBeVisible();
    await button.hover();
    await expect(page).toHaveScreenshot('button-success-hover.png');
  });

  test('Danger button hover', async ({ page }) => {
    await page.goto(`${BUTTON_STORY_URL}--danger`);
    const button = page.locator('button').first();
    await expect(button).toBeVisible();
    await button.hover();
    await expect(page).toHaveScreenshot('button-danger-hover.png');
  });
});

test.describe('Button Responsive', () => {
  test('All variants on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BUTTON_STORY_URL}--all-variants`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-all-variants-mobile.png');
  });

  test('All sizes on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BUTTON_STORY_URL}--all-sizes`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-all-sizes-mobile.png');
  });

  test('Button group on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BUTTON_STORY_URL}--button-group`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-group-mobile.png');
  });

  test('All variants on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(`${BUTTON_STORY_URL}--all-variants`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-all-variants-tablet.png');
  });

  test('All variants on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`${BUTTON_STORY_URL}--all-variants`);
    await expect(page.locator('button').first()).toBeVisible();
    await expect(page).toHaveScreenshot('button-all-variants-desktop.png');
  });
});

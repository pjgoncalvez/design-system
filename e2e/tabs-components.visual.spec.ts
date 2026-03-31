/**
 * Tabs Component Visual Regression Tests
 *
 * Playwright visual regression tests for Tabs component
 */

import { test, expect } from '@playwright/test';

const STORYBOOK_URL = 'http://localhost:6006';
const TABS_STORY_URL = `${STORYBOOK_URL}/iframe.html?id=components-tabs`;

test.describe('Tabs Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to storybook and wait for it to load
    await page.goto(TABS_STORY_URL);
    await page.waitForLoadState('networkidle');
  });

  test('Default tabs', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--default`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-default.png');
  });

  test('Card variant', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--card-variant`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-card-variant.png');
  });

  test('Pill variant', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--pill-variant`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-pill-variant.png');
  });

  test('Small size', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--small`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-small.png');
  });

  test('Medium size', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--medium`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-medium.png');
  });

  test('Large size', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--large`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-large.png');
  });

  test('Full width', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--full-width`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-full-width.png');
  });

  test('With icons', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--with-icons`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-with-icons.png');
  });

  test('With disabled tabs', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--with-disabled`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-with-disabled.png');
  });

  test('Rich content', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--rich-content`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-rich-content.png');
  });

  test('Controlled tabs', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--controlled`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-controlled.png');
  });

  test('All variants showcase', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--all-variants`);
    await expect(page.locator('[role="tablist"]').first()).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-all-variants.png');
  });

  test('All sizes showcase', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--all-sizes`);
    await expect(page.locator('[role="tablist"]').first()).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-all-sizes.png');
  });

  test('Interactive example', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--interactive`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-interactive.png');
  });

  test('No animation', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--no-animation`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-no-animation.png');
  });
});

test.describe('Tabs Interaction States', () => {
  test('Tab click state change', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--default`);
    const tabs = page.locator('[role="tab"]');
    await expect(tabs.first()).toBeVisible();

    // Click second tab
    await tabs.nth(1).click();
    // Wait for animation to complete
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('tabs-second-active.png');

    // Click third tab
    await tabs.nth(2).click();
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('tabs-third-active.png');
  });

  test('Tab hover state - line variant', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--default`);
    const tab = page.locator('[role="tab"]').nth(1);
    await expect(tab).toBeVisible();
    await tab.hover();
    await expect(page).toHaveScreenshot('tabs-hover-line.png');
  });

  test('Tab hover state - card variant', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--card-variant`);
    const tab = page.locator('[role="tab"]').nth(1);
    await expect(tab).toBeVisible();
    await tab.hover();
    await expect(page).toHaveScreenshot('tabs-hover-card.png');
  });

  test('Tab hover state - pill variant', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--pill-variant`);
    const tab = page.locator('[role="tab"]').nth(1);
    await expect(tab).toBeVisible();
    await tab.hover();
    await expect(page).toHaveScreenshot('tabs-hover-pill.png');
  });

  test('Tab focus state', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--default`);
    const tab = page.locator('[role="tab"]').first();
    await expect(tab).toBeVisible();
    await tab.focus();
    await expect(page).toHaveScreenshot('tabs-focus.png');
  });

  test('Disabled tab hover', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--with-disabled`);
    const disabledTab = page.locator('[role="tab"][aria-disabled="true"]').first();
    await expect(disabledTab).toBeVisible();
    await disabledTab.hover();
    await expect(page).toHaveScreenshot('tabs-disabled-hover.png');
  });

  test('Card variant active tab', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--card-variant`);
    const tabs = page.locator('[role="tab"]');
    await expect(tabs.first()).toBeVisible();
    await tabs.nth(1).click();
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('tabs-card-active.png');
  });

  test('Pill variant active tab', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--pill-variant`);
    const tabs = page.locator('[role="tab"]');
    await expect(tabs.first()).toBeVisible();
    await tabs.nth(1).click();
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('tabs-pill-active.png');
  });
});

test.describe('Tabs Animation', () => {
  test('Tab content fade in animation', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--default`);
    const tabs = page.locator('[role="tab"]');
    await expect(tabs.first()).toBeVisible();

    // Before click
    await expect(page).toHaveScreenshot('tabs-animation-before.png');

    // Click to switch tab
    await tabs.nth(1).click();

    // Mid animation (150ms into 300ms animation)
    await page.waitForTimeout(150);
    await expect(page).toHaveScreenshot('tabs-animation-mid.png');

    // After animation complete
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot('tabs-animation-after.png');
  });

  test('No animation comparison', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--no-animation`);
    const tabs = page.locator('[role="tab"]');
    await expect(tabs.first()).toBeVisible();

    // Click to switch tab
    await tabs.nth(1).click();

    // Should switch immediately without animation
    await page.waitForTimeout(50);
    await expect(page).toHaveScreenshot('tabs-no-animation-switched.png');
  });
});

test.describe('Tabs Keyboard Navigation', () => {
  test('Arrow right navigation', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--default`);
    const firstTab = page.locator('[role="tab"]').first();
    await expect(firstTab).toBeVisible();

    // Focus first tab
    await firstTab.focus();
    await expect(page).toHaveScreenshot('tabs-keyboard-first.png');

    // Press arrow right
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('tabs-keyboard-second.png');
  });

  test('Arrow left navigation', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--default`);
    const tabs = page.locator('[role="tab"]');
    await expect(tabs.first()).toBeVisible();

    // Click second tab first
    await tabs.nth(1).click();
    await page.waitForTimeout(400);

    // Press arrow left
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('tabs-keyboard-back.png');
  });

  test('Enter key activation', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--default`);
    const secondTab = page.locator('[role="tab"]').nth(1);
    await expect(secondTab).toBeVisible();

    await secondTab.focus();
    await page.keyboard.press('Enter');
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('tabs-keyboard-enter.png');
  });

  test('Space key activation', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--default`);
    const secondTab = page.locator('[role="tab"]').nth(1);
    await expect(secondTab).toBeVisible();

    await secondTab.focus();
    await page.keyboard.press('Space');
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('tabs-keyboard-space.png');
  });
});

test.describe('Tabs Responsive', () => {
  test('Default on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${TABS_STORY_URL}--default`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-default-mobile.png');
  });

  test('Card variant on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${TABS_STORY_URL}--card-variant`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-card-mobile.png');
  });

  test('Pill variant on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${TABS_STORY_URL}--pill-variant`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-pill-mobile.png');
  });

  test('With icons on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${TABS_STORY_URL}--with-icons`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-icons-mobile.png');
  });

  test('Full width on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${TABS_STORY_URL}--full-width`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-full-width-mobile.png');
  });

  test('Default on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(`${TABS_STORY_URL}--default`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-default-tablet.png');
  });

  test('Card variant on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(`${TABS_STORY_URL}--card-variant`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-card-tablet.png');
  });

  test('All variants on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(`${TABS_STORY_URL}--all-variants`);
    await expect(page.locator('[role="tablist"]').first()).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-all-variants-tablet.png');
  });

  test('Default on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`${TABS_STORY_URL}--default`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-default-desktop.png');
  });

  test('All variants on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`${TABS_STORY_URL}--all-variants`);
    await expect(page.locator('[role="tablist"]').first()).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-all-variants-desktop.png');
  });

  test('All sizes on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`${TABS_STORY_URL}--all-sizes`);
    await expect(page.locator('[role="tablist"]').first()).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-all-sizes-desktop.png');
  });
});

test.describe('Tabs Variants Comparison', () => {
  test('Line vs Card vs Pill - first tab active', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--all-variants`);
    await expect(page.locator('[role="tablist"]').first()).toBeVisible();
    await expect(page).toHaveScreenshot('tabs-variants-comparison-first.png');
  });

  test('Line vs Card vs Pill - second tab active', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--all-variants`);
    await expect(page.locator('[role="tablist"]').first()).toBeVisible();

    // Click second tab in each variant
    const allTabs = page.locator('[role="tab"]');
    await allTabs.nth(1).click();
    await page.waitForTimeout(400);

    await expect(page).toHaveScreenshot('tabs-variants-comparison-second.png');
  });
});

test.describe('Tabs Content Display', () => {
  test('Rich content display', async ({ page }) => {
    await page.goto(`${TABS_STORY_URL}--rich-content`);
    await expect(page.locator('[role="tablist"]')).toBeVisible();

    // Check first tab content
    await expect(page).toHaveScreenshot('tabs-rich-content-tab1.png');

    // Switch to details tab
    const tabs = page.locator('[role="tab"]');
    await tabs.nth(1).click();
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('tabs-rich-content-tab2.png');

    // Switch to stats tab
    await tabs.nth(2).click();
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('tabs-rich-content-tab3.png');
  });
});

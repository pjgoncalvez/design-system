import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests for Icon Components
 *
 * These tests capture screenshots of all 252 icons in the design system
 * to detect visual regressions. The tests cover:
 * - Complete icon gallery (all 252 icons)
 * - Different icon sizes
 * - Different icon colors
 * - Icons organized by category
 *
 * To update baselines: npm run test:e2e -- --update-snapshots
 */

// Helper function to navigate to a story and wait for it to load
async function navigateToStory(page, component: string, story: string) {
  const storyId = `${component}--${story}`.toLowerCase().replace(/\s+/g, '-');
  await page.goto(`/iframe.html?id=${storyId}&viewMode=story`);
  // Wait for story to be fully rendered
  await page.waitForLoadState('networkidle');
  // Add a small delay to ensure animations/transitions complete
  await page.waitForTimeout(100);
}

test.describe('Icon Visual Regression', () => {
  test('Default icon', async ({ page }) => {
    await navigateToStory(page, 'components-icon', 'default');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-default.png');
  });

  test('All icon sizes', async ({ page }) => {
    await navigateToStory(page, 'components-icon', 'all-sizes');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-all-sizes.png');
  });

  test('All icon colors', async ({ page }) => {
    await navigateToStory(page, 'components-icon', 'all-colors');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-all-colors.png');
  });

  test('Common icons grid', async ({ page }) => {
    await navigateToStory(page, 'components-icon', 'common-icons');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-common-icons.png');
  });
});

test.describe('Icon Gallery Visual Regression', () => {
  // Configure viewport for larger icon gallery
  test.use({ viewport: { width: 1400, height: 2000 } });

  test('All 252 icons gallery', async ({ page }) => {
    await navigateToStory(page, 'components-icon-gallery', 'all-icons');

    // Wait for all icons to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    // Take screenshot of the entire page (all icons)
    await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-gallery-all-icons.png', {
      fullPage: true,
      maxDiffPixels: 100, // Allow small differences due to font rendering
    });
  });

  test('Icons by category', async ({ page }) => {
    await navigateToStory(page, 'components-icon-gallery', 'by-category');

    // Wait for all icons to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    // Take screenshot of categorized icons
    await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-gallery-by-category.png', {
      fullPage: true,
      maxDiffPixels: 100,
    });
  });
});

test.describe('Icon Categories Visual Regression', () => {
  test('Direction & Navigation icons', async ({ page }) => {
    await navigateToStory(page, 'components-icon-gallery', 'by-category');
    await page.waitForLoadState('networkidle');

    // Get the first category section
    const categorySection = page.locator('div').filter({ hasText: 'Direction & Navigation' }).first();
    await expect(categorySection).toHaveScreenshot('icon-category-direction.png');
  });

  test('Action icons', async ({ page }) => {
    await navigateToStory(page, 'components-icon-gallery', 'by-category');
    await page.waitForLoadState('networkidle');

    // Get the actions category section
    const categorySection = page.locator('div').filter({ hasText: /^Actions$/ }).first();
    await expect(categorySection).toHaveScreenshot('icon-category-actions.png');
  });
});

test.describe('Icon Responsiveness', () => {
  test.describe('Mobile viewport (375x667)', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('Common icons on mobile', async ({ page }) => {
      await navigateToStory(page, 'components-icon', 'common-icons');
      await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-common-mobile.png');
    });
  });

  test.describe('Tablet viewport (768x1024)', () => {
    test.use({ viewport: { width: 768, height: 1024 } });

    test('Common icons on tablet', async ({ page }) => {
      await navigateToStory(page, 'components-icon', 'common-icons');
      await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-common-tablet.png');
    });
  });

  test.describe('Desktop viewport (1920x1080)', () => {
    test.use({ viewport: { width: 1920, height: 1080 } });

    test('Common icons on desktop', async ({ page }) => {
      await navigateToStory(page, 'components-icon', 'common-icons');
      await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-common-desktop.png');
    });
  });
});

test.describe('Icon Size Variations', () => {
  test('Size 10px', async ({ page }) => {
    await navigateToStory(page, 'components-icon', 'interactive');

    // Use Storybook controls to set size to 10
    await page.locator('[name="size"]').selectOption('10');
    await page.waitForTimeout(200);

    await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-size-10.png');
  });

  test('Size 24px (default)', async ({ page }) => {
    await navigateToStory(page, 'components-icon', 'interactive');

    await page.locator('[name="size"]').selectOption('24');
    await page.waitForTimeout(200);

    await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-size-24.png');
  });

  test('Size 48px', async ({ page }) => {
    await navigateToStory(page, 'components-icon', 'interactive');

    await page.locator('[name="size"]').selectOption('48');
    await page.waitForTimeout(200);

    await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-size-48.png');
  });
});

test.describe('Icon Color Variations', () => {
  test('Default color (#4E5969)', async ({ page }) => {
    await navigateToStory(page, 'components-icon', 'interactive');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-color-default.png');
  });

  test('Red color (#FF5733)', async ({ page }) => {
    await navigateToStory(page, 'components-icon', 'interactive');

    // Set color using Storybook controls
    await page.locator('[name="color"]').fill('#FF5733');
    await page.waitForTimeout(200);

    await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-color-red.png');
  });

  test('Blue color (#3357FF)', async ({ page }) => {
    await navigateToStory(page, 'components-icon', 'interactive');

    await page.locator('[name="color"]').fill('#3357FF');
    await page.waitForTimeout(200);

    await expect(page.locator('#storybook-root')).toHaveScreenshot('icon-color-blue.png');
  });
});

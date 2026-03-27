import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests for Layout Components
 *
 * These tests capture screenshots of Storybook stories and compare them
 * against baseline images to detect visual regressions.
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

test.describe('Container Visual Regression', () => {
  test('Default container', async ({ page }) => {
    await navigateToStory(page, 'layout-container', 'default');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('container-default.png');
  });

  test('Fluid container', async ({ page }) => {
    await navigateToStory(page, 'layout-container', 'fluid');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('container-fluid.png');
  });

  test('Container with custom max-width', async ({ page }) => {
    await navigateToStory(page, 'layout-container', 'custom-max-width');
    await expect(page.locator('#storybook-root')).toHaveScreenshot(
      'container-custom-max-width.png',
    );
  });

  test('Container without padding', async ({ page }) => {
    await navigateToStory(page, 'layout-container', 'no-padding');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('container-no-padding.png');
  });
});

test.describe('Grid Visual Regression', () => {
  test('Basic grid', async ({ page }) => {
    await navigateToStory(page, 'layout-grid', 'basic');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('grid-basic.png');
  });

  test('Grid with gutter', async ({ page }) => {
    await navigateToStory(page, 'layout-grid', 'with-gutter');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('grid-with-gutter.png');
  });

  test('Responsive columns', async ({ page }) => {
    await navigateToStory(page, 'layout-grid', 'responsive-columns');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('grid-responsive-columns.png');
  });

  test('Offset columns', async ({ page }) => {
    await navigateToStory(page, 'layout-grid', 'offset-columns');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('grid-offset-columns.png');
  });

  test('Grid alignment', async ({ page }) => {
    await navigateToStory(page, 'layout-grid', 'alignment');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('grid-alignment.png');
  });

  test('Grid justification', async ({ page }) => {
    await navigateToStory(page, 'layout-grid', 'justification');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('grid-justification.png');
  });

  test('Complex layout', async ({ page }) => {
    await navigateToStory(page, 'layout-grid', 'complex-layout');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('grid-complex-layout.png');
  });
});

test.describe('Stack Visual Regression', () => {
  test('Vertical stack', async ({ page }) => {
    await navigateToStory(page, 'layout-stack', 'vertical-stack');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('stack-vertical.png');
  });

  test('Horizontal stack', async ({ page }) => {
    await navigateToStory(page, 'layout-stack', 'horizontal-stack');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('stack-horizontal.png');
  });

  test('Stack with dividers', async ({ page }) => {
    await navigateToStory(page, 'layout-stack', 'with-divider');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('stack-with-divider.png');
  });

  test('Stack wrapping', async ({ page }) => {
    await navigateToStory(page, 'layout-stack', 'wrapping');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('stack-wrapping.png');
  });

  test('Stack alignment', async ({ page }) => {
    await navigateToStory(page, 'layout-stack', 'alignment');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('stack-alignment.png');
  });
});

test.describe('Inline Visual Regression', () => {
  test('Basic inline', async ({ page }) => {
    await navigateToStory(page, 'layout-inline', 'basic');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('inline-basic.png');
  });

  test('Tag cloud', async ({ page }) => {
    await navigateToStory(page, 'layout-inline', 'tag-cloud');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('inline-tag-cloud.png');
  });

  test('Variable spacing', async ({ page }) => {
    await navigateToStory(page, 'layout-inline', 'variable-spacing');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('inline-variable-spacing.png');
  });

  test('Inline alignment', async ({ page }) => {
    await navigateToStory(page, 'layout-inline', 'alignment');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('inline-alignment.png');
  });

  test('Breadcrumbs', async ({ page }) => {
    await navigateToStory(page, 'layout-inline', 'breadcrumbs');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('inline-breadcrumbs.png');
  });

  test('Toolbar', async ({ page }) => {
    await navigateToStory(page, 'layout-inline', 'toolbar');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('inline-toolbar.png');
  });
});

test.describe('Flex Visual Regression', () => {
  test('Flex row', async ({ page }) => {
    await navigateToStory(page, 'layout-flex', 'row');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('flex-row.png');
  });

  test('Flex column', async ({ page }) => {
    await navigateToStory(page, 'layout-flex', 'column');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('flex-column.png');
  });

  test('Flex wrapping', async ({ page }) => {
    await navigateToStory(page, 'layout-flex', 'wrapping');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('flex-wrapping.png');
  });

  test('Flex alignment options', async ({ page }) => {
    await navigateToStory(page, 'layout-flex', 'alignment-options');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('flex-alignment-options.png');
  });

  test('Flex justification options', async ({ page }) => {
    await navigateToStory(page, 'layout-flex', 'justification-options');
    await expect(page.locator('#storybook-root')).toHaveScreenshot(
      'flex-justification-options.png',
    );
  });

  test('Inline flex', async ({ page }) => {
    await navigateToStory(page, 'layout-flex', 'inline-flex');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('flex-inline-flex.png');
  });

  test('Centered content', async ({ page }) => {
    await navigateToStory(page, 'layout-flex', 'centered-content');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('flex-centered-content.png');
  });

  test('Header layout', async ({ page }) => {
    await navigateToStory(page, 'layout-flex', 'header');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('flex-header.png');
  });

  test('Card layout', async ({ page }) => {
    await navigateToStory(page, 'layout-flex', 'card-layout');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('flex-card-layout.png');
  });
});

test.describe('Responsive Visual Regression', () => {
  test.describe('Mobile viewport (375x667)', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('Grid responsive columns on mobile', async ({ page }) => {
      await navigateToStory(page, 'layout-grid', 'responsive-columns');
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'grid-responsive-mobile.png',
      );
    });

    test('Grid responsive gutter on mobile', async ({ page }) => {
      await navigateToStory(page, 'layout-grid', 'responsive-gutter');
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'grid-gutter-mobile.png',
      );
    });

    test('Stack responsive spacing on mobile', async ({ page }) => {
      await navigateToStory(page, 'layout-stack', 'responsive-spacing');
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'stack-spacing-mobile.png',
      );
    });

    test('Inline responsive spacing on mobile', async ({ page }) => {
      await navigateToStory(page, 'layout-inline', 'responsive-spacing');
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'inline-spacing-mobile.png',
      );
    });

    test('Flex responsive gap on mobile', async ({ page }) => {
      await navigateToStory(page, 'layout-flex', 'responsive-gap');
      await expect(page.locator('#storybook-root')).toHaveScreenshot('flex-gap-mobile.png');
    });
  });

  test.describe('Tablet viewport (768x1024)', () => {
    test.use({ viewport: { width: 768, height: 1024 } });

    test('Grid responsive columns on tablet', async ({ page }) => {
      await navigateToStory(page, 'layout-grid', 'responsive-columns');
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'grid-responsive-tablet.png',
      );
    });

    test('Grid responsive gutter on tablet', async ({ page }) => {
      await navigateToStory(page, 'layout-grid', 'responsive-gutter');
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'grid-gutter-tablet.png',
      );
    });

    test('Stack responsive spacing on tablet', async ({ page }) => {
      await navigateToStory(page, 'layout-stack', 'responsive-spacing');
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'stack-spacing-tablet.png',
      );
    });
  });

  test.describe('Desktop viewport (1920x1080)', () => {
    test.use({ viewport: { width: 1920, height: 1080 } });

    test('Grid responsive columns on desktop', async ({ page }) => {
      await navigateToStory(page, 'layout-grid', 'responsive-columns');
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'grid-responsive-desktop.png',
      );
    });

    test('Grid responsive gutter on desktop', async ({ page }) => {
      await navigateToStory(page, 'layout-grid', 'responsive-gutter');
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'grid-gutter-desktop.png',
      );
    });

    test('Stack responsive spacing on desktop', async ({ page }) => {
      await navigateToStory(page, 'layout-stack', 'responsive-spacing');
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'stack-spacing-desktop.png',
      );
    });
  });
});

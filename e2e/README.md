# Visual Regression Testing

This directory contains visual regression tests for the design system layout components using Playwright.

## Overview

Visual regression tests capture screenshots of component stories and compare them against baseline images to detect unintended visual changes. This helps ensure that:

- Components render correctly across different browsers
- Layout behavior is consistent
- Responsive behavior works as expected
- CSS changes don't introduce unintended visual regressions

## Test Coverage

The visual regression test suite covers:

### Components
- **Container**: Default, fluid, custom max-width, no padding
- **Grid**: Basic layout, gutters, responsive columns, offsets, alignment, justification, complex layouts
- **Stack**: Vertical/horizontal, dividers, wrapping, alignment
- **Inline**: Basic, tag clouds, spacing, alignment, breadcrumbs, toolbars
- **Flex**: Row/column, wrapping, alignment, justification, layouts (header, card, centered)

### Responsive Testing
- **Mobile** (375x667): Grid, Stack, Inline, Flex responsive behavior
- **Tablet** (768x1024): Grid, Stack responsive behavior
- **Desktop** (1920x1080): Grid, Stack responsive behavior

## Running Tests

### Run all visual tests
```bash
npm run test:e2e
```

### Run tests in UI mode (interactive)
```bash
npm run test:e2e:ui
```

### Run specific test file
```bash
npm run test:e2e -- layout-components.visual.spec.ts
```

### Run tests for specific browser
```bash
npm run test:e2e -- --project=chromium
npm run test:e2e -- --project=firefox
npm run test:e2e -- --project=webkit
```

## Managing Snapshots

### Generate initial baselines
When running tests for the first time, they will automatically generate baseline screenshots:
```bash
npm run test:e2e
```

### Update baselines after intentional changes
When you make intentional visual changes to components, update the baselines:
```bash
npm run test:e2e -- --update-snapshots
```

### Update baselines for specific test
```bash
npm run test:e2e -- --update-snapshots -g "Grid with gutter"
```

### Update baselines for specific browser
```bash
npm run test:e2e -- --update-snapshots --project=chromium
```

## Snapshot Storage

Snapshots are stored in `e2e/__screenshots__/` directory, organized by:
- Browser (chromium, firefox, webkit)
- Platform (darwin, linux, win32)
- Test name

Example structure:
```
e2e/
├── __screenshots__/
│   └── layout-components.visual.spec.ts/
│       ├── chromium-darwin/
│       │   ├── container-default.png
│       │   ├── grid-basic.png
│       │   └── ...
│       ├── firefox-darwin/
│       │   └── ...
│       └── webkit-darwin/
│           └── ...
```

## Reviewing Visual Differences

When tests fail due to visual differences:

1. Review the HTML report:
   ```bash
   npx playwright show-report
   ```

2. The report shows:
   - Expected (baseline) screenshot
   - Actual (current) screenshot
   - Diff highlighting the differences

3. If the changes are intentional, update the baselines:
   ```bash
   npm run test:e2e -- --update-snapshots
   ```

4. If the changes are unintentional, fix the CSS/component code and re-run the tests

## CI/CD Integration

The visual regression tests are configured for CI environments:

- **Retries**: Automatically retry failed tests 2 times in CI
- **Workers**: Run tests sequentially in CI to avoid flakiness
- **Reporters**: Generate HTML reports for easy review

In CI, baseline snapshots should be committed to the repository. Any visual changes will fail the pipeline until the baselines are explicitly updated.

## Best Practices

### When to Update Baselines
- After intentional design changes
- When updating component styles
- When adding new props that affect visual appearance
- When updating design tokens (spacing, colors, etc.)

### When NOT to Update Baselines
- When tests are flaky (fix the flakiness first)
- When you're unsure if the change is correct
- When the diff shows unexpected changes (investigate first)

### Writing New Visual Tests

1. Navigate to the story URL
2. Wait for the story to load completely
3. Take a screenshot of the story container
4. Use descriptive test names

Example:
```typescript
test('Component with specific prop', async ({ page }) => {
  await navigateToStory(page, 'layout-component', 'story-name');
  await expect(page.locator('#storybook-root')).toHaveScreenshot('component-story.png');
});
```

### Handling Animations and Transitions

For components with animations:
- Wait for animations to complete before taking screenshots
- Consider adding a small delay: `await page.waitForTimeout(300)`
- Or disable animations in the story for visual testing

### Testing Responsive Behavior

Use viewport configuration:
```typescript
test.describe('Mobile tests', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('Component on mobile', async ({ page }) => {
    // Test will run with mobile viewport
  });
});
```

## Troubleshooting

### Tests are flaky
- Ensure Storybook has fully loaded before taking screenshots
- Add appropriate waits for dynamic content
- Check for animations or transitions that haven't completed

### Snapshots differ across environments
- Font rendering may differ between operating systems
- Run tests in Docker for consistent environment
- Consider pixel threshold for minor differences

### Tests are slow
- Run specific test files instead of all tests
- Use `--project` to test specific browsers
- Run tests in parallel when possible

### Baseline missing error
```
Error: A snapshot doesn't exist at ...
```
Run tests to generate initial baselines:
```bash
npm run test:e2e
```

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Visual Comparisons](https://playwright.dev/docs/test-snapshots)
- [Storybook Testing](https://storybook.js.org/docs/react/writing-tests/introduction)

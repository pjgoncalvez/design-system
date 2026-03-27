# Pull Request Example

This document shows what a typical pull request will look like with the automated CI/CD pipeline.

## PR Status Checks

At the top of your PR, you'll see status checks like this:

```
✓ Lint — Passed in 32s
✓ Type Check — Passed in 41s  
✓ Test — Passed in 2m 15s
⚠ Visual Regression Tests — Completed with warnings in 1m 34s
✓ Build — Passed in 1m 8s
```

## Automated Comments

### 1. Visual Regression Results (when changes detected)

---

## 📸 Visual Regression Test Results

⚠️ **3 visual difference(s) detected!**

### Action Required
- Review the visual changes in the artifacts below
- If the changes are intentional, update the snapshots
- If the changes are unexpected, investigate and fix

### How to Update Snapshots
```bash
npm test -- e2e/layout-components.visual.spec.ts --update-snapshots
```

### 📦 Artifacts

- [Download Visual Regression Results](https://github.com/pjgoncalvez/design-system/actions/runs/123456789)
- [View Full Test Report](https://github.com/pjgoncalvez/design-system/actions/runs/123456789)

<details>
<summary>ℹ️ About Visual Regression Testing</summary>

Visual regression tests capture screenshots of components and compare them against baseline images. This helps catch unintended visual changes before they reach production.
</details>

---

### 2. Visual Regression Results (when no changes)

---

## 📸 Visual Regression Test Results

✅ **All visual tests passed!** No visual changes detected.

### 📦 Artifacts

- [Download Visual Regression Results](https://github.com/pjgoncalvez/design-system/actions/runs/123456789)
- [View Full Test Report](https://github.com/pjgoncalvez/design-system/actions/runs/123456789)

<details>
<summary>ℹ️ About Visual Regression Testing</summary>

Visual regression tests capture screenshots of components and compare them against baseline images. This helps catch unintended visual changes before they reach production.
</details>

---

### 3. Build Status Comment

---

## ✅ Build Successful

The library and Storybook have been built successfully!

### 📦 Artifacts
- [Download Build Output](https://github.com/pjgoncalvez/design-system/actions/runs/123456789)

---

## Downloading Artifacts

### Step 1: Go to Actions Tab
Click on the "Actions" tab at the top of the repository

### Step 2: Select Workflow Run
Click on the workflow run for your PR (usually at the top of the list)

### Step 3: Scroll to Artifacts
At the bottom of the page, you'll see an "Artifacts" section with downloadable files:

- **visual-regression-results** (retains for 30 days)
  - Contains screenshot diffs showing exactly what changed
  - Includes before/after images
  - HTML report for easy viewing
  
- **test-results** (retains for 30 days)
  - Test coverage reports
  - Playwright HTML report
  
- **build-output** (retains for 7 days)
  - Built library files (dist/)
  - Built Storybook (storybook-static/)

### Step 4: Extract and Review
1. Download the ZIP file
2. Extract it
3. Open `index.html` files in your browser to view reports
4. Review any `-diff.png` files to see visual changes

## Example Visual Diff

When you open the visual regression results, you'll see:

```
Before (Baseline)     |  After (Current)     |  Diff (Highlighted)
[Screenshot]          |  [Screenshot]        |  [Red areas show changes]
```

## Updating Snapshots

If the visual changes are intentional:

```bash
# Update all snapshots
npm test -- e2e/layout-components.visual.spec.ts --update-snapshots

# Stage the new snapshots
git add e2e/

# Commit with a descriptive message
git commit -m "chore: update visual regression snapshots for button padding change"

# Push to your branch
git push
```

The CI will run again and the visual regression tests should pass.

## Best Practices

1. **Always review visual diffs** before updating snapshots
2. **Download artifacts** to see exactly what changed
3. **Check multiple viewports** if applicable
4. **Verify intentional changes** match your expectations
5. **Document why snapshots changed** in your commit message

## Troubleshooting

### "Visual tests failed but I don't see diffs"
- The test might have crashed before taking screenshots
- Check the test logs in the Actions tab
- Run the tests locally: `npm test -- e2e/layout-components.visual.spec.ts`

### "I updated snapshots but tests still fail"
- Make sure you committed and pushed the new snapshot files
- Check that the snapshot files are in the correct directory
- Verify the snapshot filenames match the test expectations

### "Too many visual diffs to review"
- Consider updating snapshots in smaller batches
- Review one component at a time
- Use the HTML report to navigate between diffs efficiently

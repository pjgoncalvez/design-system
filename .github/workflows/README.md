# GitHub Actions Workflows

This directory contains automated workflows for continuous integration and deployment.

## Workflows

### CI Workflow (`ci.yml`)

Runs on every push to `main` and all pull requests.

#### Jobs

1. **Lint** (`lint`)
   - Runs ESLint to check code quality
   - Fails if linting errors are found
   - Duration: ~30 seconds

2. **Type Check** (`typecheck`)
   - Runs TypeScript compiler in no-emit mode
   - Verifies type safety across the codebase
   - Duration: ~45 seconds

3. **Test** (`test`)
   - Runs unit tests with Vitest
   - Runs Storybook interaction tests with Playwright
   - Uploads test results and coverage as artifacts
   - Duration: ~2 minutes

4. **Visual Regression** (`visual-regression`)
   - Runs Playwright visual regression tests
   - Compares screenshots against baseline images
   - Detects and reports visual differences
   - Comments on PRs with results
   - Uploads visual diffs and HTML report as artifacts
   - Duration: ~1-2 minutes
   - **Special Features:**
     - Continues on error (doesn't fail the build)
     - Counts visual diffs automatically
     - Updates existing PR comments instead of creating duplicates

5. **Build** (`build`)
   - Builds the library for production
   - Builds Storybook documentation
   - Runs only if lint, typecheck, and test pass
   - Uploads build artifacts
   - Comments on PRs with build status
   - Duration: ~1 minute

## Artifacts

Artifacts are automatically uploaded and retained for different durations:

| Artifact | Retention | Contents |
|----------|-----------|----------|
| `test-results` | 30 days | Coverage reports, Playwright HTML reports |
| `visual-regression-results` | 30 days | Screenshot diffs, baseline images, HTML reports |
| `build-output` | 7 days | Built library (dist/), Storybook (storybook-static/) |

### Downloading Artifacts

1. Go to the Actions tab in GitHub
2. Click on a workflow run
3. Scroll to the "Artifacts" section at the bottom
4. Click to download

## PR Comments

The workflow automatically comments on pull requests with:

### Visual Regression Results
```
📸 Visual Regression Test Results

✅ All visual tests passed! No visual changes detected.
```

Or if changes are detected:
```
📸 Visual Regression Test Results

⚠️ 3 visual difference(s) detected!

Action Required:
- Review the visual changes in the artifacts below
- If changes are intentional, update the snapshots
- If changes are unexpected, investigate and fix

How to Update Snapshots:
npm test -- e2e/layout-components.visual.spec.ts --update-snapshots
```

### Build Status
```
✅ Build Successful

The library and Storybook have been built successfully!

📦 Artifacts
- Download Build Output
```

## Permissions

The workflow requires these permissions:
- `contents: read` - To check out the repository
- `pull-requests: write` - To comment on PRs
- `checks: write` - To create status checks

## Environment

- **Node.js**: 20.x
- **Runner**: ubuntu-latest
- **Package Manager**: npm with caching enabled
- **Browsers**: Chromium (installed via Playwright)

## Triggering Workflows

### Automatic Triggers
- Push to `main` branch
- Pull requests targeting `main` branch

### Manual Triggers
You can manually trigger workflows from the Actions tab in GitHub.

## Troubleshooting

### Visual Tests Failing
1. Download the `visual-regression-results` artifact
2. Open the Playwright HTML report
3. Review the visual diffs
4. If changes are intentional, update snapshots locally:
   ```bash
   npm test -- e2e/layout-components.visual.spec.ts --update-snapshots
   git add e2e/
   git commit -m "chore: update visual regression snapshots"
   ```

### Build Failing
1. Check the build logs in the GitHub Actions UI
2. Run `npm run build` locally to reproduce
3. Fix any build errors
4. Push the fix

### Tests Failing
1. Download the `test-results` artifact
2. Review the test report
3. Run `npm test` locally to reproduce
4. Fix failing tests
5. Push the fix

## Best Practices

1. **Always review visual diffs** before updating snapshots
2. **Run tests locally** before pushing to catch issues early
3. **Check PR comments** for automated feedback
4. **Download artifacts** to investigate failures
5. **Update snapshots intentionally** - don't blindly accept changes

## Extending Workflows

To add new checks or jobs:

1. Edit `.github/workflows/ci.yml`
2. Add a new job following the existing pattern
3. Configure dependencies with `needs: [other-job]` if required
4. Test locally with [act](https://github.com/nektos/act) or push to a branch
5. Document the new job in this README

## Cost Optimization

Current optimizations:
- ✅ npm caching enabled (saves ~30s per job)
- ✅ Jobs run in parallel when possible
- ✅ Visual regression continues on error (doesn't block other jobs)
- ✅ Build only runs if other checks pass
- ✅ Artifacts have appropriate retention periods

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Playwright Documentation](https://playwright.dev/)
- [Vitest Documentation](https://vitest.dev/)

# Quick Start: Visual Regression Testing

## TL;DR - Yes, Playwright Generates Diff Images! 📸

When visual tests fail, you get **3 images automatically**:

```
1. container-default-chromium-darwin.png  ← Baseline (expected)
2. container-default-actual.png           ← Current screenshot  
3. container-default-diff.png             ← DIFF with magenta highlights ✨
```

## See It In Action

### Run Tests Locally
```bash
npm test -- e2e/layout-components.visual.spec.ts
```

### View The Beautiful HTML Report
```bash
npx playwright show-report
```

You'll see:
- ✅ Side-by-side comparison with slider
- 🔍 Zoom controls
- 📊 Pixel difference metrics
- 🟣 Magenta highlights on differences
- 💾 Download buttons

## In Pull Requests

### Automatic PR Comment:
```
📸 Visual Regression Test Results

⚠️ 3 visual difference(s) detected!

📦 Download Artifacts:
- visual-regression-results (includes diff images)
```

### Download Artifacts:
1. Go to Actions tab
2. Click workflow run
3. Download `visual-regression-results`
4. Open `playwright-report/index.html`

## What Diffs Look Like

```
┌─────────────────────────────────┐
│  Expected vs Actual vs Diff     │
├─────────────────────────────────┤
│                                  │
│  Original    Changed    Diff    │
│  ┌──────┐   ┌────────┐ ┌──────┐ │
│  │ Save │   │  Save  │ │ 🟣🟣 │ │ ← Magenta = Different
│  └──────┘   └────────┘ └──────┘ │
│  8px pad    12px pad   Diff     │
└─────────────────────────────────┘
```

## Update Snapshots

If changes are intentional:
```bash
npm test -- e2e/layout-components.visual.spec.ts --update-snapshots
git add e2e/
git commit -m "chore: update snapshots"
```

## Key Files

| File | Description |
|------|-------------|
| `.github/workflows/ci.yml` | CI pipeline with visual tests |
| `.github/VISUAL_REGRESSION_GUIDE.md` | Complete guide |
| `.github/DIFF_IMAGES_EXPLAINED.md` | Visual examples |
| `.github/PR_EXAMPLE.md` | What PRs look like |

## Next Steps

1. ✅ **Push to GitHub** - CI will run automatically
2. ✅ **Make a test PR** - See the automation in action
3. ✅ **Review diff images** - Open the HTML report
4. ✅ **Update snapshots** - When changes are intentional

## Questions?

- **Do I need to configure anything?** → No! It's ready to go
- **Where are diffs stored?** → `e2e/*-snapshots/*-diff.png`
- **Are diffs committed to git?** → No, only baselines
- **How do I see them in CI?** → Download artifacts from Actions tab
- **Can I view them locally?** → Yes, run `npx playwright show-report`

---

🎉 **You're all set!** Visual regression testing is configured and ready to catch UI bugs automatically.

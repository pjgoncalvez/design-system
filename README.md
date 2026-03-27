# Design System POC

[![CI](https://github.com/pjgoncalvez/design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/pjgoncalvez/design-system/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A React component library and design system built with TypeScript and CSS Modules.

## Features

- React components built with TypeScript
- CSS Modules for styling
- Storybook for component documentation
- Comprehensive testing with Vitest and Playwright
- Semantic versioning with automated releases
- GitHub Actions CI/CD pipeline

## Installation

```bash
npm install design-system-poc
```

## Usage

### Basic Setup

```tsx
import { YourComponent } from 'design-system-poc';
import 'design-system-poc/styles';

function App() {
  return <YourComponent />;
}
```

### Font Setup (Required)

This design system uses **Nunito Sans** as the primary font. To ensure proper font rendering, you must import the global styles in your application entry point:

**Option 1: Import Global Styles (Recommended)**

```tsx
// In your app entry point (e.g., main.tsx, App.tsx, or _app.tsx)
import 'design-system-poc/styles/global.css';
```

This will automatically load the Nunito Sans font from Google Fonts and apply the base font configuration.

**Option 2: Manual Font Import**

If you prefer to manage fonts yourself, add this to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet">
```

Then set the font family in your CSS:

```css
body {
  font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

## Development

### Prerequisites

- Node.js >= 18.0.0
- npm

### Setup

```bash
# Install dependencies
npm install

# Start Storybook
npm run dev
```

### Available Scripts

- `npm run dev` - Start Storybook development server
- `npm run build` - Build the library for production
- `npm run build:storybook` - Build Storybook for deployment
- `npm test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:e2e` - Run end-to-end tests with Playwright
- `npm run lint` - Lint the codebase
- `npm run lint:fix` - Lint and fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
src/
├── components/     # React components
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
e2e/                # End-to-end tests
```

## Testing

### Unit Tests

Unit tests are written using Vitest and React Testing Library:

```bash
npm test
```

### Visual Regression Tests

Visual regression tests use Playwright to capture and compare screenshots of components:

```bash
# Run visual tests
npm test -- e2e/layout-components.visual.spec.ts

# Update snapshots after intentional visual changes
npm test -- e2e/layout-components.visual.spec.ts --update-snapshots
```

#### CI Integration

Visual regression tests run automatically on every pull request. When visual changes are detected:

- 📸 **Screenshots are captured** for all component variants
- 🔍 **Diffs are generated** showing pixel-by-pixel differences
- 💬 **PR comments** provide a summary with links to artifacts
- 📦 **Artifacts are uploaded** for easy review (available for 30 days)

**Example PR Comment:**

```
📸 Visual Regression Test Results

⚠️ 3 visual difference(s) detected!

Action Required:
- Review the visual changes in the artifacts below
- If changes are intentional, update the snapshots
- If changes are unexpected, investigate and fix

📦 Artifacts:
- Download Visual Regression Results
- View Full Test Report
```

### End-to-End Tests

E2E tests use Playwright for integration testing:

```bash
npm run test:e2e
```

## Contributing

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Test additions or modifications
- `chore:` - Maintenance tasks

### Branching Strategy

- `main` - Production-ready code
- Feature branches should be created from `main` and merged via pull requests

## CI/CD Pipeline

### Continuous Integration

Every pull request and push to `main` triggers automated checks:

| Job | Description | Artifacts |
|-----|-------------|-----------|
| **Lint** | ESLint checks for code quality | - |
| **Type Check** | TypeScript compilation and type safety | - |
| **Test** | Unit tests with Vitest + Storybook tests | Test results, coverage |
| **Visual Regression** | Playwright screenshot comparison | Visual diffs, HTML report |
| **Build** | Library and Storybook build verification | Build output |

### Pull Request Workflow

1. **Automated Checks** - All CI jobs run on every PR
2. **Status Checks** - GitHub shows pass/fail status for each job
3. **PR Comments** - Bot comments with visual regression results and build status
4. **Artifact Downloads** - Access test reports and visual diffs from the Actions tab
5. **Review & Merge** - Once all checks pass, PR is ready for review

### Viewing Test Results

**Option 1: GitHub Actions UI**
1. Go to the "Actions" tab in GitHub
2. Click on the workflow run for your PR
3. Download artifacts (visual-regression-results, test-results, build-output)

**Option 2: PR Comments**
- Visual regression results are automatically commented on PRs
- Includes links to artifacts and instructions for updating snapshots

**Option 3: Local Testing**
```bash
# Run all checks locally before pushing
npm run lint
npm run typecheck
npm test
```

## Release Process

Releases are automated using semantic-release. When commits are pushed to `main`, the release workflow:

1. Analyzes commits to determine version bump
2. Generates changelog
3. Creates a GitHub release
4. Publishes to npm

## License

MIT

# Design System POC

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

```tsx
import { YourComponent } from 'design-system-poc';
import 'design-system-poc/styles';

function App() {
  return <YourComponent />;
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

### End-to-End Tests

E2E tests use Playwright for visual regression and integration testing:

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

## Release Process

Releases are automated using semantic-release. When commits are pushed to `main`, the release workflow:

1. Analyzes commits to determine version bump
2. Generates changelog
3. Creates a GitHub release
4. Publishes to npm

## License

MIT

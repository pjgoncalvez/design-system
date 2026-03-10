# Contributing to Design System POC

Thank you for your interest in contributing to this project!

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/design-system-poc.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Creating a New Component

1. Create the component directory under `src/components/`
2. Implement the component with TypeScript
3. Add CSS Module styles if needed (`ComponentName.module.css`)
4. Create unit tests (`ComponentName.test.tsx`)
5. Create a Storybook story (`ComponentName.stories.tsx`)
6. Export the component from `src/index.ts`

### Component Structure

```
src/components/ComponentName/
├── ComponentName.tsx           # Component implementation
├── ComponentName.module.css    # Component styles
├── ComponentName.test.tsx      # Unit tests
├── ComponentName.stories.tsx   # Storybook stories
└── index.ts                    # Public exports
```

### Writing Tests

- Write unit tests for all components using Vitest and React Testing Library
- Test user interactions and accessibility
- Aim for high test coverage

### Code Style

- Follow the existing code style
- Run `npm run lint` to check for issues
- Run `npm run format` to format your code
- TypeScript strict mode is enabled

### Commit Messages

We use Conventional Commits for clear and structured commit messages:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Maintenance tasks

**Examples:**
```
feat(button): add loading state
fix(input): correct focus styles
docs: update installation instructions
```

### Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass: `npm test`
4. Ensure code is properly formatted: `npm run format:check`
5. Ensure no linting errors: `npm run lint`
6. Ensure TypeScript compiles: `npm run typecheck`
7. Create a pull request with a clear description

## Questions?

Feel free to open an issue for any questions or concerns.

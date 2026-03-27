import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Stack } from './Stack';

describe('Stack', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>
    );
    expect(getByText('Child 1')).toBeTruthy();
    expect(getByText('Child 2')).toBeTruthy();
  });

  it('should render as div by default', () => {
    const { container } = render(<Stack>Content</Stack>);
    const element = container.firstChild;
    expect(element?.nodeName).toBe('DIV');
  });

  it('should render as custom element when as prop is provided', () => {
    const { container } = render(<Stack as="section">Content</Stack>);
    const element = container.firstChild;
    expect(element?.nodeName).toBe('SECTION');
  });

  it('should apply base stack class', () => {
    const { container } = render(<Stack>Content</Stack>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('stack');
  });

  it('should apply vertical direction class by default', () => {
    const { container } = render(<Stack>Content</Stack>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('stack--vertical');
  });

  it('should apply horizontal direction class', () => {
    const { container } = render(<Stack direction="horizontal">Content</Stack>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('stack--horizontal');
  });

  it('should apply wrap class when wrap is true', () => {
    const { container } = render(<Stack wrap>Content</Stack>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('stack--wrap');
  });

  it('should apply alignment class when align is provided', () => {
    const { container } = render(<Stack align="center">Content</Stack>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('stack--align-center');
  });

  it('should apply justify class when justify is provided', () => {
    const { container } = render(<Stack justify="space-between">Content</Stack>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('stack--justify-space-between');
  });

  it('should apply custom className', () => {
    const { container } = render(<Stack className="custom-stack">Content</Stack>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('custom-stack');
  });

  it('should set spacing CSS variable with default spacing (md)', () => {
    const { container } = render(<Stack>Content</Stack>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--stack-spacing')).toBe('16px');
  });

  it('should set spacing CSS variable with custom spacing key', () => {
    const { container } = render(<Stack spacing="lg">Content</Stack>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--stack-spacing')).toBe('24px');
  });

  it('should set spacing CSS variable with numeric value', () => {
    const { container } = render(<Stack spacing={20}>Content</Stack>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--stack-spacing')).toBe('20px');
  });

  it('should merge custom styles', () => {
    const { container } = render(
      <Stack style={{ backgroundColor: 'blue', padding: '10px' }}>Content</Stack>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.backgroundColor).toBe('blue');
    expect(element.style.padding).toBe('10px');
  });

  it('should render without dividers by default', () => {
    const { container } = render(
      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
    );
    const dividers = container.querySelectorAll('.stackDivider');
    expect(dividers.length).toBe(0);
  });

  it('should insert dividers between items', () => {
    const { container } = render(
      <Stack divider={<hr />}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
    );
    const dividers = container.querySelectorAll('.stackDivider');
    expect(dividers.length).toBe(2); // 2 dividers between 3 items
  });

  it('should not add divider after last item', () => {
    const { container } = render(
      <Stack divider={<hr />}>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    const stackElement = container.firstChild as HTMLElement;
    const lastChild = stackElement.lastChild as HTMLElement;

    // Last child should be "Item 2", not a divider
    expect(lastChild.className).not.toContain('stackDivider');
  });

  it('should handle single child with divider (no dividers shown)', () => {
    const { container } = render(
      <Stack divider={<hr />}>
        <div>Single Item</div>
      </Stack>
    );
    const dividers = container.querySelectorAll('.stackDivider');
    expect(dividers.length).toBe(0);
  });

  it('should render custom divider content', () => {
    const { container } = render(
      <Stack divider={<span className="custom-divider">|</span>}>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    const customDivider = container.querySelector('.custom-divider');
    expect(customDivider).toBeTruthy();
    expect(customDivider?.textContent).toBe('|');
  });

  it('should combine all props correctly', () => {
    const { container } = render(
      <Stack
        as="nav"
        direction="horizontal"
        spacing="lg"
        align="center"
        justify="space-between"
        wrap
        className="test-stack"
        style={{ margin: '20px' }}
      >
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    const element = container.firstChild as HTMLElement;

    // Element type
    expect(element.nodeName).toBe('NAV');

    // Classes
    expect(element.className).toContain('stack');
    expect(element.className).toContain('stack--horizontal');
    expect(element.className).toContain('stack--wrap');
    expect(element.className).toContain('stack--align-center');
    expect(element.className).toContain('stack--justify-space-between');
    expect(element.className).toContain('test-stack');

    // Spacing CSS var
    expect(element.style.getPropertyValue('--stack-spacing')).toBe('24px');

    // Custom styles
    expect(element.style.margin).toBe('20px');
  });
});

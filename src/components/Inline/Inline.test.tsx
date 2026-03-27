import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Inline } from './Inline';

describe('Inline', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <Inline>
        <span>Item 1</span>
        <span>Item 2</span>
      </Inline>
    );
    expect(getByText('Item 1')).toBeTruthy();
    expect(getByText('Item 2')).toBeTruthy();
  });

  it('should render as div by default', () => {
    const { container } = render(<Inline>Content</Inline>);
    const element = container.firstChild;
    expect(element?.nodeName).toBe('DIV');
  });

  it('should render as custom element when as prop is provided', () => {
    const { container } = render(<Inline as="nav">Content</Inline>);
    const element = container.firstChild;
    expect(element?.nodeName).toBe('NAV');
  });

  it('should apply base inline class', () => {
    const { container } = render(<Inline>Content</Inline>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('inline');
  });

  it('should apply custom className', () => {
    const { container } = render(<Inline className="custom">Content</Inline>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('custom');
  });

  it('should set spacing CSS variable with default spacing (sm)', () => {
    const { container } = render(<Inline>Content</Inline>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--inline-spacing')).toBe('8px');
  });

  it('should set spacing CSS variable with custom spacing key', () => {
    const { container } = render(<Inline spacing="md">Content</Inline>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--inline-spacing')).toBe('16px');
  });

  it('should set spacing CSS variable with numeric value', () => {
    const { container } = render(<Inline spacing={12}>Content</Inline>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--inline-spacing')).toBe('12px');
  });

  it('should apply alignment class when align is provided', () => {
    const { container } = render(<Inline align="center">Content</Inline>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('inline--align-center');
  });

  it('should apply justify class when justify is provided', () => {
    const { container } = render(<Inline justify="end">Content</Inline>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('inline--justify-end');
  });

  it('should apply both alignment and justify classes', () => {
    const { container } = render(
      <Inline align="center" justify="space-between">
        Content
      </Inline>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('inline--align-center');
    expect(element.className).toContain('inline--justify-space-between');
  });

  it('should merge custom styles', () => {
    const { container } = render(
      <Inline style={{ backgroundColor: 'yellow', padding: '15px' }}>Content</Inline>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.backgroundColor).toBe('yellow');
    expect(element.style.padding).toBe('15px');
  });

  it('should combine all props correctly', () => {
    const { container } = render(
      <Inline
        as="ul"
        spacing="lg"
        align="center"
        justify="center"
        className="tag-list"
        style={{ margin: '10px' }}
      >
        <li>Tag 1</li>
        <li>Tag 2</li>
      </Inline>
    );
    const element = container.firstChild as HTMLElement;

    // Element type
    expect(element.nodeName).toBe('UL');

    // Classes
    expect(element.className).toContain('inline');
    expect(element.className).toContain('inline--align-center');
    expect(element.className).toContain('inline--justify-center');
    expect(element.className).toContain('tag-list');

    // Spacing CSS var
    expect(element.style.getPropertyValue('--inline-spacing')).toBe('24px');

    // Custom styles
    expect(element.style.margin).toBe('10px');
  });
});

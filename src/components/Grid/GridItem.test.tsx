import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { GridItem } from './GridItem';

describe('GridItem', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<GridItem>Test Content</GridItem>);
    expect(getByText('Test Content')).toBeTruthy();
  });

  it('should render as div by default', () => {
    const { container } = render(<GridItem>Content</GridItem>);
    const element = container.firstChild;
    expect(element?.nodeName).toBe('DIV');
  });

  it('should render as custom element when as prop is provided', () => {
    const { container } = render(<GridItem as="article">Content</GridItem>);
    const element = container.firstChild;
    expect(element?.nodeName).toBe('ARTICLE');
  });

  it('should apply base gridItem class', () => {
    const { container } = render(<GridItem>Content</GridItem>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('gridItem');
  });

  it('should apply custom className', () => {
    const { container } = render(<GridItem className="custom">Content</GridItem>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('custom');
  });

  it('should default to span 24 when no span provided', () => {
    const { container } = render(<GridItem>Content</GridItem>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.gridColumn).toBe('span 24');
  });

  it('should apply span correctly', () => {
    const { container } = render(<GridItem span={12}>Content</GridItem>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.gridColumn).toBe('span 12');
  });

  it('should apply offset correctly', () => {
    const { container } = render(
      <GridItem span={8} offset={4}>
        Content
      </GridItem>
    );
    const element = container.firstChild as HTMLElement;
    // offset 4 means start at column 5 (4+1), span 8
    expect(element.style.gridColumn).toBe('5 / span 8');
  });

  it('should handle offset without explicit span (uses default 24)', () => {
    const { container } = render(<GridItem offset={2}>Content</GridItem>);
    const element = container.firstChild as HTMLElement;
    // offset 2 means start at column 3 (2+1), span 24
    expect(element.style.gridColumn).toBe('3 / span 24');
  });

  it('should apply order correctly', () => {
    const { container } = render(
      <GridItem span={8} order={2}>
        Content
      </GridItem>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.order).toBe('2');
  });

  it('should apply flex property', () => {
    const { container } = render(
      <GridItem span={8} flex={1}>
        Content
      </GridItem>
    );
    const element = container.firstChild as HTMLElement;
    // Browser normalizes flex: 1 to '1 1 0%'
    expect(element.style.flex).toBe('1 1 0%');
    expect(element.className).toContain('gridItem--flex');
  });

  it('should prioritize xs shortcut over span', () => {
    const { container } = render(
      <GridItem span={12} xs={24}>
        Content
      </GridItem>
    );
    const element = container.firstChild as HTMLElement;
    // At xs breakpoint, should use 24 from shortcut, not 12 from span
    expect(element.style.gridColumn).toBe('span 24');
  });

  it('should handle md shortcut', () => {
    const { container } = render(<GridItem md={16}>Content</GridItem>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.gridColumn).toBe('span 16');
  });

  it('should handle multiple breakpoint shortcuts', () => {
    const { container } = render(
      <GridItem xs={24} sm={12} md={8} lg={6}>
        Content
      </GridItem>
    );
    const element = container.firstChild as HTMLElement;
    // Resolves to a specific breakpoint based on viewport (lg = 6 in test environment)
    expect(element.style.gridColumn).toContain('span');
    expect(['span 24', 'span 12', 'span 8', 'span 6']).toContain(element.style.gridColumn);
  });

  it('should merge custom styles', () => {
    const { container } = render(
      <GridItem span={8} style={{ backgroundColor: 'red', padding: '20px' }}>
        Content
      </GridItem>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.backgroundColor).toBe('red');
    expect(element.style.padding).toBe('20px');
  });

  it('should handle all props together', () => {
    const { container } = render(
      <GridItem
        as="section"
        span={8}
        offset={2}
        order={3}
        flex={1}
        className="item"
        style={{ margin: '10px' }}
      >
        Content
      </GridItem>
    );
    const element = container.firstChild as HTMLElement;

    // Element type
    expect(element.nodeName).toBe('SECTION');

    // Classes
    expect(element.className).toContain('gridItem');
    expect(element.className).toContain('gridItem--flex');
    expect(element.className).toContain('item');

    // Grid styles
    expect(element.style.gridColumn).toBe('3 / span 8');
    expect(element.style.order).toBe('3');
    // Browser normalizes flex: 1 to '1 1 0%'
    expect(element.style.flex).toBe('1 1 0%');

    // Custom styles
    expect(element.style.margin).toBe('10px');
  });

  it('should handle zero offset', () => {
    const { container } = render(
      <GridItem span={8} offset={0}>
        Content
      </GridItem>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.gridColumn).toBe('span 8');
  });

  it('should handle span 1', () => {
    const { container } = render(<GridItem span={1}>Content</GridItem>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.gridColumn).toBe('span 1');
  });

  it('should handle large offset', () => {
    const { container } = render(
      <GridItem span={6} offset={18}>
        Content
      </GridItem>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.gridColumn).toBe('19 / span 6');
  });
});

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Flex } from './Flex';

describe('Flex', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <Flex>
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>
    );
    expect(getByText('Item 1')).toBeTruthy();
    expect(getByText('Item 2')).toBeTruthy();
  });

  it('should render as div by default', () => {
    const { container } = render(<Flex>Content</Flex>);
    const element = container.firstChild;
    expect(element?.nodeName).toBe('DIV');
  });

  it('should render as custom element when as prop is provided', () => {
    const { container } = render(<Flex as="article">Content</Flex>);
    const element = container.firstChild;
    expect(element?.nodeName).toBe('ARTICLE');
  });

  it('should apply base flex class', () => {
    const { container } = render(<Flex>Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('flex');
  });

  it('should apply row direction class by default', () => {
    const { container } = render(<Flex>Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('flex--row');
  });

  it('should apply column direction class', () => {
    const { container } = render(<Flex direction="column">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('flex--column');
  });

  it('should apply nowrap class by default', () => {
    const { container } = render(<Flex>Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('flex--nowrap');
  });

  it('should apply wrap class', () => {
    const { container } = render(<Flex wrap="wrap">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('flex--wrap');
  });

  it('should apply wrap-reverse class', () => {
    const { container } = render(<Flex wrap="wrap-reverse">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('flex--wrap-reverse');
  });

  it('should apply inline class when inline is true', () => {
    const { container } = render(<Flex inline>Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('flex--inline');
  });

  it('should not apply inline class when inline is false', () => {
    const { container } = render(<Flex inline={false}>Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).not.toContain('flex--inline');
  });

  it('should apply alignment class when align is provided', () => {
    const { container } = render(<Flex align="center">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('flex--align-center');
  });

  it('should apply justify class when justify is provided', () => {
    const { container } = render(<Flex justify="space-between">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('flex--justify-space-between');
  });

  it('should apply custom className', () => {
    const { container } = render(<Flex className="custom-flex">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('custom-flex');
  });

  it('should not set gap CSS variable when gap is undefined', () => {
    const { container } = render(<Flex>Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--flex-gap')).toBe('');
  });

  it('should set gap CSS variable with spacing key', () => {
    const { container } = render(<Flex gap="md">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--flex-gap')).toBe('16px');
  });

  it('should set gap CSS variable with numeric value', () => {
    const { container } = render(<Flex gap={20}>Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--flex-gap')).toBe('20px');
  });

  it('should merge custom styles', () => {
    const { container } = render(
      <Flex style={{ backgroundColor: 'green', padding: '25px' }}>Content</Flex>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.backgroundColor).toBe('green');
    expect(element.style.padding).toBe('25px');
  });

  it('should combine all props correctly', () => {
    const { container } = render(
      <Flex
        as="section"
        direction="column"
        wrap="wrap"
        align="center"
        justify="space-evenly"
        gap="lg"
        inline
        className="flex-container"
        style={{ height: '100vh' }}
      >
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>
    );
    const element = container.firstChild as HTMLElement;

    // Element type
    expect(element.nodeName).toBe('SECTION');

    // Classes
    expect(element.className).toContain('flex');
    expect(element.className).toContain('flex--inline');
    expect(element.className).toContain('flex--column');
    expect(element.className).toContain('flex--wrap');
    expect(element.className).toContain('flex--align-center');
    expect(element.className).toContain('flex--justify-space-evenly');
    expect(element.className).toContain('flex-container');

    // Gap CSS var
    expect(element.style.getPropertyValue('--flex-gap')).toBe('24px');

    // Custom styles
    expect(element.style.height).toBe('100vh');
  });

  it('should handle all alignment options', () => {
    const alignments = ['start', 'center', 'end', 'stretch', 'baseline'] as const;
    alignments.forEach((alignment) => {
      const { container } = render(<Flex align={alignment}>Content</Flex>);
      const element = container.firstChild as HTMLElement;
      expect(element.className).toContain(`flex--align-${alignment}`);
    });
  });

  it('should handle all justify options', () => {
    const justifications = [
      'start',
      'center',
      'end',
      'space-between',
      'space-around',
      'space-evenly',
    ] as const;
    justifications.forEach((justification) => {
      const { container } = render(<Flex justify={justification}>Content</Flex>);
      const element = container.firstChild as HTMLElement;
      expect(element.className).toContain(`flex--justify-${justification}`);
    });
  });
});

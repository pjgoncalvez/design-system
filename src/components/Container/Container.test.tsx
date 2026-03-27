import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Container>Test Content</Container>);
    expect(getByText('Test Content')).toBeTruthy();
  });

  it('should render as div by default', () => {
    const { container } = render(<Container>Content</Container>);
    const element = container.firstChild;
    expect(element?.nodeName).toBe('DIV');
  });

  it('should render as custom element when as prop is provided', () => {
    const { container } = render(<Container as="section">Content</Container>);
    const element = container.firstChild;
    expect(element?.nodeName).toBe('SECTION');
  });

  it('should apply base container class', () => {
    const { container } = render(<Container>Content</Container>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('container');
  });

  it('should apply fluid class when fluid is true', () => {
    const { container } = render(<Container fluid>Content</Container>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('container--fluid');
  });

  it('should not apply fluid class when fluid is false', () => {
    const { container } = render(<Container fluid={false}>Content</Container>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).not.toContain('container--fluid');
  });

  it('should apply padded class by default', () => {
    const { container } = render(<Container>Content</Container>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('container--padded');
  });

  it('should not apply padded class when disablePadding is true', () => {
    const { container } = render(<Container disablePadding>Content</Container>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).not.toContain('container--padded');
  });

  it('should apply custom className', () => {
    const { container } = render(<Container className="custom-class">Content</Container>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('custom-class');
  });

  it('should set custom maxWidth as number', () => {
    const { container } = render(<Container maxWidth={800}>Content</Container>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.maxWidth).toBe('800px');
  });

  it('should set custom maxWidth as string', () => {
    const { container } = render(<Container maxWidth="90vw">Content</Container>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.maxWidth).toBe('90vw');
  });

  it('should set container padding CSS variable when padding is enabled', () => {
    const { container } = render(<Container>Content</Container>);
    const element = container.firstChild as HTMLElement;
    const cssVar = element.style.getPropertyValue('--container-padding');
    expect(cssVar).toBeTruthy();
  });

  it('should not set container padding CSS variable when disablePadding is true', () => {
    const { container } = render(<Container disablePadding>Content</Container>);
    const element = container.firstChild as HTMLElement;
    const cssVar = element.style.getPropertyValue('--container-padding');
    expect(cssVar).toBeFalsy();
  });

  it('should merge custom styles', () => {
    const { container } = render(
      <Container style={{ backgroundColor: 'red', color: 'white' }}>Content</Container>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.backgroundColor).toBe('red');
    expect(element.style.color).toBe('white');
  });

  it('should combine all props correctly', () => {
    const { container } = render(
      <Container
        as="main"
        fluid
        disablePadding
        maxWidth={1200}
        className="test"
        style={{ padding: '20px' }}
      >
        Content
      </Container>
    );
    const element = container.firstChild as HTMLElement;

    // Check element type
    expect(element.nodeName).toBe('MAIN');

    // Check classes
    expect(element.className).toContain('container');
    expect(element.className).toContain('container--fluid');
    expect(element.className).not.toContain('container--padded');
    expect(element.className).toContain('test');

    // Check styles
    expect(element.style.maxWidth).toBe('1200px');
    expect(element.style.padding).toBe('20px');
  });
});

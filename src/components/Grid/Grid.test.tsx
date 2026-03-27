import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Grid } from './Grid';

describe('Grid', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <Grid>
        <div>Child 1</div>
        <div>Child 2</div>
      </Grid>
    );
    expect(getByText('Child 1')).toBeTruthy();
    expect(getByText('Child 2')).toBeTruthy();
  });

  it('should render as div by default', () => {
    const { container } = render(<Grid>Content</Grid>);
    const element = container.firstChild;
    expect(element?.nodeName).toBe('DIV');
  });

  it('should render as custom element when as prop is provided', () => {
    const { container } = render(<Grid as="section">Content</Grid>);
    const element = container.firstChild;
    expect(element?.nodeName).toBe('SECTION');
  });

  it('should apply base grid class', () => {
    const { container } = render(<Grid>Content</Grid>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('grid');
  });

  it('should apply custom className', () => {
    const { container } = render(<Grid className="custom-grid">Content</Grid>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('custom-grid');
  });

  it('should apply alignment class when align is provided', () => {
    const { container } = render(<Grid align="center">Content</Grid>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('grid--align-center');
  });

  it('should apply justify class when justify is provided', () => {
    const { container } = render(<Grid justify="space-between">Content</Grid>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('grid--justify-space-between');
  });

  it('should apply both alignment and justify classes', () => {
    const { container } = render(
      <Grid align="center" justify="end">
        Content
      </Grid>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('grid--align-center');
    expect(element.className).toContain('grid--justify-end');
  });

  it('should set gutter CSS variables for single gutter value', () => {
    const { container } = render(<Grid gutter="md">Content</Grid>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--grid-gutter-col')).toBe('16px');
    expect(element.style.getPropertyValue('--grid-gutter-row')).toBe('16px');
  });

  it('should set gutter CSS variables for numeric gutter', () => {
    const { container } = render(<Grid gutter={20}>Content</Grid>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--grid-gutter-col')).toBe('20px');
    expect(element.style.getPropertyValue('--grid-gutter-row')).toBe('20px');
  });

  it('should set different horizontal and vertical gutters with tuple', () => {
    const { container } = render(<Grid gutter={['sm', 'lg']}>Content</Grid>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--grid-gutter-col')).toBe('8px');
    expect(element.style.getPropertyValue('--grid-gutter-row')).toBe('24px');
  });

  it('should handle tuple with numeric values', () => {
    const { container } = render(<Grid gutter={[12, 24]}>Content</Grid>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--grid-gutter-col')).toBe('12px');
    expect(element.style.getPropertyValue('--grid-gutter-row')).toBe('24px');
  });

  it('should not set gutter when gutter is undefined', () => {
    const { container } = render(<Grid>Content</Grid>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--grid-gutter-col')).toBe('');
    expect(element.style.getPropertyValue('--grid-gutter-row')).toBe('');
  });

  it('should merge custom styles', () => {
    const { container } = render(
      <Grid style={{ backgroundColor: 'blue', padding: '10px' }}>Content</Grid>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.backgroundColor).toBe('blue');
    expect(element.style.padding).toBe('10px');
  });

  it('should combine all props correctly', () => {
    const { container } = render(
      <Grid
        as="main"
        gutter="lg"
        align="center"
        justify="space-between"
        className="test-grid"
        style={{ margin: '20px' }}
      >
        Content
      </Grid>
    );
    const element = container.firstChild as HTMLElement;

    // Element type
    expect(element.nodeName).toBe('MAIN');

    // Classes
    expect(element.className).toContain('grid');
    expect(element.className).toContain('grid--align-center');
    expect(element.className).toContain('grid--justify-space-between');
    expect(element.className).toContain('test-grid');

    // Gutter CSS vars
    expect(element.style.getPropertyValue('--grid-gutter-col')).toBe('24px');
    expect(element.style.getPropertyValue('--grid-gutter-row')).toBe('24px');

    // Custom styles
    expect(element.style.margin).toBe('20px');
  });
});

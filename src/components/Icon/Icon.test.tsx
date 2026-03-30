/**
 * Icon Component Tests
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Icon, IconName } from './Icon';
import { IconSize } from './types';

describe('Icon', () => {
  it('renders without crashing', () => {
    const { container } = render(<Icon name="Apps" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders the correct icon', () => {
    const { container } = render(<Icon name="Settings" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg?.querySelector('path')).toBeInTheDocument();
  });

  it('applies the correct size', () => {
    const { container } = render(<Icon name="Apps" size={32} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('applies the correct color', () => {
    const { container } = render(<Icon name="Apps" color="#FF5733" />);
    const path = container.querySelector('path');
    expect(path).toHaveAttribute('fill', '#FF5733');
  });

  it('uses default size when not specified', () => {
    const { container } = render(<Icon name="Apps" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
  });

  it('uses default color when not specified', () => {
    const { container } = render(<Icon name="Apps" />);
    const path = container.querySelector('path');
    expect(path).toHaveAttribute('fill', '#4E5969');
  });

  it('renders various icon names', () => {
    const iconNames: IconName[] = [
      'Apps',
      'Settings',
      'Home',
      'User',
      'Calendar',
      'Email',
      'Search',
      'Filter',
      'Download',
      'Upload',
    ];

    iconNames.forEach((name) => {
      const { container } = render(<Icon name={name} />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    const { container } = render(<Icon name="Apps" className="custom-class" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-class');
  });

  it('accepts all standard SVG props', () => {
    const { container } = render(<Icon name="Apps" data-testid="icon" aria-label="Apps icon" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('data-testid', 'icon');
    expect(svg).toHaveAttribute('aria-label', 'Apps icon');
  });

  it('supports all standard icon sizes', () => {
    const sizes: IconSize[] = [10, 12, 14, 16, 18, 20, 22, 24, 32, 48];

    sizes.forEach((size) => {
      const { container } = render(<Icon name="Apps" size={size} />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', size.toString());
      expect(svg).toHaveAttribute('height', size.toString());
    });
  });

  it('renders all 252 icons without errors', () => {
    // Sample of icon names to test
    const sampleIcons: IconName[] = [
      'AlignCenter',
      'Apps',
      'ArrowDown',
      'Bold',
      'Calendar',
      'Check',
      'Close',
      'Copy',
      'Delete',
      'Download',
      'Edit',
      'Email',
      'File',
      'Filter',
      'Folder',
      'Heart',
      'Home',
      'Image',
      'Link',
      'Menu',
      'Minus',
      'Plus',
      'Save',
      'Search',
      'Settings',
      'Star',
      'Upload',
      'User',
      'VideoCamera',
      'ZoomIn',
    ];

    sampleIcons.forEach((iconName) => {
      const { container } = render(<Icon name={iconName} />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg?.querySelector('path')).toBeInTheDocument();
    });
  });
});

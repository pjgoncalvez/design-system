import { describe, it, expect, beforeEach } from 'vitest';
import {
  resolveResponsiveValue,
  generateResponsiveStyles,
  getDefinedBreakpoints,
} from './responsive';

describe('resolveResponsiveValue', () => {
  // Mock window.innerWidth for breakpoint tests
  const setWindowWidth = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    });
  };

  beforeEach(() => {
    setWindowWidth(1024); // Default to lg breakpoint
  });

  it('should return non-responsive values as-is', () => {
    expect(resolveResponsiveValue(16)).toBe(16);
    expect(resolveResponsiveValue('md')).toBe('md');
    expect(resolveResponsiveValue(true)).toBe(true);
  });

  it('should return null and array values as-is', () => {
    expect(resolveResponsiveValue(null)).toBe(null);
    expect(resolveResponsiveValue([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should resolve responsive object to current breakpoint value', () => {
    const responsiveValue = { xs: 8, md: 16, lg: 24 };
    setWindowWidth(1024); // lg breakpoint
    expect(resolveResponsiveValue(responsiveValue)).toBe(24);
  });

  it('should fall back to nearest lower breakpoint if current not defined', () => {
    const responsiveValue = { xs: 8, md: 16 };
    setWindowWidth(1024); // lg breakpoint, but no lg value
    expect(resolveResponsiveValue(responsiveValue)).toBe(16); // Falls back to md
  });

  it('should use explicit breakpoint parameter when provided', () => {
    const responsiveValue = { xs: 8, md: 16, lg: 24 };
    expect(resolveResponsiveValue(responsiveValue, 'md')).toBe(16);
    expect(resolveResponsiveValue(responsiveValue, 'xs')).toBe(8);
  });

  it('should handle all breakpoint levels', () => {
    const responsiveValue = {
      xs: 4,
      sm: 8,
      md: 12,
      lg: 16,
      xl: 20,
      xxl: 24,
      xxxl: 28,
    };

    expect(resolveResponsiveValue(responsiveValue, 'xs')).toBe(4);
    expect(resolveResponsiveValue(responsiveValue, 'sm')).toBe(8);
    expect(resolveResponsiveValue(responsiveValue, 'md')).toBe(12);
    expect(resolveResponsiveValue(responsiveValue, 'lg')).toBe(16);
    expect(resolveResponsiveValue(responsiveValue, 'xl')).toBe(20);
    expect(resolveResponsiveValue(responsiveValue, 'xxl')).toBe(24);
    expect(resolveResponsiveValue(responsiveValue, 'xxxl')).toBe(28);
  });

  it('should fall back to first defined value when no match found', () => {
    const responsiveValue = { md: 16, lg: 24 };
    expect(resolveResponsiveValue(responsiveValue, 'xs')).toBe(16); // Falls back to md
  });

  it('should handle sparse responsive definitions', () => {
    const responsiveValue = { xs: 8, xl: 32 };
    expect(resolveResponsiveValue(responsiveValue, 'sm')).toBe(8); // Falls back to xs
    expect(resolveResponsiveValue(responsiveValue, 'lg')).toBe(8); // Falls back to xs
    expect(resolveResponsiveValue(responsiveValue, 'xl')).toBe(32);
    expect(resolveResponsiveValue(responsiveValue, 'xxl')).toBe(32); // Falls back to xl
  });
});

describe('generateResponsiveStyles', () => {
  it('should generate simple style for non-responsive values', () => {
    const result = generateResponsiveStyles('gap', 16);
    expect(result).toEqual({ gap: '16' });
  });

  it('should use custom formatter', () => {
    const result = generateResponsiveStyles('gap', 16, (val) => `${val}px`);
    expect(result).toEqual({ gap: '16px' });
  });

  it('should generate responsive styles for each defined breakpoint', () => {
    const responsiveValue = { xs: 8, md: 16, lg: 24 };
    const result = generateResponsiveStyles('gap', responsiveValue, (val) => `${val}px`);

    expect(result).toEqual({
      'gap-xs': '8px',
      'gap-md': '16px',
      'gap-lg': '24px',
    });
  });

  it('should skip undefined breakpoints', () => {
    const responsiveValue = { xs: 8, lg: 24 };
    const result = generateResponsiveStyles('gap', responsiveValue, (val) => `${val}px`);

    expect(result).toEqual({
      'gap-xs': '8px',
      'gap-lg': '24px',
    });
  });

  it('should work with different property names', () => {
    const result = generateResponsiveStyles('padding', { xs: '4px', md: '8px' });

    expect(result).toEqual({
      'padding-xs': '4px',
      'padding-md': '8px',
    });
  });

  it('should handle null and arrays as non-responsive', () => {
    expect(generateResponsiveStyles('gap', null)).toEqual({ gap: 'null' });
    expect(generateResponsiveStyles('gap', [1, 2])).toEqual({ gap: '1,2' });
  });
});

describe('getDefinedBreakpoints', () => {
  it('should return empty array for non-responsive values', () => {
    expect(getDefinedBreakpoints(16)).toEqual([]);
    expect(getDefinedBreakpoints('md')).toEqual([]);
    expect(getDefinedBreakpoints(null)).toEqual([]);
    expect(getDefinedBreakpoints([1, 2, 3])).toEqual([]);
  });

  it('should return breakpoints that have defined values', () => {
    const responsiveValue = { xs: 8, md: 16, lg: 24 };
    const result = getDefinedBreakpoints(responsiveValue);

    expect(result).toEqual(['xs', 'md', 'lg']);
  });

  it('should maintain breakpoint order', () => {
    const responsiveValue = { lg: 24, xs: 8, md: 16 };
    const result = getDefinedBreakpoints(responsiveValue);

    expect(result).toEqual(['xs', 'md', 'lg']); // Should be in order
  });

  it('should skip undefined values', () => {
    const responsiveValue = { xs: 8, sm: undefined, md: 16 };
    const result = getDefinedBreakpoints(responsiveValue);

    expect(result).toEqual(['xs', 'md']);
  });

  it('should handle all breakpoint levels', () => {
    const responsiveValue = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
      xxl: 6,
      xxxl: 7,
    };
    const result = getDefinedBreakpoints(responsiveValue);

    expect(result).toEqual(['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']);
  });

  it('should handle empty responsive object', () => {
    const result = getDefinedBreakpoints({});
    expect(result).toEqual([]);
  });
});

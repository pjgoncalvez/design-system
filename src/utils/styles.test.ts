import { describe, it, expect } from 'vitest';
import { toPixels, mergeStyles, cssVar } from './styles';

describe('toPixels', () => {
  it('should convert spacing key to pixels', () => {
    expect(toPixels('xs')).toBe('4px');
    expect(toPixels('sm')).toBe('8px');
    expect(toPixels('md')).toBe('16px');
    expect(toPixels('lg')).toBe('24px');
    expect(toPixels('xl')).toBe('32px');
  });

  it('should convert all spacing keys', () => {
    expect(toPixels(0)).toBe('0px');
    expect(toPixels('2xl')).toBe('40px');
    expect(toPixels('3xl')).toBe('48px');
    expect(toPixels('4xl')).toBe('64px');
    expect(toPixels('5xl')).toBe('80px');
  });

  it('should convert numeric value to pixels', () => {
    expect(toPixels(0)).toBe('0px');
    expect(toPixels(10)).toBe('10px');
    expect(toPixels(100)).toBe('100px');
  });

  it('should handle negative numbers', () => {
    expect(toPixels(-10)).toBe('-10px');
  });

  it('should handle decimal numbers', () => {
    expect(toPixels(16.5)).toBe('16.5px');
  });
});

describe('mergeStyles', () => {
  it('should merge multiple style objects', () => {
    const result = mergeStyles({ color: 'red' }, { fontSize: '16px' });
    expect(result).toEqual({ color: 'red', fontSize: '16px' });
  });

  it('should override earlier properties with later ones', () => {
    const result = mergeStyles({ color: 'red' }, { color: 'blue' });
    expect(result).toEqual({ color: 'blue' });
  });

  it('should filter out undefined values', () => {
    const result = mergeStyles({ color: 'red' }, undefined, { fontSize: '16px' });
    expect(result).toEqual({ color: 'red', fontSize: '16px' });
  });

  it('should handle all undefined values', () => {
    const result = mergeStyles(undefined, undefined);
    expect(result).toEqual({});
  });

  it('should handle empty arguments', () => {
    const result = mergeStyles();
    expect(result).toEqual({});
  });

  it('should handle single style object', () => {
    const result = mergeStyles({ color: 'red', fontSize: '16px' });
    expect(result).toEqual({ color: 'red', fontSize: '16px' });
  });

  it('should merge complex style objects', () => {
    const result = mergeStyles(
      { color: 'red', fontSize: '16px', padding: '10px' },
      { fontSize: '18px', margin: '20px' },
      { color: 'blue' }
    );
    expect(result).toEqual({
      color: 'blue',
      fontSize: '18px',
      padding: '10px',
      margin: '20px',
    });
  });

  it('should not mutate original objects', () => {
    const style1 = { color: 'red' };
    const style2 = { fontSize: '16px' };
    const result = mergeStyles(style1, style2);

    expect(style1).toEqual({ color: 'red' });
    expect(style2).toEqual({ fontSize: '16px' });
    expect(result).toEqual({ color: 'red', fontSize: '16px' });
  });
});

describe('cssVar', () => {
  it('should create CSS variable with string value', () => {
    const result = cssVar('grid-gutter', '16px');
    expect(result).toEqual({ '--grid-gutter': '16px' });
  });

  it('should create CSS variable with numeric value', () => {
    const result = cssVar('grid-gutter', 16);
    expect(result).toEqual({ '--grid-gutter': '16' });
  });

  it('should add -- prefix automatically', () => {
    const result = cssVar('spacing', 8);
    expect(result).toEqual({ '--spacing': '8' });
  });

  it('should handle zero value', () => {
    const result = cssVar('gap', 0);
    expect(result).toEqual({ '--gap': '0' });
  });

  it('should handle negative numbers', () => {
    const result = cssVar('offset', -10);
    expect(result).toEqual({ '--offset': '-10' });
  });

  it('should handle decimal numbers', () => {
    const result = cssVar('scale', 1.5);
    expect(result).toEqual({ '--scale': '1.5' });
  });

  it('should handle complex variable names', () => {
    const result = cssVar('grid-gutter-col', 24);
    expect(result).toEqual({ '--grid-gutter-col': '24' });
  });

  it('should handle empty string value', () => {
    const result = cssVar('var-name', '');
    expect(result).toEqual({ '--var-name': '' });
  });
});

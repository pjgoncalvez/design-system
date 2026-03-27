import { describe, it, expect } from 'vitest';
import { classNames, responsiveClassName } from './classnames';

describe('classNames', () => {
  it('should combine multiple class names', () => {
    expect(classNames('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('should filter out undefined values', () => {
    expect(classNames('foo', undefined, 'bar')).toBe('foo bar');
  });

  it('should filter out null values', () => {
    expect(classNames('foo', null, 'bar')).toBe('foo bar');
  });

  it('should filter out false values', () => {
    expect(classNames('foo', false, 'bar')).toBe('foo bar');
  });

  it('should handle conditional class names', () => {
    const condition = true;
    expect(classNames('foo', condition && 'bar')).toBe('foo bar');

    const falseCondition = false;
    expect(classNames('foo', falseCondition && 'bar')).toBe('foo');
  });

  it('should handle all falsy values', () => {
    expect(classNames(undefined, null, false)).toBe('');
  });

  it('should handle empty arguments', () => {
    expect(classNames()).toBe('');
  });

  it('should handle single class name', () => {
    expect(classNames('foo')).toBe('foo');
  });

  it('should handle complex combinations', () => {
    const isActive = true;
    const isDisabled = false;
    expect(classNames('button', isActive && 'active', isDisabled && 'disabled', 'primary')).toBe(
      'button active primary'
    );
  });
});

describe('responsiveClassName', () => {
  it('should create responsive class names with base class', () => {
    const result = responsiveClassName('grid', ['xs', 'md']);
    expect(result).toBe('grid grid--xs grid--md');
  });

  it('should handle empty breakpoints array', () => {
    const result = responsiveClassName('grid', []);
    expect(result).toBe('grid');
  });

  it('should handle single breakpoint', () => {
    const result = responsiveClassName('container', ['lg']);
    expect(result).toBe('container container--lg');
  });

  it('should handle all breakpoints', () => {
    const result = responsiveClassName('item', ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']);
    expect(result).toBe('item item--xs item--sm item--md item--lg item--xl item--xxl item--xxxl');
  });

  it('should work with different base class names', () => {
    expect(responsiveClassName('flex', ['sm', 'lg'])).toBe('flex flex--sm flex--lg');
    expect(responsiveClassName('stack', ['md'])).toBe('stack stack--md');
  });

  it('should maintain breakpoint order', () => {
    const result = responsiveClassName('grid', ['lg', 'xs', 'md']);
    expect(result).toBe('grid grid--lg grid--xs grid--md');
  });
});

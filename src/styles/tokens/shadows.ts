/**
 * Design System Shadow Tokens
 * Generated from Figma design tokens
 */

export interface Shadow {
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  color: string;
  inset?: boolean;
}

export interface ShadowTokens {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
}

/**
 * Elevation-based shadow system
 * Following a consistent elevation scale for UI depth
 */
export const shadows: ShadowTokens = {
  none: 'none',
  // xs - Minimal elevation (buttons, cards at rest)
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  // sm - Small elevation (small dropdowns, tooltips)
  sm: '0 2px 5px 0 rgba(0, 0, 0, 0.1)',
  // md - Medium elevation (dropdown menus, popovers)
  md: '0 4px 10px 0 rgba(0, 0, 0, 0.1)',
  // lg - Large elevation (modals, large dropdowns)
  lg: '0 8px 20px 0 rgba(0, 0, 0, 0.1)',
  // xl - Extra large elevation (drawers, dialogs)
  xl: '0 12px 30px 0 rgba(0, 0, 0, 0.15)',
  // 2xl - Maximum elevation (fullscreen overlays)
  '2xl': '0 20px 40px 0 rgba(0, 0, 0, 0.2)',
  // inner - Inset shadow for inputs and pressed states
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
};

/**
 * Component-specific shadows from Figma
 * These are exact shadows defined in the design system
 */
export const componentShadows = {
  // Dropdown menus
  dropdown: {
    level1: '0 4px 10px 0 rgba(0, 0, 0, 0.1)', // 一级下拉菜单
    level2: '0 8px 20px 0 rgba(0, 0, 0, 0.1)', // 二级下拉菜单
  },
  // Back to top button
  backToTop: '0 4px 10px 0 rgba(0, 0, 0, 0.1)',
  // Handle/drag elements
  handle: '0 2px 5px 0 rgba(0, 0, 0, 0.1)',
  // Tab borders (inner shadows for visual separation)
  tabs: {
    innerTop: 'inset 0 2px 0 0 #165dff',
    innerBottom: 'inset 0 -2px 0 0 #165dff',
    innerLeft: 'inset 2px 0 0 0 #165dff',
    innerRight: 'inset -2px 0 0 0 #165dff',
    dividerTop: 'inset 0 1px 0 0 #e5e6e8',
    dividerBottom: 'inset 0 -1px 0 0 #e5e6e8',
    dividerLeft: 'inset 1px 0 0 0 #e5e6e8',
    dividerRight: 'inset -1px 0 0 0 #e5e6e8',
  },
  // Drop shadows for directional emphasis
  dropShadow: {
    top: '0 -1px 0 0 #e5e6eb',
    bottom: '0 1px 0 0 #e5e6eb',
    left: '-1px 0 0 0 #e5e6eb',
    right: '1px 0 0 0 #e5e6eb',
  },
};

/**
 * Helper function to create a custom shadow
 */
export function createShadow(shadow: Shadow): string {
  const { offsetX, offsetY, blur, spread, color, inset } = shadow;
  const insetPrefix = inset ? 'inset ' : '';
  return `${insetPrefix}${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`;
}

/**
 * Helper function to combine multiple shadows
 */
export function combineShadows(...shadows: string[]): string {
  return shadows.filter((s) => s && s !== 'none').join(', ');
}

/**
 * Helper to convert hex color with alpha to rgba
 */
export function hexToRgba(hex: string): string {
  // Handle 8-character hex (with alpha)
  if (hex.length === 9) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const a = parseInt(hex.slice(7, 9), 16) / 255;
    return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;
  }
  // Handle 6-character hex (no alpha)
  if (hex.length === 7) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }
  return hex;
}

/**
 * Raw shadow values from Figma
 * These preserve the exact values from the design tokens
 */
export const rawShadows = {
  dropdown: {
    level1: {
      offsetX: 0,
      offsetY: 4,
      blur: 10,
      spread: 0,
      color: 'rgba(0, 0, 0, 0.1)',
    },
    level2: {
      offsetX: 0,
      offsetY: 8,
      blur: 20,
      spread: 0,
      color: 'rgba(0, 0, 0, 0.1)',
    },
  },
  backToTop: {
    offsetX: 0,
    offsetY: 4,
    blur: 10,
    spread: 0,
    color: 'rgba(0, 0, 0, 0.1)',
  },
  handle: {
    offsetX: 0,
    offsetY: 2,
    blur: 5,
    spread: 0,
    color: 'rgba(0, 0, 0, 0.1)',
  },
};

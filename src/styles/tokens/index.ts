/**
 * Design System Tokens
 *
 * This module exports all design tokens including colors, typography, shadows,
 * spacing, breakpoints, and layout configurations.
 * These tokens form the foundation of the design system and should be used
 * consistently across all components.
 */

export {
  colors,
  lightColors,
  darkColors,
  type ColorScale,
  type ColorPalette,
  type ThemeMode,
} from './colors';

export {
  typography,
  fontWeights,
  pxToRem,
  getLineHeight,
  createTypographyStyle,
  type TypographyStyle,
  type FontSizeScale,
  type TypographyTokens,
} from './typography';

export {
  shadows,
  componentShadows,
  rawShadows,
  createShadow,
  combineShadows,
  hexToRgba,
  type Shadow,
  type ShadowTokens,
} from './shadows';

export {
  spacing,
  getSpacing,
  getSpacingRem,
  createSpacingStyle,
  type SpacingTokens,
  type SpacingKey,
  type SpacingValue,
} from './spacing';

export {
  breakpoints,
  breakpointOrder,
  getMediaQuery,
  isBreakpointActive,
  getCurrentBreakpoint,
  type BreakpointTokens,
  type Breakpoint,
  type BreakpointValue,
} from './breakpoints';

export {
  containerMaxWidths,
  containerPadding,
  gridConfig,
  type ContainerTokens,
  type GridConfig,
} from './layout';

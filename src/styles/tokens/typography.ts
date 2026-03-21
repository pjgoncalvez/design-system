export interface TypographyStyle {
  fontSize: number;
  fontFamily: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
}

export interface FontSizeScale {
  regular?: TypographyStyle;
  medium?: TypographyStyle;
  bold?: TypographyStyle;
}

export interface TypographyTokens {
  fontFamily: {
    base: string;
    heading: string;
    monospace: string;
  };
  fontSize: {
    xs: FontSizeScale; // 10px
    sm: FontSizeScale; // 12px
    base: FontSizeScale; // 14px
    md: FontSizeScale; // 16px
    lg: FontSizeScale; // 20px
    xl: FontSizeScale; // 24px
    '2xl': FontSizeScale; // 36px
    '3xl': FontSizeScale; // 48px
    '4xl': FontSizeScale; // 56px
  };
}

export const typography: TypographyTokens = {
  fontFamily: {
    base: 'Nunito Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading:
      'Nunito Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    monospace:
      '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
  },
  fontSize: {
    xs: {
      regular: {
        fontSize: 10,
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
        lineHeight: 18,
        letterSpacing: 0,
      },
      medium: {
        fontSize: 10,
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        lineHeight: 18,
        letterSpacing: 0,
      },
    },
    sm: {
      regular: {
        fontSize: 12,
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
        lineHeight: 20,
        letterSpacing: 0,
      },
      medium: {
        fontSize: 12,
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        lineHeight: 20,
        letterSpacing: 0,
      },
    },
    base: {
      regular: {
        fontSize: 14,
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
        lineHeight: 22,
        letterSpacing: 0,
      },
      medium: {
        fontSize: 14,
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        lineHeight: 22,
        letterSpacing: 0,
      },
      bold: {
        fontSize: 14,
        fontFamily: 'Nunito Sans',
        fontWeight: 700,
        lineHeight: 22,
        letterSpacing: 0,
      },
    },
    md: {
      regular: {
        fontSize: 16,
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
        lineHeight: 24,
        letterSpacing: 0,
      },
      medium: {
        fontSize: 16,
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        lineHeight: 24,
        letterSpacing: 0,
      },
    },
    lg: {
      regular: {
        fontSize: 20,
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
        lineHeight: 28,
        letterSpacing: 0,
      },
      medium: {
        fontSize: 20,
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        lineHeight: 28,
        letterSpacing: 0,
      },
      bold: {
        fontSize: 20,
        fontFamily: 'Nunito Sans',
        fontWeight: 700,
        lineHeight: 28,
        letterSpacing: 0,
      },
    },
    xl: {
      regular: {
        fontSize: 24,
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
        lineHeight: 32,
        letterSpacing: 0,
      },
      medium: {
        fontSize: 24,
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        lineHeight: 32,
        letterSpacing: 0,
      },
      bold: {
        fontSize: 24,
        fontFamily: 'Nunito Sans',
        fontWeight: 700,
        lineHeight: 32,
        letterSpacing: 0,
      },
    },
    '2xl': {
      regular: {
        fontSize: 36,
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
        lineHeight: 44,
        letterSpacing: 0,
      },
      medium: {
        fontSize: 36,
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        lineHeight: 44,
        letterSpacing: 0,
      },
      bold: {
        fontSize: 36,
        fontFamily: 'Nunito Sans',
        fontWeight: 700,
        lineHeight: 44,
        letterSpacing: 0,
      },
    },
    '3xl': {
      regular: {
        fontSize: 48,
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
        lineHeight: 56,
        letterSpacing: 0,
      },
      medium: {
        fontSize: 48,
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        lineHeight: 56,
        letterSpacing: 0,
      },
      bold: {
        fontSize: 48,
        fontFamily: 'Nunito Sans',
        fontWeight: 700,
        lineHeight: 56,
        letterSpacing: 0,
      },
    },
    '4xl': {
      regular: {
        fontSize: 56,
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
        lineHeight: 64,
        letterSpacing: 0,
      },
      medium: {
        fontSize: 56,
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        lineHeight: 64,
        letterSpacing: 0,
      },
      bold: {
        fontSize: 56,
        fontFamily: 'Nunito Sans',
        fontWeight: 700,
        lineHeight: 64,
        letterSpacing: 0,
      },
    },
  },
};

// Font weight constants
export const fontWeights = {
  regular: 400,
  medium: 600,
  bold: 700,
} as const;

// Helper function to get font size in rem
export function pxToRem(px: number): string {
  return `${px / 16}rem`;
}

// Helper function to get line height as unitless value
export function getLineHeight(lineHeight: number, fontSize: number): number {
  return lineHeight / fontSize;
}

// CSS-in-JS helper to create typography styles
export function createTypographyStyle(style: TypographyStyle) {
  return {
    fontFamily: style.fontFamily,
    fontSize: `${style.fontSize}px`,
    fontWeight: style.fontWeight,
    lineHeight: getLineHeight(style.lineHeight, style.fontSize),
    letterSpacing: style.letterSpacing === 0 ? 'normal' : `${style.letterSpacing}px`,
  };
}

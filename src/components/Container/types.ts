/**
 * Container Component Types
 */

export interface ContainerProps {
  /** Content to be contained */
  children: React.ReactNode;

  /** Full width without max-width constraint */
  fluid?: boolean;

  /** Custom max-width (overrides responsive max-widths) */
  maxWidth?: string | number;

  /** Remove default padding */
  disablePadding?: boolean;

  /** Additional CSS class name */
  className?: string;

  /** Inline styles */
  style?: React.CSSProperties;

  /** Element type to render as */
  as?: React.ElementType;
}

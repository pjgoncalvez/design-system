/**
 * Button Component Types
 *
 * Types for the Button component based on design system specifications.
 */

import { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Button variants based on semantic design tokens
 */
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost';

/**
 * Button size options
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Props for the Button component
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * Content to display inside the button
   */
  children?: ReactNode;

  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Size of the button
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the button should take full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether the button is in loading state
   * @default false
   */
  loading?: boolean;

  /**
   * HTML button type
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Click event handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

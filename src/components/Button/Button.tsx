/**
 * Button Component
 *
 * A button component for user interactions with various styles and states.
 */

import React from 'react';
import { ButtonProps } from './types';
import styles from './Button.module.css';

/**
 * Button component for user interactions
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 * <Button variant="success" size="large" fullWidth>
 *   Submit
 * </Button>
 * <Button variant="danger" loading>
 *   Loading...
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  loading = false,
  type = 'button',
  className = '',
  onClick,
  ...rest
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      {...rest}
    >
      {loading && <span className={styles.spinner} aria-label="Loading" />}
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;

/**
 * Badge Component
 *
 * A badge component for displaying status, counts, or labels.
 */

import React from 'react';
import { BadgeProps } from './types';
import styles from './Badge.module.css';

/**
 * Badge component for displaying status indicators, counts, or labels
 *
 * @example
 * ```tsx
 * <Badge variant="primary">New</Badge>
 * <Badge variant="success" size="small">99+</Badge>
 * <Badge variant="danger" dot />
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  dot = false,
  className = '',
}) => {
  const badgeClasses = [styles.badge, styles[variant], styles[size], dot && styles.dot, className]
    .filter(Boolean)
    .join(' ');

  return <span className={badgeClasses}>{dot ? null : children}</span>;
};

Badge.displayName = 'Badge';

export default Badge;

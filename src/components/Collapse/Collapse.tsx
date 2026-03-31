/**
 * Collapse Component
 *
 * A collapse/accordion component for expandable content sections.
 */

import React, { useState, useRef, useEffect } from 'react';
import { CollapseProps } from './types';
import styles from './Collapse.module.css';

/**
 * Collapse component for expandable content sections
 *
 * @example
 * ```tsx
 * <Collapse header="Click to expand">
 *   Hidden content here
 * </Collapse>
 * <Collapse header="Controlled" expanded={isOpen} onChange={setIsOpen}>
 *   Controlled content
 * </Collapse>
 * <Collapse header="Large size" size="large" defaultExpanded>
 *   Pre-expanded content
 * </Collapse>
 * ```
 */
export const Collapse: React.FC<CollapseProps> = ({
  header,
  children,
  expanded: controlledExpanded,
  defaultExpanded = false,
  disabled = false,
  size = 'medium',
  bordered = true,
  onChange,
  className = '',
  headerClassName = '',
  contentClassName = '',
  ...rest
}) => {
  const [uncontrolledExpanded, setUncontrolledExpanded] = useState(defaultExpanded);
  const contentRef = useRef<HTMLDivElement>(null);

  // Determine if component is controlled or uncontrolled
  const isControlled = controlledExpanded !== undefined;
  const isExpanded = isControlled ? controlledExpanded : uncontrolledExpanded;

  const handleToggle = () => {
    if (disabled) return;

    const newExpanded = !isExpanded;

    if (!isControlled) {
      setUncontrolledExpanded(newExpanded);
    }

    onChange?.(newExpanded);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  // Update content height for animation
  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        // Set explicit height for animation
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;

        // After animation completes, set to 'auto' to allow dynamic content changes
        const timeout = setTimeout(() => {
          if (contentRef.current && isExpanded) {
            contentRef.current.style.height = 'auto';
          }
        }, 300); // Match animation duration

        return () => clearTimeout(timeout);
      } else {
        // When collapsing, set explicit height first for animation
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        // Force reflow
        contentRef.current.getBoundingClientRect();
        // Then animate to 0
        requestAnimationFrame(() => {
          if (contentRef.current) {
            contentRef.current.style.height = '0px';
          }
        });
      }
    }
  }, [isExpanded, children]);

  const collapseClasses = [
    styles.collapse,
    styles[size],
    bordered && styles.bordered,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const headerClasses = [styles.header, isExpanded && styles.expanded, headerClassName]
    .filter(Boolean)
    .join(' ');

  const contentClasses = [styles.content, isExpanded && styles.contentExpanded, contentClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={collapseClasses} {...rest}>
      <div
        className={headerClasses}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={isExpanded}
        aria-disabled={disabled}
      >
        <span className={styles.icon} aria-hidden="true">
          {isExpanded ? '▼' : '▶'}
        </span>
        <span className={styles.headerContent}>{header}</span>
      </div>
      <div ref={contentRef} className={contentClasses} aria-hidden={!isExpanded}>
        <div className={styles.contentInner}>{children}</div>
      </div>
    </div>
  );
};

Collapse.displayName = 'Collapse';

export default Collapse;

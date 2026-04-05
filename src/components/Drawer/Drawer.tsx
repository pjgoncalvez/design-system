/**
 * Drawer Component
 *
 * A slide-out panel component that can be positioned on any side of the screen.
 */

import React, { useEffect, useRef, useCallback } from 'react';
import { DrawerProps } from './types';
import styles from './Drawer.module.css';

/**
 * Drawer component for displaying slide-out panels
 *
 * @example
 * ```tsx
 * <Drawer open={isOpen} onClose={() => setIsOpen(false)} title="Settings">
 *   <p>Drawer content</p>
 * </Drawer>
 *
 * <Drawer
 *   open={isOpen}
 *   onClose={handleClose}
 *   placement="left"
 *   size="large"
 *   footer={<Button onClick={handleClose}>Close</Button>}
 * >
 *   Content here
 * </Drawer>
 * ```
 */
export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  title,
  children,
  placement = 'right',
  size = 'medium',
  showCloseButton = true,
  showOverlay = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  footer,
  className = '',
  headerClassName = '',
  bodyClassName = '',
  footerClassName = '',
  overlayClassName = '',
  zIndex = 1000,
  lockBodyScroll = true,
  ...rest
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Handle escape key
  useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, closeOnEscape, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (!open || !lockBodyScroll) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Calculate scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [open, lockBodyScroll]);

  // Focus management
  useEffect(() => {
    if (open) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      // Focus the drawer
      drawerRef.current?.focus();
    } else {
      // Restore focus when drawer closes
      previousActiveElement.current?.focus();
    }
  }, [open]);

  // Handle overlay click
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose();
      }
    },
    [closeOnOverlayClick, onClose]
  );

  // Don't render anything if not open
  if (!open) return null;

  const drawerClasses = [styles.drawer, styles[placement], styles[size], className]
    .filter(Boolean)
    .join(' ');

  const overlayClasses = [styles.overlay, overlayClassName].filter(Boolean).join(' ');

  const headerClasses = [styles.header, headerClassName].filter(Boolean).join(' ');

  const bodyClasses = [styles.body, bodyClassName].filter(Boolean).join(' ');

  const footerClasses = [styles.footer, footerClassName].filter(Boolean).join(' ');

  return (
    <div className={styles.drawerContainer} style={{ zIndex }} role="presentation">
      {showOverlay && (
        <div className={overlayClasses} onClick={handleOverlayClick} aria-hidden="true" />
      )}
      <div
        ref={drawerRef}
        className={drawerClasses}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === 'string' ? title : undefined}
        tabIndex={-1}
        {...rest}
      >
        {(title || showCloseButton) && (
          <div className={headerClasses}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {showCloseButton && (
              <button
                type="button"
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close drawer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className={bodyClasses}>{children}</div>
        {footer && <div className={footerClasses}>{footer}</div>}
      </div>
    </div>
  );
};

Drawer.displayName = 'Drawer';

export default Drawer;

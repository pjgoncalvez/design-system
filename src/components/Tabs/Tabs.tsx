/**
 * Tabs Component
 *
 * A tabs component for organizing content into switchable panels.
 */

import React, { useState } from 'react';
import { TabsProps } from './types';
import styles from './Tabs.module.css';

/**
 * Tabs component for organizing content into switchable panels
 *
 * @example
 * ```tsx
 * <Tabs items={[
 *   { key: '1', label: 'Tab 1', content: <div>Content 1</div> },
 *   { key: '2', label: 'Tab 2', content: <div>Content 2</div> }
 * ]} />
 *
 * <Tabs
 *   variant="card"
 *   size="large"
 *   activeKey={activeKey}
 *   onChange={setActiveKey}
 *   items={items}
 * />
 * ```
 */
export const Tabs: React.FC<TabsProps> = ({
  items,
  activeKey: controlledActiveKey,
  defaultActiveKey,
  onChange,
  size = 'medium',
  variant = 'line',
  fullWidth = false,
  animated = true,
  className = '',
  tabListClassName = '',
  contentClassName = '',
  ...rest
}) => {
  // Get the default key from items if not provided
  const defaultKey = defaultActiveKey || items[0]?.key;
  const [uncontrolledActiveKey, setUncontrolledActiveKey] = useState(defaultKey);

  // Determine if component is controlled or uncontrolled
  const isControlled = controlledActiveKey !== undefined;
  const activeKey = isControlled ? controlledActiveKey : uncontrolledActiveKey;

  const handleTabClick = (key: string, disabled?: boolean) => {
    if (disabled) return;

    if (!isControlled) {
      setUncontrolledActiveKey(key);
    }

    onChange?.(key);
  };

  const handleKeyDown = (event: React.KeyboardEvent, key: string, disabled?: boolean) => {
    if (disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleTabClick(key, disabled);
    }

    // Arrow key navigation
    const currentIndex = items.findIndex((item) => item.key === activeKey);
    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      nextIndex = (currentIndex + 1) % items.length;
      // Skip disabled tabs
      while (items[nextIndex]?.disabled && nextIndex !== currentIndex) {
        nextIndex = (nextIndex + 1) % items.length;
      }
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      nextIndex = (currentIndex - 1 + items.length) % items.length;
      // Skip disabled tabs
      while (items[nextIndex]?.disabled && nextIndex !== currentIndex) {
        nextIndex = (nextIndex - 1 + items.length) % items.length;
      }
    }

    if (nextIndex !== currentIndex && items[nextIndex]) {
      handleTabClick(items[nextIndex].key, items[nextIndex].disabled);
    }
  };

  const activeItem = items.find((item) => item.key === activeKey);

  const tabsClasses = [
    styles.tabs,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const tabListClasses = [styles.tabList, tabListClassName].filter(Boolean).join(' ');

  const contentClasses = [styles.content, animated && styles.animated, contentClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={tabsClasses} {...rest}>
      <div className={tabListClasses} role="tablist">
        {items.map((item) => {
          const isActive = item.key === activeKey;
          const tabClasses = [
            styles.tab,
            isActive && styles.active,
            item.disabled && styles.disabled,
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-disabled={item.disabled}
              aria-controls={`tabpanel-${item.key}`}
              id={`tab-${item.key}`}
              tabIndex={isActive ? 0 : -1}
              className={tabClasses}
              onClick={() => handleTabClick(item.key, item.disabled)}
              onKeyDown={(e) => handleKeyDown(e, item.key, item.disabled)}
              disabled={item.disabled}
            >
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              <span className={styles.label}>{item.label}</span>
            </button>
          );
        })}
      </div>
      <div
        className={contentClasses}
        role="tabpanel"
        aria-labelledby={`tab-${activeKey}`}
        id={`tabpanel-${activeKey}`}
      >
        {activeItem?.content}
      </div>
    </div>
  );
};

Tabs.displayName = 'Tabs';

export default Tabs;

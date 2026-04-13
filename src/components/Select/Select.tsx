/**
 * Select Component
 *
 * A dropdown select component for choosing a value from a list of options.
 */

import React, { useState, useRef, useEffect, useCallback, useId } from 'react';
import { SelectProps, SelectOption } from './types';
import styles from './Select.module.css';

/**
 * Select component for choosing a value from a list of options
 *
 * @example
 * ```tsx
 * <Select
 *   options={[
 *     { value: 'a', label: 'Option A' },
 *     { value: 'b', label: 'Option B' },
 *   ]}
 *   placeholder="Choose an option"
 *   onChange={(value) => console.log(value)}
 * />
 *
 * <Select
 *   options={options}
 *   value={selected}
 *   onChange={(value) => setSelected(value)}
 *   size="large"
 *   clearable
 * />
 * ```
 */
export const Select: React.FC<SelectProps> = ({
  options,
  value,
  defaultValue,
  placeholder = 'Please select',
  size = 'medium',
  disabled = false,
  error = false,
  clearable = false,
  className = '',
  triggerClassName = '',
  dropdownClassName = '',
  onChange,
  onOpenChange,
  ...rest
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string | number | undefined>(defaultValue);
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxId = useId();

  const selectedValue = isControlled ? value : internalValue;
  const selectedOption = options.find((opt) => opt.value === selectedValue);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        onOpenChange?.(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [open, onOpenChange]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        onOpenChange?.(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  const handleTriggerClick = useCallback(() => {
    if (disabled) return;
    const next = !open;
    setOpen(next);
    onOpenChange?.(next);
  }, [disabled, open, onOpenChange]);

  const handleSelect = useCallback(
    (option: SelectOption) => {
      if (option.disabled) return;

      if (!isControlled) {
        setInternalValue(option.value);
      }
      setOpen(false);
      onOpenChange?.(false);
      onChange?.(option.value, option);
      triggerRef.current?.focus();
    },
    [isControlled, onChange, onOpenChange]
  );

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!isControlled) {
        setInternalValue(undefined);
      }
      onChange?.('' as string, { value: '', label: '' });
    },
    [isControlled, onChange]
  );

  const handleTriggerKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleTriggerClick();
      }
    },
    [handleTriggerClick]
  );

  const triggerClasses = [
    styles.trigger,
    styles[size],
    open && styles.open,
    error && styles.error,
    disabled && styles.disabled,
    triggerClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const wrapperClasses = [styles.selectWrapper, className].filter(Boolean).join(' ');

  const dropdownClasses = [styles.dropdown, styles.optionList, dropdownClassName]
    .filter(Boolean)
    .join(' ');

  const showClear = clearable && selectedOption !== undefined && !disabled;

  return (
    <div ref={wrapperRef} className={wrapperClasses} {...rest}>
      <button
        ref={triggerRef}
        type="button"
        className={triggerClasses}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listboxId : undefined}
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
      >
        <span
          className={[styles.triggerText, !selectedOption && styles.placeholder]
            .filter(Boolean)
            .join(' ')}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        {showClear && (
          <span
            className={styles.clearIcon}
            onClick={handleClear}
            aria-label="Clear selection"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleClear(e as unknown as React.MouseEvent);
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M7 1.167A5.833 5.833 0 1 0 7 12.833 5.833 5.833 0 0 0 7 1.167ZM9.333 9.333 4.667 4.667M4.667 9.333l4.666-4.666"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}

        <span
          className={[styles.iconWrapper, open && styles.rotated].filter(Boolean).join(' ')}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 4.5L6 8L9.5 4.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {open && (
        <ul id={listboxId} className={dropdownClasses} role="listbox" aria-label="Options">
          {options.length === 0 ? (
            <li
              className={styles.emptyText}
              role="option"
              aria-disabled="true"
              aria-selected="false"
            >
              No options
            </li>
          ) : (
            options.map((option) => {
              const isSelected = option.value === selectedValue;
              const optionClasses = [
                styles.option,
                isSelected && styles.optionSelected,
                option.disabled && styles.optionDisabled,
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <li
                  key={option.value}
                  className={optionClasses}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled}
                  onClick={() => handleSelect(option)}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <span className={styles.checkmark} aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6L5 9L10 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
};

Select.displayName = 'Select';

export default Select;

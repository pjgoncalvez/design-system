/**
 * Select Component Types
 *
 * Types for the Select component based on design system specifications.
 */

import { HTMLAttributes, ReactNode } from 'react';

/**
 * Individual option item for the Select dropdown
 */
export interface SelectOption {
  /**
   * The value submitted when this option is selected
   */
  value: string | number;

  /**
   * The label displayed for this option
   */
  label: ReactNode;

  /**
   * Whether this option is disabled
   */
  disabled?: boolean;
}

/**
 * Size options for the Select component
 */
export type SelectSize = 'small' | 'medium' | 'large';

/**
 * Props for the Select component
 */
export interface SelectProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange' | 'defaultValue'
> {
  /**
   * List of options to display in the dropdown
   */
  options: SelectOption[];

  /**
   * Controlled selected value
   */
  value?: string | number;

  /**
   * Default value for uncontrolled usage
   */
  defaultValue?: string | number;

  /**
   * Placeholder text shown when no option is selected
   * @default 'Please select'
   */
  placeholder?: string;

  /**
   * Size of the select trigger
   * @default 'medium'
   */
  size?: SelectSize;

  /**
   * Whether the select is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the select is in an error state
   * @default false
   */
  error?: boolean;

  /**
   * Whether a clear button is shown when a value is selected
   * @default false
   */
  clearable?: boolean;

  /**
   * Additional CSS class name for the trigger element
   */
  triggerClassName?: string;

  /**
   * Additional CSS class name for the dropdown
   */
  dropdownClassName?: string;

  /**
   * Callback fired when the selected value changes
   */
  onChange?: (value: string | number, option: SelectOption) => void;

  /**
   * Callback fired when the dropdown opens or closes
   */
  onOpenChange?: (open: boolean) => void;
}

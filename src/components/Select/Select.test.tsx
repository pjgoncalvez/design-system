/**
 * Select Component Tests
 *
 * Unit tests for the Select component.
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';
import type { SelectOption } from './types';

const baseOptions: SelectOption[] = [
  { value: 'beijing', label: 'Beijing' },
  { value: 'shanghai', label: 'Shanghai' },
  { value: 'guangzhou', label: 'Guangzhou' },
];

const optionsWithDisabled: SelectOption[] = [
  { value: 'beijing', label: 'Beijing' },
  { value: 'shanghai', label: 'Shanghai', disabled: true },
];

describe('Select', () => {
  describe('Rendering', () => {
    it('renders the trigger button', () => {
      render(<Select options={baseOptions} />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders placeholder text by default', () => {
      render(<Select options={baseOptions} placeholder="Pick one" />);
      expect(screen.getByText('Pick one')).toBeInTheDocument();
    });

    it('renders default placeholder when none is provided', () => {
      render(<Select options={baseOptions} />);
      expect(screen.getByText('Please select')).toBeInTheDocument();
    });

    it('renders with defaultValue pre-selected', () => {
      render(<Select options={baseOptions} defaultValue="shanghai" />);
      expect(screen.getByText('Shanghai')).toBeInTheDocument();
    });

    it('renders with controlled value', () => {
      render(<Select options={baseOptions} value="guangzhou" onChange={vi.fn()} />);
      expect(screen.getByText('Guangzhou')).toBeInTheDocument();
    });

    it('does not render dropdown when closed', () => {
      render(<Select options={baseOptions} />);
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('Opening and closing', () => {
    it('opens dropdown on trigger click', () => {
      render(<Select options={baseOptions} />);
      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('closes dropdown on second trigger click', () => {
      render(<Select options={baseOptions} />);
      const trigger = screen.getByRole('button');
      fireEvent.click(trigger);
      fireEvent.click(trigger);
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('closes dropdown when an option is selected', () => {
      render(<Select options={baseOptions} />);
      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByText('Beijing'));
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('closes dropdown on Escape key', () => {
      render(<Select options={baseOptions} />);
      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('listbox')).toBeInTheDocument();
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('calls onOpenChange when dropdown opens', () => {
      const onOpenChange = vi.fn();
      render(<Select options={baseOptions} onOpenChange={onOpenChange} />);
      fireEvent.click(screen.getByRole('button'));
      expect(onOpenChange).toHaveBeenCalledWith(true);
    });

    it('calls onOpenChange when dropdown closes', () => {
      const onOpenChange = vi.fn();
      render(<Select options={baseOptions} onOpenChange={onOpenChange} />);
      const trigger = screen.getByRole('button');
      fireEvent.click(trigger);
      fireEvent.click(trigger);
      expect(onOpenChange).toHaveBeenLastCalledWith(false);
    });
  });

  describe('Option selection', () => {
    it('displays options in the dropdown', () => {
      render(<Select options={baseOptions} />);
      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByText('Beijing')).toBeInTheDocument();
      expect(screen.getByText('Shanghai')).toBeInTheDocument();
      expect(screen.getByText('Guangzhou')).toBeInTheDocument();
    });

    it('calls onChange when an option is selected', () => {
      const handleChange = vi.fn();
      render(<Select options={baseOptions} onChange={handleChange} />);
      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByText('Shanghai'));
      expect(handleChange).toHaveBeenCalledWith('shanghai', baseOptions[1]);
    });

    it('updates displayed value after selection (uncontrolled)', () => {
      render(<Select options={baseOptions} />);
      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByText('Beijing'));
      expect(screen.getByText('Beijing')).toBeInTheDocument();
      expect(screen.queryByText('Please select')).not.toBeInTheDocument();
    });

    it('shows checkmark on the selected option', () => {
      render(<Select options={baseOptions} defaultValue="beijing" />);
      fireEvent.click(screen.getByRole('button'));
      const selectedOption = screen.getByRole('option', { name: /beijing/i });
      expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    });

    it('does not call onChange for disabled options', () => {
      const handleChange = vi.fn();
      render(<Select options={optionsWithDisabled} onChange={handleChange} />);
      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByText('Shanghai'));
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('marks disabled options with aria-disabled', () => {
      render(<Select options={optionsWithDisabled} />);
      fireEvent.click(screen.getByRole('button'));
      const disabledOption = screen.getByRole('option', { name: /shanghai/i });
      expect(disabledOption).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = render(<Select options={baseOptions} size="small" />);
      expect(container.querySelector('button')).toHaveClass('small');
    });

    it('renders medium size by default', () => {
      const { container } = render(<Select options={baseOptions} />);
      expect(container.querySelector('button')).toHaveClass('medium');
    });

    it('renders large size', () => {
      const { container } = render(<Select options={baseOptions} size="large" />);
      expect(container.querySelector('button')).toHaveClass('large');
    });
  });

  describe('Disabled state', () => {
    it('renders with disabled class', () => {
      const { container } = render(<Select options={baseOptions} disabled />);
      expect(container.querySelector('button')).toHaveClass('disabled');
    });

    it('does not open dropdown when disabled', () => {
      render(<Select options={baseOptions} disabled />);
      fireEvent.click(screen.getByRole('button'));
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('sets the button disabled attribute', () => {
      render(<Select options={baseOptions} disabled />);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('Error state', () => {
    it('applies error class to trigger', () => {
      const { container } = render(<Select options={baseOptions} error />);
      expect(container.querySelector('button')).toHaveClass('error');
    });
  });

  describe('Clearable', () => {
    it('shows clear button when clearable and value is selected', () => {
      render(<Select options={baseOptions} defaultValue="beijing" clearable />);
      expect(screen.getByRole('button', { name: 'Clear selection' })).toBeInTheDocument();
    });

    it('does not show clear button when no value is selected', () => {
      render(<Select options={baseOptions} clearable />);
      expect(screen.queryByRole('button', { name: 'Clear selection' })).not.toBeInTheDocument();
    });

    it('clears value on clear button click', () => {
      render(<Select options={baseOptions} defaultValue="beijing" clearable />);
      expect(screen.getByText('Beijing')).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: 'Clear selection' }));
      expect(screen.getByText('Please select')).toBeInTheDocument();
    });

    it('does not open dropdown when clear button is clicked', () => {
      render(<Select options={baseOptions} defaultValue="beijing" clearable />);
      fireEvent.click(screen.getByRole('button', { name: 'Clear selection' }));
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('does not show clear button when disabled', () => {
      render(<Select options={baseOptions} defaultValue="beijing" clearable disabled />);
      expect(screen.queryByRole('button', { name: 'Clear selection' })).not.toBeInTheDocument();
    });
  });

  describe('Empty options', () => {
    it('renders "No options" when options array is empty', () => {
      render(<Select options={[]} />);
      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByText('No options')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('sets aria-haspopup="listbox" on trigger', () => {
      render(<Select options={baseOptions} />);
      expect(screen.getByRole('button')).toHaveAttribute('aria-haspopup', 'listbox');
    });

    it('sets aria-expanded="false" when closed', () => {
      render(<Select options={baseOptions} />);
      expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
    });

    it('sets aria-expanded="true" when open', () => {
      render(<Select options={baseOptions} />);
      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
    });

    it('opens with Enter key', () => {
      render(<Select options={baseOptions} />);
      fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' });
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('opens with Space key', () => {
      render(<Select options={baseOptions} />);
      fireEvent.keyDown(screen.getByRole('button'), { key: ' ' });
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('options have role="option"', () => {
      render(<Select options={baseOptions} />);
      fireEvent.click(screen.getByRole('button'));
      const optionEls = screen.getAllByRole('option');
      expect(optionEls).toHaveLength(baseOptions.length);
    });

    it('supports custom className', () => {
      const { container } = render(<Select options={baseOptions} className="custom-select" />);
      expect(container.firstChild).toHaveClass('custom-select');
    });
  });

  describe('Controlled mode', () => {
    it('reflects externally controlled value', () => {
      const { rerender } = render(
        <Select options={baseOptions} value="beijing" onChange={vi.fn()} />
      );
      expect(screen.getByText('Beijing')).toBeInTheDocument();

      rerender(<Select options={baseOptions} value="shanghai" onChange={vi.fn()} />);
      expect(screen.getByText('Shanghai')).toBeInTheDocument();
    });

    it('calls onChange with the new value and option', () => {
      const handleChange = vi.fn();
      render(<Select options={baseOptions} value="beijing" onChange={handleChange} />);
      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByText('Shanghai'));
      expect(handleChange).toHaveBeenCalledWith('shanghai', baseOptions[1]);
    });
  });
});

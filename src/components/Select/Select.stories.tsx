/**
 * Select Component Stories
 *
 * Storybook stories showcasing the Select component variants and usage.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Select } from './Select';
import type { SelectOption } from './types';

const baseOptions: SelectOption[] = [
  { value: 'beijing', label: 'Beijing' },
  { value: 'shanghai', label: 'Shanghai' },
  { value: 'guangzhou', label: 'Guangzhou' },
  { value: 'shenzhen', label: 'Shenzhen' },
  { value: 'hangzhou', label: 'Hangzhou' },
];

const optionsWithDisabled: SelectOption[] = [
  { value: 'beijing', label: 'Beijing' },
  { value: 'shanghai', label: 'Shanghai' },
  { value: 'guangzhou', label: 'Guangzhou', disabled: true },
  { value: 'shenzhen', label: 'Shenzhen', disabled: true },
  { value: 'hangzhou', label: 'Hangzhou' },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Select component for choosing a value from a list of options. Supports controlled and uncontrolled usage, sizes, error state, and a clearable option.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the select trigger',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Whether the select is in an error state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Whether a clear button is shown when a value is selected',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when no option is selected',
      table: {
        defaultValue: { summary: 'Please select' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '240px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default select with a list of options
 */
export const Default: Story = {
  args: {
    options: baseOptions,
    placeholder: 'Please select',
  },
};

/**
 * Select with a pre-selected default value (uncontrolled)
 */
export const WithDefaultValue: Story = {
  args: {
    options: baseOptions,
    defaultValue: 'shanghai',
  },
};

/**
 * Small size select
 */
export const Small: Story = {
  args: {
    options: baseOptions,
    size: 'small',
    placeholder: 'Small select',
  },
};

/**
 * Medium size select (default)
 */
export const Medium: Story = {
  args: {
    options: baseOptions,
    size: 'medium',
    placeholder: 'Medium select',
  },
};

/**
 * Large size select
 */
export const Large: Story = {
  args: {
    options: baseOptions,
    size: 'large',
    placeholder: 'Large select',
  },
};

/**
 * Disabled select — prevents interaction
 */
export const Disabled: Story = {
  args: {
    options: baseOptions,
    disabled: true,
    placeholder: 'Disabled select',
  },
};

/**
 * Disabled with a pre-selected value
 */
export const DisabledWithValue: Story = {
  args: {
    options: baseOptions,
    disabled: true,
    defaultValue: 'beijing',
  },
};

/**
 * Select in an error state
 */
export const Error: Story = {
  args: {
    options: baseOptions,
    error: true,
    placeholder: 'Select a city',
  },
};

/**
 * Select with clearable enabled — shows a clear button once a value is chosen
 */
export const Clearable: Story = {
  args: {
    options: baseOptions,
    defaultValue: 'guangzhou',
    clearable: true,
  },
};

/**
 * Options with some items disabled
 */
export const WithDisabledOptions: Story = {
  args: {
    options: optionsWithDisabled,
    placeholder: 'Select a city',
  },
};

/**
 * Empty options list
 */
export const EmptyOptions: Story = {
  args: {
    options: [],
    placeholder: 'No options available',
  },
};

/**
 * Controlled select — value managed externally via useState
 */
export const Controlled: Story = {
  args: { options: baseOptions, placeholder: 'Controlled select' },
  render: () => {
    const [value, setValue] = useState<string | number>('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '240px' }}>
        <Select
          options={baseOptions}
          value={value || undefined}
          placeholder="Controlled select"
          onChange={(val) => setValue(val)}
          clearable
        />
        <p style={{ margin: 0, fontSize: '13px', color: '#86909c' }}>
          Selected value: <strong style={{ color: '#1d2129' }}>{value || '(none)'}</strong>
        </p>
      </div>
    );
  },
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  args: { options: baseOptions },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '240px' }}>
      <Select options={baseOptions} size="small" placeholder="Small" />
      <Select options={baseOptions} size="medium" placeholder="Medium" />
      <Select options={baseOptions} size="large" placeholder="Large" />
    </div>
  ),
};

/**
 * All states showcase
 */
export const AllStates: Story = {
  args: { options: baseOptions },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '240px' }}>
      <Select options={baseOptions} placeholder="Default" />
      <Select options={baseOptions} defaultValue="beijing" clearable placeholder="Clearable" />
      <Select options={baseOptions} error placeholder="Error state" />
      <Select options={baseOptions} disabled placeholder="Disabled" />
      <Select
        options={baseOptions}
        disabled
        defaultValue="beijing"
        placeholder="Disabled with value"
      />
    </div>
  ),
};

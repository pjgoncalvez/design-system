/**
 * Badge Component Stories
 *
 * Storybook stories showcasing the Badge component variants and usage.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Badge component for displaying status indicators, counts, or labels with various visual styles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      description: 'Visual variant of the badge',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the badge',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    dot: {
      control: 'boolean',
      description: 'Whether to show the badge as a dot (without text)',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Content to display inside the badge',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default badge with gray background
 */
export const Default: Story = {
  args: {
    children: 'Default',
  },
};

/**
 * Primary badge for main actions
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

/**
 * Success badge for positive states
 */
export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

/**
 * Warning badge for caution states
 */
export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

/**
 * Danger badge for error or critical states
 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

/**
 * Small badge size
 */
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small',
    variant: 'primary',
  },
};

/**
 * Medium badge size (default)
 */
export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium',
    variant: 'primary',
  },
};

/**
 * Large badge size
 */
export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large',
    variant: 'primary',
  },
};

/**
 * Dot badge without text
 */
export const Dot: Story = {
  args: {
    dot: true,
    variant: 'danger',
  },
};

/**
 * Badge with number count
 */
export const WithNumber: Story = {
  args: {
    variant: 'danger',
    children: '99+',
  },
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  ),
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge variant="primary" size="small">
        Small
      </Badge>
      <Badge variant="primary" size="medium">
        Medium
      </Badge>
      <Badge variant="primary" size="large">
        Large
      </Badge>
    </div>
  ),
};

/**
 * Dot badges in different sizes
 */
export const DotSizes: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Badge variant="danger" size="small" dot />
      <Badge variant="danger" size="medium" dot />
      <Badge variant="danger" size="large" dot />
    </div>
  ),
};

/**
 * Badge with icon usage example
 */
export const WithIcon: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{ fontSize: '24px' }}>🔔</span>
        <Badge
          variant="danger"
          size="small"
          style={{
            position: 'absolute',
            top: '-4px',
            right: '-8px',
          }}
        >
          5
        </Badge>
      </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{ fontSize: '24px' }}>✉️</span>
        <Badge
          variant="danger"
          size="small"
          dot
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
          }}
        />
      </div>
    </div>
  ),
};

/**
 * Button Component Stories
 *
 * Storybook stories showcasing the Button component variants and usage.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Button component for user interactions with various styles, sizes, and states including loading and disabled.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost'],
      description: 'Visual variant of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Content to display inside the button',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Primary button for main actions
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

/**
 * Secondary button for less prominent actions
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

/**
 * Success button for positive actions
 */
export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
};

/**
 * Warning button for caution actions
 */
export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Button',
  },
};

/**
 * Danger button for destructive actions
 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

/**
 * Ghost button for subtle actions
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

/**
 * Small button size
 */
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

/**
 * Medium button size (default)
 */
export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Button',
  },
};

/**
 * Large button size
 */
export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

/**
 * Disabled button state
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

/**
 * Loading button state
 */
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading...',
  },
};

/**
 * Full width button
 */
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
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
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

/**
 * Disabled states for all variants
 */
export const DisabledStates: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="success" disabled>
        Success
      </Button>
      <Button variant="warning" disabled>
        Warning
      </Button>
      <Button variant="danger" disabled>
        Danger
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
    </div>
  ),
};

/**
 * Loading states for all variants
 */
export const LoadingStates: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="primary" loading>
        Primary
      </Button>
      <Button variant="secondary" loading>
        Secondary
      </Button>
      <Button variant="success" loading>
        Success
      </Button>
      <Button variant="warning" loading>
        Warning
      </Button>
      <Button variant="danger" loading>
        Danger
      </Button>
      <Button variant="ghost" loading>
        Ghost
      </Button>
    </div>
  ),
};

/**
 * Button with icon usage example
 */
export const WithIcon: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="primary">
        <span>🔍</span>
        <span>Search</span>
      </Button>
      <Button variant="success">
        <span>✓</span>
        <span>Save</span>
      </Button>
      <Button variant="danger">
        <span>✕</span>
        <span>Delete</span>
      </Button>
    </div>
  ),
};

/**
 * Button group example
 */
export const ButtonGroup: Story = {
  args: {},
  render: () => (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <Button variant="secondary" size="small">
          Cancel
        </Button>
        <Button variant="primary" size="small">
          Confirm
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="secondary" size="large">
          Cancel
        </Button>
        <Button variant="primary" size="large">
          Confirm
        </Button>
      </div>
    </div>
  ),
};

/**
 * Interactive example with click handler
 */
export const Interactive: Story = {
  args: {},
  render: () => (
    <Button
      variant="primary"
      onClick={() => {
        alert('Button clicked!');
      }}
    >
      Click Me
    </Button>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from './Stack';

const meta = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Stack component provides consistent spacing between items in a single direction (vertical or horizontal).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const StackItem = ({
  children,
  color = '#667eea',
}: {
  children?: React.ReactNode;
  color?: string;
}) => (
  <div
    style={{
      background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
      color: 'white',
      padding: '1rem 1.5rem',
      borderRadius: '8px',
    }}
  >
    {children}
  </div>
);

export const VerticalStack: Story = {
  args: {} as never,
  render: () => (
    <Stack direction="vertical" spacing="md">
      <StackItem>First Item</StackItem>
      <StackItem>Second Item</StackItem>
      <StackItem>Third Item</StackItem>
    </Stack>
  ),
};

export const HorizontalStack: Story = {
  args: {} as never,
  render: () => (
    <Stack direction="horizontal" spacing="md">
      <StackItem>First</StackItem>
      <StackItem>Second</StackItem>
      <StackItem>Third</StackItem>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stack with horizontal direction for inline layouts.',
      },
    },
  },
};

export const VariableSpacing: Story = {
  args: {} as never,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginTop: 0 }}>Extra Small (4px)</h4>
        <Stack direction="vertical" spacing="xs">
          <StackItem color="#10b981">Item</StackItem>
          <StackItem color="#10b981">Item</StackItem>
          <StackItem color="#10b981">Item</StackItem>
        </Stack>
      </div>
      <div>
        <h4>Small (8px)</h4>
        <Stack direction="vertical" spacing="sm">
          <StackItem color="#3b82f6">Item</StackItem>
          <StackItem color="#3b82f6">Item</StackItem>
          <StackItem color="#3b82f6">Item</StackItem>
        </Stack>
      </div>
      <div>
        <h4>Medium (16px)</h4>
        <Stack direction="vertical" spacing="md">
          <StackItem color="#8b5cf6">Item</StackItem>
          <StackItem color="#8b5cf6">Item</StackItem>
          <StackItem color="#8b5cf6">Item</StackItem>
        </Stack>
      </div>
      <div>
        <h4>Large (24px)</h4>
        <Stack direction="vertical" spacing="lg">
          <StackItem color="#ef4444">Item</StackItem>
          <StackItem color="#ef4444">Item</StackItem>
          <StackItem color="#ef4444">Item</StackItem>
        </Stack>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of different spacing sizes.',
      },
    },
  },
};

export const WithDivider: Story = {
  args: {} as never,
  render: () => (
    <Stack
      direction="vertical"
      spacing="md"
      divider={<hr style={{ margin: 0, border: 'none', borderTop: '2px solid #e5e7eb' }} />}
    >
      <StackItem>First Item</StackItem>
      <StackItem>Second Item</StackItem>
      <StackItem>Third Item</StackItem>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stack with divider elements between items.',
      },
    },
  },
};

export const HorizontalWithDivider: Story = {
  args: {} as never,
  render: () => (
    <Stack
      direction="horizontal"
      spacing="md"
      divider={<div style={{ width: '2px', background: '#e5e7eb', alignSelf: 'stretch' }} />}
    >
      <StackItem>First</StackItem>
      <StackItem>Second</StackItem>
      <StackItem>Third</StackItem>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Horizontal stack with vertical dividers between items.',
      },
    },
  },
};

export const Wrapping: Story = {
  args: {} as never,
  render: () => (
    <Stack direction="horizontal" spacing="md" wrap>
      <StackItem>Item 1</StackItem>
      <StackItem>Item 2</StackItem>
      <StackItem>Item 3</StackItem>
      <StackItem>Item 4</StackItem>
      <StackItem>Item 5</StackItem>
      <StackItem>Item 6</StackItem>
      <StackItem>Item 7</StackItem>
      <StackItem>Item 8</StackItem>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Horizontal stack with wrapping enabled. Items wrap to new lines when space runs out.',
      },
    },
  },
};

export const Alignment: Story = {
  args: {} as never,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginTop: 0 }}>Align: Start</h4>
        <Stack
          direction="horizontal"
          spacing="md"
          align="start"
          style={{ minHeight: '120px', border: '2px dashed #ccc', padding: '1rem' }}
        >
          <StackItem>Tall Content Here</StackItem>
          <StackItem>Short</StackItem>
          <StackItem>Medium</StackItem>
        </Stack>
      </div>
      <div>
        <h4>Align: Center</h4>
        <Stack
          direction="horizontal"
          spacing="md"
          align="center"
          style={{ minHeight: '120px', border: '2px dashed #ccc', padding: '1rem' }}
        >
          <StackItem>Tall Content Here</StackItem>
          <StackItem>Short</StackItem>
          <StackItem>Medium</StackItem>
        </Stack>
      </div>
      <div>
        <h4>Align: End</h4>
        <Stack
          direction="horizontal"
          spacing="md"
          align="end"
          style={{ minHeight: '120px', border: '2px dashed #ccc', padding: '1rem' }}
        >
          <StackItem>Tall Content Here</StackItem>
          <StackItem>Short</StackItem>
          <StackItem>Medium</StackItem>
        </Stack>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different alignment options for stack items.',
      },
    },
  },
};

export const Justification: Story = {
  args: {} as never,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginTop: 0 }}>Justify: Start</h4>
        <Stack direction="horizontal" spacing="md" justify="start">
          <StackItem>Item</StackItem>
          <StackItem>Item</StackItem>
          <StackItem>Item</StackItem>
        </Stack>
      </div>
      <div>
        <h4>Justify: Center</h4>
        <Stack direction="horizontal" spacing="md" justify="center">
          <StackItem>Item</StackItem>
          <StackItem>Item</StackItem>
          <StackItem>Item</StackItem>
        </Stack>
      </div>
      <div>
        <h4>Justify: Space Between</h4>
        <Stack direction="horizontal" spacing="md" justify="space-between">
          <StackItem>Item</StackItem>
          <StackItem>Item</StackItem>
          <StackItem>Item</StackItem>
        </Stack>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different justification options for distributing stack items.',
      },
    },
  },
};

export const ResponsiveSpacing: Story = {
  args: {} as never,
  render: () => (
    <Stack direction="vertical" spacing={{ xs: 'sm', md: 'lg', xl: '2xl' }}>
      <StackItem>Responsive Spacing Item 1</StackItem>
      <StackItem>Responsive Spacing Item 2</StackItem>
      <StackItem>Responsive Spacing Item 3</StackItem>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Stack with responsive spacing that changes at different breakpoints: small on mobile, large on tablets, extra-large on desktop.',
      },
    },
  },
};

export const FormLayout: Story = {
  args: {} as never,
  render: () => (
    <Stack direction="vertical" spacing="lg" style={{ maxWidth: '400px' }}>
      <div>
        <label
          style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#374151' }}
        >
          Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
          }}
        />
      </div>
      <div>
        <label
          style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#374151' }}
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
          }}
        />
      </div>
      <div>
        <label
          style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#374151' }}
        >
          Message
        </label>
        <textarea
          placeholder="Enter your message"
          rows={4}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
          }}
        />
      </div>
      <button
        style={{
          padding: '0.75rem 1.5rem',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stack used for form field layout with consistent spacing.',
      },
    },
  },
};

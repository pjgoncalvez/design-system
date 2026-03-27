import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from './Flex';

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Flex component provides a generic flex container with full control over flex properties.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const FlexItem = ({
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

export const Row: Story = {
  args: {} as never,
  render: () => (
    <Flex direction="row" gap="md">
      <FlexItem>Item 1</FlexItem>
      <FlexItem>Item 2</FlexItem>
      <FlexItem>Item 3</FlexItem>
    </Flex>
  ),
};

export const Column: Story = {
  args: {} as never,
  render: () => (
    <Flex direction="column" gap="md">
      <FlexItem>Item 1</FlexItem>
      <FlexItem>Item 2</FlexItem>
      <FlexItem>Item 3</FlexItem>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Flex container with column direction.',
      },
    },
  },
};

export const Wrapping: Story = {
  args: {} as never,
  render: () => (
    <Flex direction="row" wrap="wrap" gap="md">
      <FlexItem>Item 1</FlexItem>
      <FlexItem>Item 2</FlexItem>
      <FlexItem>Item 3</FlexItem>
      <FlexItem>Item 4</FlexItem>
      <FlexItem>Item 5</FlexItem>
      <FlexItem>Item 6</FlexItem>
      <FlexItem>Item 7</FlexItem>
      <FlexItem>Item 8</FlexItem>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Flex container with wrapping enabled.',
      },
    },
  },
};

export const AlignmentOptions: Story = {
  args: {} as never,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginTop: 0 }}>Align: Start</h4>
        <Flex
          direction="row"
          gap="md"
          align="start"
          style={{ minHeight: '120px', border: '2px dashed #ccc', padding: '1rem' }}
        >
          <FlexItem>Tall Content Here</FlexItem>
          <FlexItem>Short</FlexItem>
          <FlexItem>Medium</FlexItem>
        </Flex>
      </div>
      <div>
        <h4>Align: Center</h4>
        <Flex
          direction="row"
          gap="md"
          align="center"
          style={{ minHeight: '120px', border: '2px dashed #ccc', padding: '1rem' }}
        >
          <FlexItem>Tall Content Here</FlexItem>
          <FlexItem>Short</FlexItem>
          <FlexItem>Medium</FlexItem>
        </Flex>
      </div>
      <div>
        <h4>Align: End</h4>
        <Flex
          direction="row"
          gap="md"
          align="end"
          style={{ minHeight: '120px', border: '2px dashed #ccc', padding: '1rem' }}
        >
          <FlexItem>Tall Content Here</FlexItem>
          <FlexItem>Short</FlexItem>
          <FlexItem>Medium</FlexItem>
        </Flex>
      </div>
      <div>
        <h4>Align: Stretch</h4>
        <Flex
          direction="row"
          gap="md"
          align="stretch"
          style={{ minHeight: '120px', border: '2px dashed #ccc', padding: '1rem' }}
        >
          <FlexItem>Item 1</FlexItem>
          <FlexItem>Item 2</FlexItem>
          <FlexItem>Item 3</FlexItem>
        </Flex>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different alignment options for flex items.',
      },
    },
  },
};

export const JustificationOptions: Story = {
  args: {} as never,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginTop: 0 }}>Justify: Start</h4>
        <Flex direction="row" gap="md" justify="start">
          <FlexItem>Item</FlexItem>
          <FlexItem>Item</FlexItem>
          <FlexItem>Item</FlexItem>
        </Flex>
      </div>
      <div>
        <h4>Justify: Center</h4>
        <Flex direction="row" gap="md" justify="center">
          <FlexItem>Item</FlexItem>
          <FlexItem>Item</FlexItem>
          <FlexItem>Item</FlexItem>
        </Flex>
      </div>
      <div>
        <h4>Justify: End</h4>
        <Flex direction="row" gap="md" justify="end">
          <FlexItem>Item</FlexItem>
          <FlexItem>Item</FlexItem>
          <FlexItem>Item</FlexItem>
        </Flex>
      </div>
      <div>
        <h4>Justify: Space Between</h4>
        <Flex direction="row" gap="md" justify="space-between">
          <FlexItem>Item</FlexItem>
          <FlexItem>Item</FlexItem>
          <FlexItem>Item</FlexItem>
        </Flex>
      </div>
      <div>
        <h4>Justify: Space Around</h4>
        <Flex direction="row" gap="md" justify="space-around">
          <FlexItem>Item</FlexItem>
          <FlexItem>Item</FlexItem>
          <FlexItem>Item</FlexItem>
        </Flex>
      </div>
      <div>
        <h4>Justify: Space Evenly</h4>
        <Flex direction="row" gap="md" justify="space-evenly">
          <FlexItem>Item</FlexItem>
          <FlexItem>Item</FlexItem>
          <FlexItem>Item</FlexItem>
        </Flex>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different justification options for distributing flex items.',
      },
    },
  },
};

export const VariableGap: Story = {
  args: {} as never,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginTop: 0 }}>Small Gap (8px)</h4>
        <Flex direction="row" gap="sm">
          <FlexItem color="#10b981">Item</FlexItem>
          <FlexItem color="#10b981">Item</FlexItem>
          <FlexItem color="#10b981">Item</FlexItem>
        </Flex>
      </div>
      <div>
        <h4>Medium Gap (16px)</h4>
        <Flex direction="row" gap="md">
          <FlexItem color="#3b82f6">Item</FlexItem>
          <FlexItem color="#3b82f6">Item</FlexItem>
          <FlexItem color="#3b82f6">Item</FlexItem>
        </Flex>
      </div>
      <div>
        <h4>Large Gap (24px)</h4>
        <Flex direction="row" gap="lg">
          <FlexItem color="#8b5cf6">Item</FlexItem>
          <FlexItem color="#8b5cf6">Item</FlexItem>
          <FlexItem color="#8b5cf6">Item</FlexItem>
        </Flex>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of different gap sizes.',
      },
    },
  },
};

export const InlineFlex: Story = {
  args: {} as never,
  render: () => (
    <div>
      <p>This is some text with an inline flex container:</p>
      <Flex direction="row" gap="sm" inline align="center">
        <FlexItem>Inline</FlexItem>
        <FlexItem>Flex</FlexItem>
        <FlexItem>Items</FlexItem>
      </Flex>
      <p>And more text after the inline flex container.</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inline flex container that flows with text.',
      },
    },
  },
};

export const CenteredContent: Story = {
  args: {} as never,
  render: () => (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{ minHeight: '400px', border: '2px dashed #ccc' }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 1rem 0' }}>Centered Content</h2>
        <p style={{ margin: '0 0 1.5rem 0', color: '#6b7280' }}>
          Perfect centering both vertically and horizontally
        </p>
        <button
          style={{
            padding: '0.75rem 1.5rem',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Get Started
        </button>
      </div>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Perfect centering using flex align and justify properties.',
      },
    },
  },
};

export const Header: Story = {
  args: {} as never,
  render: () => (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      gap="md"
      style={{ padding: '1rem 2rem', background: '#1f2937', color: 'white', borderRadius: '8px' }}
    >
      <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Logo</div>
      <Flex direction="row" gap="lg" align="center">
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          About
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          Services
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          Contact
        </a>
      </Flex>
      <button
        style={{
          padding: '0.5rem 1rem',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Sign In
      </button>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Header layout using Flex with space-between justification.',
      },
    },
  },
};

export const CardLayout: Story = {
  args: {} as never,
  render: () => (
    <Flex
      direction="column"
      gap="lg"
      style={{
        maxWidth: '400px',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '12px',
        }}
      />
      <Flex direction="column" gap="sm">
        <h3 style={{ margin: 0 }}>Card Title</h3>
        <p style={{ margin: 0, color: '#6b7280' }}>
          This is a card layout using Flex for vertical stacking with consistent spacing.
        </p>
      </Flex>
      <Flex direction="row" gap="md">
        <button
          style={{
            flex: 1,
            padding: '0.75rem',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Primary
        </button>
        <button
          style={{
            flex: 1,
            padding: '0.75rem',
            background: '#f3f4f6',
            color: '#374151',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Secondary
        </button>
      </Flex>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card layout combining Flex containers for structure.',
      },
    },
  },
};

export const ResponsiveGap: Story = {
  args: {} as never,
  render: () => (
    <Flex direction="row" wrap="wrap" gap={{ xs: 'sm', md: 'lg', xl: '2xl' }}>
      <FlexItem>Item 1</FlexItem>
      <FlexItem>Item 2</FlexItem>
      <FlexItem>Item 3</FlexItem>
      <FlexItem>Item 4</FlexItem>
      <FlexItem>Item 5</FlexItem>
      <FlexItem>Item 6</FlexItem>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Flex with responsive gap that changes at different breakpoints: small on mobile, large on tablets, extra-large on desktop.',
      },
    },
  },
};

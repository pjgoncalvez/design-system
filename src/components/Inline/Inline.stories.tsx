import type { Meta, StoryObj } from '@storybook/react-vite';
import { Inline } from './Inline';

const meta = {
  title: 'Layout/Inline',
  component: Inline,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Inline component wraps items horizontally with consistent spacing, automatically wrapping to new lines.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Inline>;

export default meta;
type Story = StoryObj<typeof meta>;

const Tag = ({ children, color = '#3b82f6' }: { children?: React.ReactNode; color?: string }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.5rem 1rem',
      background: color,
      color: 'white',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: 500,
    }}
  >
    {children}
  </div>
);

export const Basic: Story = {
  args: {} as never,
  render: () => (
    <Inline spacing="sm">
      <Tag>React</Tag>
      <Tag>TypeScript</Tag>
      <Tag>Vite</Tag>
      <Tag>Storybook</Tag>
      <Tag>Vitest</Tag>
    </Inline>
  ),
};

export const TagCloud: Story = {
  args: {} as never,
  render: () => (
    <Inline spacing="md">
      <Tag color="#ef4444">JavaScript</Tag>
      <Tag color="#f59e0b">TypeScript</Tag>
      <Tag color="#10b981">React</Tag>
      <Tag color="#3b82f6">Vue</Tag>
      <Tag color="#8b5cf6">Angular</Tag>
      <Tag color="#ec4899">Svelte</Tag>
      <Tag color="#06b6d4">Next.js</Tag>
      <Tag color="#84cc16">Nuxt</Tag>
      <Tag color="#f97316">Remix</Tag>
      <Tag color="#6366f1">Astro</Tag>
      <Tag color="#14b8a6">SolidJS</Tag>
      <Tag color="#a855f7">Qwik</Tag>
    </Inline>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tag cloud that wraps naturally when space runs out.',
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
        <Inline spacing="xs">
          <Tag color="#10b981">Tag</Tag>
          <Tag color="#10b981">Tag</Tag>
          <Tag color="#10b981">Tag</Tag>
          <Tag color="#10b981">Tag</Tag>
        </Inline>
      </div>
      <div>
        <h4>Small (8px)</h4>
        <Inline spacing="sm">
          <Tag color="#3b82f6">Tag</Tag>
          <Tag color="#3b82f6">Tag</Tag>
          <Tag color="#3b82f6">Tag</Tag>
          <Tag color="#3b82f6">Tag</Tag>
        </Inline>
      </div>
      <div>
        <h4>Medium (16px)</h4>
        <Inline spacing="md">
          <Tag color="#8b5cf6">Tag</Tag>
          <Tag color="#8b5cf6">Tag</Tag>
          <Tag color="#8b5cf6">Tag</Tag>
          <Tag color="#8b5cf6">Tag</Tag>
        </Inline>
      </div>
      <div>
        <h4>Large (24px)</h4>
        <Inline spacing="lg">
          <Tag color="#ef4444">Tag</Tag>
          <Tag color="#ef4444">Tag</Tag>
          <Tag color="#ef4444">Tag</Tag>
          <Tag color="#ef4444">Tag</Tag>
        </Inline>
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

export const Alignment: Story = {
  args: {} as never,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginTop: 0 }}>Align: Start</h4>
        <Inline spacing="md" align="start" style={{ border: '2px dashed #ccc', padding: '1rem' }}>
          <Tag>Small</Tag>
          <div style={{ padding: '1rem', background: '#f3f4f6', borderRadius: '8px' }}>
            Taller Item
          </div>
          <Tag>Small</Tag>
        </Inline>
      </div>
      <div>
        <h4>Align: Center (default)</h4>
        <Inline spacing="md" align="center" style={{ border: '2px dashed #ccc', padding: '1rem' }}>
          <Tag>Small</Tag>
          <div style={{ padding: '1rem', background: '#f3f4f6', borderRadius: '8px' }}>
            Taller Item
          </div>
          <Tag>Small</Tag>
        </Inline>
      </div>
      <div>
        <h4>Align: End</h4>
        <Inline spacing="md" align="end" style={{ border: '2px dashed #ccc', padding: '1rem' }}>
          <Tag>Small</Tag>
          <div style={{ padding: '1rem', background: '#f3f4f6', borderRadius: '8px' }}>
            Taller Item
          </div>
          <Tag>Small</Tag>
        </Inline>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different alignment options for inline items.',
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
        <Inline spacing="md" justify="start">
          <Tag>Item</Tag>
          <Tag>Item</Tag>
          <Tag>Item</Tag>
        </Inline>
      </div>
      <div>
        <h4>Justify: Center</h4>
        <Inline spacing="md" justify="center">
          <Tag>Item</Tag>
          <Tag>Item</Tag>
          <Tag>Item</Tag>
        </Inline>
      </div>
      <div>
        <h4>Justify: End</h4>
        <Inline spacing="md" justify="end">
          <Tag>Item</Tag>
          <Tag>Item</Tag>
          <Tag>Item</Tag>
        </Inline>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different justification options for distributing inline items.',
      },
    },
  },
};

export const Breadcrumbs: Story = {
  args: {} as never,
  render: () => (
    <Inline spacing="xs" align="center">
      <a href="#" style={{ color: '#3b82f6', textDecoration: 'none' }}>
        Home
      </a>
      <span style={{ color: '#9ca3af' }}>/</span>
      <a href="#" style={{ color: '#3b82f6', textDecoration: 'none' }}>
        Products
      </a>
      <span style={{ color: '#9ca3af' }}>/</span>
      <a href="#" style={{ color: '#3b82f6', textDecoration: 'none' }}>
        Electronics
      </a>
      <span style={{ color: '#9ca3af' }}>/</span>
      <span style={{ color: '#6b7280' }}>Laptop</span>
    </Inline>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inline layout used for breadcrumb navigation.',
      },
    },
  },
};

export const Toolbar: Story = {
  args: {} as never,
  render: () => (
    <Inline spacing="sm" align="center">
      <button
        style={{
          padding: '0.5rem 1rem',
          background: '#f3f4f6',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Bold
      </button>
      <button
        style={{
          padding: '0.5rem 1rem',
          background: '#f3f4f6',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Italic
      </button>
      <button
        style={{
          padding: '0.5rem 1rem',
          background: '#f3f4f6',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Underline
      </button>
      <div style={{ width: '1px', height: '24px', background: '#d1d5db' }} />
      <button
        style={{
          padding: '0.5rem 1rem',
          background: '#f3f4f6',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Align Left
      </button>
      <button
        style={{
          padding: '0.5rem 1rem',
          background: '#f3f4f6',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Align Center
      </button>
      <button
        style={{
          padding: '0.5rem 1rem',
          background: '#f3f4f6',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Align Right
      </button>
    </Inline>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inline layout used for toolbar buttons.',
      },
    },
  },
};

export const ResponsiveSpacing: Story = {
  args: {} as never,
  render: () => (
    <Inline spacing={{ xs: 'xs', md: 'md', lg: 'xl' }}>
      <Tag>Tag 1</Tag>
      <Tag>Tag 2</Tag>
      <Tag>Tag 3</Tag>
      <Tag>Tag 4</Tag>
      <Tag>Tag 5</Tag>
      <Tag>Tag 6</Tag>
      <Tag>Tag 7</Tag>
      <Tag>Tag 8</Tag>
    </Inline>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Inline with responsive spacing that changes at different breakpoints: extra-small on mobile, medium on tablets, extra-large on desktop.',
      },
    },
  },
};

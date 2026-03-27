import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './Container';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Container component provides responsive max-widths at each breakpoint and centers content.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <div
    style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '2rem',
      borderRadius: '8px',
      textAlign: 'center',
    }}
  >
    <h2 style={{ margin: '0 0 1rem 0' }}>Container Content</h2>
    <p style={{ margin: 0, opacity: 0.9 }}>
      Resize the browser window to see the responsive max-width behavior.
    </p>
  </div>
);

export const Default: Story = {
  args: {} as never,
  render: () => (
    <Container>
      <DemoContent />
    </Container>
  ),
};

export const Fluid: Story = {
  args: {} as never,
  render: () => (
    <Container fluid>
      <DemoContent />
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Fluid container takes full width without max-width constraint.',
      },
    },
  },
};

export const CustomMaxWidth: Story = {
  args: {} as never,
  render: () => (
    <Container maxWidth="600px">
      <DemoContent />
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Container with custom max-width override.',
      },
    },
  },
};

export const NoPadding: Story = {
  args: {} as never,
  render: () => (
    <Container disablePadding>
      <div
        style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{ margin: '0 0 1rem 0' }}>No Padding Container</h2>
        <p style={{ margin: 0, opacity: 0.9 }}>Content extends to the edges of the container.</p>
      </div>
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Container without default horizontal padding.',
      },
    },
  },
};

export const Nested: Story = {
  args: {} as never,
  render: () => (
    <Container>
      <div style={{ background: '#e0e7ff', padding: '2rem', borderRadius: '8px' }}>
        <h2 style={{ marginTop: 0 }}>Outer Container</h2>
        <Container maxWidth="400px">
          <div
            style={{
              background: '#c7d2fe',
              padding: '1.5rem',
              borderRadius: '8px',
            }}
          >
            <h3 style={{ marginTop: 0 }}>Nested Container</h3>
            <p>Containers can be nested for complex layouts.</p>
          </div>
        </Container>
      </div>
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Containers can be nested for complex layout structures.',
      },
    },
  },
};

export const SemanticHTML: Story = {
  args: {} as never,
  render: () => (
    <Container as="section">
      <div style={{ background: '#fef3c7', padding: '2rem', borderRadius: '8px' }}>
        <h2 style={{ marginTop: 0 }}>Semantic Container</h2>
        <p>
          This container renders as a {'<section>'} element instead of a {'<div>'}.
        </p>
      </div>
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Container can render as any HTML element using the "as" prop.',
      },
    },
  },
};

export const ResponsiveComparison: Story = {
  args: {} as never,
  render: () => (
    <div style={{ background: '#f3f4f6', padding: '2rem', minHeight: '100vh' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginTop: 0 }}>Default Container (Responsive)</h3>
        <Container>
          <div style={{ background: 'white', padding: '1rem', border: '2px solid #3b82f6' }}>
            Responsive max-width at each breakpoint
          </div>
        </Container>
      </div>

      <div>
        <h3>Fluid Container (Full Width)</h3>
        <Container fluid>
          <div style={{ background: 'white', padding: '1rem', border: '2px solid #10b981' }}>
            Always full width
          </div>
        </Container>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Side-by-side comparison of responsive and fluid containers.',
      },
    },
  },
};

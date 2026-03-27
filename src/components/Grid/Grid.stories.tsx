import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid, GridItem } from './';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '24-column responsive grid system based on CSS Grid. Supports responsive gutter, alignment, and flexible column spans.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const GridItemDemo = ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
  <GridItem {...props}>
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        textAlign: 'center',
        minHeight: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  </GridItem>
);

export const Basic: Story = {
  args: {} as never,
  render: () => (
    <Grid>
      <GridItemDemo span={8}>Span 8</GridItemDemo>
      <GridItemDemo span={8}>Span 8</GridItemDemo>
      <GridItemDemo span={8}>Span 8</GridItemDemo>
    </Grid>
  ),
};

export const WithGutter: Story = {
  args: {} as never,
  render: () => (
    <Grid gutter="md">
      <GridItemDemo span={6}>Span 6</GridItemDemo>
      <GridItemDemo span={6}>Span 6</GridItemDemo>
      <GridItemDemo span={6}>Span 6</GridItemDemo>
      <GridItemDemo span={6}>Span 6</GridItemDemo>
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid with medium gutter spacing (16px) between items.',
      },
    },
  },
};

export const ResponsiveColumns: Story = {
  args: {} as never,
  render: () => (
    <Grid gutter="md">
      <GridItemDemo xs={24} sm={12} md={8} lg={6}>
        Responsive
      </GridItemDemo>
      <GridItemDemo xs={24} sm={12} md={8} lg={6}>
        Responsive
      </GridItemDemo>
      <GridItemDemo xs={24} sm={12} md={8} lg={6}>
        Responsive
      </GridItemDemo>
      <GridItemDemo xs={24} sm={12} md={8} lg={6}>
        Responsive
      </GridItemDemo>
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Responsive grid that adapts to different screen sizes: full width on mobile, 2 columns on small tablets, 3 on tablets, and 4 on desktop.',
      },
    },
  },
};

export const OffsetColumns: Story = {
  args: {} as never,
  render: () => (
    <Grid gutter="md">
      <GridItemDemo span={8}>Span 8</GridItemDemo>
      <GridItemDemo span={8} offset={8}>
        Span 8, Offset 8
      </GridItemDemo>
      <GridItemDemo span={6} offset={3}>
        Span 6, Offset 3
      </GridItemDemo>
      <GridItemDemo span={6}>Span 6</GridItemDemo>
      <GridItemDemo span={6} offset={6}>
        Span 6, Offset 6
      </GridItemDemo>
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid items with offset to create spacing or specific layouts.',
      },
    },
  },
};

export const VariableGutter: Story = {
  args: {} as never,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginTop: 0 }}>Small Gutter (8px)</h4>
        <Grid gutter="sm">
          <GridItemDemo span={8}>Item</GridItemDemo>
          <GridItemDemo span={8}>Item</GridItemDemo>
          <GridItemDemo span={8}>Item</GridItemDemo>
        </Grid>
      </div>
      <div>
        <h4>Medium Gutter (16px)</h4>
        <Grid gutter="md">
          <GridItemDemo span={8}>Item</GridItemDemo>
          <GridItemDemo span={8}>Item</GridItemDemo>
          <GridItemDemo span={8}>Item</GridItemDemo>
        </Grid>
      </div>
      <div>
        <h4>Large Gutter (24px)</h4>
        <Grid gutter="lg">
          <GridItemDemo span={8}>Item</GridItemDemo>
          <GridItemDemo span={8}>Item</GridItemDemo>
          <GridItemDemo span={8}>Item</GridItemDemo>
        </Grid>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of different gutter sizes.',
      },
    },
  },
};

export const HorizontalAndVerticalGutter: Story = {
  args: {} as never,
  render: () => (
    <Grid gutter={['md', 'lg']}>
      <GridItemDemo span={8}>Item 1</GridItemDemo>
      <GridItemDemo span={8}>Item 2</GridItemDemo>
      <GridItemDemo span={8}>Item 3</GridItemDemo>
      <GridItemDemo span={8}>Item 4</GridItemDemo>
      <GridItemDemo span={8}>Item 5</GridItemDemo>
      <GridItemDemo span={8}>Item 6</GridItemDemo>
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Grid with different horizontal (16px) and vertical (24px) gutter using tuple syntax.',
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
        <Grid gutter="md" align="start" style={{ minHeight: '150px', border: '2px dashed #ccc' }}>
          <GridItemDemo span={8}>Tall Content</GridItemDemo>
          <GridItemDemo span={8}>Short</GridItemDemo>
          <GridItemDemo span={8}>Medium Height Content</GridItemDemo>
        </Grid>
      </div>
      <div>
        <h4>Align: Center</h4>
        <Grid gutter="md" align="center" style={{ minHeight: '150px', border: '2px dashed #ccc' }}>
          <GridItemDemo span={8}>Tall Content</GridItemDemo>
          <GridItemDemo span={8}>Short</GridItemDemo>
          <GridItemDemo span={8}>Medium</GridItemDemo>
        </Grid>
      </div>
      <div>
        <h4>Align: Stretch (default)</h4>
        <Grid gutter="md" align="stretch" style={{ minHeight: '150px', border: '2px dashed #ccc' }}>
          <GridItemDemo span={8}>Item</GridItemDemo>
          <GridItemDemo span={8}>Item</GridItemDemo>
          <GridItemDemo span={8}>Item</GridItemDemo>
        </Grid>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different vertical alignment options for grid items.',
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
        <Grid gutter="md" justify="start">
          <GridItemDemo span={4}>Item</GridItemDemo>
          <GridItemDemo span={4}>Item</GridItemDemo>
          <GridItemDemo span={4}>Item</GridItemDemo>
        </Grid>
      </div>
      <div>
        <h4>Justify: Center</h4>
        <Grid gutter="md" justify="center">
          <GridItemDemo span={4}>Item</GridItemDemo>
          <GridItemDemo span={4}>Item</GridItemDemo>
          <GridItemDemo span={4}>Item</GridItemDemo>
        </Grid>
      </div>
      <div>
        <h4>Justify: Space Between</h4>
        <Grid gutter="md" justify="space-between">
          <GridItemDemo span={4}>Item</GridItemDemo>
          <GridItemDemo span={4}>Item</GridItemDemo>
          <GridItemDemo span={4}>Item</GridItemDemo>
        </Grid>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different horizontal justification options for grid items.',
      },
    },
  },
};

export const ResponsiveGutter: Story = {
  args: {} as never,
  render: () => (
    <Grid gutter={{ xs: 'sm', md: 'lg', xl: '2xl' }}>
      <GridItemDemo xs={24} md={12} lg={8}>
        Responsive Item
      </GridItemDemo>
      <GridItemDemo xs={24} md={12} lg={8}>
        Responsive Item
      </GridItemDemo>
      <GridItemDemo xs={24} md={12} lg={8}>
        Responsive Item
      </GridItemDemo>
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Grid with responsive gutter that changes at different breakpoints: small on mobile, large on tablets, extra-large on desktop.',
      },
    },
  },
};

export const ComplexLayout: Story = {
  args: {} as never,
  render: () => (
    <Grid gutter="md">
      <GridItemDemo span={24}>Full Width Header</GridItemDemo>
      <GridItemDemo xs={24} md={16}>
        Main Content (2/3 on desktop)
      </GridItemDemo>
      <GridItemDemo xs={24} md={8}>
        Sidebar (1/3 on desktop)
      </GridItemDemo>
      <GridItemDemo xs={24} sm={12} md={6}>
        Quarter 1
      </GridItemDemo>
      <GridItemDemo xs={24} sm={12} md={6}>
        Quarter 2
      </GridItemDemo>
      <GridItemDemo xs={24} sm={12} md={6}>
        Quarter 3
      </GridItemDemo>
      <GridItemDemo xs={24} sm={12} md={6}>
        Quarter 4
      </GridItemDemo>
      <GridItemDemo span={24}>Full Width Footer</GridItemDemo>
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Complex responsive layout demonstrating header, main content, sidebar, and footer sections.',
      },
    },
  },
};

export const Nesting: Story = {
  args: {} as never,
  render: () => (
    <Grid gutter="lg">
      <GridItemDemo span={12}>
        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '4px' }}>
          Outer Item
          <Grid gutter="sm" style={{ marginTop: '1rem' }}>
            <GridItemDemo span={12}>Nested 1</GridItemDemo>
            <GridItemDemo span={12}>Nested 2</GridItemDemo>
          </Grid>
        </div>
      </GridItemDemo>
      <GridItemDemo span={12}>Outer Item</GridItemDemo>
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grids can be nested inside grid items for complex layouts.',
      },
    },
  },
};

export const OrderControl: Story = {
  args: {} as never,
  render: () => (
    <Grid gutter="md">
      <GridItemDemo span={8} order={3}>
        Visual Order 3 (order={3})
      </GridItemDemo>
      <GridItemDemo span={8} order={1}>
        Visual Order 1 (order={1})
      </GridItemDemo>
      <GridItemDemo span={8} order={2}>
        Visual Order 2 (order={2})
      </GridItemDemo>
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Control visual order of grid items independent of DOM order.',
      },
    },
  },
};

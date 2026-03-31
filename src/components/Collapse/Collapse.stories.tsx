/**
 * Collapse Component Stories
 *
 * Storybook stories showcasing the Collapse component variants and usage.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collapse } from './Collapse';
import { useState } from 'react';

const meta = {
  title: 'Components/Collapse',
  component: Collapse,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Collapse component for expandable content sections with smooth animations and various sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: 'text',
      description: 'Content to display in the collapse header',
    },
    children: {
      control: 'text',
      description: 'Content to display when expanded',
    },
    expanded: {
      control: 'boolean',
      description: 'Whether the collapse is expanded (controlled mode)',
    },
    defaultExpanded: {
      control: 'boolean',
      description: 'Default expanded state (uncontrolled mode)',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the collapse is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the collapse',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    bordered: {
      control: 'boolean',
      description: 'Whether to show the border',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default collapse in collapsed state
 */
export const Default: Story = {
  args: {
    header: 'Click to expand',
    children: 'This is the hidden content that appears when the collapse is expanded.',
  },
};

/**
 * Collapse expanded by default
 */
export const DefaultExpanded: Story = {
  args: {
    header: 'Already expanded',
    defaultExpanded: true,
    children: 'This collapse starts in the expanded state.',
  },
};

/**
 * Small size collapse
 */
export const Small: Story = {
  args: {
    header: 'Small collapse',
    size: 'small',
    children: 'This is a small-sized collapse component.',
  },
};

/**
 * Medium size collapse (default)
 */
export const Medium: Story = {
  args: {
    header: 'Medium collapse',
    size: 'medium',
    children: 'This is a medium-sized collapse component.',
  },
};

/**
 * Large size collapse
 */
export const Large: Story = {
  args: {
    header: 'Large collapse',
    size: 'large',
    children: 'This is a large-sized collapse component.',
  },
};

/**
 * Disabled collapse
 */
export const Disabled: Story = {
  args: {
    header: 'Disabled collapse',
    disabled: true,
    children: 'This content cannot be expanded because the collapse is disabled.',
  },
};

/**
 * Collapse without border
 */
export const NoBorder: Story = {
  args: {
    header: 'Borderless collapse',
    bordered: false,
    children: 'This collapse has no border.',
  },
};

/**
 * Collapse with rich content
 */
export const RichContent: Story = {
  args: {
    header: 'Rich content example',
    children: (
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>Nested Content</h4>
        <p style={{ margin: '0 0 8px 0' }}>
          This collapse contains rich content including headings, paragraphs, and lists.
        </p>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
    ),
  },
};

/**
 * Controlled collapse example
 */
export const Controlled: Story = {
  args: {
    header: '',
    children: '',
  },
  render: () => {
    const [expanded, setExpanded] = useState(false);
    return (
      <div>
        <div style={{ marginBottom: '16px' }}>
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Collapse' : 'Expand'} from outside
          </button>
        </div>
        <Collapse header="Controlled collapse" expanded={expanded} onChange={setExpanded}>
          This collapse is controlled by external state. Click the button above or the header to
          toggle.
        </Collapse>
      </div>
    );
  },
};

/**
 * Multiple collapses (accordion-like)
 */
export const MultipleCollapses: Story = {
  args: {
    header: '',
    children: '',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '400px' }}>
      <Collapse header="Section 1">Content for section 1</Collapse>
      <Collapse header="Section 2">Content for section 2</Collapse>
      <Collapse header="Section 3" defaultExpanded>
        Content for section 3 (expanded by default)
      </Collapse>
      <Collapse header="Section 4">Content for section 4</Collapse>
    </div>
  ),
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  args: {
    header: '',
    children: '',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Collapse header="Small size" size="small" defaultExpanded>
        Small-sized collapse content
      </Collapse>
      <Collapse header="Medium size" size="medium" defaultExpanded>
        Medium-sized collapse content
      </Collapse>
      <Collapse header="Large size" size="large" defaultExpanded>
        Large-sized collapse content
      </Collapse>
    </div>
  ),
};

/**
 * Nested collapses example
 */
export const NestedCollapses: Story = {
  args: {
    header: '',
    children: '',
  },
  render: () => (
    <div style={{ width: '400px' }}>
      <Collapse header="Parent collapse" defaultExpanded>
        <div style={{ paddingTop: '8px' }}>
          <p style={{ margin: '0 0 8px 0' }}>Parent content here.</p>
          <Collapse header="Nested collapse 1">First nested collapse content</Collapse>
          <div style={{ height: '8px' }} />
          <Collapse header="Nested collapse 2">Second nested collapse content</Collapse>
        </div>
      </Collapse>
    </div>
  ),
};

/**
 * Interactive example with callback
 */
export const Interactive: Story = {
  args: {
    header: '',
    children: '',
  },
  render: () => {
    const [expandCount, setExpandCount] = useState(0);
    return (
      <div>
        <p style={{ marginBottom: '16px' }}>Expand count: {expandCount}</p>
        <Collapse
          header="Interactive collapse"
          onChange={(expanded) => {
            if (expanded) {
              setExpandCount((c) => c + 1);
            }
          }}
        >
          Each time you expand this collapse, the counter above increments.
        </Collapse>
      </div>
    );
  },
};

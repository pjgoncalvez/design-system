/**
 * Tabs Component Stories
 *
 * Storybook stories showcasing the Tabs component variants and usage.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';
import { TabItem } from './types';
import { useState } from 'react';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Tabs component for organizing content into switchable panels with multiple variants and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of tab items',
    },
    activeKey: {
      control: 'text',
      description: 'Active tab key (controlled mode)',
    },
    defaultActiveKey: {
      control: 'text',
      description: 'Default active tab key (uncontrolled mode)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the tabs',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    variant: {
      control: 'select',
      options: ['line', 'card', 'pill'],
      description: 'Visual variant of the tabs',
      table: {
        defaultValue: { summary: 'line' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether tabs should take full width',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    animated: {
      control: 'boolean',
      description: 'Whether to animate tab changes',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems: TabItem[] = [
  {
    key: '1',
    label: 'Tab 1',
    content: <div>Content of Tab 1</div>,
  },
  {
    key: '2',
    label: 'Tab 2',
    content: <div>Content of Tab 2</div>,
  },
  {
    key: '3',
    label: 'Tab 3',
    content: <div>Content of Tab 3</div>,
  },
];

/**
 * Default tabs with line variant
 */
export const Default: Story = {
  args: {
    items: basicItems,
  },
};

/**
 * Card variant tabs
 */
export const CardVariant: Story = {
  args: {
    variant: 'card',
    items: basicItems,
  },
};

/**
 * Pill variant tabs
 */
export const PillVariant: Story = {
  args: {
    variant: 'pill',
    items: basicItems,
  },
};

/**
 * Small size tabs
 */
export const Small: Story = {
  args: {
    size: 'small',
    items: basicItems,
  },
};

/**
 * Medium size tabs (default)
 */
export const Medium: Story = {
  args: {
    size: 'medium',
    items: basicItems,
  },
};

/**
 * Large size tabs
 */
export const Large: Story = {
  args: {
    size: 'large',
    items: basicItems,
  },
};

/**
 * Full width tabs
 */
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    items: basicItems,
  },
};

/**
 * Tabs with icons
 */
export const WithIcons: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Home',
        icon: '🏠',
        content: <div>Home content</div>,
      },
      {
        key: '2',
        label: 'Profile',
        icon: '👤',
        content: <div>Profile content</div>,
      },
      {
        key: '3',
        label: 'Settings',
        icon: '⚙️',
        content: <div>Settings content</div>,
      },
    ],
  },
};

/**
 * Tabs with disabled items
 */
export const WithDisabled: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Enabled Tab',
        content: <div>This tab is enabled</div>,
      },
      {
        key: '2',
        label: 'Disabled Tab',
        content: <div>This content should not be visible</div>,
        disabled: true,
      },
      {
        key: '3',
        label: 'Another Tab',
        content: <div>Another enabled tab</div>,
      },
    ],
  },
};

/**
 * Tabs with rich content
 */
export const RichContent: Story = {
  args: {
    items: [
      {
        key: 'overview',
        label: 'Overview',
        content: (
          <div>
            <h3 style={{ margin: '0 0 12px 0' }}>Project Overview</h3>
            <p style={{ margin: '0 0 8px 0' }}>
              This is a comprehensive overview of the project with detailed information.
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        ),
      },
      {
        key: 'details',
        label: 'Details',
        content: (
          <div>
            <h3 style={{ margin: '0 0 12px 0' }}>Technical Details</h3>
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ),
      },
      {
        key: 'stats',
        label: 'Statistics',
        content: (
          <div>
            <h3 style={{ margin: '0 0 12px 0' }}>Project Statistics</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>Users</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>1,234</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>Sessions</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>5,678</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Conversions</td>
                  <td style={{ padding: '8px' }}>12.5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
    ],
  },
};

/**
 * Controlled tabs example
 */
export const Controlled: Story = {
  args: {
    items: [],
  },
  render: () => {
    const [activeKey, setActiveKey] = useState('1');

    return (
      <div style={{ width: '500px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
          <button onClick={() => setActiveKey('1')}>Activate Tab 1</button>
          <button onClick={() => setActiveKey('2')}>Activate Tab 2</button>
          <button onClick={() => setActiveKey('3')}>Activate Tab 3</button>
        </div>
        <Tabs
          activeKey={activeKey}
          onChange={setActiveKey}
          items={[
            { key: '1', label: 'Tab 1', content: <div>Content 1</div> },
            { key: '2', label: 'Tab 2', content: <div>Content 2</div> },
            { key: '3', label: 'Tab 3', content: <div>Content 3</div> },
          ]}
        />
        <div style={{ marginTop: '16px' }}>Current active tab: {activeKey}</div>
      </div>
    );
  },
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  args: {
    items: [],
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '500px' }}>
      <div>
        <h3 style={{ margin: '0 0 12px 0' }}>Line Variant</h3>
        <Tabs variant="line" items={basicItems} />
      </div>
      <div>
        <h3 style={{ margin: '0 0 12px 0' }}>Card Variant</h3>
        <Tabs variant="card" items={basicItems} />
      </div>
      <div>
        <h3 style={{ margin: '0 0 12px 0' }}>Pill Variant</h3>
        <Tabs variant="pill" items={basicItems} />
      </div>
    </div>
  ),
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  args: {
    items: [],
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '500px' }}>
      <div>
        <h3 style={{ margin: '0 0 12px 0' }}>Small</h3>
        <Tabs size="small" items={basicItems} />
      </div>
      <div>
        <h3 style={{ margin: '0 0 12px 0' }}>Medium</h3>
        <Tabs size="medium" items={basicItems} />
      </div>
      <div>
        <h3 style={{ margin: '0 0 12px 0' }}>Large</h3>
        <Tabs size="large" items={basicItems} />
      </div>
    </div>
  ),
};

/**
 * Interactive example with callback
 */
export const Interactive: Story = {
  args: {
    items: [],
  },
  render: () => {
    const [changeCount, setChangeCount] = useState(0);
    const [lastKey, setLastKey] = useState('1');

    return (
      <div style={{ width: '500px' }}>
        <div style={{ marginBottom: '16px' }}>
          <p style={{ margin: '0 0 8px 0' }}>Tab changes: {changeCount}</p>
          <p style={{ margin: 0 }}>Last activated tab: {lastKey}</p>
        </div>
        <Tabs
          items={basicItems}
          onChange={(key) => {
            setChangeCount((c) => c + 1);
            setLastKey(key);
          }}
        />
      </div>
    );
  },
};

/**
 * No animation example
 */
export const NoAnimation: Story = {
  args: {
    animated: false,
    items: basicItems,
  },
};

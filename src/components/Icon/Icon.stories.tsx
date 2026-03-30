/**
 * Icon Component Stories
 *
 * Demonstrates all available icons in the design system with different sizes and colors.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, IconName } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Icon is a generic component that renders any of the 252 available icons. All icons support customizable size and color properties.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'Apps',
        'Settings',
        'Home',
        'User',
        'Calendar',
        'Email',
        'Search',
        'Filter',
        'Download',
        'Upload',
        'Edit',
        'Delete',
        'Copy',
        'Save',
        'Close',
        'Check',
        'Plus',
        'Minus',
        'Heart',
        'Star',
      ] as IconName[],
      description: 'Name of the icon to display',
    },
    size: {
      control: 'select',
      options: [10, 12, 14, 16, 18, 20, 22, 24, 32, 48],
      description: 'Size of the icon in pixels',
    },
    color: {
      control: 'color',
      description: 'Color of the icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default icon example
 */
export const Default: Story = {
  args: {
    name: 'Apps',
    size: 24,
    color: '#4E5969',
  },
};

/**
 * All available sizes
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
      <Icon name="Apps" size={10} />
      <Icon name="Apps" size={12} />
      <Icon name="Apps" size={14} />
      <Icon name="Apps" size={16} />
      <Icon name="Apps" size={18} />
      <Icon name="Apps" size={20} />
      <Icon name="Apps" size={22} />
      <Icon name="Apps" size={24} />
      <Icon name="Apps" size={32} />
      <Icon name="Apps" size={48} />
    </div>
  ),
};

/**
 * Different colors
 */
export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Icon name="Heart" size={32} color="#FF5733" />
      <Icon name="Heart" size={32} color="#33FF57" />
      <Icon name="Heart" size={32} color="#3357FF" />
      <Icon name="Heart" size={32} color="#F333FF" />
      <Icon name="Heart" size={32} color="#FFD700" />
      <Icon name="Heart" size={32} color="#4E5969" />
    </div>
  ),
};

/**
 * Interactive playground
 */
export const Interactive: Story = {
  args: {
    name: 'Apps',
    size: 24,
    color: '#4E5969',
  },
};

/**
 * Common icons grid
 */
export const CommonIcons: Story = {
  render: () => {
    const commonIcons: IconName[] = [
      'Apps',
      'Home',
      'User',
      'Settings',
      'Calendar',
      'Email',
      'Search',
      'Filter',
      'Download',
      'Upload',
      'Edit',
      'Delete',
      'Copy',
      'Save',
      'Close',
      'Check',
      'Plus',
      'Minus',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'Heart',
      'Star',
    ];

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
          gap: '24px',
          maxWidth: '600px',
        }}
      >
        {commonIcons.map((iconName) => (
          <div
            key={iconName}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                padding: '12px',
                borderRadius: '8px',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon name={iconName} size={24} color="#4E5969" />
            </div>
            <span
              style={{
                fontSize: '11px',
                color: '#666',
                textAlign: 'center',
                wordBreak: 'break-word',
              }}
            >
              {iconName}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

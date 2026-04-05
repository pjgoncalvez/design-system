/**
 * Drawer Component Stories
 *
 * Storybook stories showcasing the Drawer component variants and usage.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './Drawer';
import { useState } from 'react';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Drawer component for displaying slide-out panels from any side of the screen with customizable size and placement.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the drawer is open',
    },
    onClose: {
      description: 'Callback when the drawer requests to close',
    },
    title: {
      control: 'text',
      description: 'Drawer title',
    },
    placement: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Placement of the drawer',
      table: {
        defaultValue: { summary: 'right' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full'],
      description: 'Size of the drawer',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    showOverlay: {
      control: 'boolean',
      description: 'Whether to show the overlay/backdrop',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Whether clicking the overlay closes the drawer',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether pressing escape closes the drawer',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    lockBodyScroll: {
      control: 'boolean',
      description: 'Whether to lock body scroll when drawer is open',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    zIndex: {
      control: 'number',
      description: 'z-index for the drawer',
      table: {
        defaultValue: { summary: '1000' },
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleContent = (
  <div>
    <p style={{ margin: '0 0 16px 0' }}>
      This is the drawer content. You can put any content here.
    </p>
    <p style={{ margin: '0 0 16px 0' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
    <p style={{ margin: 0 }}>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
);

/**
 * Default drawer with right placement
 */
export const Default: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Drawer</button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Drawer Title">
          {sampleContent}
        </Drawer>
      </>
    );
  },
};

/**
 * Drawer with left placement
 */
export const LeftPlacement: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Left Drawer</button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Left Drawer" placement="left">
          {sampleContent}
        </Drawer>
      </>
    );
  },
};

/**
 * Drawer with top placement
 */
export const TopPlacement: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Top Drawer</button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Top Drawer" placement="top">
          {sampleContent}
        </Drawer>
      </>
    );
  },
};

/**
 * Drawer with bottom placement
 */
export const BottomPlacement: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Bottom Drawer</button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Bottom Drawer" placement="bottom">
          {sampleContent}
        </Drawer>
      </>
    );
  },
};

/**
 * Small size drawer
 */
export const SmallSize: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Small Drawer</button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Small Drawer" size="small">
          {sampleContent}
        </Drawer>
      </>
    );
  },
};

/**
 * Medium size drawer (default)
 */
export const MediumSize: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Medium Drawer</button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Medium Drawer" size="medium">
          {sampleContent}
        </Drawer>
      </>
    );
  },
};

/**
 * Large size drawer
 */
export const LargeSize: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Large Drawer</button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Large Drawer" size="large">
          {sampleContent}
        </Drawer>
      </>
    );
  },
};

/**
 * Full size drawer
 */
export const FullSize: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Full Size Drawer</button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Full Size Drawer" size="full">
          {sampleContent}
        </Drawer>
      </>
    );
  },
};

/**
 * Drawer with footer
 */
export const WithFooter: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Drawer with Footer</button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Settings"
          footer={
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button
                style={{
                  background: '#1890ff',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  alert('Saved!');
                  setOpen(false);
                }}
              >
                Save Changes
              </button>
            </div>
          }
        >
          {sampleContent}
        </Drawer>
      </>
    );
  },
};

/**
 * Drawer without close button
 */
export const NoCloseButton: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Drawer (No Close Button)</button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="No Close Button"
          showCloseButton={false}
          footer={<button onClick={() => setOpen(false)}>Close from Footer</button>}
        >
          {sampleContent}
        </Drawer>
      </>
    );
  },
};

/**
 * Drawer without overlay
 */
export const NoOverlay: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Drawer (No Overlay)</button>
        <Drawer open={open} onClose={() => setOpen(false)} title="No Overlay" showOverlay={false}>
          {sampleContent}
        </Drawer>
      </>
    );
  },
};

/**
 * Drawer that doesn't close on overlay click
 */
export const NoCloseOnOverlayClick: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Drawer</button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Persistent Drawer"
          closeOnOverlayClick={false}
        >
          <div>
            <p style={{ margin: '0 0 16px 0' }}>
              This drawer won't close when you click the overlay. Use the close button or press
              Escape.
            </p>
            {sampleContent}
          </div>
        </Drawer>
      </>
    );
  },
};

/**
 * Drawer with rich content
 */
export const RichContent: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Form Drawer</button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="User Profile"
          footer={
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button
                style={{
                  background: '#1890ff',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Save
              </button>
            </div>
          }
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label
                htmlFor="name"
                style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                }}
              />
            </div>
            <div>
              <label
                htmlFor="bio"
                style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}
              >
                Bio
              </label>
              <textarea
                id="bio"
                rows={4}
                placeholder="Tell us about yourself"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  fontFamily: 'inherit',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" />
                <span>Subscribe to newsletter</span>
              </label>
            </div>
          </form>
        </Drawer>
      </>
    );
  },
};

/**
 * Multiple drawers (nested)
 */
export const NestedDrawers: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [drawer1Open, setDrawer1Open] = useState(false);
    const [drawer2Open, setDrawer2Open] = useState(false);

    return (
      <>
        <button onClick={() => setDrawer1Open(true)}>Open First Drawer</button>
        <Drawer
          open={drawer1Open}
          onClose={() => setDrawer1Open(false)}
          title="First Drawer"
          zIndex={1000}
        >
          <div>
            <p style={{ margin: '0 0 16px 0' }}>This is the first drawer.</p>
            <button onClick={() => setDrawer2Open(true)}>Open Second Drawer</button>
          </div>
        </Drawer>
        <Drawer
          open={drawer2Open}
          onClose={() => setDrawer2Open(false)}
          title="Second Drawer"
          placement="left"
          zIndex={1100}
        >
          <div>
            <p style={{ margin: '0 0 16px 0' }}>This is the second drawer on top!</p>
          </div>
        </Drawer>
      </>
    );
  },
};

/**
 * All placements showcase
 */
export const AllPlacements: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [openDrawers, setOpenDrawers] = useState({
      left: false,
      right: false,
      top: false,
      bottom: false,
    });

    const toggleDrawer = (placement: keyof typeof openDrawers) => {
      setOpenDrawers((prev) => ({ ...prev, [placement]: !prev[placement] }));
    };

    return (
      <div style={{ padding: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button onClick={() => toggleDrawer('left')}>Open Left</button>
        <button onClick={() => toggleDrawer('right')}>Open Right</button>
        <button onClick={() => toggleDrawer('top')}>Open Top</button>
        <button onClick={() => toggleDrawer('bottom')}>Open Bottom</button>

        <Drawer
          open={openDrawers.left}
          onClose={() => toggleDrawer('left')}
          title="Left Drawer"
          placement="left"
        >
          {sampleContent}
        </Drawer>

        <Drawer
          open={openDrawers.right}
          onClose={() => toggleDrawer('right')}
          title="Right Drawer"
          placement="right"
        >
          {sampleContent}
        </Drawer>

        <Drawer
          open={openDrawers.top}
          onClose={() => toggleDrawer('top')}
          title="Top Drawer"
          placement="top"
        >
          {sampleContent}
        </Drawer>

        <Drawer
          open={openDrawers.bottom}
          onClose={() => toggleDrawer('bottom')}
          title="Bottom Drawer"
          placement="bottom"
        >
          {sampleContent}
        </Drawer>
      </div>
    );
  },
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [openDrawers, setOpenDrawers] = useState({
      small: false,
      medium: false,
      large: false,
      full: false,
    });

    const toggleDrawer = (size: keyof typeof openDrawers) => {
      setOpenDrawers((prev) => ({ ...prev, [size]: !prev[size] }));
    };

    return (
      <div style={{ padding: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button onClick={() => toggleDrawer('small')}>Open Small</button>
        <button onClick={() => toggleDrawer('medium')}>Open Medium</button>
        <button onClick={() => toggleDrawer('large')}>Open Large</button>
        <button onClick={() => toggleDrawer('full')}>Open Full</button>

        <Drawer
          open={openDrawers.small}
          onClose={() => toggleDrawer('small')}
          title="Small Drawer"
          size="small"
        >
          {sampleContent}
        </Drawer>

        <Drawer
          open={openDrawers.medium}
          onClose={() => toggleDrawer('medium')}
          title="Medium Drawer"
          size="medium"
        >
          {sampleContent}
        </Drawer>

        <Drawer
          open={openDrawers.large}
          onClose={() => toggleDrawer('large')}
          title="Large Drawer"
          size="large"
        >
          {sampleContent}
        </Drawer>

        <Drawer
          open={openDrawers.full}
          onClose={() => toggleDrawer('full')}
          title="Full Size Drawer"
          size="full"
        >
          {sampleContent}
        </Drawer>
      </div>
    );
  },
};

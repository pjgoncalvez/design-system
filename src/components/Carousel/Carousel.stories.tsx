/**
 * Carousel Component Stories
 *
 * Storybook stories showcasing the Carousel component variants and usage.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Carousel } from './Carousel';
import { CarouselItem } from './types';
import { useState } from 'react';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Carousel component for displaying a rotating set of content with navigation arrows, dot indicators, autoplay, and touch gestures.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of carousel items',
    },
    activeIndex: {
      control: 'number',
      description: 'Active item index (controlled mode)',
    },
    defaultActiveIndex: {
      control: 'number',
      description: 'Default active item index (uncontrolled mode)',
      table: {
        defaultValue: { summary: '0' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the carousel',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    showArrows: {
      control: 'boolean',
      description: 'Whether to show navigation arrows',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    showDots: {
      control: 'boolean',
      description: 'Whether to show dot indicators',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    infinite: {
      control: 'boolean',
      description: 'Whether to enable infinite loop',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    autoplay: {
      control: 'boolean',
      description: 'Whether to enable autoplay',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    autoplayInterval: {
      control: 'number',
      description: 'Autoplay interval in milliseconds',
      table: {
        defaultValue: { summary: '3000' },
      },
    },
    pauseOnHover: {
      control: 'boolean',
      description: 'Whether to pause autoplay on hover',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    swipeable: {
      control: 'boolean',
      description: 'Whether to enable swipe/drag gestures',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    animated: {
      control: 'boolean',
      description: 'Whether to animate transitions',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    animationDuration: {
      control: 'number',
      description: 'Animation duration in milliseconds',
      table: {
        defaultValue: { summary: '300' },
      },
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const createSlideStyle = (bgColor: string) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white',
  backgroundColor: bgColor,
  borderRadius: '8px',
});

const basicItems: CarouselItem[] = [
  {
    key: '1',
    content: <div style={createSlideStyle('#1890ff')}>Slide 1</div>,
    alt: 'First slide',
  },
  {
    key: '2',
    content: <div style={createSlideStyle('#52c41a')}>Slide 2</div>,
    alt: 'Second slide',
  },
  {
    key: '3',
    content: <div style={createSlideStyle('#fa8c16')}>Slide 3</div>,
    alt: 'Third slide',
  },
  {
    key: '4',
    content: <div style={createSlideStyle('#eb2f96')}>Slide 4</div>,
    alt: 'Fourth slide',
  },
];

/**
 * Default carousel with medium size
 */
export const Default: Story = {
  args: {
    items: basicItems,
  },
};

/**
 * Carousel with autoplay enabled
 */
export const Autoplay: Story = {
  args: {
    items: basicItems,
    autoplay: true,
    autoplayInterval: 2000,
    swipeable: true,
  },
};

/**
 * Carousel without infinite loop
 */
export const NoInfinite: Story = {
  args: {
    items: basicItems,
    infinite: false,
  },
};

/**
 * Carousel without arrows
 */
export const NoArrows: Story = {
  args: {
    items: basicItems,
    showArrows: false,
  },
};

/**
 * Carousel without dots
 */
export const NoDots: Story = {
  args: {
    items: basicItems,
    showDots: false,
  },
};

/**
 * Small size carousel
 */
export const Small: Story = {
  args: {
    items: basicItems,
    size: 'small',
  },
};

/**
 * Medium size carousel (default)
 */
export const Medium: Story = {
  args: {
    items: basicItems,
    size: 'medium',
  },
};

/**
 * Large size carousel
 */
export const Large: Story = {
  args: {
    items: basicItems,
    size: 'large',
  },
};

/**
 * Carousel with rich content
 */
export const RichContent: Story = {
  args: {
    items: [
      {
        key: 'product1',
        content: (
          <div style={{ ...createSlideStyle('#1890ff'), flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '32px' }}>Product 1</div>
            <div style={{ fontSize: '16px', fontWeight: 'normal' }}>
              Amazing features at a great price
            </div>
            <button
              style={{
                padding: '8px 24px',
                fontSize: '16px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: 'white',
                color: '#1890ff',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Learn More
            </button>
          </div>
        ),
        alt: 'Product 1',
      },
      {
        key: 'product2',
        content: (
          <div style={{ ...createSlideStyle('#52c41a'), flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '32px' }}>Product 2</div>
            <div style={{ fontSize: '16px', fontWeight: 'normal' }}>
              The best choice for professionals
            </div>
            <button
              style={{
                padding: '8px 24px',
                fontSize: '16px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: 'white',
                color: '#52c41a',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Learn More
            </button>
          </div>
        ),
        alt: 'Product 2',
      },
      {
        key: 'product3',
        content: (
          <div style={{ ...createSlideStyle('#fa8c16'), flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '32px' }}>Product 3</div>
            <div style={{ fontSize: '16px', fontWeight: 'normal' }}>
              Innovation meets simplicity
            </div>
            <button
              style={{
                padding: '8px 24px',
                fontSize: '16px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: 'white',
                color: '#fa8c16',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Learn More
            </button>
          </div>
        ),
        alt: 'Product 3',
      },
    ],
  },
};

/**
 * Carousel with images
 */
export const WithImages: Story = {
  args: {
    items: [
      {
        key: 'image1',
        content: (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
            }}
          >
            <div
              style={{
                fontSize: '48px',
                color: '#666',
              }}
            >
              📸 Image 1
            </div>
          </div>
        ),
        alt: 'Sample image 1',
      },
      {
        key: 'image2',
        content: (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
            }}
          >
            <div
              style={{
                fontSize: '48px',
                color: '#666',
              }}
            >
              🖼️ Image 2
            </div>
          </div>
        ),
        alt: 'Sample image 2',
      },
      {
        key: 'image3',
        content: (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
            }}
          >
            <div
              style={{
                fontSize: '48px',
                color: '#666',
              }}
            >
              🎨 Image 3
            </div>
          </div>
        ),
        alt: 'Sample image 3',
      },
    ],
  },
};

/**
 * Controlled carousel example
 */
export const Controlled: Story = {
  args: {
    items: [],
  },
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
      <div style={{ width: '600px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
          <button onClick={() => setActiveIndex(0)}>Go to Slide 1</button>
          <button onClick={() => setActiveIndex(1)}>Go to Slide 2</button>
          <button onClick={() => setActiveIndex(2)}>Go to Slide 3</button>
          <button onClick={() => setActiveIndex(3)}>Go to Slide 4</button>
        </div>
        <Carousel activeIndex={activeIndex} onChange={setActiveIndex} items={basicItems} />
        <div style={{ marginTop: '16px' }}>Current active slide: {activeIndex + 1}</div>
      </div>
    );
  },
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  args: {
    items: [],
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '700px' }}>
      <div>
        <h3 style={{ margin: '0 0 12px 0' }}>Small</h3>
        <Carousel size="small" items={basicItems.slice(0, 3)} />
      </div>
      <div>
        <h3 style={{ margin: '0 0 12px 0' }}>Medium</h3>
        <Carousel size="medium" items={basicItems.slice(0, 3)} />
      </div>
      <div>
        <h3 style={{ margin: '0 0 12px 0' }}>Large</h3>
        <Carousel size="large" items={basicItems.slice(0, 3)} />
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
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
      <div style={{ width: '600px' }}>
        <div style={{ marginBottom: '16px' }}>
          <p style={{ margin: '0 0 8px 0' }}>Slide changes: {changeCount}</p>
          <p style={{ margin: 0 }}>Current slide: {currentIndex + 1}</p>
        </div>
        <Carousel
          items={basicItems}
          onChange={(index) => {
            setChangeCount((c) => c + 1);
            setCurrentIndex(index);
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

/**
 * Minimal carousel (no controls)
 */
export const Minimal: Story = {
  args: {
    items: basicItems,
    showArrows: false,
    showDots: false,
  },
};

/**
 * Two slides only
 */
export const TwoSlides: Story = {
  args: {
    items: basicItems.slice(0, 2),
  },
};

/**
 * Single slide
 */
export const SingleSlide: Story = {
  args: {
    items: basicItems.slice(0, 1),
  },
};

/**
 * Fast autoplay
 */
export const FastAutoplay: Story = {
  args: {
    items: basicItems,
    autoplay: true,
    autoplayInterval: 1000,
  },
};

/**
 * Autoplay without pause on hover
 */
export const AutoplayNoPause: Story = {
  args: {
    items: basicItems,
    autoplay: true,
    autoplayInterval: 2000,
    pauseOnHover: false,
  },
};

# Hooks

Custom React hooks for common functionality across the design system.

## useSwipe

A reusable hook for handling swipe/drag gestures on both touch devices (mobile/tablet) and mouse devices (desktop).

### Features

- ✓ Touch support (mobile/tablet)
- ✓ Mouse drag support (desktop)
- ✓ Horizontal and vertical swipe detection
- ✓ Configurable swipe threshold
- ✓ Easy integration with any component
- ✓ TypeScript support

### Usage

```tsx
import { useSwipe } from 'design-system-poc';

function MyComponent() {
  const { handlers, isDragging } = useSwipe({
    onSwipeLeft: () => console.log('Swiped left'),
    onSwipeRight: () => console.log('Swiped right'),
    threshold: 50,
  });

  return (
    <div
      {...handlers}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      Swipeable content
    </div>
  );
}
```

### API

#### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Whether swipe/drag is enabled |
| `threshold` | `number` | `50` | Minimum distance in pixels to trigger a swipe |
| `onSwipeLeft` | `() => void` | - | Callback when swiping left |
| `onSwipeRight` | `() => void` | - | Callback when swiping right |
| `onSwipeUp` | `() => void` | - | Callback when swiping up |
| `onSwipeDown` | `() => void` | - | Callback when swiping down |
| `preventDefault` | `boolean` | `false` | Whether to prevent default behavior during swipe |

#### Return Value

| Property | Type | Description |
|----------|------|-------------|
| `isDragging` | `boolean` | Whether the user is currently dragging |
| `handlers` | `object` | Event handlers to spread on your element |
| `reset` | `() => void` | Reset the swipe state |

#### Handlers

The `handlers` object contains the following event handlers:
- `onTouchStart`
- `onTouchMove`
- `onTouchEnd`
- `onMouseDown`
- `onMouseMove`
- `onMouseUp`
- `onMouseLeave`

### Examples

#### Simple Horizontal Carousel

```tsx
function SimpleCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const { handlers } = useSwipe({
    onSwipeLeft: () => setActiveIndex(i => Math.min(i + 1, items.length - 1)),
    onSwipeRight: () => setActiveIndex(i => Math.max(i - 1, 0)),
  });

  return (
    <div {...handlers}>
      {items[activeIndex]}
    </div>
  );
}
```

#### Swipeable Modal

```tsx
function SwipeableModal({ onClose }) {
  const { handlers } = useSwipe({
    onSwipeDown: onClose,
    threshold: 100,
  });

  return (
    <div {...handlers}>
      <h2>Swipe down to close</h2>
      <p>Modal content</p>
    </div>
  );
}
```

#### Image Gallery

```tsx
function ImageGallery({ images }) {
  const [index, setIndex] = useState(0);

  const { handlers, isDragging } = useSwipe({
    onSwipeLeft: () => setIndex(i => (i + 1) % images.length),
    onSwipeRight: () => setIndex(i => (i - 1 + images.length) % images.length),
  });

  return (
    <div
      {...handlers}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
      }}
    >
      <img src={images[index]} alt={`Image ${index + 1}`} />
    </div>
  );
}
```

#### Vertical Scrollable List

```tsx
function VerticalList({ onRefresh, onLoadMore }) {
  const { handlers } = useSwipe({
    onSwipeDown: onRefresh,
    onSwipeUp: onLoadMore,
    threshold: 75,
  });

  return (
    <div {...handlers}>
      {/* List items */}
    </div>
  );
}
```

### Notes

- The hook automatically detects whether a swipe is more horizontal or vertical and triggers the appropriate callback
- For horizontal swipes, `onSwipeLeft` and `onSwipeRight` are triggered
- For vertical swipes, `onSwipeUp` and `onSwipeDown` are triggered
- The swipe direction is determined by comparing the horizontal and vertical distances
- Mouse drag only triggers when the mouse button is pressed and moved at least the threshold distance
- Touch events work on mobile and tablet devices
- The hook is used internally by the Carousel component

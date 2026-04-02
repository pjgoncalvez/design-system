/**
 * useSwipe Hook
 *
 * A reusable hook for handling swipe/drag gestures on both touch and mouse devices.
 */

import { useState, useCallback } from 'react';

export interface UseSwipeOptions {
  /**
   * Whether swipe/drag is enabled
   * @default true
   */
  enabled?: boolean;

  /**
   * Minimum distance in pixels to trigger a swipe
   * @default 50
   */
  threshold?: number;

  /**
   * Callback when swiping/dragging left
   */
  onSwipeLeft?: () => void;

  /**
   * Callback when swiping/dragging right
   */
  onSwipeRight?: () => void;

  /**
   * Callback when swiping/dragging up
   */
  onSwipeUp?: () => void;

  /**
   * Callback when swiping/dragging down
   */
  onSwipeDown?: () => void;

  /**
   * Whether to prevent default behavior during swipe
   * @default false
   */
  preventDefault?: boolean;
}

export interface UseSwipeReturn {
  /**
   * Whether the user is currently dragging
   */
  isDragging: boolean;

  /**
   * Handlers for touch events
   */
  handlers: {
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchMove: (e: React.TouchEvent) => void;
    onTouchEnd: () => void;
    onMouseDown: (e: React.MouseEvent) => void;
    onMouseMove: (e: React.MouseEvent) => void;
    onMouseUp: (e: React.MouseEvent) => void;
    onMouseLeave: () => void;
  };

  /**
   * Reset the swipe state
   */
  reset: () => void;
}

/**
 * Hook for handling swipe/drag gestures
 *
 * @example
 * ```tsx
 * const { handlers, isDragging } = useSwipe({
 *   onSwipeLeft: () => console.log('Swiped left'),
 *   onSwipeRight: () => console.log('Swiped right'),
 *   threshold: 50,
 * });
 *
 * return <div {...handlers}>Swipeable content</div>;
 * ```
 */
export const useSwipe = (options: UseSwipeOptions = {}): UseSwipeReturn => {
  const {
    enabled = true,
    threshold = 50,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    preventDefault = false,
  } = options;

  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const reset = useCallback(() => {
    setTouchStart(null);
    setTouchEnd(null);
    setDragStart(null);
    setIsDragging(false);
  }, []);

  const handleSwipe = useCallback(
    (startX: number, startY: number, endX: number, endY: number) => {
      const deltaX = startX - endX;
      const deltaY = startY - endY;

      // Determine if it's more horizontal or vertical
      const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY);

      if (isHorizontal) {
        // Horizontal swipe
        if (Math.abs(deltaX) > threshold) {
          if (deltaX > 0) {
            onSwipeLeft?.();
          } else {
            onSwipeRight?.();
          }
        }
      } else {
        // Vertical swipe
        if (Math.abs(deltaY) > threshold) {
          if (deltaY > 0) {
            onSwipeUp?.();
          } else {
            onSwipeDown?.();
          }
        }
      }
    },
    [threshold, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown]
  );

  // Touch event handlers
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!enabled) return;
      setTouchEnd(null);
      setTouchStart({
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY,
      });
    },
    [enabled]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!enabled) return;
      if (preventDefault) {
        e.preventDefault();
      }
      setTouchEnd({
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY,
      });
    },
    [enabled, preventDefault]
  );

  const handleTouchEnd = useCallback(() => {
    if (!enabled || !touchStart || !touchEnd) return;

    handleSwipe(touchStart.x, touchStart.y, touchEnd.x, touchEnd.y);
    setTouchStart(null);
    setTouchEnd(null);
  }, [enabled, touchStart, touchEnd, handleSwipe]);

  // Mouse event handlers
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!enabled) return;
      setIsDragging(true);
      setDragStart({
        x: e.clientX,
        y: e.clientY,
      });
    },
    [enabled]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!enabled || !isDragging || !dragStart) return;
      if (preventDefault) {
        e.preventDefault();
      }
    },
    [enabled, isDragging, dragStart, preventDefault]
  );

  const handleMouseUp = useCallback(
    (e: React.MouseEvent) => {
      if (!enabled || !isDragging || !dragStart) return;

      handleSwipe(dragStart.x, dragStart.y, e.clientX, e.clientY);
      setIsDragging(false);
      setDragStart(null);
    },
    [enabled, isDragging, dragStart, handleSwipe]
  );

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setDragStart(null);
    }
  }, [isDragging]);

  return {
    isDragging,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
    },
    reset,
  };
};

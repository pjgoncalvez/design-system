/**
 * useSwipe Hook Tests
 *
 * Unit tests for the useSwipe hook.
 */

import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSwipe } from './useSwipe';

describe('useSwipe', () => {
  describe('Initialization', () => {
    it('returns handlers and isDragging state', () => {
      const { result } = renderHook(() => useSwipe());

      expect(result.current.isDragging).toBe(false);
      expect(result.current.handlers).toHaveProperty('onTouchStart');
      expect(result.current.handlers).toHaveProperty('onTouchMove');
      expect(result.current.handlers).toHaveProperty('onTouchEnd');
      expect(result.current.handlers).toHaveProperty('onMouseDown');
      expect(result.current.handlers).toHaveProperty('onMouseMove');
      expect(result.current.handlers).toHaveProperty('onMouseUp');
      expect(result.current.handlers).toHaveProperty('onMouseLeave');
      expect(result.current.reset).toBeInstanceOf(Function);
    });

    it('initializes with isDragging as false', () => {
      const { result } = renderHook(() => useSwipe());
      expect(result.current.isDragging).toBe(false);
    });
  });

  describe('Touch Events', () => {
    it('calls onSwipeLeft when swiping left', () => {
      const onSwipeLeft = vi.fn();
      const { result } = renderHook(() => useSwipe({ onSwipeLeft }));

      act(() => {
        result.current.handlers.onTouchStart({
          targetTouches: [{ clientX: 100, clientY: 0 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchMove({
          targetTouches: [{ clientX: 0, clientY: 0 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchEnd();
      });

      expect(onSwipeLeft).toHaveBeenCalledTimes(1);
    });

    it('calls onSwipeRight when swiping right', () => {
      const onSwipeRight = vi.fn();
      const { result } = renderHook(() => useSwipe({ onSwipeRight }));

      act(() => {
        result.current.handlers.onTouchStart({
          targetTouches: [{ clientX: 0, clientY: 0 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchMove({
          targetTouches: [{ clientX: 100, clientY: 0 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchEnd();
      });

      expect(onSwipeRight).toHaveBeenCalledTimes(1);
    });

    it('calls onSwipeUp when swiping up', () => {
      const onSwipeUp = vi.fn();
      const { result } = renderHook(() => useSwipe({ onSwipeUp }));

      act(() => {
        result.current.handlers.onTouchStart({
          targetTouches: [{ clientX: 0, clientY: 100 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchMove({
          targetTouches: [{ clientX: 0, clientY: 0 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchEnd();
      });

      expect(onSwipeUp).toHaveBeenCalledTimes(1);
    });

    it('calls onSwipeDown when swiping down', () => {
      const onSwipeDown = vi.fn();
      const { result } = renderHook(() => useSwipe({ onSwipeDown }));

      act(() => {
        result.current.handlers.onTouchStart({
          targetTouches: [{ clientX: 0, clientY: 0 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchMove({
          targetTouches: [{ clientX: 0, clientY: 100 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchEnd();
      });

      expect(onSwipeDown).toHaveBeenCalledTimes(1);
    });

    it('does not trigger swipe if distance is below threshold', () => {
      const onSwipeLeft = vi.fn();
      const { result } = renderHook(() => useSwipe({ onSwipeLeft, threshold: 50 }));

      act(() => {
        result.current.handlers.onTouchStart({
          targetTouches: [{ clientX: 100, clientY: 0 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchMove({
          targetTouches: [{ clientX: 60, clientY: 0 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchEnd();
      });

      expect(onSwipeLeft).not.toHaveBeenCalled();
    });

    it('respects custom threshold', () => {
      const onSwipeLeft = vi.fn();
      const { result } = renderHook(() => useSwipe({ onSwipeLeft, threshold: 100 }));

      act(() => {
        result.current.handlers.onTouchStart({
          targetTouches: [{ clientX: 200, clientY: 0 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchMove({
          targetTouches: [{ clientX: 90, clientY: 0 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchEnd();
      });

      expect(onSwipeLeft).toHaveBeenCalledTimes(1);
    });
  });

  describe('Mouse Events', () => {
    it('sets isDragging to true on mouse down', () => {
      const { result } = renderHook(() => useSwipe());

      act(() => {
        result.current.handlers.onMouseDown({
          clientX: 100,
          clientY: 0,
        } as React.MouseEvent);
      });

      expect(result.current.isDragging).toBe(true);
    });

    it('calls onSwipeLeft when dragging left', () => {
      const onSwipeLeft = vi.fn();
      const { result } = renderHook(() => useSwipe({ onSwipeLeft }));

      act(() => {
        result.current.handlers.onMouseDown({
          clientX: 100,
          clientY: 0,
        } as React.MouseEvent);
      });

      act(() => {
        result.current.handlers.onMouseMove({
          clientX: 50,
          clientY: 0,
        } as React.MouseEvent);
      });

      act(() => {
        result.current.handlers.onMouseUp({
          clientX: 0,
          clientY: 0,
        } as React.MouseEvent);
      });

      expect(onSwipeLeft).toHaveBeenCalledTimes(1);
      expect(result.current.isDragging).toBe(false);
    });

    it('calls onSwipeRight when dragging right', () => {
      const onSwipeRight = vi.fn();
      const { result } = renderHook(() => useSwipe({ onSwipeRight }));

      act(() => {
        result.current.handlers.onMouseDown({
          clientX: 0,
          clientY: 0,
        } as React.MouseEvent);
      });

      act(() => {
        result.current.handlers.onMouseMove({
          clientX: 50,
          clientY: 0,
        } as React.MouseEvent);
      });

      act(() => {
        result.current.handlers.onMouseUp({
          clientX: 100,
          clientY: 0,
        } as React.MouseEvent);
      });

      expect(onSwipeRight).toHaveBeenCalledTimes(1);
    });

    it('resets isDragging on mouse leave', () => {
      const { result } = renderHook(() => useSwipe());

      act(() => {
        result.current.handlers.onMouseDown({
          clientX: 100,
          clientY: 0,
        } as React.MouseEvent);
      });

      expect(result.current.isDragging).toBe(true);

      act(() => {
        result.current.handlers.onMouseLeave();
      });

      expect(result.current.isDragging).toBe(false);
    });

    it('does not trigger swipe if mouse drag is below threshold', () => {
      const onSwipeLeft = vi.fn();
      const { result } = renderHook(() => useSwipe({ onSwipeLeft, threshold: 50 }));

      act(() => {
        result.current.handlers.onMouseDown({
          clientX: 100,
          clientY: 0,
        } as React.MouseEvent);
      });

      act(() => {
        result.current.handlers.onMouseUp({
          clientX: 60,
          clientY: 0,
        } as React.MouseEvent);
      });

      expect(onSwipeLeft).not.toHaveBeenCalled();
    });
  });

  describe('Enabled/Disabled State', () => {
    it('does not trigger swipe when disabled', () => {
      const onSwipeLeft = vi.fn();
      const { result } = renderHook(() => useSwipe({ onSwipeLeft, enabled: false }));

      act(() => {
        result.current.handlers.onTouchStart({
          targetTouches: [{ clientX: 100, clientY: 0 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchMove({
          targetTouches: [{ clientX: 0, clientY: 0 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchEnd();
      });

      expect(onSwipeLeft).not.toHaveBeenCalled();
    });

    it('does not set isDragging when disabled', () => {
      const { result } = renderHook(() => useSwipe({ enabled: false }));

      act(() => {
        result.current.handlers.onMouseDown({
          clientX: 100,
          clientY: 0,
        } as React.MouseEvent);
      });

      expect(result.current.isDragging).toBe(false);
    });
  });

  describe('Reset Function', () => {
    it('resets all state when called', () => {
      const { result } = renderHook(() => useSwipe());

      act(() => {
        result.current.handlers.onMouseDown({
          clientX: 100,
          clientY: 0,
        } as React.MouseEvent);
      });

      expect(result.current.isDragging).toBe(true);

      act(() => {
        result.current.reset();
      });

      expect(result.current.isDragging).toBe(false);
    });
  });

  describe('Horizontal vs Vertical Swipes', () => {
    it('prioritizes horizontal swipe over vertical when deltaX > deltaY', () => {
      const onSwipeLeft = vi.fn();
      const onSwipeUp = vi.fn();
      const { result } = renderHook(() => useSwipe({ onSwipeLeft, onSwipeUp }));

      act(() => {
        result.current.handlers.onTouchStart({
          targetTouches: [{ clientX: 100, clientY: 100 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchMove({
          targetTouches: [{ clientX: 0, clientY: 60 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchEnd();
      });

      expect(onSwipeLeft).toHaveBeenCalledTimes(1);
      expect(onSwipeUp).not.toHaveBeenCalled();
    });

    it('prioritizes vertical swipe over horizontal when deltaY > deltaX', () => {
      const onSwipeLeft = vi.fn();
      const onSwipeUp = vi.fn();
      const { result } = renderHook(() => useSwipe({ onSwipeLeft, onSwipeUp }));

      act(() => {
        result.current.handlers.onTouchStart({
          targetTouches: [{ clientX: 100, clientY: 100 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchMove({
          targetTouches: [{ clientX: 60, clientY: 0 }],
        } as unknown as React.TouchEvent);
      });

      act(() => {
        result.current.handlers.onTouchEnd();
      });

      expect(onSwipeUp).toHaveBeenCalledTimes(1);
      expect(onSwipeLeft).not.toHaveBeenCalled();
    });
  });
});

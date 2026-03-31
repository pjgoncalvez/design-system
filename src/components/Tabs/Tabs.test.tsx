/**
 * Tabs Component Tests
 *
 * Unit tests for the Tabs component.
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from './Tabs';
import { TabItem } from './types';

const basicItems: TabItem[] = [
  { key: '1', label: 'Tab 1', content: <div>Content 1</div> },
  { key: '2', label: 'Tab 2', content: <div>Content 2</div> },
  { key: '3', label: 'Tab 3', content: <div>Content 3</div> },
];

describe('Tabs', () => {
  describe('Rendering', () => {
    it('renders all tab labels', () => {
      render(<Tabs items={basicItems} />);
      expect(screen.getByText('Tab 1')).toBeInTheDocument();
      expect(screen.getByText('Tab 2')).toBeInTheDocument();
      expect(screen.getByText('Tab 3')).toBeInTheDocument();
    });

    it('renders first tab content by default', () => {
      render(<Tabs items={basicItems} />);
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    });

    it('renders with default variant (line)', () => {
      const { container } = render(<Tabs items={basicItems} />);
      const tabs = container.querySelector('.tabs');
      expect(tabs).toHaveClass('line');
    });

    it('renders with default size (medium)', () => {
      const { container } = render(<Tabs items={basicItems} />);
      const tabs = container.querySelector('.tabs');
      expect(tabs).toHaveClass('medium');
    });

    it('renders with animation enabled by default', () => {
      const { container } = render(<Tabs items={basicItems} />);
      const content = container.querySelector('.content');
      expect(content).toHaveClass('animated');
    });
  });

  describe('Variants', () => {
    it('renders line variant', () => {
      const { container } = render(<Tabs items={basicItems} variant="line" />);
      const tabs = container.querySelector('.tabs');
      expect(tabs).toHaveClass('line');
    });

    it('renders card variant', () => {
      const { container } = render(<Tabs items={basicItems} variant="card" />);
      const tabs = container.querySelector('.tabs');
      expect(tabs).toHaveClass('card');
    });

    it('renders pill variant', () => {
      const { container } = render(<Tabs items={basicItems} variant="pill" />);
      const tabs = container.querySelector('.tabs');
      expect(tabs).toHaveClass('pill');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = render(<Tabs items={basicItems} size="small" />);
      const tabs = container.querySelector('.tabs');
      expect(tabs).toHaveClass('small');
    });

    it('renders medium size', () => {
      const { container } = render(<Tabs items={basicItems} size="medium" />);
      const tabs = container.querySelector('.tabs');
      expect(tabs).toHaveClass('medium');
    });

    it('renders large size', () => {
      const { container } = render(<Tabs items={basicItems} size="large" />);
      const tabs = container.querySelector('.tabs');
      expect(tabs).toHaveClass('large');
    });
  });

  describe('Full Width', () => {
    it('applies fullWidth class when fullWidth is true', () => {
      const { container } = render(<Tabs items={basicItems} fullWidth />);
      const tabs = container.querySelector('.tabs');
      expect(tabs).toHaveClass('fullWidth');
    });

    it('does not apply fullWidth class when fullWidth is false', () => {
      const { container } = render(<Tabs items={basicItems} fullWidth={false} />);
      const tabs = container.querySelector('.tabs');
      expect(tabs).not.toHaveClass('fullWidth');
    });
  });

  describe('Animation', () => {
    it('applies animated class when animated is true', () => {
      const { container } = render(<Tabs items={basicItems} animated />);
      const content = container.querySelector('.content');
      expect(content).toHaveClass('animated');
    });

    it('does not apply animated class when animated is false', () => {
      const { container } = render(<Tabs items={basicItems} animated={false} />);
      const content = container.querySelector('.content');
      expect(content).not.toHaveClass('animated');
    });
  });

  describe('Icons', () => {
    const itemsWithIcons: TabItem[] = [
      { key: '1', label: 'Home', icon: '🏠', content: <div>Home content</div> },
      { key: '2', label: 'Profile', icon: '👤', content: <div>Profile content</div> },
    ];

    it('renders icons when provided', () => {
      render(<Tabs items={itemsWithIcons} />);
      expect(screen.getByText('🏠')).toBeInTheDocument();
      expect(screen.getByText('👤')).toBeInTheDocument();
    });
  });

  describe('Disabled State', () => {
    const itemsWithDisabled: TabItem[] = [
      { key: '1', label: 'Enabled', content: <div>Enabled content</div> },
      { key: '2', label: 'Disabled', content: <div>Disabled content</div>, disabled: true },
      { key: '3', label: 'Also Enabled', content: <div>Also enabled</div> },
    ];

    it('applies disabled class to disabled tab', () => {
      const { container } = render(<Tabs items={itemsWithDisabled} />);
      const tabs = container.querySelectorAll('.tab');
      expect(tabs[1]).toHaveClass('disabled');
    });

    it('sets disabled attribute on disabled tab', () => {
      render(<Tabs items={itemsWithDisabled} />);
      const disabledTab = screen.getByText('Disabled').closest('button');
      expect(disabledTab).toHaveAttribute('disabled');
    });

    it('does not switch to disabled tab when clicked', () => {
      render(<Tabs items={itemsWithDisabled} />);
      const disabledTab = screen.getByText('Disabled').closest('button');
      fireEvent.click(disabledTab!);
      expect(screen.queryByText('Disabled content')).not.toBeInTheDocument();
      expect(screen.getByText('Enabled content')).toBeInTheDocument();
    });

    it('does not call onChange when disabled tab is clicked', () => {
      const handleChange = vi.fn();
      render(<Tabs items={itemsWithDisabled} onChange={handleChange} />);
      const disabledTab = screen.getByText('Disabled').closest('button');
      fireEvent.click(disabledTab!);
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Default Active Key', () => {
    it('uses first tab as default when defaultActiveKey is not provided', () => {
      render(<Tabs items={basicItems} />);
      expect(screen.getByText('Content 1')).toBeInTheDocument();
    });

    it('renders specified defaultActiveKey tab content', () => {
      render(<Tabs items={basicItems} defaultActiveKey="2" />);
      expect(screen.getByText('Content 2')).toBeInTheDocument();
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    });
  });

  describe('Uncontrolled Mode', () => {
    it('switches tabs when clicked', () => {
      render(<Tabs items={basicItems} />);

      expect(screen.getByText('Content 1')).toBeInTheDocument();

      const tab2 = screen.getByText('Tab 2').closest('button');
      fireEvent.click(tab2!);
      expect(screen.getByText('Content 2')).toBeInTheDocument();
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();

      const tab3 = screen.getByText('Tab 3').closest('button');
      fireEvent.click(tab3!);
      expect(screen.getByText('Content 3')).toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    });

    it('calls onChange when tab is switched', () => {
      const handleChange = vi.fn();
      render(<Tabs items={basicItems} onChange={handleChange} />);

      const tab2 = screen.getByText('Tab 2').closest('button');
      fireEvent.click(tab2!);
      expect(handleChange).toHaveBeenCalledWith('2');

      const tab3 = screen.getByText('Tab 3').closest('button');
      fireEvent.click(tab3!);
      expect(handleChange).toHaveBeenCalledWith('3');
    });
  });

  describe('Controlled Mode', () => {
    it('uses activeKey prop to control active tab', () => {
      const { rerender } = render(<Tabs items={basicItems} activeKey="1" />);
      expect(screen.getByText('Content 1')).toBeInTheDocument();

      rerender(<Tabs items={basicItems} activeKey="2" />);
      expect(screen.getByText('Content 2')).toBeInTheDocument();

      rerender(<Tabs items={basicItems} activeKey="3" />);
      expect(screen.getByText('Content 3')).toBeInTheDocument();
    });

    it('calls onChange but does not switch tabs automatically', () => {
      const handleChange = vi.fn();
      render(<Tabs items={basicItems} activeKey="1" onChange={handleChange} />);

      const tab2 = screen.getByText('Tab 2').closest('button');
      fireEvent.click(tab2!);

      expect(handleChange).toHaveBeenCalledWith('2');
      // Tab should not switch because it's controlled
      expect(screen.getByText('Content 1')).toBeInTheDocument();
    });
  });

  describe('Keyboard Navigation', () => {
    it('switches tab on Enter key', () => {
      render(<Tabs items={basicItems} />);
      const tab2 = screen.getByText('Tab 2').closest('button');

      fireEvent.keyDown(tab2!, { key: 'Enter' });
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });

    it('switches tab on Space key', () => {
      render(<Tabs items={basicItems} />);
      const tab2 = screen.getByText('Tab 2').closest('button');

      fireEvent.keyDown(tab2!, { key: ' ' });
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });

    it('navigates to next tab on ArrowRight', () => {
      render(<Tabs items={basicItems} />);
      const tab1 = screen.getByText('Tab 1').closest('button');

      fireEvent.keyDown(tab1!, { key: 'ArrowRight' });
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });

    it('navigates to previous tab on ArrowLeft', () => {
      render(<Tabs items={basicItems} defaultActiveKey="2" />);
      const tab2 = screen.getByText('Tab 2').closest('button');

      fireEvent.keyDown(tab2!, { key: 'ArrowLeft' });
      expect(screen.getByText('Content 1')).toBeInTheDocument();
    });

    it('wraps around when navigating past last tab with ArrowRight', () => {
      render(<Tabs items={basicItems} defaultActiveKey="3" />);
      const tab3 = screen.getByText('Tab 3').closest('button');

      fireEvent.keyDown(tab3!, { key: 'ArrowRight' });
      expect(screen.getByText('Content 1')).toBeInTheDocument();
    });

    it('wraps around when navigating before first tab with ArrowLeft', () => {
      render(<Tabs items={basicItems} defaultActiveKey="1" />);
      const tab1 = screen.getByText('Tab 1').closest('button');

      fireEvent.keyDown(tab1!, { key: 'ArrowLeft' });
      expect(screen.getByText('Content 3')).toBeInTheDocument();
    });

    it('skips disabled tabs when navigating with arrows', () => {
      const itemsWithDisabled: TabItem[] = [
        { key: '1', label: 'Tab 1', content: <div>Content 1</div> },
        { key: '2', label: 'Tab 2', content: <div>Content 2</div>, disabled: true },
        { key: '3', label: 'Tab 3', content: <div>Content 3</div> },
      ];

      render(<Tabs items={itemsWithDisabled} />);
      const tab1 = screen.getByText('Tab 1').closest('button');

      fireEvent.keyDown(tab1!, { key: 'ArrowRight' });
      // Should skip Tab 2 and go to Tab 3
      expect(screen.getByText('Content 3')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('sets correct ARIA attributes on tabs', () => {
      render(<Tabs items={basicItems} />);

      const tab1 = screen.getByText('Tab 1').closest('button');
      const tab2 = screen.getByText('Tab 2').closest('button');

      expect(tab1).toHaveAttribute('role', 'tab');
      expect(tab1).toHaveAttribute('aria-selected', 'true');
      expect(tab2).toHaveAttribute('aria-selected', 'false');
    });

    it('sets correct tabIndex on tabs', () => {
      render(<Tabs items={basicItems} />);

      const tab1 = screen.getByText('Tab 1').closest('button');
      const tab2 = screen.getByText('Tab 2').closest('button');

      expect(tab1).toHaveAttribute('tabIndex', '0');
      expect(tab2).toHaveAttribute('tabIndex', '-1');
    });

    it('sets correct ARIA attributes on tabpanel', () => {
      const { container } = render(<Tabs items={basicItems} />);
      const tabpanel = container.querySelector('[role="tabpanel"]');

      expect(tabpanel).toHaveAttribute('role', 'tabpanel');
      expect(tabpanel).toHaveAttribute('id', 'tabpanel-1');
      expect(tabpanel).toHaveAttribute('aria-labelledby', 'tab-1');
    });

    it('updates ARIA attributes when switching tabs', () => {
      render(<Tabs items={basicItems} />);

      const tab1 = screen.getByText('Tab 1').closest('button');
      const tab2 = screen.getByText('Tab 2').closest('button');

      expect(tab1).toHaveAttribute('aria-selected', 'true');
      expect(tab2).toHaveAttribute('aria-selected', 'false');

      fireEvent.click(tab2!);

      expect(tab1).toHaveAttribute('aria-selected', 'false');
      expect(tab2).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('Custom Class Names', () => {
    it('applies custom className to root element', () => {
      const { container } = render(<Tabs items={basicItems} className="custom-tabs" />);
      const tabs = container.querySelector('.tabs');
      expect(tabs).toHaveClass('custom-tabs');
    });

    it('applies custom tabListClassName to tab list', () => {
      const { container } = render(<Tabs items={basicItems} tabListClassName="custom-list" />);
      const tabList = container.querySelector('.tabList');
      expect(tabList).toHaveClass('custom-list');
    });

    it('applies custom contentClassName to content area', () => {
      const { container } = render(<Tabs items={basicItems} contentClassName="custom-content" />);
      const content = container.querySelector('.content');
      expect(content).toHaveClass('custom-content');
    });
  });

  describe('Edge Cases', () => {
    it('handles single tab', () => {
      const singleItem: TabItem[] = [
        { key: '1', label: 'Only Tab', content: <div>Only content</div> },
      ];
      render(<Tabs items={singleItem} />);

      expect(screen.getByText('Only Tab')).toBeInTheDocument();
      expect(screen.getByText('Only content')).toBeInTheDocument();
    });

    it('handles empty label', () => {
      const itemsWithEmptyLabel: TabItem[] = [
        { key: '1', label: '', content: <div>Content 1</div> },
      ];
      render(<Tabs items={itemsWithEmptyLabel} />);
      expect(screen.getByText('Content 1')).toBeInTheDocument();
    });
  });
});

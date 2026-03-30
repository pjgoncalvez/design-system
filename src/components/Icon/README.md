# Icon System

A comprehensive icon library with 252 TypeScript icons organized by category. All icons support dynamic sizing and coloring with fallback defaults.

## Features

- ✅ **252 TypeScript Icons** - Fully typed SVG components organized in 6 categories
- ✅ **Dynamic Props** - Size and color can be customized
- ✅ **Fallback Defaults** - All icons have sensible defaults (24px, #4E5969)
- ✅ **Generic Icon Component** - Higher-order component for name-based icon selection
- ✅ **Tree-Shakeable** - Import only the icons you need
- ✅ **Storybook Integration** - Complete documentation and visual examples
- ✅ **Visual Regression Tests** - Automated testing for all icons
- ✅ **Organized by Category** - Icons grouped logically for easy discovery

## Categories

- **Direction** (34 icons): ArrowDown, ArrowUp, CaretLeft, DoubleRight, etc.
- **Edit** (42 icons): Bold, Italic, Copy, Delete, AlignCenter, etc.
- **General** (89 icons): Apps, Calendar, Email, File, Folder, User, etc.
- **Interactive Button** (42 icons): Settings, Search, Download, Upload, Heart, Star, etc.
- **Media** (20 icons): PlayArrow, PauseCircle, Music, Video, Sound, etc.
- **Tips** (25 icons): Check, Close, Info, Warning, Plus, Minus, etc.

## Installation

```bash
npm install
```

## Usage

### Method 1: Generic Icon Component (Recommended for Dynamic Icons)

Use the generic `Icon` component when you need to dynamically select icons based on a name:

```tsx
import { Icon } from '@/components/Icon';

// Basic usage with defaults
<Icon name="Apps" />

// With custom size and color
<Icon name="Settings" size={32} color="#FF5733" />

// With additional props
<Icon name="Home" size={24} color="#3357FF" className="custom-class" />
```

### Method 2: Individual Icon Components (Best for Tree-Shaking)

Import specific icon components directly for better bundle optimization:

```tsx
import { Apps, Settings, Home } from '@/components/Icon';

// Basic usage
<Apps />

// With custom props
<Settings size={32} color="#FF5733" />
<Home size={24} color="#3357FF" className="custom-class" />
```

## Available Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `IconSize` | `24` | Icon size in pixels. Options: 10, 12, 14, 16, 18, 20, 22, 24, 32, 48 |
| `color` | `string` | `#4E5969` | Fill color for the icon. Any valid CSS color value |
| `className` | `string` | - | Additional CSS class name |
| ...rest | `SVGProps` | - | All standard SVG element props (onClick, onHover, etc.) |

## TypeScript Support

Full TypeScript support with autocomplete for icon names:

```tsx
import { Icon, IconName } from '@/components/Icon';

// TypeScript will provide autocomplete for all 252 icon names
const iconName: IconName = 'Apps';

<Icon name={iconName} size={24} color="#4E5969" />
```

## Examples

### Different Sizes
```tsx
<Icon name="Apps" size={10} />  // Tiny
<Icon name="Apps" size={16} />  // Small
<Icon name="Apps" size={24} />  // Default
<Icon name="Apps" size={32} />  // Large
<Icon name="Apps" size={48} />  // Extra Large
```

### Different Colors
```tsx
<Icon name="Heart" color="#FF5733" />  // Red
<Icon name="Heart" color="#33FF57" />  // Green
<Icon name="Heart" color="#3357FF" />  // Blue
<Icon name="Heart" color="currentColor" />  // Inherits from parent
```

### With Event Handlers
```tsx
<Icon
  name="Settings"
  size={24}
  color="#4E5969"
  onClick={() => console.log('Settings clicked')}
  style={{ cursor: 'pointer' }}
/>
```

### With CSS Classes
```tsx
<Icon
  name="Home"
  size={24}
  className="hover:text-blue-500 transition-colors"
/>
```

## Storybook

View all icons in Storybook:

```bash
npm run storybook
```

Navigate to:
- **Components > Icon** - Interactive icon playground
- **Components > Icon > Gallery** - Complete gallery of all 252 icons

## Visual Regression Testing

Run visual regression tests to ensure icons render correctly:

```bash
# Run all tests
npm run test:e2e

# Run only icon tests
npm run test:e2e -- icon-components.visual.spec.ts

# Update snapshots if icons change intentionally
npm run test:e2e -- --update-snapshots
```

## Icon List by Category

### Direction Icons (34)
ArrowDown, ArrowFall, ArrowLeft, ArrowRight, ArrowRise, ArrowUp, CaretDown, CaretLeft, CaretRight, CaretUp, DoubleDown, DoubleLeft, DoubleRight, DoubleUp, Down, DownCircle, DragArrow, Expand, Left, LeftCircle, MenuFold, MenuUnfold, Right, RightCircle, RotateLeft, RotateRight, Shrink, Swap, ToBottom, ToLeft, ToRight, ToTop, Up, UpCircle

### Edit Icons (42)
AlignCenter, AlignLeft, AlignRight, BgColors, Bold, Brush, Circular, Copy, Delete, Edit, Eraser, Filter, FindReplace, FontColors, Formula, H1, H2, H3, H4, H5, H6, H7, Highlight, Italic, LineHeight, Link, ObliqueLine, OrderedList, OriginalSize, Paste, Quote, Redo, Scissor, Sort, SortAscending, SortDescending, Strikethrough, Underline, Undo, UnorderedList, ZoomIn, ZoomOut

### General Icons (89)
Application, Apps, Archive, Book, Branch, Bug, Bulb, Calendar, Camera, Cloud, Command, Common, Compass, Copyright, Dashboard, Desktop, Dice, DragDot, DragDotVertical, DriveFile, Ear, Email, Empty, Experiment, FaceFrownFill, FaceMehFill, File, FileAudio, FileImage, FilePdf, FileVideo, Fire, Folder, FolderAdd, FolderDelete, Gift, Idcard, Image, ImageClose, Interaction, Language, Layout, Loading, Location, Lock, Loop, Man, Menu, MindMapping, Mobile, Moon, MoonFill, Mosaic, Nav, Notification, NotificationClose, OldVersion, Pen, PenFill, Phone, Printer, Public, Pushpin, Qrcode, Robot, RobotAdd, Safe, Schedule, Shake, Skin, Stamp, Storage, Subscribe, SubscribeAdd, Subscribed, Sun, SunFill, Tag, Tags, Thunderbolt, Tool, Trophy, Unlock, User, UserAdd, UserGroup, VideoCamera, Wifi, Woman

### Interactive Button Icons (42)
At, CloudDownload, Code, CodeBlock, CodeSquare, CustomerService, Download, Export, Eye, EyeInvisible, Heart, History, Home, Import, Launch, List, Message, MessageBanned, More, MoreVertical, Poweroff, Refresh, Reply, Save, Scan, Search, SelectAll, Send, Settings, ShareAlt, ShareExternal, ShareInternal, Star, StarFill, Sync, ThumbDown, ThumbDownFill, ThumbUp, ThumbUpFill, Translate, Upload, Voice

### Media Icons (20)
Backward, Forward, Fullscreen, FullscreenExit, LiveBroadcast, Music, Mute, MuteFill, PauseCircle, PauseCircleFill, PlayArrow, PlayArrowFill, PlayCircle, PlayCircleFill, Record, RecordStop, SkipNextFill, SkipPreviousFill, Sound, SoundFill

### Tips Icons (25)
Check, CheckCircle, CheckCircleFill, CheckSquare, ClockCircle, Close, CloseCircle, CloseCircleFill, Exclamation, ExclamationCircle, ExclamationCircleFill, ExclamationPolygonFill, Info, InfoCircle, InfoCircleFill, Minus, MinusCircle, MinusCircleFill, Plus, PlusCircle, PlusCircleFill, Question, QuestionCircle, QuestionCircleFill, Stop

## Architecture

```
src/components/Icon/
├── types.ts                    # TypeScript types and interfaces
├── Icon.tsx                    # Generic Icon component (HOC)
├── Icon.test.tsx              # Component tests
├── Icon.stories.tsx           # Storybook stories
├── IconGallery.stories.tsx    # Gallery story
├── index.ts                    # Main export file
├── README.md                   # This file
├── direction/                  # Direction icons (34)
│   ├── ArrowDown.tsx
│   ├── ArrowUp.tsx
│   └── ...
├── edit/                       # Edit icons (42)
│   ├── Bold.tsx
│   ├── Italic.tsx
│   └── ...
├── general/                    # General icons (89)
│   ├── Apps.tsx
│   ├── Calendar.tsx
│   └── ...
├── interactive-button/         # Interactive icons (42)
│   ├── Settings.tsx
│   ├── Search.tsx
│   └── ...
├── media/                      # Media icons (20)
│   ├── PlayArrow.tsx
│   ├── PauseCircle.tsx
│   └── ...
└── tips/                       # Tips icons (25)
    ├── Check.tsx
    ├── Close.tsx
    └── ...

scripts/
├── convert-categorized-icons.js    # Converts JS to TS
├── generate-icon-component.js      # Generates Icon.tsx and index.ts
└── icon-list.json                  # Generated icon list

e2e/
└── icon-components.visual.spec.ts  # Visual regression tests
```

## Design Tokens

The icon system follows design system specifications:

- **Default size**: 24px (optimal for most use cases)
- **Default color**: #4E5969 (neutral gray from design tokens)
- **Size scale**: 10, 12, 14, 16, 18, 20, 22, 24, 32, 48 (aligned with spacing scale)
- **ViewBox**: Dynamic based on size for proper scaling

## Performance

- **Bundle size**: ~1KB per icon (gzipped)
- **Tree-shaking**: Import only what you need
- **SVG optimization**: All icons are optimized for minimal file size
- **No runtime dependencies**: Pure React + SVG

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with appropriate polyfills)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Part of the design system. See main project license.

/**
 * Icon Gallery Stories
 *
 * Displays all 252 icons in a comprehensive grid for visual regression testing.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, IconName } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon/Gallery',
  component: Icon,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete gallery of all 252 icons in the design system.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// All 252 icon names
const allIconNames: IconName[] = [
  'AlignCenter',
  'AlignLeft',
  'AlignRight',
  'Application',
  'Apps',
  'Archive',
  'ArrowDown',
  'ArrowFall',
  'ArrowLeft',
  'ArrowRight',
  'ArrowRise',
  'ArrowUp',
  'At',
  'Backward',
  'BgColors',
  'Bold',
  'Book',
  'Branch',
  'Brush',
  'Bug',
  'Bulb',
  'Calendar',
  'Camera',
  'CaretDown',
  'CaretLeft',
  'CaretRight',
  'CaretUp',
  'Check',
  'CheckCircle',
  'CheckCircleFill',
  'CheckSquare',
  'Circular',
  'ClockCircle',
  'Close',
  'CloseCircle',
  'CloseCircleFill',
  'Cloud',
  'CloudDownload',
  'Code',
  'CodeBlock',
  'CodeSquare',
  'Command',
  'Common',
  'Compass',
  'Copy',
  'Copyright',
  'CustomerService',
  'Dashboard',
  'Delete',
  'Desktop',
  'Dice',
  'DoubleDown',
  'DoubleLeft',
  'DoubleRight',
  'DoubleUp',
  'Down',
  'DownCircle',
  'Download',
  'DragArrow',
  'DragDot',
  'DragDotVertical',
  'DriveFile',
  'Ear',
  'Edit',
  'Email',
  'Empty',
  'Eraser',
  'Exclamation',
  'ExclamationCircle',
  'ExclamationCircleFill',
  'ExclamationPolygonFill',
  'Expand',
  'Experiment',
  'Export',
  'Eye',
  'EyeInvisible',
  'FaceFrownFill',
  'FaceMehFill',
  'File',
  'FileAudio',
  'FileImage',
  'FilePdf',
  'FileVideo',
  'Filter',
  'FindReplace',
  'Fire',
  'Folder',
  'FolderAdd',
  'FolderDelete',
  'FontColors',
  'Formula',
  'Forward',
  'Fullscreen',
  'FullscreenExit',
  'Gift',
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'H7',
  'Heart',
  'Highlight',
  'History',
  'Home',
  'Idcard',
  'Image',
  'ImageClose',
  'Import',
  'Info',
  'InfoCircle',
  'InfoCircleFill',
  'Interaction',
  'Italic',
  'Language',
  'Launch',
  'Layout',
  'Left',
  'LeftCircle',
  'LineHeight',
  'Link',
  'List',
  'LiveBroadcast',
  'Loading',
  'Location',
  'Lock',
  'Loop',
  'Man',
  'Menu',
  'MenuFold',
  'MenuUnfold',
  'Message',
  'MessageBanned',
  'MindMapping',
  'Minus',
  'MinusCircle',
  'MinusCircleFill',
  'Mobile',
  'Moon',
  'MoonFill',
  'More',
  'MoreVertical',
  'Mosaic',
  'Music',
  'Mute',
  'MuteFill',
  'Nav',
  'Notification',
  'NotificationClose',
  'ObliqueLine',
  'OldVersion',
  'OrderedList',
  'OriginalSize',
  'Paste',
  'PauseCircle',
  'PauseCircleFill',
  'Pen',
  'PenFill',
  'Phone',
  'PlayArrow',
  'PlayArrowFill',
  'PlayCircle',
  'PlayCircleFill',
  'Plus',
  'PlusCircle',
  'PlusCircleFill',
  'Poweroff',
  'Printer',
  'Public',
  'Pushpin',
  'Qrcode',
  'Question',
  'QuestionCircle',
  'QuestionCircleFill',
  'Quote',
  'Record',
  'RecordStop',
  'Redo',
  'Refresh',
  'Reply',
  'Right',
  'RightCircle',
  'Robot',
  'RobotAdd',
  'RotateLeft',
  'RotateRight',
  'Safe',
  'Save',
  'Scan',
  'Schedule',
  'Scissor',
  'Search',
  'SelectAll',
  'Send',
  'Settings',
  'Shake',
  'ShareAlt',
  'ShareExternal',
  'ShareInternal',
  'Shrink',
  'Skin',
  'SkipNextFill',
  'SkipPreviousFill',
  'Sort',
  'SortAscending',
  'SortDescending',
  'Sound',
  'SoundFill',
  'Stamp',
  'Star',
  'StarFill',
  'Stop',
  'Storage',
  'Strikethrough',
  'Subscribe',
  'SubscribeAdd',
  'Subscribed',
  'Sun',
  'SunFill',
  'Swap',
  'Sync',
  'Tag',
  'Tags',
  'ThumbDown',
  'ThumbDownFill',
  'ThumbUp',
  'ThumbUpFill',
  'Thunderbolt',
  'ToBottom',
  'ToLeft',
  'Tool',
  'ToRight',
  'ToTop',
  'Translate',
  'Trophy',
  'Underline',
  'Undo',
  'Unlock',
  'UnorderedList',
  'Up',
  'UpCircle',
  'Upload',
  'User',
  'UserAdd',
  'UserGroup',
  'VideoCamera',
  'Voice',
  'Wifi',
  'Woman',
  'ZoomIn',
  'ZoomOut',
];

/**
 * Complete icon gallery - all 252 icons
 * Perfect for visual regression testing
 */
export const AllIcons: Story = {
  args: {} as never,
  render: () => (
    <div style={{ padding: '40px' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '24px', fontWeight: 600 }}>
        All Icons ({allIconNames.length})
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '24px',
        }}
      >
        {allIconNames.map((iconName) => (
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
                padding: '16px',
                borderRadius: '8px',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                aspectRatio: '1',
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
                lineHeight: '1.3',
              }}
            >
              {iconName}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

/**
 * Icons organized by category
 */
export const ByCategory: Story = {
  args: {} as never,
  render: () => {
    const categories = {
      'Direction & Navigation': [
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'CaretUp',
        'CaretDown',
        'CaretLeft',
        'CaretRight',
        'DoubleUp',
        'DoubleDown',
        'DoubleLeft',
        'DoubleRight',
        'ToTop',
        'ToBottom',
        'ToLeft',
        'ToRight',
      ] as IconName[],
      'Edit & Format': [
        'Edit',
        'Bold',
        'Italic',
        'Underline',
        'Strikethrough',
        'AlignLeft',
        'AlignCenter',
        'AlignRight',
        'Highlight',
        'FontColors',
        'BgColors',
        'Eraser',
        'Brush',
      ] as IconName[],
      Actions: [
        'Plus',
        'Minus',
        'Check',
        'Close',
        'Delete',
        'Copy',
        'Paste',
        'Save',
        'Download',
        'Upload',
        'Send',
        'Reply',
        'Forward',
        'Refresh',
      ] as IconName[],
      Media: [
        'Image',
        'VideoCamera',
        'Camera',
        'Music',
        'Voice',
        'PlayArrow',
        'PauseCircle',
        'Stop',
        'Record',
        'Sound',
        'Mute',
      ] as IconName[],
      'Files & Folders': [
        'File',
        'FileImage',
        'FileVideo',
        'FileAudio',
        'FilePdf',
        'Folder',
        'FolderAdd',
        'FolderDelete',
        'DriveFile',
      ] as IconName[],
      'User & Social': [
        'User',
        'UserAdd',
        'UserGroup',
        'Man',
        'Woman',
        'Heart',
        'Star',
        'ThumbUp',
        'ThumbDown',
      ] as IconName[],
      Communication: [
        'Email',
        'Message',
        'Phone',
        'At',
        'Notification',
        'CustomerService',
      ] as IconName[],
      Interface: [
        'Home',
        'Apps',
        'Settings',
        'Menu',
        'Search',
        'Filter',
        'Dashboard',
        'Calendar',
        'Desktop',
        'Mobile',
      ] as IconName[],
    };

    return (
      <div style={{ padding: '40px' }}>
        {Object.entries(categories).map(([category, icons]) => (
          <div key={category} style={{ marginBottom: '48px' }}>
            <h2
              style={{
                marginBottom: '24px',
                fontSize: '18px',
                fontWeight: 600,
                color: '#333',
              }}
            >
              {category}
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                gap: '20px',
              }}
            >
              {icons.map((iconName) => (
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
                      width: '100%',
                      aspectRatio: '1',
                    }}
                  >
                    <Icon name={iconName} size={24} color="#4E5969" />
                  </div>
                  <span
                    style={{
                      fontSize: '10px',
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
          </div>
        ))}
      </div>
    );
  },
};

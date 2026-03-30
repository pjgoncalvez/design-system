/**
 * Generic Icon Component
 *
 * A higher-order component that accepts an icon name and renders
 * the corresponding icon component with dynamic size and color props.
 *
 * Usage:
 * <Icon name="ArrowDown" size={32} color="#FF5733" />
 */

import React from 'react';
import { IconProps } from './types';

import SvgArrowDown from './direction/ArrowDown';
import SvgArrowFall from './direction/ArrowFall';
import SvgArrowLeft from './direction/ArrowLeft';
import SvgArrowRight from './direction/ArrowRight';
import SvgArrowRise from './direction/ArrowRise';
import SvgArrowUp from './direction/ArrowUp';
import SvgCaretDown from './direction/CaretDown';
import SvgCaretLeft from './direction/CaretLeft';
import SvgCaretRight from './direction/CaretRight';
import SvgCaretUp from './direction/CaretUp';
import SvgDoubleDown from './direction/DoubleDown';
import SvgDoubleLeft from './direction/DoubleLeft';
import SvgDoubleRight from './direction/DoubleRight';
import SvgDoubleUp from './direction/DoubleUp';
import SvgDown from './direction/Down';
import SvgDownCircle from './direction/DownCircle';
import SvgDragArrow from './direction/DragArrow';
import SvgExpand from './direction/Expand';
import SvgLeft from './direction/Left';
import SvgLeftCircle from './direction/LeftCircle';
import SvgMenuFold from './direction/MenuFold';
import SvgMenuUnfold from './direction/MenuUnfold';
import SvgRight from './direction/Right';
import SvgRightCircle from './direction/RightCircle';
import SvgRotateLeft from './direction/RotateLeft';
import SvgRotateRight from './direction/RotateRight';
import SvgShrink from './direction/Shrink';
import SvgSwap from './direction/Swap';
import SvgToBottom from './direction/ToBottom';
import SvgToLeft from './direction/ToLeft';
import SvgToRight from './direction/ToRight';
import SvgToTop from './direction/ToTop';
import SvgUp from './direction/Up';
import SvgUpCircle from './direction/UpCircle';
import SvgAlignCenter from './edit/AlignCenter';
import SvgAlignLeft from './edit/AlignLeft';
import SvgAlignRight from './edit/AlignRight';
import SvgBgColors from './edit/BgColors';
import SvgBold from './edit/Bold';
import SvgBrush from './edit/Brush';
import SvgCircular from './edit/Circular';
import SvgCopy from './edit/Copy';
import SvgDelete from './edit/Delete';
import SvgEdit from './edit/Edit';
import SvgEraser from './edit/Eraser';
import SvgFilter from './edit/Filter';
import SvgFindReplace from './edit/FindReplace';
import SvgFontColors from './edit/FontColors';
import SvgFormula from './edit/Formula';
import SvgH1 from './edit/H1';
import SvgH2 from './edit/H2';
import SvgH3 from './edit/H3';
import SvgH4 from './edit/H4';
import SvgH5 from './edit/H5';
import SvgH6 from './edit/H6';
import SvgH7 from './edit/H7';
import SvgHighlight from './edit/Highlight';
import SvgItalic from './edit/Italic';
import SvgLineHeight from './edit/LineHeight';
import SvgLink from './edit/Link';
import SvgObliqueLine from './edit/ObliqueLine';
import SvgOrderedList from './edit/OrderedList';
import SvgOriginalSize from './edit/OriginalSize';
import SvgPaste from './edit/Paste';
import SvgQuote from './edit/Quote';
import SvgRedo from './edit/Redo';
import SvgScissor from './edit/Scissor';
import SvgSort from './edit/Sort';
import SvgSortAscending from './edit/SortAscending';
import SvgSortDescending from './edit/SortDescending';
import SvgStrikethrough from './edit/Strikethrough';
import SvgUnderline from './edit/Underline';
import SvgUndo from './edit/Undo';
import SvgUnorderedList from './edit/UnorderedList';
import SvgZoomIn from './edit/ZoomIn';
import SvgZoomOut from './edit/ZoomOut';
import SvgApplication from './general/Application';
import SvgApps from './general/Apps';
import SvgArchive from './general/Archive';
import SvgBook from './general/Book';
import SvgBranch from './general/Branch';
import SvgBug from './general/Bug';
import SvgBulb from './general/Bulb';
import SvgCalendar from './general/Calendar';
import SvgCamera from './general/Camera';
import SvgCloud from './general/Cloud';
import SvgCommand from './general/Command';
import SvgCommon from './general/Common';
import SvgCompass from './general/Compass';
import SvgCopyright from './general/Copyright';
import SvgDashboard from './general/Dashboard';
import SvgDesktop from './general/Desktop';
import SvgDice from './general/Dice';
import SvgDragDot from './general/DragDot';
import SvgDragDotVertical from './general/DragDotVertical';
import SvgDriveFile from './general/DriveFile';
import SvgEar from './general/Ear';
import SvgEmail from './general/Email';
import SvgEmpty from './general/Empty';
import SvgExperiment from './general/Experiment';
import SvgFaceFrownFill from './general/FaceFrownFill';
import SvgFaceMehFill from './general/FaceMehFill';
import SvgFile from './general/File';
import SvgFileAudio from './general/FileAudio';
import SvgFileImage from './general/FileImage';
import SvgFilePdf from './general/FilePdf';
import SvgFileVideo from './general/FileVideo';
import SvgFire from './general/Fire';
import SvgFolder from './general/Folder';
import SvgFolderAdd from './general/FolderAdd';
import SvgFolderDelete from './general/FolderDelete';
import SvgGift from './general/Gift';
import SvgIdcard from './general/Idcard';
import SvgImage from './general/Image';
import SvgImageClose from './general/ImageClose';
import SvgInteraction from './general/Interaction';
import SvgLanguage from './general/Language';
import SvgLayout from './general/Layout';
import SvgLoading from './general/Loading';
import SvgLocation from './general/Location';
import SvgLock from './general/Lock';
import SvgLoop from './general/Loop';
import SvgMan from './general/Man';
import SvgMenu from './general/Menu';
import SvgMindMapping from './general/MindMapping';
import SvgMobile from './general/Mobile';
import SvgMoon from './general/Moon';
import SvgMoonFill from './general/MoonFill';
import SvgMosaic from './general/Mosaic';
import SvgNav from './general/Nav';
import SvgNotification from './general/Notification';
import SvgNotificationClose from './general/NotificationClose';
import SvgOldVersion from './general/OldVersion';
import SvgPen from './general/Pen';
import SvgPenFill from './general/PenFill';
import SvgPhone from './general/Phone';
import SvgPrinter from './general/Printer';
import SvgPublic from './general/Public';
import SvgPushpin from './general/Pushpin';
import SvgQrcode from './general/Qrcode';
import SvgRobot from './general/Robot';
import SvgRobotAdd from './general/RobotAdd';
import SvgSafe from './general/Safe';
import SvgSchedule from './general/Schedule';
import SvgShake from './general/Shake';
import SvgSkin from './general/Skin';
import SvgStamp from './general/Stamp';
import SvgStorage from './general/Storage';
import SvgSubscribe from './general/Subscribe';
import SvgSubscribeAdd from './general/SubscribeAdd';
import SvgSubscribed from './general/Subscribed';
import SvgSun from './general/Sun';
import SvgSunFill from './general/SunFill';
import SvgTag from './general/Tag';
import SvgTags from './general/Tags';
import SvgThunderbolt from './general/Thunderbolt';
import SvgTool from './general/Tool';
import SvgTrophy from './general/Trophy';
import SvgUnlock from './general/Unlock';
import SvgUser from './general/User';
import SvgUserAdd from './general/UserAdd';
import SvgUserGroup from './general/UserGroup';
import SvgVideoCamera from './general/VideoCamera';
import SvgWifi from './general/Wifi';
import SvgWoman from './general/Woman';
import SvgAt from './interactive-button/At';
import SvgCloudDownload from './interactive-button/CloudDownload';
import SvgCode from './interactive-button/Code';
import SvgCodeBlock from './interactive-button/CodeBlock';
import SvgCodeSquare from './interactive-button/CodeSquare';
import SvgCustomerService from './interactive-button/CustomerService';
import SvgDownload from './interactive-button/Download';
import SvgExport from './interactive-button/Export';
import SvgEye from './interactive-button/Eye';
import SvgEyeInvisible from './interactive-button/EyeInvisible';
import SvgHeart from './interactive-button/Heart';
import SvgHistory from './interactive-button/History';
import SvgHome from './interactive-button/Home';
import SvgImport from './interactive-button/Import';
import SvgLaunch from './interactive-button/Launch';
import SvgList from './interactive-button/List';
import SvgMessage from './interactive-button/Message';
import SvgMessageBanned from './interactive-button/MessageBanned';
import SvgMore from './interactive-button/More';
import SvgMoreVertical from './interactive-button/MoreVertical';
import SvgPoweroff from './interactive-button/Poweroff';
import SvgRefresh from './interactive-button/Refresh';
import SvgReply from './interactive-button/Reply';
import SvgSave from './interactive-button/Save';
import SvgScan from './interactive-button/Scan';
import SvgSearch from './interactive-button/Search';
import SvgSelectAll from './interactive-button/SelectAll';
import SvgSend from './interactive-button/Send';
import SvgSettings from './interactive-button/Settings';
import SvgShareAlt from './interactive-button/ShareAlt';
import SvgShareExternal from './interactive-button/ShareExternal';
import SvgShareInternal from './interactive-button/ShareInternal';
import SvgStar from './interactive-button/Star';
import SvgStarFill from './interactive-button/StarFill';
import SvgSync from './interactive-button/Sync';
import SvgThumbDown from './interactive-button/ThumbDown';
import SvgThumbDownFill from './interactive-button/ThumbDownFill';
import SvgThumbUp from './interactive-button/ThumbUp';
import SvgThumbUpFill from './interactive-button/ThumbUpFill';
import SvgTranslate from './interactive-button/Translate';
import SvgUpload from './interactive-button/Upload';
import SvgVoice from './interactive-button/Voice';
import SvgBackward from './media/Backward';
import SvgForward from './media/Forward';
import SvgFullscreen from './media/Fullscreen';
import SvgFullscreenExit from './media/FullscreenExit';
import SvgLiveBroadcast from './media/LiveBroadcast';
import SvgMusic from './media/Music';
import SvgMute from './media/Mute';
import SvgMuteFill from './media/MuteFill';
import SvgPauseCircle from './media/PauseCircle';
import SvgPauseCircleFill from './media/PauseCircleFill';
import SvgPlayArrow from './media/PlayArrow';
import SvgPlayArrowFill from './media/PlayArrowFill';
import SvgPlayCircle from './media/PlayCircle';
import SvgPlayCircleFill from './media/PlayCircleFill';
import SvgRecord from './media/Record';
import SvgRecordStop from './media/RecordStop';
import SvgSkipNextFill from './media/SkipNextFill';
import SvgSkipPreviousFill from './media/SkipPreviousFill';
import SvgSound from './media/Sound';
import SvgSoundFill from './media/SoundFill';
import SvgCheck from './tips/Check';
import SvgCheckCircle from './tips/CheckCircle';
import SvgCheckCircleFill from './tips/CheckCircleFill';
import SvgCheckSquare from './tips/CheckSquare';
import SvgClockCircle from './tips/ClockCircle';
import SvgClose from './tips/Close';
import SvgCloseCircle from './tips/CloseCircle';
import SvgCloseCircleFill from './tips/CloseCircleFill';
import SvgExclamation from './tips/Exclamation';
import SvgExclamationCircle from './tips/ExclamationCircle';
import SvgExclamationCircleFill from './tips/ExclamationCircleFill';
import SvgExclamationPolygonFill from './tips/ExclamationPolygonFill';
import SvgInfo from './tips/Info';
import SvgInfoCircle from './tips/InfoCircle';
import SvgInfoCircleFill from './tips/InfoCircleFill';
import SvgMinus from './tips/Minus';
import SvgMinusCircle from './tips/MinusCircle';
import SvgMinusCircleFill from './tips/MinusCircleFill';
import SvgPlus from './tips/Plus';
import SvgPlusCircle from './tips/PlusCircle';
import SvgPlusCircleFill from './tips/PlusCircleFill';
import SvgQuestion from './tips/Question';
import SvgQuestionCircle from './tips/QuestionCircle';
import SvgQuestionCircleFill from './tips/QuestionCircleFill';
import SvgStop from './tips/Stop';

/**
 * All available icon names
 */
export type IconName =
  | 'ArrowDown'
  | 'ArrowFall'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'ArrowRise'
  | 'ArrowUp'
  | 'CaretDown'
  | 'CaretLeft'
  | 'CaretRight'
  | 'CaretUp'
  | 'DoubleDown'
  | 'DoubleLeft'
  | 'DoubleRight'
  | 'DoubleUp'
  | 'Down'
  | 'DownCircle'
  | 'DragArrow'
  | 'Expand'
  | 'Left'
  | 'LeftCircle'
  | 'MenuFold'
  | 'MenuUnfold'
  | 'Right'
  | 'RightCircle'
  | 'RotateLeft'
  | 'RotateRight'
  | 'Shrink'
  | 'Swap'
  | 'ToBottom'
  | 'ToLeft'
  | 'ToRight'
  | 'ToTop'
  | 'Up'
  | 'UpCircle'
  | 'AlignCenter'
  | 'AlignLeft'
  | 'AlignRight'
  | 'BgColors'
  | 'Bold'
  | 'Brush'
  | 'Circular'
  | 'Copy'
  | 'Delete'
  | 'Edit'
  | 'Eraser'
  | 'Filter'
  | 'FindReplace'
  | 'FontColors'
  | 'Formula'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'H6'
  | 'H7'
  | 'Highlight'
  | 'Italic'
  | 'LineHeight'
  | 'Link'
  | 'ObliqueLine'
  | 'OrderedList'
  | 'OriginalSize'
  | 'Paste'
  | 'Quote'
  | 'Redo'
  | 'Scissor'
  | 'Sort'
  | 'SortAscending'
  | 'SortDescending'
  | 'Strikethrough'
  | 'Underline'
  | 'Undo'
  | 'UnorderedList'
  | 'ZoomIn'
  | 'ZoomOut'
  | 'Application'
  | 'Apps'
  | 'Archive'
  | 'Book'
  | 'Branch'
  | 'Bug'
  | 'Bulb'
  | 'Calendar'
  | 'Camera'
  | 'Cloud'
  | 'Command'
  | 'Common'
  | 'Compass'
  | 'Copyright'
  | 'Dashboard'
  | 'Desktop'
  | 'Dice'
  | 'DragDot'
  | 'DragDotVertical'
  | 'DriveFile'
  | 'Ear'
  | 'Email'
  | 'Empty'
  | 'Experiment'
  | 'FaceFrownFill'
  | 'FaceMehFill'
  | 'File'
  | 'FileAudio'
  | 'FileImage'
  | 'FilePdf'
  | 'FileVideo'
  | 'Fire'
  | 'Folder'
  | 'FolderAdd'
  | 'FolderDelete'
  | 'Gift'
  | 'Idcard'
  | 'Image'
  | 'ImageClose'
  | 'Interaction'
  | 'Language'
  | 'Layout'
  | 'Loading'
  | 'Location'
  | 'Lock'
  | 'Loop'
  | 'Man'
  | 'Menu'
  | 'MindMapping'
  | 'Mobile'
  | 'Moon'
  | 'MoonFill'
  | 'Mosaic'
  | 'Nav'
  | 'Notification'
  | 'NotificationClose'
  | 'OldVersion'
  | 'Pen'
  | 'PenFill'
  | 'Phone'
  | 'Printer'
  | 'Public'
  | 'Pushpin'
  | 'Qrcode'
  | 'Robot'
  | 'RobotAdd'
  | 'Safe'
  | 'Schedule'
  | 'Shake'
  | 'Skin'
  | 'Stamp'
  | 'Storage'
  | 'Subscribe'
  | 'SubscribeAdd'
  | 'Subscribed'
  | 'Sun'
  | 'SunFill'
  | 'Tag'
  | 'Tags'
  | 'Thunderbolt'
  | 'Tool'
  | 'Trophy'
  | 'Unlock'
  | 'User'
  | 'UserAdd'
  | 'UserGroup'
  | 'VideoCamera'
  | 'Wifi'
  | 'Woman'
  | 'At'
  | 'CloudDownload'
  | 'Code'
  | 'CodeBlock'
  | 'CodeSquare'
  | 'CustomerService'
  | 'Download'
  | 'Export'
  | 'Eye'
  | 'EyeInvisible'
  | 'Heart'
  | 'History'
  | 'Home'
  | 'Import'
  | 'Launch'
  | 'List'
  | 'Message'
  | 'MessageBanned'
  | 'More'
  | 'MoreVertical'
  | 'Poweroff'
  | 'Refresh'
  | 'Reply'
  | 'Save'
  | 'Scan'
  | 'Search'
  | 'SelectAll'
  | 'Send'
  | 'Settings'
  | 'ShareAlt'
  | 'ShareExternal'
  | 'ShareInternal'
  | 'Star'
  | 'StarFill'
  | 'Sync'
  | 'ThumbDown'
  | 'ThumbDownFill'
  | 'ThumbUp'
  | 'ThumbUpFill'
  | 'Translate'
  | 'Upload'
  | 'Voice'
  | 'Backward'
  | 'Forward'
  | 'Fullscreen'
  | 'FullscreenExit'
  | 'LiveBroadcast'
  | 'Music'
  | 'Mute'
  | 'MuteFill'
  | 'PauseCircle'
  | 'PauseCircleFill'
  | 'PlayArrow'
  | 'PlayArrowFill'
  | 'PlayCircle'
  | 'PlayCircleFill'
  | 'Record'
  | 'RecordStop'
  | 'SkipNextFill'
  | 'SkipPreviousFill'
  | 'Sound'
  | 'SoundFill'
  | 'Check'
  | 'CheckCircle'
  | 'CheckCircleFill'
  | 'CheckSquare'
  | 'ClockCircle'
  | 'Close'
  | 'CloseCircle'
  | 'CloseCircleFill'
  | 'Exclamation'
  | 'ExclamationCircle'
  | 'ExclamationCircleFill'
  | 'ExclamationPolygonFill'
  | 'Info'
  | 'InfoCircle'
  | 'InfoCircleFill'
  | 'Minus'
  | 'MinusCircle'
  | 'MinusCircleFill'
  | 'Plus'
  | 'PlusCircle'
  | 'PlusCircleFill'
  | 'Question'
  | 'QuestionCircle'
  | 'QuestionCircleFill'
  | 'Stop';

/**
 * Props for the generic Icon component
 */
export interface GenericIconProps extends IconProps {
  /**
   * Name of the icon to render
   */
  name: IconName;
}

/**
 * Mapping of icon names to their components
 */
const iconComponents: Record<IconName, React.FC<IconProps>> = {
  ArrowDown: SvgArrowDown,
  ArrowFall: SvgArrowFall,
  ArrowLeft: SvgArrowLeft,
  ArrowRight: SvgArrowRight,
  ArrowRise: SvgArrowRise,
  ArrowUp: SvgArrowUp,
  CaretDown: SvgCaretDown,
  CaretLeft: SvgCaretLeft,
  CaretRight: SvgCaretRight,
  CaretUp: SvgCaretUp,
  DoubleDown: SvgDoubleDown,
  DoubleLeft: SvgDoubleLeft,
  DoubleRight: SvgDoubleRight,
  DoubleUp: SvgDoubleUp,
  Down: SvgDown,
  DownCircle: SvgDownCircle,
  DragArrow: SvgDragArrow,
  Expand: SvgExpand,
  Left: SvgLeft,
  LeftCircle: SvgLeftCircle,
  MenuFold: SvgMenuFold,
  MenuUnfold: SvgMenuUnfold,
  Right: SvgRight,
  RightCircle: SvgRightCircle,
  RotateLeft: SvgRotateLeft,
  RotateRight: SvgRotateRight,
  Shrink: SvgShrink,
  Swap: SvgSwap,
  ToBottom: SvgToBottom,
  ToLeft: SvgToLeft,
  ToRight: SvgToRight,
  ToTop: SvgToTop,
  Up: SvgUp,
  UpCircle: SvgUpCircle,
  AlignCenter: SvgAlignCenter,
  AlignLeft: SvgAlignLeft,
  AlignRight: SvgAlignRight,
  BgColors: SvgBgColors,
  Bold: SvgBold,
  Brush: SvgBrush,
  Circular: SvgCircular,
  Copy: SvgCopy,
  Delete: SvgDelete,
  Edit: SvgEdit,
  Eraser: SvgEraser,
  Filter: SvgFilter,
  FindReplace: SvgFindReplace,
  FontColors: SvgFontColors,
  Formula: SvgFormula,
  H1: SvgH1,
  H2: SvgH2,
  H3: SvgH3,
  H4: SvgH4,
  H5: SvgH5,
  H6: SvgH6,
  H7: SvgH7,
  Highlight: SvgHighlight,
  Italic: SvgItalic,
  LineHeight: SvgLineHeight,
  Link: SvgLink,
  ObliqueLine: SvgObliqueLine,
  OrderedList: SvgOrderedList,
  OriginalSize: SvgOriginalSize,
  Paste: SvgPaste,
  Quote: SvgQuote,
  Redo: SvgRedo,
  Scissor: SvgScissor,
  Sort: SvgSort,
  SortAscending: SvgSortAscending,
  SortDescending: SvgSortDescending,
  Strikethrough: SvgStrikethrough,
  Underline: SvgUnderline,
  Undo: SvgUndo,
  UnorderedList: SvgUnorderedList,
  ZoomIn: SvgZoomIn,
  ZoomOut: SvgZoomOut,
  Application: SvgApplication,
  Apps: SvgApps,
  Archive: SvgArchive,
  Book: SvgBook,
  Branch: SvgBranch,
  Bug: SvgBug,
  Bulb: SvgBulb,
  Calendar: SvgCalendar,
  Camera: SvgCamera,
  Cloud: SvgCloud,
  Command: SvgCommand,
  Common: SvgCommon,
  Compass: SvgCompass,
  Copyright: SvgCopyright,
  Dashboard: SvgDashboard,
  Desktop: SvgDesktop,
  Dice: SvgDice,
  DragDot: SvgDragDot,
  DragDotVertical: SvgDragDotVertical,
  DriveFile: SvgDriveFile,
  Ear: SvgEar,
  Email: SvgEmail,
  Empty: SvgEmpty,
  Experiment: SvgExperiment,
  FaceFrownFill: SvgFaceFrownFill,
  FaceMehFill: SvgFaceMehFill,
  File: SvgFile,
  FileAudio: SvgFileAudio,
  FileImage: SvgFileImage,
  FilePdf: SvgFilePdf,
  FileVideo: SvgFileVideo,
  Fire: SvgFire,
  Folder: SvgFolder,
  FolderAdd: SvgFolderAdd,
  FolderDelete: SvgFolderDelete,
  Gift: SvgGift,
  Idcard: SvgIdcard,
  Image: SvgImage,
  ImageClose: SvgImageClose,
  Interaction: SvgInteraction,
  Language: SvgLanguage,
  Layout: SvgLayout,
  Loading: SvgLoading,
  Location: SvgLocation,
  Lock: SvgLock,
  Loop: SvgLoop,
  Man: SvgMan,
  Menu: SvgMenu,
  MindMapping: SvgMindMapping,
  Mobile: SvgMobile,
  Moon: SvgMoon,
  MoonFill: SvgMoonFill,
  Mosaic: SvgMosaic,
  Nav: SvgNav,
  Notification: SvgNotification,
  NotificationClose: SvgNotificationClose,
  OldVersion: SvgOldVersion,
  Pen: SvgPen,
  PenFill: SvgPenFill,
  Phone: SvgPhone,
  Printer: SvgPrinter,
  Public: SvgPublic,
  Pushpin: SvgPushpin,
  Qrcode: SvgQrcode,
  Robot: SvgRobot,
  RobotAdd: SvgRobotAdd,
  Safe: SvgSafe,
  Schedule: SvgSchedule,
  Shake: SvgShake,
  Skin: SvgSkin,
  Stamp: SvgStamp,
  Storage: SvgStorage,
  Subscribe: SvgSubscribe,
  SubscribeAdd: SvgSubscribeAdd,
  Subscribed: SvgSubscribed,
  Sun: SvgSun,
  SunFill: SvgSunFill,
  Tag: SvgTag,
  Tags: SvgTags,
  Thunderbolt: SvgThunderbolt,
  Tool: SvgTool,
  Trophy: SvgTrophy,
  Unlock: SvgUnlock,
  User: SvgUser,
  UserAdd: SvgUserAdd,
  UserGroup: SvgUserGroup,
  VideoCamera: SvgVideoCamera,
  Wifi: SvgWifi,
  Woman: SvgWoman,
  At: SvgAt,
  CloudDownload: SvgCloudDownload,
  Code: SvgCode,
  CodeBlock: SvgCodeBlock,
  CodeSquare: SvgCodeSquare,
  CustomerService: SvgCustomerService,
  Download: SvgDownload,
  Export: SvgExport,
  Eye: SvgEye,
  EyeInvisible: SvgEyeInvisible,
  Heart: SvgHeart,
  History: SvgHistory,
  Home: SvgHome,
  Import: SvgImport,
  Launch: SvgLaunch,
  List: SvgList,
  Message: SvgMessage,
  MessageBanned: SvgMessageBanned,
  More: SvgMore,
  MoreVertical: SvgMoreVertical,
  Poweroff: SvgPoweroff,
  Refresh: SvgRefresh,
  Reply: SvgReply,
  Save: SvgSave,
  Scan: SvgScan,
  Search: SvgSearch,
  SelectAll: SvgSelectAll,
  Send: SvgSend,
  Settings: SvgSettings,
  ShareAlt: SvgShareAlt,
  ShareExternal: SvgShareExternal,
  ShareInternal: SvgShareInternal,
  Star: SvgStar,
  StarFill: SvgStarFill,
  Sync: SvgSync,
  ThumbDown: SvgThumbDown,
  ThumbDownFill: SvgThumbDownFill,
  ThumbUp: SvgThumbUp,
  ThumbUpFill: SvgThumbUpFill,
  Translate: SvgTranslate,
  Upload: SvgUpload,
  Voice: SvgVoice,
  Backward: SvgBackward,
  Forward: SvgForward,
  Fullscreen: SvgFullscreen,
  FullscreenExit: SvgFullscreenExit,
  LiveBroadcast: SvgLiveBroadcast,
  Music: SvgMusic,
  Mute: SvgMute,
  MuteFill: SvgMuteFill,
  PauseCircle: SvgPauseCircle,
  PauseCircleFill: SvgPauseCircleFill,
  PlayArrow: SvgPlayArrow,
  PlayArrowFill: SvgPlayArrowFill,
  PlayCircle: SvgPlayCircle,
  PlayCircleFill: SvgPlayCircleFill,
  Record: SvgRecord,
  RecordStop: SvgRecordStop,
  SkipNextFill: SvgSkipNextFill,
  SkipPreviousFill: SvgSkipPreviousFill,
  Sound: SvgSound,
  SoundFill: SvgSoundFill,
  Check: SvgCheck,
  CheckCircle: SvgCheckCircle,
  CheckCircleFill: SvgCheckCircleFill,
  CheckSquare: SvgCheckSquare,
  ClockCircle: SvgClockCircle,
  Close: SvgClose,
  CloseCircle: SvgCloseCircle,
  CloseCircleFill: SvgCloseCircleFill,
  Exclamation: SvgExclamation,
  ExclamationCircle: SvgExclamationCircle,
  ExclamationCircleFill: SvgExclamationCircleFill,
  ExclamationPolygonFill: SvgExclamationPolygonFill,
  Info: SvgInfo,
  InfoCircle: SvgInfoCircle,
  InfoCircleFill: SvgInfoCircleFill,
  Minus: SvgMinus,
  MinusCircle: SvgMinusCircle,
  MinusCircleFill: SvgMinusCircleFill,
  Plus: SvgPlus,
  PlusCircle: SvgPlusCircle,
  PlusCircleFill: SvgPlusCircleFill,
  Question: SvgQuestion,
  QuestionCircle: SvgQuestionCircle,
  QuestionCircleFill: SvgQuestionCircleFill,
  Stop: SvgStop,
};

/**
 * Icon Component
 *
 * Generic icon component that dynamically renders the specified icon.
 *
 * @example
 * // Basic usage
 * <Icon name="ArrowDown" />
 *
 * @example
 * // With custom size and color
 * <Icon name="Settings" size={32} color="#FF5733" />
 */
export const Icon: React.FC<GenericIconProps> = ({ name, ...props }) => {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in icon library`);
    return null;
  }

  return <IconComponent {...props} />;
};

Icon.displayName = 'Icon';

export default Icon;

# Salesforce Lightning Design System
# Release notes

<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

## Release 2.2.0 - Future, 2017

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- Added Global Navigation Tab bar (Workspace Tabs) - [Global Navigation Tab bar](/components/global-navigation/#flavor-navigation-tab-bar)
- Added Checkbox Add Button - [Checkbox Add Button](/components/forms/#flavor-checkbox-add-button)
- Added Split View - Compact List - [Split View](/components/split-view/)
- Added Button Group List - [Button Group List](compoments/button-groups/#flavor-list) - the new recommended way to mark up button groups.
- Added Rich Text Editor - [Rich Text Editor](/components/rich-text-editor)
- Added Global Header Notifications - [Global Header Notifications](/components/global/#flavor-notifications)
- Added Popover Footer - [Popover Footer](/components/popovers/#flavor-base-popover-footer)
- Added Progress Indicator - [Progress Indicator](/components/progress-indicator/)

**ADDED**

The following classes are now available:

- Added `slds-float--none` utility - [Utilities › Floats › Float None](/components/utilities/floats/#flavor-float-none)
- Added `slds-button--icon-container-more` modifier - [Button Icons › Button Icon with Dropdown](/components/button-icons/#flavor-icon-with-dropdown)
- Added `slds-button--icon-more-filled` for more buttons that require a background.
- Added `slds-text-color--inverse` utility - [Utilities › Text › Color](/components/utilities/text/#flavor-color-text-color-inverse)
- Added `slds-text-color--inverse-weak` utility - [Utilities › Text › Color](/components/utilities/text/#flavor-color-text-color-inverse-weak)

**CHANGES**

The following changes have been made in this release:

- Global actions icon on global header updated to have a background color
- Change global header icon's color and size
- Change background color of docked panels
  - Docked Utility Panel - [Docked Utility Panel](/components/docked-utility-bar/#flavor-utility-panel)
  - Docked Composer Panel - [Docked Composer Panel](/components/docked-composer)
- Cards are now responsive - [Cards](/components/cards/)
- Improvements made to `slds-type-focus` utility - [Utilities › Interactions](/components/utilities/interactions/#flavor-faux-links)

**FIXED**

The following issues have now been resolved:

- Add collapsable margin to `slds-card__body` to account for white space when the footer is empty
- Data Table - Inline edit now has full support

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

- Process › Wizard - Please use the new Progress Indicator instead [Progress Indicator](/components/progress-indicator/)

**REMOVED**

The following features are being removed in this release:

- `$css-prefix` is no longer available to change the prefix of `slds-` class names to something of your choice. As an alternative, please use this PostCSS plugin to customize class name prefixes: [postcss-slds-prefix](https://github.com/salesforce-ux/postcss-slds-prefix).
- Removed custom styled scrollbar mixin from `slds--scrollable-` helpers

**TOKENS**

The following tokens have been add/removed/deprecated in this release:

- Added `force-base/fill.json`
  - Added token `FILL_HEADER_BUTTON`    
  - Added token `FILL_HEADER_BUTTON_HOVER`
- Added token: `FONT_FAMILY_TEXT`
- Added token: `FONT_FAMILY_HEADING`
- Added token: `SPLIT_VIEW_COLOR_BACKGROUND`
- Added token: `SPLIT_VIEW_COLOR_BACKGROUND_ROW_HOVER`
- Added token: `Z_INDEX_STICKY`
- Added token: `FONT_FAMILY_TEXT`
- Added token: `FONT_FAMILY_HEADING`
- Added token: `PROGRESS_COLOR_BACKGROUND`
- Added token: `PROGRESS_COLOR_BACKGROUND_SHADE`
- Added token: `PROGRESS_COLOR_BORDER`
- Added token: `PROGRESS_COLOR_BORDER_SHADE`
- Added token: `PROGRESS_COLOR_BORDER_HOVER`
- Added token: `PROGRESS_COLOR_BORDER_ACTIVE`
- Added token: `PROGRESS_BAR_HEIGHT`
- Added token: `PROGRESS_BAR_COLOR_BACKGROUND`
- Added token: `PROGRESS_BAR_COLOR_BACKGROUND_FILL`
- Added token: `COLOR_STROKE_BRAND`
- Added token: `COLOR_STROKE_BRAND_HOVER`
- Added token: `COLOR_STROKE_BRAND_ACTIVE`
- Added token: `COLOR_STROKE_DISABLED`
- Added token: `COLOR_STROKE_HEADER_BUTTON`
- Added token: `FILL_BRAND`
- Added token: `FILL_BRAND_HOVER`
- Added token: `FILL_BRAND_ACTIVE`
- Added token: `BORDER_STROKE_WIDTH_THIN`
- Added token: `BORDER_STROKE_WIDTH_THICK`
- Added alias: `SANS_SERIF`
- Added alias: `MALIBU`
- Added alias: `SANS_SERIF`
- Added alias: `EBONY_CLAY`
- Added alias: `OXFORD_BLUE`
- Added alias: `RIVER_BED`
- Deprecated `FONT_FAMILY`

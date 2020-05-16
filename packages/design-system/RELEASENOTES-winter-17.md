# Salesforce Lightning Design System
# Release notes

<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

## Release 2.1.0 - Future, 2016

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

- New Checkbox Toggle guidelines under Data Entry section in [App Launcher Component](/guidelines/data-entry/).
- New "Touch" section under "Components", where you’ll find patterns especially optimized for touch
- Link to Styling with Design Tokens on the platform added on [Design Tokens](/design-tokens/), [Lightning Components](/platforms/lightning/), and [Downloads](/downloads/) pages.
- Button Icon component has been moved out of Buttons and into its own category [Button Icon](/components/button-icon)
- Picklist component has been moved out of Menus and into its own category [Picklist](/components/picklist)

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- App Launcher - [App Launcher Component](/components/app-launcher/)
- Global Navigation - Standard context bar - [Global Navigation Component](/components/global-navigation)
- Global Header - [Global Header Component](/components/global-header)
- Docked Utility Bar - [Docked Utility Bar Component](/components/docked-utility-bar/#utility-bar)
- Filtering panel - [Filtering Panel Component](/components/panels/#filtering)
- Files - [File Components](/components/files/)
- File selector - [File Selector](/components/file-selector)
- Feed v2 - [Feeds Component](/components/feeds/)
- Inline Edit Data Table - [Data Tables › Inline Edit](/components/data-tables/#flavor-inline-edit)
- Indeterminate checkbox - [Indeterminate checkbox component](/components/forms/#flavor-checkbox)
- Button Icon Inverse - Bordered - [Button Icon Inverse with Border](/components/buttons/#icon-container)
- Button Icon Inverse - Hint Hover - [Button Icon with Hint Hover](/components/buttons/#icon-with-hint-hover)
- Button Icon Error - [Button Icon Error](/components/buttons/#flavor-icon)
- Image Cards - [Figure Card Component](/components/images/#flavor-figure)
- Image Ratios - [Figure Ratio Component](/components/images/#flavor-figure)
- Vertical Navigation color variation - [Vertical Navigation](/components/navigation/#flavor-vertical)
- Error state for Pills - [Pill Component](/components/pills/#flavor-base-pill-error)

**ADDED**

The following classes are now available:

- Text color helpers - [Text color utilities](/components/utilities/text#color)
- Truncation containers [Truncation Container Utility](/components/utilities/truncation/#max-width)
- Absolute sizes utility classes: `.slds-size--xx-small`, `.slds-size--x-small`, `.slds-size--medium`, `.slds-size--large`, `.slds-size--x-large`, `.slds-size--xx-large` and their responsive equivalents - in [Utilities › Sizing](/components/utilities/sizing/)
- Text title utility - `.slds-text-title` - [Text Title](/components/utilities/text/#flavor-title)
- Hyphenation utility for non-truncated headings in narrow containers - [Utilities › Hyphenation](/components/utilities/hyphenation/)
- Position utilities -[Utilities › Postion](/components/utilities/position/)
- Text link utility - Make text inside of `.slds-text-link--reset` appear as a link - [Text Link](/components/utilities/interactions/#flavor-text-link)
- Horizontal and vertical padding can now be applied to `slds-grid--padded` as `slds-grid--padded-around-{size}`
- Table column borders - Add vertical column borders on a table by applying `slds-table--col-bordered`
- Name/Value pair lists - 3 variations - horizontal, inline and stacked - [Name Value Pair lists](/components/utilities/lists/#flavor-name-value-pair)
- Generate grid column spans 1, 2, 3, 4, 5, 6, 7, 8, and 12 for all breakpoints

**CHANGES**

The following changes have been made in this release:

- Brightened yellow background on `mark` element.
- Text selected with your mouse is light blue.
- Renamed "slide-out" panel to "details" - [Detail Panel Component](/components/panels/#detail)
- Renamed "Base" data table to "Basic" data table - [Data Table Component](/components/data-tables/)
- Renamed Product Selector to List Builder - [List Builder Component](/components/list-builder/)
- Abstracted complex data table features into a variant named "Advanced" data table - [Data Table Component](/components/data-tables/#advanced)
- Improvements made to `.slds-text-link--reset` - [Text Link Reset](/components/utilities/interactions/#link-reset)
- Removed light font-weight from the text utility `.slds-text-heading--small` - [Text Heading Small Utility](/components/utilities/text/#heading-small)
- Removed `position: relative` from `.slds-grid`
- Feeds are now responsive
- Add close button to error popover so a screen reader can access popover
- Add animated waffle icon to Global Navigation [Global Navigation](/components/global-navigation/)
- Feeds:
  - Change post's comment metric labels to lowercase
  - Add hint-hover to post's comment action overflow icon
  - Change post's comment "link" text to use `color-link-weak`
  - Remove dotted line separator from post's attachment payload
  - Moved URL of post's attachment to the bottom of the content ordering
  - Removed truncation from preamble
  - Reduce white space between feed items

**FIXED**

The following issues have now been resolved:

- Record home vertical accessibility fixes
  - Add `aria-haspopup="true"` to action overflow buttons
  - Add assistive text for icon
  - Removed unnecessary aria roles from action overflow buttons
  - Improve assistive text verbiage
  - Make multiple value field entirely clickable to invoke dropdown
- Global header accessibility fixes
  - Modify tab order of global header actions
  - Add `title` attribute to global header actions
  - Change avatar wrapper from anchor to a button
  - Allow `slds-assistive-text` to become visible on focus if `slds-assistive-text--focus` is used
  - Add aria roles to global search input
  - Changed global search listbox options to be non-actionable
  - Moved "click enter to search" and "go to" options back into `<ul>` so they can be discovered by screen readers
  - Add `.slds-has-focus` to apply focus state on listbox options when keyboard interactions are used
  - Moved clear button to the right of the input to visually match tab order
- Lookup/Global Header Search accessibility fixes
  - Improve semantics of dropdown menus
  - Apply `role=separator` to dropdown menu list items that do not have an actionable element
  - Apply `role=presentation` to dropdown menu list items
  - Changed `<p>` wrapping dropdown menu items text to `<span>`
  - Dropdown menu items have a default `tabindex="-1"`, tab focused items change to a `tabindex="0"`
- Utility bar accessibility fixes
  - Add landmark `role="footer"` to utility bar
  - Add `aria-label="Utility Bar"` description to utility bar
  - Add hidden heading to utility bar
  - Add aria `role=dialog` and `aria-labelledby` to utility bar panel
  - Change panel header text to be wrapped in a heading with a id to reference the `aria-labelledby`
  - Place utility bar buttons inside `<ul>`
- Files accessibility fixes
  - Fix invalid markup by moving button group outside of anchor
  - Image overlay is now enabled by adding an extra html element before the image and adding the class `.slds-image--overlay`
- Card accessibility fixes
  - Moved `<header>` element to only contain the card header text, rather than the text and overflow menu
  - Changed `<p>` tags with truncation in related list markup to `<span>` tags
- Make primary labels of compound fields capital
- Dropdowns appear on icon focus within Global Navigation
- Labeled the dialog with the heading of the modal using `aria-labelledby="id_of_heading"` in the app launcher component
- Tables accessibility fixes: all tables now use the same truncation method when text is too long in a cell and show the full text when truncated text is hovered
- Accessibility fixes for list builder
- Fixed an issue where examples contained the same ID multiple times
- Feeds accessibility fixes
  - Comments are now list items in an unordered list structure
  - The browser shows a focus ring when avatars are focused
- Accessibility fixes to Menus and Picklist, including Menus used in composite SLDS components.
  - Removal of `aria-expanded` on containers
  - `role="presentation"` on list items to remove them from the accessibility tree
  - Correct use of `menuitemcheckbox` for selectable menu items, with the use of `aria-checked` instead of `aria-selected`
  - Correct sub heading menus which was split across multiple un-ordered lists
  - Include line separators and sub-heading separators into the accessibility tree with `role="separator"`
- Added `aria-describedby` on textarea element to show error message ID
- Added `aria-live` attribute to the stateful icon button
- Added `aria-describedby` on select element to show error message ID
- Added `aria-haspopup` on Activity Timeline menu buttons, and updated each list item to use an `<h3>` tag

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

- Feeds v1 - Design has changed to v2 - [Feeds v2 Component](/components/feeds/)
- Text heading label utility - Use Text title utilities instead - [Text Title](/components/utilities/text/#flavor-title)

**REMOVED**

The following features are being removed in this release:

- Context Bar has been removed and replaced with Global Navigation Component - [Global Navigation Component](/components/global-navigation)
- `slsd-is-recording` class was not in use.
- Removed inverse and state themes from examples to provide clarity of usage.

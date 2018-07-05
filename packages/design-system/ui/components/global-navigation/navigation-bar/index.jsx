// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import ButtonIcon from '../../button-icons/';
import { WaffleIcon } from '../../dynamic-icons/waffle/example';
import _ from '../../../shared/helpers';

// Context Item Dropdown
const contextDropdown = (
  <Menu className="slds-dropdown_right">
    <MenuList>
      <MenuItem title="Main action">
        <SvgIcon
          className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
          sprite="utility"
          symbol="add"
        />
        Main action
      </MenuItem>
      <li
        className="slds-dropdown__header slds-has-divider_top-space"
        role="separator"
      >
        <span className="slds-text-title_caps">Menu header</span>
      </li>
      <MenuItem>Menu Item One</MenuItem>
      <MenuItem>Menu Item Two</MenuItem>
      <MenuItem>Menu Item Three</MenuItem>
    </MenuList>
  </Menu>
);

export let ContextBar = props => (
  <div className={classNames('slds-context-bar', props.className)}>
    <div className="slds-context-bar__primary">
      <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
        <div className="slds-context-bar__icon-action">
          <WaffleIcon className="slds-context-bar__button" />
        </div>
        <span className="slds-context-bar__label-action slds-context-bar__app-name">
          <span className="slds-truncate" title={props.appName || 'App Name'}>
            {props.appName || 'App Name'}
          </span>
        </span>
      </div>
    </div>
    <nav className="slds-context-bar__secondary" role="navigation">
      <ul className="slds-grid">
        <li
          className={classNames(
            'slds-context-bar__item',
            props.itemActive && 'slds-is-active'
          )}
        >
          <a
            href="javascript:void(0);"
            className="slds-context-bar__label-action"
            title="Home"
          >
            {props.itemActive && (
              <span className="slds-assistive-text">Current Page:</span>
            )}
            <span className="slds-truncate" title="Home">
              Home
            </span>
          </a>
        </li>
        <li
          className={classNames(
            'slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click',
            props.hasNavMenuOpen && 'slds-is-open'
          )}
        >
          <a
            href="javascript:void(0);"
            className="slds-context-bar__label-action"
            title="Menu Item"
          >
            <span className="slds-truncate" title="Menu Item">
              Menu Item
            </span>
          </a>
          <div className="slds-context-bar__icon-action slds-p-left_none">
            <ButtonIcon
              className="slds-button_icon slds-context-bar__button"
              symbol="chevrondown"
              aria-haspopup="true"
              assistiveText="Open menu item submenu"
              title="Open menu item submenu"
              onClick={() => props.isInteractive && props.toggleNavMenu()}
            />
          </div>
          {!props.hideDropdown ? contextDropdown : null}
        </li>
        {!props.children
          ? _.times(3, i => (
              <li className="slds-context-bar__item" key={i}>
                <a
                  href="javascript:void(0);"
                  className="slds-context-bar__label-action"
                  title="Menu Item"
                >
                  <span className="slds-truncate" title="Menu Item">
                    Menu Item
                  </span>
                </a>
              </li>
            ))
          : props.children}
      </ul>
    </nav>
  </div>
);

class GlobalNavigation extends Component {
  constructor() {
    super();
    this.toggleNavMenu = this.toggleNavMenu.bind(this);

    this.state = {
      hasNavMenuOpen: false
    };
  }

  toggleNavMenu() {
    this.setState({
      hasNavMenuOpen: !this.state.hasNavMenuOpen
    });
  }

  render() {
    return (
      <ContextBar
        itemActive
        toggleNavMenu={this.toggleNavMenu}
        hasNavMenuOpen={this.props.hasNavMenuOpen || this.state.hasNavMenuOpen}
        isInteractive
      />
    );
  }
}

export default GlobalNavigation;

/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Trigger } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { Menu } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { MenuList } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

const settingsIcon = (
  <ButtonIcon className="slds-button--icon-container" symbol="settings" assistiveText="Settings" title="Settings" aria-haspopup="true" />
);

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let TopLeft = props =>
  <div className="demo-only" style={{height: '185px', paddingLeft: '2rem'}}>
    <Trigger className="slds-is-open" triggerIcon={settingsIcon}>
      <Menu className="slds-dropdown--left slds-nubbin--top-left">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>;

let Top = props =>
  <div className="demo-only" style={{height: '185px', textAlign: 'center'}}>
    <Trigger className="slds-is-open" triggerIcon={settingsIcon}>
      <Menu className="slds-nubbin--top">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>;

let TopRight = props =>
  <div className="demo-only" style={{height: '185px', textAlign: 'right', paddingRight: '2rem'}}>
    <Trigger className="slds-is-open" triggerIcon={settingsIcon}>
      <Menu className="slds-dropdown--right slds-nubbin--top-right">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>;

let BottomLeft = props =>
  <div className="demo-only slds-grid slds-grid--vertical-align-end"  style={{height: '185px', paddingLeft: '2rem'}}>
    <Trigger className="slds-is-open" triggerIcon={settingsIcon}>
      <Menu className="slds-dropdown--bottom slds-dropdown--left slds-nubbin--bottom-left">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>;

let Bottom = props =>
  <div className="demo-only slds-grid slds-grid--vertical-align-end slds-grid--align-center" style={{height: '185px'}}>
    <Trigger className="slds-is-open" triggerIcon={settingsIcon}>
      <Menu className="slds-dropdown--bottom slds-nubbin--bottom">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>;

let BottomRight = props =>
  <div className="demo-only slds-grid slds-grid--vertical-align-end slds-grid--align-end" style={{height: '185px', paddingRight: '2rem'}}>
    <Trigger className="slds-is-open" triggerIcon={settingsIcon}>
      <Menu className="slds-dropdown--bottom slds-dropdown--right slds-nubbin--bottom-right">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'dropdown-menu-nubbin-top-left',
    label: 'Top Left',
    element: <TopLeft />
  },
  {
    id: 'dropdown-menu-nubbin-top',
    label: 'Top',
    element: <Top />
  },
  {
    id: 'dropdown-menu-nubbin-top-right',
    label: 'Top Right',
    element: <TopRight />
  },
  {
    id: 'dropdown-menu-nubbin-bottom-left',
    label: 'Bottom Left',
    element: <BottomLeft />
  },
  {
    id: 'dropdown-menu-nubbin-bottom',
    label: 'Bottom',
    element: <Bottom />
  },
  {
    id: 'dropdown-menu-nubbin-bottom-right',
    label: 'Bottom Right',
    element: <BottomRight />
  }
];

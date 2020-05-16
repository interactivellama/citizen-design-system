/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { UtilityBar, UtilityBarItem } from 'ui/components/docked-utility-bar/flavors/utility-bar/index.react.example';
import MediaObject from 'ui/utilities/media-objects/index.react';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

const dialingIcon = (
  <span className={pf('icon_container')}>
    <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="call" />
    <span className={pf('assistive-text')}>Call Icon</span>
  </span>
);

export let UtilityPanel = props =>
  <div className={className(pf('utility-panel grid grid--vertical'), props.className)}>
    <div className={pf('utility-panel__header grid shrink-none')}>
      <a href="#void" className={pf('utility-panel__header-label-action grow')}>
        <MediaObject figureLeft={dialingIcon} flavor="center">{ props.header || 'Header' }</MediaObject>
      </a>
      <div className={pf('utility-panel__header-icon-action')}>
        <button className={pf('button button--icon button--icon-inverse')}>
          <SvgIcon className={pf('button__icon')} sprite="utility" symbol="minimize_window" />
          <span className={pf('assistive-text')}>Minimize</span>
        </button>
      </div>
    </div>
    <div className={pf('utility-panel__body')}>
      { props.children }
    </div>
  </div>;

const PanelOpen = (
  <UtilityPanel className={pf('is-open')}>
    <div className={pf('text-align--center align-middle')}>Utility Panel Body</div>
  </UtilityPanel>
);

const PanelClosed = (
  <UtilityPanel>
    <div className={pf('text-align--center align-middle')}>Utility Panel Body</div>
  </UtilityPanel>
);

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'utility-panel-open',
    label: 'Open',
    element:
      <div className="demo-only" style={{ height: '540px' }}>
        <UtilityBar panel={PanelOpen}>
          <UtilityBarItem symbol="call" className={pf('is-active')}>Call</UtilityBarItem>
          <UtilityBarItem symbol="clock">History</UtilityBarItem>
          <UtilityBarItem symbol="note">Notes</UtilityBarItem>
        </UtilityBar>
      </div>
  },
  {
    id: 'utility-panel-closed',
    label: 'Closed',
    element:
      <div className="demo-only" style={{ height: '540px' }}>
        <UtilityBar panel={PanelClosed}>
          <UtilityBarItem symbol="call">Call</UtilityBarItem>
          <UtilityBarItem symbol="clock">History</UtilityBarItem>
          <UtilityBarItem symbol="note">Notes</UtilityBarItem>
        </UtilityBar>
      </div>
  }
];

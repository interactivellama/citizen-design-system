/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

exports.preview = (
<div className='demo-only demo-only--notification'>
  <div className={pf('notify-container')}>

    <div className={pf('notify notify--alert theme--alert-texture')} role="alert">
      <ButtonIcon
        className={pf('notify__close')}
        iconFlavor="inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
        <span className={pf('assistive-text')}>Info</span>
        <h2>Base System Alert</h2>
    </div>

    <div className={pf('notify notify--alert theme--success theme--alert-texture')} role="alert">
      <ButtonIcon
        className={pf('notify__close')}
        iconFlavor="inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
      <span className={pf('assistive-text')}>Success</span>
      <h2>
        <SvgIcon className={pf('icon icon-text-email icon--small m-right--x-small')} sprite="custom" symbol="custom19" />
        Scheduled Maintenance Notification: Sunday March 15, 8:00 AM&ndash;10:00 PST <a href="#">More Information</a>
      </h2>
    </div>

    <div className={pf('notify notify--alert theme--error theme--alert-texture')} role="alert">
      <ButtonIcon
        className={pf('notify__close')}
        iconFlavor="inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
      <span className={pf('assistive-text')}>Error</span>
      <h2>
        <SvgIcon className={pf('icon icon-text-email icon--small m-right--x-small')} sprite="utility" symbol="ban" />
        Your browser is currently not supported. Your Salesforce may be degraded. <a href="#">More Information</a>
      </h2>
    </div>

    <div className={pf('notify notify--alert theme--offline theme--alert-texture')} role="alert">
      <ButtonIcon
        className={pf('notify__close')}
        iconFlavor="inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
      <span className={pf('assistive-text')}>Offline</span>
      <h2>
        <SvgIcon className={pf('icon icon-text-email icon--small m-right--x-small')} sprite="utility" symbol="offline" />
        You are in offline mode. <a href="#">More Information</a>
      </h2>
    </div>

  </div>
</div>
);

exports.code = (
  <div className={pf('notify notify--alert theme--alert-texture')} role="alert">
    <span className={pf('assistive-text')}>Info</span>
    <ButtonIcon
      className={pf('close icon--small')}
      iconFlavor="inverse"
      sprite="action"
      symbol="close"
      assistiveText="Close" />
    <h2>
      <SvgIcon className={pf('icon icon-text-email icon--small m-right--x-small')} sprite="action" symbol="email" />
      Base System Alert
    </h2>
  </div>
);

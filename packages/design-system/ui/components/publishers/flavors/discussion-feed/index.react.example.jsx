/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Tabs from 'ui/components/tabs/index.react';
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import StatefulClass from 'ui/components/lib/stateful.react';
import MediaObject from 'ui/components/media-objects/index.react';
import Input from 'ui/components/forms/flavors/input/index.react';
import Img from 'app_modules/ui/img';
import { prefix as pf } from 'app_modules/ui/util/component';

const image = (
  <div className={pf('avatar avatar--circle avatar--small')}>
    <a href="javascript:void(0)" title="Jenna Davis">
      <Img src={`/assets/images/avatar2.jpg`} alt="Jenna Davis" />
    </a>
  </div>
);

const icon = (
  <span className={pf('icon__container')}>
    <SvgIcon className={pf('icon icon--small')} sprite="doctype" symbol="ppt" />
    <span className={pf('assistive-text')}>Powerpoint</span>
  </span>
);

const commentReply = (
  <div>
    <p><a href="javascript:void(0)" title="Sue Jenkins">@sjenkins</a> here is an updated version of that <a href="javascript:void(0)" title="View all presentation tags">#presentation</a> file</p>
    <div className={pf('comment__content-attachment box box--x-small theme--shade')}>
      <div className={pf('grid grid--align-spread')}>
        <MediaObject figureLeft={icon}>
          <a href="javascript:void(0)" title="filename.ppt">filename.ppt</a>
        </MediaObject>
        <ButtonIcon
          flavor="icon-bare"
          sprite="utility"
          symbol="close"
          assistiveText="Remove this attachment" />
      </div>
    </div>
  </div>
);

export const states = [
  {
    label: 'Default',
    actions: [
      { ref: 'publisher-contact-list', remove: true },
      { ref: 'publisher-attachments', remove: true },
      { ref: 'publisher-actions-list', remove: true }
    ]
  },
  {
    label: 'User has interacted with text input',
    actions: [
      { ref: 'root', addClass: 'is-active' },
      { ref: 'publisher-attachments', remove: true },
      { ref: 'publisher-submit-button', attributes: { disabled: true } }
    ]
  },
  {
    label: 'User begins typing in text input',
    actions: [
      { ref: 'root', addClass: 'is-active' },
      { ref: 'publisher-attachments', remove: true }
    ]
  },
  {
    label: 'Publisher has attachment',
    actions: [
      { ref: 'root', addClass: 'is-active' }
    ]
  }
];

export default (
  <div className="demo-only">

    <div className={pf('publisher publisher--discussion')} iref="root">
      <dl className={pf('list--horizontal m-bottom--small publisher__toggle-visibility')} iref="publisher-contact-list">
        <dt className={pf('list__item text-body--small')}>To: </dt>
        <dd className={pf('list__item')}>My Followers</dd>
      </dl>
      <label htmlFor="comment-text-input-1" className={pf('assistive-text')}>Write a comment</label>
      <textarea id="comment-text-input-1" className={pf('publisher__input textarea text-longform')} placeholder="Write a comment&hellip;" />
      <div className={pf('attachments')} iref="publisher-attachments">
        <div className={pf('attachments__item box box--x-small theme--shade')}>
          <div className={pf('grid grid--align-spread')}>
            <MediaObject figureLeft={icon}>
              <a href="javascript:void(0)" title="filename.ppt">filename.ppt</a>
            </MediaObject>
            <ButtonIcon
              flavor="icon-bare"
              sprite="utility"
              symbol="close"
              assistiveText="Remove this attachment" />
          </div>
        </div>
      </div>
      <div className={pf('publisher__actions grid grid--align-spread')}>
        <ul className={pf('grid publisher__toggle-visibility')} iref="publisher-actions-list">
          <li>
            <ButtonIcon
              flavor="icon-container"
              sprite="utility"
              symbol="adduser"
              assistiveText="Add User" />
          </li>
          <li>
            <ButtonIcon
              flavor="icon-container"
              sprite="utility"
              symbol="attach"
              assistiveText="Attach a file" />
          </li>
        </ul>
        <Button flavor="brand" iref="publisher-submit-button">Share</Button>
      </div>
    </div>

  </div>
);

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
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Comment = props =>
  <article className={className(pf('comment media hint-parent'), props.className)}>
    <div className={pf('media__figure')}>
      <a href="javascript:void(0);" title="Jenna Davis" className={pf('avatar avatar--circle avatar--medium')}>
        <img src="/assets/images/avatar2.jpg" alt="Jenna Davis" />
      </a>
    </div>
    <div className={pf('media__body')}>
      { props.children }
    </div>
  </article>;

export let CommentHeader = props =>
  <header className={pf('comment__header media media--center')}>
    <div className={pf('grid grid--align-spread has-flexi-truncate')}>
      <p className={pf('truncate')}>
        <a href="javascript:void(0);" title="Jenna Davis">Jenna Davis</a>
      </p>
      <ButtonIcon className={pf('button--icon-border button--icon-x-small')} hasPopup="true" symbol="down" assistiveText="More Options" />
    </div>
  </header>;

export let CommentContent = props =>
  <div className={className(pf('comment__content text-longform'), props.className)}>
    { props.children }
  </div>;

export let CommentFooter = props =>
  <footer>
    <ul className={pf('list--horizontal has-dividers--right text-body--small')}>
      <li className={pf('item')}>
        <a className={pf('text-color--weak')} href="javascript:void(0);" title="Like this item">{ props.liked ? 'Liked' : 'Like' }</a>
      </li>
      { props.liked ? <li className={pf('item')}>1 Like</li> : null }
      <li className={pf('item')}>16hr Ago</li>
    </ul>
  </footer>;

let ButtonIcon = props =>
  <button className={className(pf('button'), props.className)} disabled={props.disabled} aria-haspopup={props.hasPopup}>
    <SvgIcon className={pf('button__icon button__icon--hint')} sprite="utility" symbol={props.symbol} />
    <span className={pf('assistive-text')}>{props.assistiveText}</span>
  </button>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'comment',
    label: 'Default',
    element:
      <Comment>
        <CommentHeader />
        <CommentContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CommentContent>
        <CommentFooter />
      </Comment>
  },
  {
    id: 'comment-liked',
    label: 'Like',
    element:
      <Comment>
        <CommentHeader />
        <CommentContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CommentContent>
        <CommentFooter liked />
      </Comment>
  }
];

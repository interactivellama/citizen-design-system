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
import { Default as Publisher } from 'ui/components/publishers/flavors/comment/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';

let ButtonIcon = props =>
  <button className={className(pf('button'), props.className)} disabled={props.disabled} aria-haspopup={props.hasPopup}>
    <SvgIcon className={pf('button__icon')} sprite="utility" symbol={props.symbol} />
    <span className={pf('assistive-text')}>{props.assistiveText}</span>
  </button>;

let PostFooterActions = props =>
  <ul className={pf('list--horizontal')}>
    <li className={pf('item m-right--medium')}>
      <a href="javascript:void(0);" title="Like this item" className={pf('post__footer-action')}>
        <SvgIcon className={pf('icon icon-text-default icon--x-small align-middle')} sprite="utility" symbol="like" /> Like
      </a>
    </li>
    <li className={pf('item m-right--medium')}>
      <a href="javascript:void(0);" title="Comment on this item" className={pf('post__footer-action')}>
        <SvgIcon className={pf('icon icon-text-default icon--x-small align-middle')} sprite="utility" symbol="share_post" /> Comment
      </a>
    </li>
    <li className={pf('item m-right--medium')}>
      <a href="javascript:void(0);" title="Share this item" className={pf('post__footer-action')}>
        <SvgIcon className={pf('icon icon-text-default icon--x-small align-middle')} sprite="utility" symbol="share" /> Share
      </a>
    </li>
  </ul>;

let PostFooterMeta = props =>
  <ul className={pf('col--bump-left list--horizontal has-dividers--right')}>
    <li className={pf('item medium-show')}>2 Likes</li>
    <li className={pf('item medium-show')}>3 Comments</li>
    <li className={pf('item medium-show')}>20 Shares</li>
    <li className={pf('item')}>259 Views</li>
  </ul>;

export let PostHeader = props =>
  <header className={pf('post__header media media--center')}>
    <div className={pf('media__figure')}>
      <div className={pf('avatar avatar--circle avatar--medium')}>
        <a href="javascript:void(0);" title="Jason Rodgers">
          <img src="/assets/images/avatar1.jpg" alt="Jason Rodgers" />
        </a>
      </div>
    </div>
    <div className={pf('media__body')}>
      <div className={pf('grid grid--align-spread has-flexi-truncate')}>
        <p className={pf('truncate')}>
          <a href="javascript:void(0);" title="Jason Rodgers">Jason Rogers</a> via <a href="javascript:void(0);" title="Design Systems">Design Systems</a>
        </p>
        <ButtonIcon className={pf('button--icon-border button--icon-x-small')} hasPopup="true" symbol="down" assistiveText="More Options" />
      </div>
      <p className={pf('text-body--small')}>
        <a href="javascript:void(0);" title="Click for single-item view of this post" className={pf('text-link--reset')}>5 days Ago</a>
      </p>
    </div>
  </header>;

export let PostContent = props =>
  <div className={className(pf('post__content text-longform'), props.className)}>
    { props.children }
  </div>;

export let PostFooter = props =>
  <footer className={className(pf('post__footer'), props.className)}>
    <PostFooterActions />
    <PostFooterMeta />
  </footer>;

export let Post = props =>
  <article className={className(pf('post'), props.className)}>
    { props.children }
  </article>;

export let Comments = props =>
  <ul className={pf('feed__item-comments')}>
    { props.children }
    <Publisher />
  </ul>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'post-card',
    label: 'Card',
    element:
      <div className="demo-only" style={{ maxWidth: '800px' }}>
        <div className={pf('feed__item feed__item--card')}>
          <Post className={pf('post--card')}>
            <PostHeader />
            <PostContent>
              <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
            </PostContent>
            <PostFooter />
          </Post>
          <Comments />
        </div>
      </div>
  },
  {
    id: 'post-flat',
    label: 'Flat',
    element:
      <div className="demo-only" style={{ maxWidth: '800px' }}>
        <div className={pf('feed__item')}>
          <Post className={pf('post')}>
            <PostHeader />
            <PostContent>
              <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
            </PostContent>
            <PostFooter />
          </Post>
          <Comments />
        </div>
      </div>
  }
];

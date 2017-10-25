// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import Immutable from 'immutable';

const DEFAULT_THEME_TOKENS = require('../../../../design-tokens/dist/salesforce-skin.json');
const THEME_TOKENS = require('../../../../design-tokens/dist/brand.json');
let bgColor = DEFAULT_THEME_TOKENS.BRAND_BACKGROUND_PRIMARY;
if (THEME_TOKENS.BRAND_BACKGROUND_PRIMARY) {
  bgColor = THEME_TOKENS.BRAND_BACKGROUND_PRIMARY;
}

class Page extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: '20rem',
          backgroundColor: bgColor,
          position: 'relative',
          zIndex: '1'
        }}
      >
        <div
          className={classNames('slds-brand-band', {
            'slds-brand-band_small': this.props.small,
            'slds-brand-band_medium': this.props.medium,
            'slds-brand-band_large': this.props.large
          })}
        />
      </div>
    );
  }
}

export default Page;

// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Truncate from '../../../shared/truncate/index.react';
import { ButtonIcon } from '../../button-icons/base/example';
import MediaObject from '../../../utilities/media-objects/index.react';
import { StandardIcon } from '../../icons/standard/example';
import { UtilityIcon } from '../../icons/base/example';
import SvgIcon from '../../../shared/svg-icon';
import Heading from '../../heading/index.react';

const icon = (
  <SvgIcon className="slds-button__icon slds-button__icon_right slds-no-flex" sprite="utility" symbol="down" />
);

const image = (
  <span className="slds-icon_container slds-icon-standard-lead">
    <SvgIcon className="slds-icon" sprite="standard" symbol="lead" />
  </span>
);

export let ObjectHome = props =>
  <div className="slds-page-header">
    <div className="slds-grid slds-page-header__row">
      <div className="slds-page-header__overlay">
        <div className="slds-media slds-page-header__overlay-content">
          <div className="slds-media__figure">
            <StandardIcon className="slds-page-header__icon" symbol="opportunity" assistiveText={false} />
          </div>
          <div className="slds-media__body">
            <nav>
              <ol className="slds-breadcrumb slds-line-height_reset">
                <li className="slds-breadcrumb__item">
                  <span>Opportunities</span>
                </li>
              </ol>
            </nav>
            <h1 className="slds-page-header__title slds-p-right_x-small">
              <button
                className="slds-button slds-text-link--faux slds-truncate"
                aria-haspopup="true"
                title=""
              >
                <span className="slds-grid slds-has-flexi-truncate slds-grid_vertical-align-center">
                  <span className="slds-truncate" title="">Recently Viewed</span>
                  <UtilityIcon className="slds-icon--x-small" symbol="down" />
                </span>
              </button>
            </h1>
            <p className="slds-text-body_small">10 items &bull; Updated 13 minutes ago</p>
          </div>
        </div>
      </div>
      <div className="slds-page-header__utility-group slds-col--bump-left slds-no-flex">
        <div className="slds-page-header__action-bar">
          <div className="slds-button-group" role="group">
            <button className="slds-button slds-button_neutral">New</button>
            <div className="slds-button_last">
              <ButtonIcon
                className="slds-button_icon-border-filled"
                symbol="down"
                aria-haspopup="true"
                assistiveText="More Actions"
                title="More Actions" />
            </div>
          </div>
        </div>
        <div className="slds-page-header__button-bar">
          <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_x-small">
            <ButtonIcon
              className="slds-button_icon-more"
              symbol="settings"
              hasDropdown
              assistiveText="List View Controls"
              title="List View Controls"
            />
          </div>
          <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_xx-small">
            <ButtonIcon
              className="slds-button_icon-more"
              symbol="table"
              hasDropdown
              assistiveText="Change view"
              title="Change view"
            />
          </div>
          <ButtonIcon
            className="slds-m-left_xx-small slds-button_icon-border-filled"
            symbol="edit"
            assistiveText="Edit List"
            title="Edit List"
          />
          <ButtonIcon
            className="slds-m-left_xx-small slds-button_icon-border-filled"
            symbol="refresh"
            assistiveText="Refresh"
            title="Refresh"
          />
          <div className="slds-button-group" role="group">
            <ButtonIcon
              className="slds-button_icon-border-filled"
              symbol="chart"
              assistiveText="Charts"
              title="Charts"
            />
            <ButtonIcon
              className="slds-button_icon-border-filled"
              symbol="filterList"
              assistiveText="Filters"
              title="Filters"
            />
          </div>
        </div>
      </div>
    </div>
  </div>;

export default (
  <ObjectHome />
);

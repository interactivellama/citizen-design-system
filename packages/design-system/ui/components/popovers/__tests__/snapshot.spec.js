/* eslint-env jest */
import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Popover } from '../base/example';
import { Header, Footer } from '../walkthrough/example';

import createHelpers from '../../../../jest.setup';

const { matchesMarkupAndStyle } = createHelpers(__dirname, 8080);
const headingUniqueId = 'dialog-heading-id-01';

xit('renders a walkthrough popover', () =>
  matchesMarkupAndStyle(
    <Popover
      className="slds-popover_walkthrough slds-nubbin_left"
      headingId={headingUniqueId}
      header={<Header title="Manage your channels" />}
      footer={<Footer nextButton />}
      closeButton
      inverse
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Popover>
  )
);

xit('renders an action popover', () =>
  matchesMarkupAndStyle(
    <Popover
      className="slds-popover_walkthrough slds-popover_walkthrough-alt slds-nubbin_left"
      headingId={headingUniqueId}
      closeButton
      inverse
    >
      <div className="slds-media">
        <div className="slds-media__figure">
          <span
            className="slds-icon_container"
            title="description of icon when needed"
          >
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-text-default"
              sprite="utility"
              symbol="touch_action"
            />
            <span className="slds-assistive-text">Description of icon</span>
          </span>
        </div>
        <div className="slds-media__body">
          <h2 id={headingUniqueId} className="slds-text-heading_small">
            Text that describes the action
          </h2>
          <p className="slds-m-top_medium slds-text-title">Step 3 of 4</p>
        </div>
      </div>
    </Popover>
  )
);

xit('renders a feature popover', () =>
  matchesMarkupAndStyle(
    <Popover
      className="slds-popover_walkthrough slds-popover_feature slds-nubbin_left"
      headingId={headingUniqueId}
      closeButton
      inverse
    >
      <div className="slds-media">
        <div className="slds-media__body">
          <h2 id={headingUniqueId} className="slds-text-heading_small">
            Shelly, it seems you frequent this record. Try favoriting it for
            easy access.
          </h2>
        </div>
      </div>
    </Popover>
  )
);

// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

export const ProgressBar = props => (
  <div
    className={classNames('slds-progress-bar', props.className)}
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow={props.value}
    aria-labelledby={props['aria-labelledby']}
    role="progressbar"
  >
    <span
      className="slds-progress-bar__value"
      style={{ width: `${props.value}%` }}
    >
      <span className="slds-assistive-text">Progress: {`${props.value}%`}</span>
    </span>
  </div>
);

export const ProgressBarDescriptive = props => {
  const labelUniqueId = _.uniqueId('progress-bar-label-id-');

  return (
    <div className={classNames(props.className)}>
      <div
        className="slds-grid slds-grid_align-spread slds-text-color_weak slds-p-bottom_x-small"
        id={labelUniqueId}
      >
        <span>{props.label}</span>
        <span aria-hidden="true">{`${props.value}%`}</span>
      </div>
      <ProgressBar value={props.value} aria-labelledby={labelUniqueId} />
    </div>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <ProgressBar value="25" />;

export let states = [
  {
    id: 'zero',
    label: '0% complete',
    element: <ProgressBar value="0" />
  },
  {
    id: '25',
    label: '25% complete',
    element: <ProgressBar value="25" />
  },
  {
    id: '50',
    label: '50% complete',
    element: <ProgressBar value="50" />
  },
  {
    id: '75',
    label: '75% complete',
    element: <ProgressBar value="75" />
  },
  {
    id: '100',
    label: '100% complete',
    element: <ProgressBar value="100" />
  }
];

export let examples = [
  {
    id: 'progress-bar-descriptive',
    label: 'Descriptive Progress Bar',
    element: (
      <ProgressBarDescriptive label="Einstein Setup Assistant" value="25" />
    )
  }
];

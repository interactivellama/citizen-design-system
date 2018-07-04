// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { StandardIcon } from '../../icons/standard/example';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Avatar = props => (
  <span className={classNames('slds-avatar', props.className)}>
    {props.children}
  </span>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Avatar>
    <img
      alt="Person name"
      src="/assets/images/avatar2.jpg"
      title="User avatar"
    />
  </Avatar>
);

export let examples = [
  {
    id: 'profile-icon',
    label: 'Profile Avatar Image',
    element: (
      <Avatar className="slds-avatar_profile-image-large">
        <span className="slds-assistive-text">Person name</span>
      </Avatar>
    )
  },
  {
    id: 'group-icon',
    label: 'Group Avatar Image',
    element: (
      <Avatar className="slds-avatar_group-image-large">
        <span className="slds-assistive-text">Group name</span>
      </Avatar>
    )
  },
  {
    id: 'fallback-user-initials',
    label: 'Fallback - User initials',
    element: (
      <Avatar className="slds-avatar_circle">
        <abbr
          className="slds-avatar__initials slds-icon-standard-user"
          title="person name"
        >
          AB
        </abbr>
      </Avatar>
    )
  },
  {
    id: 'fallback-user-icon',
    label: 'Fallback - User icon',
    element: (
      <Avatar className="slds-avatar_circle">
        <StandardIcon symbol="user" />
      </Avatar>
    )
  },
  {
    id: 'fallback-entity-initials',
    label: 'Fallback - Entity Initials',
    element: (
      <Avatar>
        <abbr
          className="slds-avatar__initials slds-icon-standard-account"
          title="company name"
        >
          Ac
        </abbr>
      </Avatar>
    )
  },
  {
    id: 'fallback-entity-icon',
    label: 'Fallback - Entity Icon',
    element: (
      <Avatar>
        <StandardIcon />
      </Avatar>
    )
  },
  {
    id: 'fallback-user-initials-inverse',
    label: 'Fallback - User Initials Inversed',
    element: (
      <Avatar className="slds-avatar_circle">
        <abbr
          className="slds-avatar__initials slds-avatar__initials_inverse"
          title="person name"
        >
          AB
        </abbr>
      </Avatar>
    )
  },
  {
    id: 'linked-avatar',
    label: 'Wrapped in a link',
    element: (
      <a href="javascript:void(0);">
        <Avatar>
          <img
            alt="Person name"
            src="/assets/images/avatar2.jpg"
            title="User avatar"
          />
        </Avatar>
      </a>
    )
  }
];

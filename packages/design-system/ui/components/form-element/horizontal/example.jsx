// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import RecordDetail from '../record-detail/';
import * as Snapshot from '../record-detail/snapshots.data';
import { FormElement, Fieldset } from '..';
import { Input } from '../../input/base/example';
import { Textarea } from '../../textarea/base/example';
import { Radio } from '../../radio-group/base/example';
import { Checkbox } from '../../checkbox/base/example';

export default (
  <RecordDetail
    direction="horizontal"
    snapshot={Snapshot.ObjectFieldTypesHorizontal}
    isViewMode
    hasInlineEdit
  />
);

export let states = [
  {
    id: 'edit-horizontal',
    label: 'Horizontal form layout - Edit Mode',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypesHorizontal}
      />
    )
  }
];

export let examples = [
  {
    id: 'horizontal-single-column',
    label: 'Horizontal form layout - 1 column - Read Only Mode',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypesSingleColumn}
        isViewMode
      />
    )
  },
  {
    id: 'deprecated-view-horizontal',
    label: 'Deprecated - Horizontal form layout - View Mode',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.DeprecatedObjectFieldTypes}
        isViewMode
        hasInlineEdit
        isDeprecated
      />
    )
  },
  {
    id: 'deprecated-edit-horizontal',
    label: 'Deprecated - Horizontal form layout - Edit Mode',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.DeprecatedObjectFieldTypes}
        isDeprecated
      />
    )
  },
  {
    id: 'simple-horizontal',
    label: 'Simple - Horizontal form layout',
    element: (
      <div className="slds-form">
        <FormElement
          labelContent="Text Input"
          inputId="input-id-01"
          isHorizontal
        >
          <Input id="input-id-01" placeholder="Placeholder Text" />
        </FormElement>
        <FormElement
          labelContent="Textarea Input"
          inputId="input-id-02"
          isHorizontal
        >
          <Textarea id="input-id-02" placeholder="Placeholder Text" />
        </FormElement>
        <Fieldset label="Checkbox Group label" isHorizontal>
          <Checkbox label="All opportunities owned by you" name="default" />
          <Checkbox
            label="All contacts in the account owned by you"
            name="default"
          />
        </Fieldset>
        <Fieldset label="Radio Group label" isHorizontal>
          <Radio label="Lead Generation" name="options" />
          <Radio label="Education Leads" name="options" />
        </Fieldset>
      </div>
    )
  }
];

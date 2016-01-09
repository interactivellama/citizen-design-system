/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Radio from 'ui/components/forms/flavors/radio/index.react';
import { prefix as pf } from 'app_modules/ui/util/component';


export const preview = (
<div className={pf('demo-only form--stacked')}>

  <fieldset className={pf('form-element')}>
    <legend className={pf('form-element__label form-element__label--top')}>Options</legend>
    <div className={pf('form-element__control')}>
      <Radio name="options" label="Lead generation" assistiveText="lead" />
      <Radio name="options" label="Education leads" assistiveText="education" />
    </div>
  </fieldset>

  <fieldset className={pf('form-element is-required')}>
    <legend className={pf('form-element__label form-element__label--top')}>Options Required</legend>
    <div className={pf('form-element__control')}>
      <Radio name="options" label="Lead generation" assistiveText="lead1" />
      <Radio name="options" label="Education leads" assistiveText="education1" />
    </div>
  </fieldset>

  <fieldset className={pf('form-element is-required has-error')}>
    <legend className={pf('form-element__label form-element__label--top')}>Options Required Error</legend>
    <div className={pf('form-element__control')}>
      <Radio name="options" label="Lead generation" assistiveText="lead2" />
      <Radio name="options" label="Education leads" assistiveText="education2" />
    </div>
  </fieldset>
</div>
);

export const code = (
  <fieldset className={pf('form-element')}>
    <legend className={pf('form-element__label form-element__label--top')}>Options</legend>
    <div className={pf('form-element__control')}>
      <Radio name="options" label="Lead generation" assistiveText="lead" />
      <Radio name="options" label="Education leads" assistiveText="education" />
    </div>
  </fieldset>
);

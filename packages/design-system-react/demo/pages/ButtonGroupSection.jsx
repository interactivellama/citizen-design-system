/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import CodeMirror from 'demo/CodeMirror';
import Samples from 'demo/Samples';
import PropTable from 'demo/PropTable';
import DOCS from 'docs';
import ComponentHeader from 'demo/pages/components/componentHeader';

const displayName = "ButtonGroupSection";
const propTypes = {};
const defaultProps = {};

class ButtonGroupSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getDescription() {
    const desc = DOCS["SLDSButtonGroup"].description;
    return {__html: desc };
  }

  render(){
    const docs = DOCS["SLDSButtonGroup"] ? true : false;
    return (
      <div className='slds-p-around--medium'>
        <ComponentHeader cmpName="SLDSButtonGroup" cmpUrl="http://www.lightningdesignsystem.com/components/button-groups" />

        <div className="copy-text">
          {docs ? <p dangerouslySetInnerHTML={this.getDescription()} className="slds-p-vertical--small"  style={{ "maxWidth": "800px"}}/> : null}
        </div>

        <div className="demo-only">
          <section className="slds-p-vertical--large">
            <h4 className="slds-text-heading--small">Button Group with Standard Buttons</h4>
            <CodeMirror codeText={Samples.ButtonGroups1} />
          </section>
          <section className="slds-p-vertical--large">
            <h4 className="slds-text-heading--small">Button Group with Stateful Buttons</h4>
            <CodeMirror codeText={Samples.ButtonGroups2} />
          </section>
          <PropTable component="SLDSButtonGroup" />
        </div>

      </div>
    );
  }

}

ButtonGroupSection.displayName = displayName;
ButtonGroupSection.propTypes = propTypes;
ButtonGroupSection.defaultProps = defaultProps;

module.exports = ButtonGroupSection;


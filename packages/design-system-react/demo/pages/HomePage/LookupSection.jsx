/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/


import React from 'react';
import CodeMirror from '../CodeMirror';
import Samples from '../Samples';
import PropTable from '../PropTable';
import DOCS from '../../../docs';

const displayName = "LookupSection";
const propTypes = {};
const defaultProps = {};

class LookupSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getDescription() {
    const desc = DOCS["SLDSLookup"].description;
    return {__html: desc };
  }

  render(){
    return (
      <div className='slds-p-around--medium'>
        <h3 className='slds-text-heading--medium slds-truncate'>
          Lookup
        </h3>
        <p dangerouslySetInnerHTML={this.getDescription()} className="slds-p-vertical--small" />

        <div className="demo-only">
          <CodeMirror codeText={Samples.Lookups} />
          <PropTable component="SLDSLookup" />
        </div>
      </div>
    );
  }

}

LookupSection.displayName = displayName;
LookupSection.propTypes = propTypes;
LookupSection.defaultProps = defaultProps;

module.exports = LookupSection;


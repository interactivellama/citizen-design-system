/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const Modal = require('ui/components/modals/index.react');
const Button = require('ui/components/buttons/index.react');
const Lorem = require('react-lorem-component');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

class DirectionalExample extends React.Component {
  static pages = [
    <Lorem count={2} paragraphLowerBound={5} />,
    <Lorem count={4} paragraphLowerBound={9} />
  ];

  constructor(props) {
    super(props);
    this.state = { showing: true, page: 0 };
  }

  openModal() {
    this.setState({showing: true});
  }

  closeModal() {
    this.setState({showing: false});
  }

  page(n) {
    return DirectionalExample.pages[n];
  }

  nextPage() {
    return this.page(this.state.page + 1);
  }

  prevPage() {
    return this.page(this.state.page - 1);
  }

  prev() {
    this.setState({page: this.state.page - 1});
  }

  next() {
    this.setState({page: this.state.page + 1});
  }

  render() {
    return (
      <div className='demo-only' style={{height: '640px'}}>
        <Modal
          isOpen={this.state.showing}
          renderInline={true}
        >
          <Modal.Header>
            <h2 className={pf('text-heading--medium')}>
              Modal Header
            </h2>
          </Modal.Header>

          <Modal.Body>
            { this.page(this.state.page) }
          </Modal.Body>

          <Modal.Footer flavor="directional">
            { this.prevPage() ? <Button flavor="neutral">Back</Button> : null }
            { this.nextPage() ? <Button flavor="neutral" onClick={this.next.bind(this)}>Skip This Step</Button> : null }
            <Button flavor="brand">Save &amp; Next</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

module.exports = <DirectionalExample/>;

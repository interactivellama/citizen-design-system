/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import globals from 'app_modules/global';
import _ from 'lodash';

/**
 * Only allows production-level logging.
 */
function logEvent(tagEvent, type, extraValues = {}) {
  let canLogEvent = window.location && _.includes(globals.analyticsHostWhitelist, window.location.host);
  _.defaults(extraValues, {
    path: window.location.path,
    type: ''
  });
  if (canLogEvent) { 
    if (window.ll) window.ll(tagEvent, type, extraValues);
    if (window.ga) window.ga('send', 'event', type, extraValues.type);
  }
}

/**
 * Normalizes pathname
 */
function normalizedLocationPathname() {
  return (window.location.pathname || '').replace(/\/$/, '');
}

/**
 * Records a page visit + screen flow.
 */
function logCurrentPageVisit() {
  logEvent('tagScreen', normalizedLocationPathname());
}

/**
 * Records a CTA event.
 *
 * @param {string} type - Which CTA was interacted with?
 * @param {object} extraValues - Optional extra tracking parameters
 */
function logCTAEvent(type, extraValues) {
  let values = _.assign({'path': normalizedLocationPathname(), 'type': type, 'usertype': process.env.DEFAULT_USER_TPE}, extraValues);
  logEvent('tagEvent', 'CTA', values);
}

/**
 * Records an input event.
 *
 * @param {string} type - Which CTA was interacted with?
 * @param {object} extraValues - Optional extra tracking parameters
 */
function logInputEvent(type, extraValues) {
  let values = _.assign({'path': normalizedLocationPathname(), 'type': type, 'usertype': process.env.DEFAULT_USER_TPE}, extraValues);
  logEvent('tagEvent', 'Input', values);
}

/**
 * Records a download event.
 *
 * @param {string} type - Which file was downloaded?
 * @param {object} extraValues - Optional extra tracking parameters
 */
function logDownloadEvent(type, extraValues) {
  let values = _.assign({'path': normalizedLocationPathname(), 'type': type, 'usertype': process.env.DEFAULT_USER_TPE}, extraValues);
  logEvent('tagEvent', 'Download', values);
}

export default {
  logCurrentPageVisit,
  logCTAEvent,
  logDownloadEvent,
  logInputEvent
};

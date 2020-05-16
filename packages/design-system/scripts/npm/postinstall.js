/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import gdm from 'gdm';
import path from 'path';
import semver from 'semver';
import { execSync } from 'child_process';

gdm.run();

const local = path.resolve.bind(path, process.cwd());

const exec = (command, cwd = '') => {
  execSync(command, {
    cwd: local(cwd),
    stdio: 'inherit',
    env: Object.assign({}, process.env)
  });
};

/**
 * Return a modified version number based on the release
 *
 * @param {string} version
 * @param {object} release
 * @returns {string}
 */
const getVersion = (version, release) => {
  const suffixMap = {
    'dev': '-dev',
    'feature-freeze': '-beta',
    'release-freeze': '-rc',
    'internal-release': '',
    'external-release': ''
  };
  const suffix = suffixMap[release.mode]
    ? suffixMap[release.mode] + '#' + moment().format('YYMMDD-HHmm')
    : '';
  return version + suffix;
};

if (process.env.HEROKU_APP_NAME) {
  exec(`rm -rf server/`);
  exec(`git clone https://${process.env.GITHUB_USER}:${process.env.GITHUB_USER_ACCESS_TOKEN}@${process.env.DEPLOY_REPO} server`);
  // Server tasks
  try {
    const packageJSON = require(local('package.json'));
    // Get the deployments config
    const config = require(local('./server/config/deployments.json'));
    // Find the first release that packageJSON.version statisfies
    const release = _.find(config.releases, release =>
      semver.satisfies(packageJSON.version, release.semver));
    // Throw if
    if (!release) {
      throw new Error(`
        No release matched "${packageJSON.version}"
        Please review deployments.json
      `);
    }
    // Set the ENV (used for the banner)
    if (release.mode !== 'external-release') {
      process.env.INTERNAL = 'true';
      process.env.INTERNAL_RELEASE_NAME = release.id;
      process.env.SLDS_VERSION = getVersion(packageJSON.version, release);
    }
  } catch (err) {
    console.log(`Version "${packageJSON.version}" could not be mapped to a release`);
    console.log(err.stack);
  }
  exec(`npm install --production`, 'server/heroku');
  exec(`npm run dist`, 'server/heroku');
  // Design System Tasks
  exec(`npm run build-prod`);
  exec(`npm run dist`);
} else {
  // Verify & install ruby dependencies using our script
  exec(`npm run install-ruby-dependencies`);
}

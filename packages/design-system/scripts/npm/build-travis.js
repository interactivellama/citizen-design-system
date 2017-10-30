// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const path = require('path');
const paths = require('../helpers/paths');
const { execSync } = require('child_process');

const local = path.resolve.bind(path, __dirname, '../../');

const exec = (command, cwd = '') =>
  execSync(command, {
    cwd: local(cwd),
    stdio: 'inherit',
    env: Object.assign({}, process.env)
  });

const runScript = () => {
  exec('NODE_ENV=production');
  exec('npm run build');
  // exec('npm run test:travis');
  exec('npm run lint');
};

const runExtraScripts = () => {
  // build snapshot
  exec(
    `create-snap ${paths.generated}/examples/ ${paths.generated} ${paths.root}/assets/styles/index.css`
  );
  // pass snapshot path to vrt and the output of that as components to lint
  exec(
    `
      echo Running VRT.... &&
      R=$(node scripts/vrt.js --path ${paths.generated}/snapshot.json) &&
      echo 'VRT RESULTS:' &&
      echo $R;
      if [ -z $R ]; then
          gulp lint:examples --components NONE_CHANGED
      else
          gulp lint:examples --components $(echo $R)
      fi
    `
  );
};

const publishBuild = () => exec('NODE_ENV=production npm run build-server');

// PR's have this message as well as the "after merge button" commit
const isMerge = () => process.env.TRAVIS_COMMIT_MESSAGE.match(/^Merge/g);

const isTag = () => !!process.env.TRAVIS_TAG;

const shouldPushToBuildServer = () => isMerge() || isTag();

// This exists solely to skip the push build so we don't waste time
// push is a noop
if (process.env.BUILD_SERVER_HOST_NEW) {
  if (shouldPushToBuildServer()) {
    runScript();
    runExtraScripts();
    publishBuild();
  }
}

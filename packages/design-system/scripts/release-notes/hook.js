const git = require('simple-git');
const gitP = require('simple-git/promise');
const { logStatus, RELEASE_NOTES_FILENAME } = require('./helpers.js');

gitP()
  .status()
  .then(status => {
    const stagedReleaseNotes = status.staged.filter(
      file =>
        file !== RELEASE_NOTES_FILENAME && file.search('RELEASENOTES.') !== -1
    );
    if (stagedReleaseNotes.length) {
      logStatus(
        `Compiling new ${RELEASE_NOTES_FILENAME} from ${stagedReleaseNotes.length} changed/added partial${stagedReleaseNotes.length >
        1
          ? 's'
          : ''} staged in commit`
      );
      return require('./index.js');
    } else {
      console.log('No RELEASENOTES committed');
    }
  })
  .then(() => {
    git().status((err, status) => {
      const modifiedReleaseNotesFile = status.modified.find(
        file => file === RELEASE_NOTES_FILENAME
      );
      if (modifiedReleaseNotesFile) {
        git().add(RELEASE_NOTES_FILENAME);
        logStatus(`${RELEASE_NOTES_FILENAME} added to the commit`);
      }
    });
  })
  .catch(err => {
    console.log(error);
  });

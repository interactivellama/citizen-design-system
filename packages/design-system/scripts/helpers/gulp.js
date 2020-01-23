// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import autoprefixer from 'autoprefixer';
import gulpSass from 'gulp-dart-sass';
import gulpPostcss from 'gulp-postcss';
import gulpMinifyCss from 'gulp-clean-css';
import gulpPrettier from 'gulp-prettier';
import paths from './paths';

/*
 * ==================
 * Helper to re-purpose gulp-sass rules
 * ==================
 */
export const writeScss = options =>
  gulpSass({
    precision: 3,
    includePaths: [paths.ui, paths.node_modules],
    ...options
  }).on('error', gulpSass.logError);

/*
 * ==================
 * Helper to re-purpose post-css rules
 * ==================
 */
export const writePostCss = bonusPlugins => {
  const plugins = [autoprefixer({ remove: false })];
  Array.prototype.push.apply(plugins, bonusPlugins);
  return gulpPostcss(plugins);
};

/*
 * ==================
 * Helper to re-purpose minify rules
 * ==================
 */

export const writeMinifyCss = options =>
  gulpMinifyCss({ advanced: false, roundingPrecision: '-1', ...options });

/*
 * ==================
 * Helper to re-purpose prettier rules
 * ==================
 */

export const writePrettierCss = options =>
  gulpPrettier({
    arrowParens: 'avoid',
    bracketSpacing: true,
    htmlWhitespaceSensitivity: 'css',
    printWidth: 120,
    proseWrap: 'always',
    quoteProps: 'as-needed',
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: 'none',
    useTabs: false,
    ...options
  });

/*
 * ==================
 * Helper to write an auto-generation warning to a stylesheet
 * ==================
 */
export const writeAutoGenerationWarning = content => {
  const removeDeprecateCss = /(@import 'deprecate';)/g;
  const removeBlameCss = /(@import 'blame';)/g;
  let message = `
/*
  This file is automatically generated.
  Please do not edit or check in changes to this file.
  If you need changes made, please contact the Design System team.
*/

@import '.dist/scss/init';
`;
  content = content.replace(removeDeprecateCss, '').replace(removeBlameCss, '');
  let css = `${message}${content}`;
  return css;
};

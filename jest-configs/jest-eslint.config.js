/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

const { resolve } = require("path");
const rootDir = resolve(__dirname, "..");
module.exports = {
  rootDir,
  displayName: "eslint",
  runner: "jest-runner-eslint",
  testMatch: ["<rootDir>/src/**/*.js", "<rootDir>/packages/*/src/**/*.js"]
};

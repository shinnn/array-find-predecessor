'use strict';

var subIndex = require('sub-index');

/*!
 * array-find-predecessor | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-find-predecessor
*/
function arrayFindPredecessor(arr, index) {
  var predecessorIndex = subIndex(arr, index);

  if (predecessorIndex === null) {
    return null;
  }

  return arr[predecessorIndex];
}

module.exports = arrayFindPredecessor;

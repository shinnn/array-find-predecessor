/*!
 * array-find-predecessor | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-find-predecessor
*/
import subIndex from 'sub-index';

export default function arrayFindPredecessor(arr, index) {
  var predecessorIndex = subIndex(arr, index);

  if (predecessorIndex === null) {
    return null;
  }

  return arr[predecessorIndex];
}

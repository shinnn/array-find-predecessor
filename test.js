'use strict';

const arrayFindSuccessor = require('.');
const test = require('tape');

test('arrayFindSuccessor()', t => {
  t.strictEqual(
    arrayFindSuccessor(['a', 'b', 'c'], 2),
    'b',
    'should return the value of the previous index.'
  );

  t.strictEqual(
    arrayFindSuccessor(['a', 'b', 'c'], 0),
    'b',
    'should return the value at [1] when a given index is 0.'
  );

  t.strictEqual(
    arrayFindSuccessor(['a'], 0),
    null,
    'should return null when the array only includes one value.'
  );

  t.throws(
    () => arrayFindSuccessor(),
    /^TypeError.*Expected an array, but got undefined\./,
    'should throw a type error when it tkes no arguments.'
  );

  t.throws(
    () => arrayFindSuccessor(true, 1),
    /^TypeError.*Expected an array, but got true \(boolean\)\./,
    'should throw a type error when the first argument is not an array.'
  );

  t.throws(
    () => arrayFindSuccessor([], 0),
    /^Error.*Expected a non-empty array, but got \[]\./,
    'should throw an error when the first argument is an empty array.'
  );

  t.throws(
    () => arrayFindSuccessor([true]),
    /^TypeError.*Expected an index of array \(integer\), but got undefined\./,
    'should throw a type error when it takes only one argument.'
  );

  t.throws(
    () => arrayFindSuccessor([true], '100'),
    /^TypeError.*Expected an index of array \(integer\), but got 100 \(string\)\./,
    'should throw a type error when the second argument is non-number value.'
  );

  t.throws(
    () => arrayFindSuccessor([true], NaN),
    /^Error.*Expected an index of array \(integer\), but got NaN\./,
    'should throw an error when the second argument is NaN.'
  );

  t.throws(
    () => arrayFindSuccessor([true], Infinity),
    /^Error.*Expected an index of array \(integer\), but got Infinity\./,
    'should throw an error when the second argument is infinite.'
  );

  t.throws(
    () => arrayFindSuccessor([true], 0.1),
    /^Error.*Expected an index of array \(integer\), but got 0\.1\./,
    'should throw an error when the second argument is non-integer number.'
  );

  t.throws(
    () => arrayFindSuccessor([true], -1),
    /^Error.*Expected an index of array \(positive integer\), but got -1\./,
    'should throw an error when the second argument is a negative number.'
  );

  t.throws(
    () => arrayFindSuccessor(['A', 'B'], 2),
    /^Error.*Expected an index of array, but got 2 that exceeds the last index of the array \(1\)\./,
    'should throw an error when the second argument exceeds the last index of array.'
  );

  t.end();
});

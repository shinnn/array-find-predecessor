# array-find-predecessor

[![npm version](https://img.shields.io/npm/v/array-find-predecessor.svg)](https://www.npmjs.com/package/array-find-predecessor)
[![Build Status](https://travis-ci.com/shinnn/array-find-predecessor.svg?branch=master)](https://travis-ci.com/shinnn/array-find-predecessor)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/array-find-predecessor.svg)](https://coveralls.io/github/shinnn/array-find-predecessor)

Find a predecessor value of the array that should be chosen when a given index is deleted

```javascript
import arrayFindPredecessor from 'array-find-predecessor';

const array = ['foo', 'bar', 'baz'];

arrayFindPredecessor(array, 1); //=> 'foo'
arrayFindPredecessor(array, 2); //=> 'bar'

arrayFindPredecessor(array, 0); //=> 'bar'
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install array-find-predecessor
```

## API

```javascript
import arrayFindPredecessor from 'array-find-predecessor';
```

### arrayFindPredecessor(*array*, *index*)

*array*: `Array` (non-empty array)  
*index*: `integer` (index of the array assumed to be deleted)  
Return: `integer` or `null`

Essentially, it returns an array value one index before the given `index`.

```
value:      A B C
deleted:      ^
substitute: ^
```

```javascript
arrayFindPredecessor(['A', 'B', 'C'], 1); //=> 'A'
```

If `index` is `0`, it returns the successor value because the first element has no predecessor elements.

```
value:      A B C
deleted:    ^
substitute:   ^
```

```javascript
arrayFindPredecessor(['A', 'B', 'C'], 0); //=> 'B'
```

If the array includes only a single value, it returns `null` because no value exists except for the deleted value.

```
value:      A
deleted:    ^
substitute: (none)
```

```javascript
arrayFindPredecessor(['A'], 0); //=> null
```

## License

Copyright (c) 2016 - 2018 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).

# array-find-predecessor

[![NPM version](https://img.shields.io/npm/v/array-find-predecessor.svg)](https://www.npmjs.com/package/array-find-predecessor)
[![Bower version](https://img.shields.io/bower/v/array-find-predecessor.svg)](https://github.com/shinnn/array-find-predecessor/releases)
[![Build Status](https://travis-ci.org/shinnn/array-find-predecessor.svg?branch=master)](https://travis-ci.org/shinnn/array-find-predecessor)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/array-find-predecessor.svg)](https://coveralls.io/r/shinnn/array-find-predecessor)
[![dependencies Status](https://david-dm.org/shinnn/array-find-predecessor/status.svg)](https://david-dm.org/shinnn/array-find-predecessor)
[![devDependencies Status](https://david-dm.org/shinnn/array-find-predecessor/dev-status.svg)](https://david-dm.org/shinnn/array-find-predecessor?type=dev)

Find a predecessor value of the array that should be chosen when a given index is deleted

```javascript
import arrayFindPredecessor from 'array-find-predecessor';

const array = ['foo', 'bar', 'baz'];

arrayFindPredecessor(array, 1); //=> 'foo'
arrayFindPredecessor(array, 2); //=> 'bar'

arrayFindPredecessor(array, 0); //=> 'bar'
```

## Installation

### [npm](https://www.npmjs.com/)

```
npm install array-find-predecessor
```

### [bower](https://bower.io/)

```
bower install array-find-predecessor
```

## API

### arrayFindPredecessor(*array*, *index*)

*array*: `Array` (non-empty array)  
*index*: `Number` (index of the array assumed to be deleted)  
Return: `Number` or `null`

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

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).

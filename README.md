[![npm package](https://nodei.co/npm/node-hm.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-hm/)

# node-hm
> A simple implementation of a Hashmap written in JavaScript.

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

HM is a simple implementation of a Hashmap written in JavaScript. 

Features: 
- Written in ES6, transpiled using Babel
- Statically type checked with Flow (https://flow.org/)
- 100% code coverage 

## Installation

OS X & Linux:

```sh
npm install node-hm --save
```

## Usage example

```javascript
import HM from 'node-hm'

// Initialize with size of hashmap
var hm = new HM(10);
hm.set("key", "value") // => true
hm.get("key") // => "value"
hm.delete("key") // => "value"
hm.get("key") // => null
hm.load() // => 0.1
```

## Development setup

**Requirements**

- Install Node.js (https://nodejs.org/en/download/)

To install developer dependencies, run:

```sh
npm install
```

## Testing

To execute linting, type checking, and run tests, run:

```sh
npm run test
```

## Release History

* 1.0.1
    * First and final release

## Contributing

1. Fork it (https://github.com/helloworld/node-hm)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/node-hm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/node-hm
[npm-downloads]: https://img.shields.io/npm/dm/node-hm.svg?style=flat-square

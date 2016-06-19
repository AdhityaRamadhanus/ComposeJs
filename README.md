[![Build Status](https://travis-ci.org/AdhityaRamadhanus/ComposeJs.svg?branch=master)](https://travis-ci.org/AdhityaRamadhanus/ComposeJs)

<h1>ComposeJs</h1>

<p>
  <a href="#installation">Installation</a> |
  <a href="#usage">Usage</a> |
  <a href="#license">License</a>
  <br><br>
  <blockquote>Simple, naive, small library for composing function</blockquote>
</p>

Installation
------------

`npm install composejs`

Usage
-----

```js
var composeJs = require('composeJs')
function addTwo (x) { return x+2}
function addThree (x) { return x+3}
var composed = composeJs(addTwo, addThree)

composed(2) // 7
composed(18) // 23
```

License
----

MIT © [Adhitya Ramadhanus]

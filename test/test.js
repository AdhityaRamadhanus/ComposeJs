'use strict'
var assert = require('chai').assert
var describe = require('mocha').describe
var it = require('mocha').it
var composeJs = require('../')

describe('ComposeJs function', function () {
  it('Composing two 1-arity function', function (done) {
  	function addTwo (x) { return x+2}
  	function addThree (x) { return x+3}
  	var addFive = composeJs(addTwo, addThree)
  	assert.equal(addFive(3),8)
  	done()
  })
  it('Composing two 1-arity function with one 2-arity function', function (done) {
  	function multiplyTwo (x, y) { return x*y}
  	function addTwo (x) { return x+2}
  	function addThree (x) { return x+3}
  	var composed = composeJs(addTwo, addThree, multiplyTwo)
  	assert.equal(composed(2, 2), 9) 
  	done()
  })
  it('Composing a composed function', function (done) {
  	function multiplyTwo (x, y) { return x*y}
  	function addTwo (x) { return x+2}
  	function addThree (x) { return x+3}
  	var composed = composeJs(addTwo, composeJs(addThree, multiplyTwo))
  	assert.equal(composed(2, 2), 9) 
  	done()
  })
  it('Should throw error when composing zero functions', function (done) {
  	//var composed = composeJs()
  	assert.throws(composeJs, Error, "No Functions Provided")
  	done()
  })
  it('Should throw error when middle function demands two or more arguments', function (done) {
  	function multiplyTwo (x, y) { return x*y}
  	function addTwo (x) { return x+2}
  	function addThree (x) { return x+3}
  	var composed = composeJs(addTwo, multiplyTwo, addThree)
  	assert.throws(composed, Error, 'Function need 2 or more arguments')
  	done()
  })
})
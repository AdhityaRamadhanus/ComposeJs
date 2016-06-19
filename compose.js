'use strict'
var slice = Function.prototype.call.bind(Array.prototype.slice);
module.exports = function composeJs() {
	var funs = slice(arguments).reverse()
	if (funs.length === 0) throw new Error('No Functions Provided')
	return function (){
		var args = slice(arguments)
		return funs.slice(1).reduce(function (prev, curr){
			if (curr.length > 1) throw new Error('Function need 2 or more arguments')
			return curr(prev)
		},funs[0].apply(funs[0], args))
	}
} 

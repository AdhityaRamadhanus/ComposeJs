'use strict'
var slice = Function.prototype.call.bind(Array.prototype.slice)
module.exports = (...args) => {
	var funs = args.reverse()
	if (funs.length === 0) throw new Error('No Functions Provided')
	return (...innerargs) => {
		return funs.slice(1).reduce(function (prev, curr){
			if (curr.length > 1) throw new Error('Function need 2 or more arguments')
			return curr(prev)
		},funs[0].apply(funs[0], innerargs))
	}
} 

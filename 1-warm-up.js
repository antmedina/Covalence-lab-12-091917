// this is the barebones code that should be accepted//
setTimeout(function() {console.log('TIMED OUT!');}, 300);

//if not try this
// (function() {setTimeout(function() {console.log('TIMED OUT!');}, 300);}).call(this);//

//or begin the your code with -
//"use strict";
//then 
//setTimeout(function() {console.log('TIMED OUT!');}, 300);//

//Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.
// And: Strict mode helps out in a couple ways:
// It catches some common coding bloopers, throwing exceptions.
// It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
// It disables features that are confusing or poorly thought out.


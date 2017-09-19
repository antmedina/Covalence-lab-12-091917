//use stict code
"use strict";
// Create a promise
var promise = new Promise(function (fulfill, reject) {
//create statement for success parameter    
    fulfill ("PROMISE VALUE");     
    });
//call back promise which will launch after value has been determined
promise.then(console.log);
//console log other statement which appears ahead of .then statement
console.log("MAIN PROGRAM");
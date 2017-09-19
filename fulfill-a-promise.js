//my initial attempt
// //set strict mode
// "use strict";
// //establish my intial Promise
// var promise = new Promise (function (fulfill, reject){
//     return setTimeout(function() {return fulfill("FULFILLED!")}, 300)
// }).then(console.log);

//Better way below//
//set strict mode
"use strict";
//create promise with fulfill
 var promise = new Promise(function (fulfill, reject) {
// create setTimeout with phrase
      setTimeout(function () {
        fulfill("FULFILLED!");
      }, 300);
    });
//above code will execute and then set your console log with .then
    promise.then(console.log)
//use strict code
"use strict";
// create a promise with error message
var promise = new Promise(function (fulfill, reject) {
      setTimeout(function () {
//make Error variable          
        reject(new Error("REJECTED!"));
      }, 300);
    });
// create a function to print `error.message` using `console.log`.
    function onReject(error) {
      console.log(error.message);
    };
//excute the .then on promise will null and new function
    promise.then(null,onReject);
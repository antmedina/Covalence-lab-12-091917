//use stict code
"use strict";
// Create a promise
    var promise = new Promise(function (fulfill, reject) {
//create statements for each parameter        
        fulfill ("I FIRED");
        reject (new Error("I DID NOT FIRE"));
    });
 // Create a function to print `error.message` using `console.log`.
    function onReject(error) {
      console.log(error.message);
    };
//call back both items
    promise.then(console.log, onReject);
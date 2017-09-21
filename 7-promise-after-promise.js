"use strict";
var p = first().then(second).then(console.log);

// p.then(function(secret){
//     return second(second);
// }).then(function(success){
//     console.log (success);
// });
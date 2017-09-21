"use strict";
function attachTitle(name){
    return "Dr. " + name;
}
var p = Promise.resolve("Manhattan");

p.then(attachtTitle).then(console.log);
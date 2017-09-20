// Yea, this passed the test but f^<{ if works

//create resolved promise
function shortcuts (){
    var promise = Promise.resolve("Good Promise");
//create rejected promise
    var promise = Promise.reject(new Error("Bad Promise"));
//create catch function
    promise.catch(function(error){
        console.error("Nobody Likes Bad Promises");
        console.error;
    });
//console log it
    promise.this(console.log);
};    
//extra console log to practice asynchronus code
console.log("Trying Out Shortcuts");


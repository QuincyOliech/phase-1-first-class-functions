function receivesAFunction(callback){
console.log (callback());
}


function returnsANamedFunction(){
     return returnsANamedFunction;
}
let myFunction = returnsANamedFunction()
myFunction();

function returnsAnAnonymousFunction(){
     return function (){}; 
}
let fn = returnsAnAnonymousFunction()
fn();
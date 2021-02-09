/* 
Different between 
function declaration & function expression?

*/


//console.log(funcD());
//console.log(funcE);


// Function declration
function funcD() {
    console.log('function declaration');
}


// expration or anonimus  fucntion
let funcE = function() {
    console.log('function expration');
}

console.log(funcD());
console.log(funcE());

/*1)
 let vs var

 - let was introduced in es2015/es6
 - Let has block scope

 - var is there js beginning 
 var has function scope
*/

let x = function() {

    if (true) {
    console.log(v)
    console.log(l)
        var v =2;
        let l = 1;
    }

    console.log(v)
    console.log(l)
}
x();
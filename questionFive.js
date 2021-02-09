/*
 What is promises and why do we use it?
*/

/*
let p1 = new Promise( function(resole, reject) {
    resolve('')
})

p1
.then()
.then( data => console.log(data))
.catch (error => console.log(error))
*/


/* What is setTimeout() setTimeout()   

setTimeout( () => {
    console.log('a')
}, 0);
console.log('b');
console.log('c');
*/

/* What is a closure and how do you use it? */

let obj = function() {
    let i =0;

    return {
        setI(k) {
            i=k;
        },
        getI() {
            return i;
        }
    }
};

let x = obj();

x.setI(2);
x.setI(4);
console.log(x.getI());

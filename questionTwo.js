/*
*2) 
Difference between "==" and "===" ? 
Both are comparision operators "==" and "==="
*/

/*
 Data Types that are primitives, checked by typeof operator
 
 undefined
 Boolean
 Number
 String
 BigInt
 Symbol

 Stcutural Types

 Object
 Function

 Structural Root
 null


if ('1'== 1) {
    console.log('Equal');
}

if ('1'=== '1') {
    console.log('Equal by typeof');
}
*/



/* difference between "let" and "const" keywords?

let l = 1;
l = 2;

console.log(l);

const c = 1;
c = 2;
console.log(c);

const f;
f=1;
console.log(f);


const c =[1,2];
//c = [1,2,3];
c.push(3)
console.log(c);
*/

/* Difference between "undefined" and "null" */

console.log(typeof(undefined));
console.log(typeof(null))

const profile = {
    firstName: '',
    lastName: '',
    setName: function(name) {
        let splitName = function(n) {
            //let splitName = (n) => {
            let nameArray = n.split('');
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
        }
        splitName(name);
    }
}

profile.setName('john doe');
console.log(window.firstName)
console.log(this.firstName);
console.log(firstName);
console.log(lastName);

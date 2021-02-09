// How to do empty array

const list = [1,2,3,4,5,6,7,8,9];

// list = []; does not work
// list.length = 0 this one work
//list.splice(0, list.length) it work

while ( list.length) {
    list.pop();
}

console.log(list.length)
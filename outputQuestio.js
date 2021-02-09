/*var Output = ( function(x) {
    delete x;
    return x;
}
)(10)

console.log(Output)*/

/*var X = { Foo: 1};
var Output = ( function()
{
    delete X.Foo;
    return X.Foo
}
)();

console.log(Output)
*/

/*var Employee = { company: 'xyz'}

var Emp1 = new Object(Employee);

delete Emp1.company

console.log(Emp1.company);*/

var Foo = function Bar() {
    return 7;
}

console.log(typeof Bar())
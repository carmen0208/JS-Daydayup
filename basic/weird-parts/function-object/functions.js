//function expression

greet();
function greet() {
    console.log("function expression");
}
greet.somebody = "carmen";
console.log(greet);
console.log(greet.somebody)
// annoymousGreet(); // error
//function statement
var annoymousGreet = function() {
    console.log("function statement");
}
annoymousGreet();

//passing function to run
function log(a) {
    a();
}

log(function(){
    console.log("function inside function");
})
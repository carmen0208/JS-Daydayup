var x = 10;
var y = 20;
function greaterThan(m) {
  return function(n) {
    return m > n ;
  }
}

console.log(`High Order:greaterThans: ${x} > ${y} :` + greaterThan(x)(y))

console.log("FUNCTION: that change other function:");
function noisy(f) {
  return function(arg) {
    console.log(f, "calling with ", arg);
    var val = f(arg);
    console.log(f, "calling with ", arg, "- got", val);
  };
}

noisy(Boolean)(0);

noisy(greaterThan(x))(20);

console.log("FUNCTION: provide new types of control flow:");

function unless(test, then) {
  if(!test) {
    then();
  }
}

function repeat(times, body) {
  for(var i=0; i< times; i++) {
    body(i);
  }
}


repeat(3, function(n) {
  unless( n%2, function(){
    console.log(n, "is even")
  });
});

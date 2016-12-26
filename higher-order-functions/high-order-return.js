var x = 10;
var y = 20;
function greaterThan(m) {
  return function(n) {
    return m > n ;
  }
}

console.log(`High Order:greaterThans: ${x} > ${y} :` + greaterThan(x)(y))

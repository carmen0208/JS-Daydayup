var ancestry = JSON.parse(ANCESTRY_FILE);

function reduce(array, combine, start) {
  var current = start;
  for(var i=0; i< array.length; i++) {
    current = combine(current, array[i]);
  }
  return current;
}


console.log(reduce([1,2,3,4], function(a,b){
  return a+b;
},0));


console.log(reduce(ancestry, function(min, cur) {
  if (cur.born < min.born) return cur;
  else return min;
},ancestry[0]))

console.log(ancestry.reduce(function(min, cur) {
  if (cur.born < min.born) return cur;
  else return min;
}))

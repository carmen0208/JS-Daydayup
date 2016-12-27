var ancestry = JSON.parse(ANCESTRY_FILE);

function filter(array, test) {
  var passed = [];
  for (var i=0;i< array.length; i++) {
    if(test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}


function map(array, transform) {
  var mapped = [];
  for(var i= 0; i< array.length; i++) {
    mapped.push(transform(array[i]));
  }
  return mapped;
}


var overNighty = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});
// console.log(overNighty);
console.log(map(overNighty, function(person) {
  return person.name;
}));

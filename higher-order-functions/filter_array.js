
var ancestry = JSON.parse(ANCESTRY_FILE);

function filter(array, test) {
  var passed = [];
  for (var i=0;i< array.length; i++) {
    if(test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}
console.log("return born between 1900 and 1925:");
console.log(filter(ancestry, function(person){
  return person.born > 1900 && person.born < 1925
}))

console.log("return father ='Carel Haverbeke'");

console.log(filter(ancestry, function(person){
  return person.father == "Carel Haverbeke";
}))

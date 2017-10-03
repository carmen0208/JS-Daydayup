person = new Object();
person['firstname'] = "Carmen";
person['lastname'] = "Liu"
console.log(person);
console.log(person.firstname);

//same as person, but a better way to define a Object
person2 = {};
person2.firstname = "Carmen2";
person2.lastname = "Liu2";

console.log(person2);
console.log(person2.firstname);
// console.log(person2.whatever.firstname) // will run into an error

//works with Json

console.log(JSON.stringify(person2));
console.log(JSON.parse(JSON.stringify(person2)));
function Animal(){
  this.species = "动物";
}

function Cat(name, color) {
  // Animal.apply(this, arguments);
  this.name = name;
  this.color = color;
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

var cat1 = new Cat("大毛","黄色");

console.dir(cat1);

console.log(cat1.species);

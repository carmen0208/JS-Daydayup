function Animal(){}
Animal.prototype.species = "动物";

function Cat(name, color) {
  // Animal.apply(this, arguments);
  this.name = name;
  this.color = color;
}

var F = function(){};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;

var cat1 = new Cat("大毛","黄色");

console.dir(cat1);

console.log(cat1.species);

console.log(Animal.prototype.constructor); // Cat

function extend(Child, Parent) {
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.uber = Parent.prototype;
}


extend(Cat, Animal);

var cat3 = new Cat("大毛","黄色");

console.dir(cat3);
console.log(cat3.species);

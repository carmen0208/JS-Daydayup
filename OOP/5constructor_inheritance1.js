function Animal(){
  this.species = "动物";
}

function Cat(name, color) {
  // debugger;
  // this to excute Animal with arguments, so it got this.species ="动物"
  Animal.apply(this, arguments);
  this.name = name;
  this.color = color;
}

var cat1 = new Cat("大毛","黄色");

console.dir(cat1);

console.log(cat1.species);

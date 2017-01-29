function Cat(name, color){
  this.name =  name;
  this.color = color;
}

var cat1 = new Cat("大毛","黄色");
var cat2 = new Cat("二毛","黑色");

console.dir(cat1);
console.dir(cat2);
console.log(cat1.constructor == Cat);
console.log(cat2.constructor == Cat);
console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);


function Cat2(name,color){
　this.name = name;
　this.color = color;
　this.type = "猫科动物";
　this.eat = function(){console.log("吃老鼠");};
}

var cat3 = new Cat2("大毛","黄色");
var cat4 = new Cat2("二毛","黑色");
console.log(cat3.type); // 猫科动物
cat3.eat(); // 吃老鼠
console.log(cat3.eat == cat4.eat); //false

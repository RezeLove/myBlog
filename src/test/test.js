var Fn = function (name, age) {
  this.name = name;
  this.age = age;
};
Fn.prototype.say = function () {
  console.log("Fn.prototype.say");
};

function myNew(Fn) {
  if (typeof Fn !== "function")
    throw new TypeError("This is not a constructor"); // Fn校验
  var args = Array.from(arguments).slice(1); // 取入参
  console.log(args);
  var obj = {}; // 1.创建一个空的简单JavaScript对象（即`  {}  `）
  obj.__proto__ = Fn.prototype; // 2.  为步骤1新创建的对象添加属性`  __proto__  `，将该属性链接至构造函数的原型对象
  var res = Fn.call(obj, ...args); // 3.  将步骤1新创建的对象作为this的上下文并传入参数；
  return Object(res) === res ? res : obj; // 4.  如果该函数没有返回对象，则返回this。
}
const obj = myNew(Fn, 20, 30);
console.log(obj.say);

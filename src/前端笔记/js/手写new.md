---
title: this与手写new
order: 7
category:
  - 面试
  - JS
---

## 参考连接

[5 分钟快速手写实现：new](https://juejin.cn/post/7080187400298692644#heading-2)

## new 的作用

new 用于实例化构造函数，主要是有以下几个步骤：

1. 创建一个空的对象 newObject，作为实例的上下文；
2. 将类上的原型放在 newObject 的原型链上，使得 newObject 可以调用类中定义的函数；
3. 将 newObject 作为 this，执行构造函数；
4. 判断类执行后是否有返回一个对象，如果有，则返回该对象；如果没有，则返回 newObject;

new 的例子：

```js
// 构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let obj2 = new Person("zyh", 23);

// 实际的执行过程伪代码：
function Person(name, age) {
  // 1 创建一个空对象 let obj = new Object()
  // 2 对象与构建函数通过原型链连接起来 obj.__proto__ = Person.prototype
  // 3 构建函数中的this绑定到新建的对象obj上,并执行 let res = Person.call(obj,name,age)
  this.name = name;
  this.age = age;
  // 4 根据构建函数返回类型作判断，如果有返回值且是对象，就讲该对象返回；否则返回this
  // return Object(res) === res ? res : obj
}
```

## new 实现第一版

```js
function myNew(Fn) {
  var obj = {}; // 1.创建一个空的简单JavaScript对象（即`  {}  `）
  obj.__proto__ = Fn.prototype; // 2.  为步骤1新创建的对象添加属性`  __proto__  `，将该属性链接至构造函数的原型对象 ；
  var res = Fn.call(obj); // 3.  将步骤1新创建的对象作为this的上下文 ；
  return res ? res : obj; // 4.  如果该函数没有返回对象，则返回this。
}
```

该版存在如下 3 个问题：

1. 无法接受传参
2. 无法验证 FN 是否为函数
3. 无法验证 FN 的返回值是否为对象

## new 最终版

```js
function myNew(Fn, ...args) {
  // 对FN进行类型校验，解决问题2
  if (typeof Fn !== "function")
    throw new TypeError("This is not a constructor");
  // Object.create() 是 JavaScript 提供的一个内建方法，用于创建一个新的对象，并将其原型（__proto__）指向指定的对象
  const obj = Object.create(Fn.prototype);
  const res = Fn.apply(obj, args);
  // 检验res是否为对象，解决问题3
  return typeof res === "object" && res !== null ? res : obj;
}
```

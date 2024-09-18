---
title: 手写bind
order: 10
category:
  - 面试
  - ES6
---

## 思路

bind 与 call 和 apply 有一定的区别，因此在实现上差异较大：

- call 与 apply 是在调用时临时修改 this 指向并立即执行一次；而 bind 是永久修改 this 指向且不会立即执行，返回的是一个修改 this 指向后的函数
- bind 能够多次接受参数，调用 bind 时传入，返回的函数调用时接受参数

## bind 第一版

```js
Function.prototype.myBind = function (context, ...preArgs) {
  // 箭头函数没有this，因此无法调用bind，这里需要排除
  if (typeof this !== "function") {
    throw new TypeError("error");
  }

  context = context || window;

  // 保存当前的this
  let that = this,

  // 闭包，返回一个函数
  return function Fn(...args) {
    // 调用apply，将外面传递的参数和里面传递的参数合并
    return that.apply(context, [...preArgs,...args]);
  };
};
```

但是存在一个问题，如果原始函数是可构造的

"绑定函数也可以使用 new 运算符构造，它会表现为目标函数已经被构建完毕了似的。提供的 this 值会被忽略，但前置参数仍会提供给模拟函数"

上述的意思是说：绑定函数也可以使用 new 运算符进行构造，相等于 bind 提供的 第一个参数被忽略(this 指向)被忽略，但前置参数仍会提供给模拟函数

```js
var value = 1;
var obj = {
  value: 100,
};
function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this.value);
  console.log(name);
  console.log(age);
}

var bindPerson = Person.bind1(obj, "jack");
var bp = new bindPerson(35);

// 在上述结果，预期的结果this.value应该是undefined；而实际上却是100
```

## bind 最终版

new 的作用：

1. 创建一个新的对象 obj
2. 将对象与构建函数通过原型链连接起来
3. 将构建函数中的 this 绑定到新建的对象 obj 上
4. 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理

因此如果是用 new 构建的函数，那么就不再绑定在`contenxt`上，而绑定在原始函数上

ES6 为 new 命令引入了一个 new.target 属性，该属性一般用在构造函数之中，返回 new 命令作用于的那个构造函数。如果构造函数不是通过 new 命令或 Reflect.construct() 调用的，new.target 会返回 undefined ，因此这个属性可以用来确定构造函数是怎么调用的

> 最终版 bind

```js
Function.prototype.myBind = function (context, ...preArgs) {
  // 箭头函数没有this，因此无法调用bind，这里需要排除
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  context = context || window;
  // 保存当前的this
  let that = this;

  // 闭包，返回一个函数
  let cb = function Fn(...innerArgs) {
    // es6的语法
    const isNew = typeof new.target !== "undefined"; // 判断函数是否被new过

    const innerArgs = [...preArgs, ...innerArgs];

    // 如果new过，会生成一个this，绑定这个this(即创造的示例函数)即可，后面的参数不变
    return that.apply(isNew ? this : context, innerArgs);
  };

  cb.prototype = that.prototype; // 继承构造函数原型
  return cb; // 返回创建函数
};
```

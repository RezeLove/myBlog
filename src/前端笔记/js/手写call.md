---
title: 手写call
order: 8
category:
  - 面试
  - ES6
---

## 参考链接

[参考链接](https://juejin.cn/post/6948712756430241823)

## 思路

> 使用 call

```js
const obj = {
  value: 1,
};

function fn(arg) {
  console.log(this.value, arg); // 1, 2
}

fn.call(obj, 2);
```

> 不使用 call

```js
const obj = {
  value: 1,
  fn: function () {
    console.log(this.value); // 1
  },
};
obj.fn();
```

如果函数在对象的内部，那么可以达到相同的效果，根据这个思路，模拟步骤为：

1. 将函数设置为传入对象的一个属性
2. 执行该函数
3. 删除该属性

## 模拟 call 第一版

```js
Function.prototype.call1 = function (context) {
  // contex 是传入的对象，this当前就是函数本身
  context.func = this;
  context.func();
  delete context.func;
};
```

## 模拟 call 最终版

对于第一版 call，目前存在两个问题：

1. 无法获取传入参数
2. 如果函数有返回值，目前无法返回

针对第一个问题，可以通过 arguments 获取所有传入 call 的参数，再作为参数传给函数
针对第二个问题，可以在 call 中将函数的返回值保存下来，再 return 出去

```js
Function.prototype.call1 = function (context) {
  context = context || window;

  // 用Symbol作为对象属性可以保证永远不会出现同名属性,避免造成属性覆盖
  const fn = Symbol();
  context[fn] = this;

  // 取出其他入参
  const args = [...arguments].slice(1);

  // 执行函数，并将结果保存到res中
  const res = context[fn](...args);

  // 删除属性
  delete context[fn];

  // 返回执行结果
  return res;
};
```

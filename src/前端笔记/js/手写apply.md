---
title: 手写apply
order: 9
category:
  - 面试
  - ES6
---

## 实现

apply 和 call 的原理相同，只是传参的方式有所不同，apply 传入的参数是数组形式

```js
// 入参的方式不同
Function.prototype.apply1 = function (context, args) {
  // 判断 argsArray 是否为数组或类数组
  if (args && !Array.isArray(args)) {
    throw new TypeError("Second argument must be an array");
  }
  context = context || window;

  // 给传入的对象添加属性，值为当前函数
  const fn = Symbol();
  context[fn] = this;

  const res = context[fn](...args);

  // 删除新增属性
  delete context[fn];

  // 返回函数执行结果
  return res;
};
```

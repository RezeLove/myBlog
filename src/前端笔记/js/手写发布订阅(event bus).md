---
title: 手写发布订阅/event bus
order: 19
category:
  - 面试
  - JS
---

## 实现 on（订阅事件）和 emit（发布事件）

```js
class Eventbus {
  constructor() {
    /**
     * key:name value:set存放name对应的callback
     */
    this.subscribers = {};
  }
  $on(name, callback) {
    if (!this.subscribers[name]) {
      this.subscribers[name] = new Set();
    }
    this.subscribers[name].add(callback);
  }
  $emit(name) {
    let set = this.subscribers[name];
    for (let callback of set) {
      callback();
    }
  }
}

const eventbus = new Eventbus();
eventbus.$on("a", () => {
  console.log("a is triggered");
});

eventbus.$emit("a");
```

## 实现 emit 时传参

```js
class Eventbus {
  // ...
  $emit(name, ...rest) {
    let set = this.subscribers[name];
    for (let callback of set) {
      callback(...rest);
    }
  }
}

const eventbus = new Eventbus();
eventbus.$on("a", (name, age) => {
  console.log(`my name is ${name}, my age is ${age}`);
});

eventbus.$emit("a", "zb", 20);
```

## 取消订阅 $off

取消订阅是删除订阅者的某个 callback 函数，所以要对数据结构进行修改，将原本的 set 也改为如下的对象

```js
{
  name: {
    id1:callback1,
    id2:callback2
  }
}
```

```js
class Eventbus {
  constructor() {
    this.subscribers = {};
    this.callbackId = 0;
  }
  $on(name, callback) {
    if (!this.subscribers[name]) {
      this.subscribers[name] = {};
    }
    this.callbackId++;
    let id = this.callbackId;
    this.subscribers[name][id] = callback;
    return id;
  }
  $emit(name, ...rest) {
    const eventList = this.subscribers[name];
    for (const id in eventList) {
      eventList[id](...rest);
    }
  }
  $off(name, id) {
    const eventList = this.subscribers[name];
    delete eventList[id];
    console.log(`id为${id}的事件已被取消订阅`);
    // 如果已经没有callback，删除这个订阅者
    if (!Object.keys(eventList).length) {
      delete this.subscribers[name];
    }
  }
}

const eventbus = new Eventbus();
let id = eventbus.$on("a", (name, age) => {
  console.log(`my name is ${name}, my age is ${age}`);
});
eventbus.$emit("a", "zb", 20);
eventbus.$off("a", id);
eventbus.$emit("a", "zb", 20);
```

## 执行一次 once

```js
class Eventbus {
  // ....
  $once(name, callback) {
    if (!this.subscribers[name]) {
      this.subscribers[name] = {};
    }
    this.callbackId++;
    let id = "O" + this.callbackId;
    this.subscribers[name][id] = callback;
    return id;
  }
  $emit(name, ...rest) {
    const eventList = this.subscribers[name];
    for (const id in eventList) {
      eventList[id](...rest);
      //   是执行一次函数
      if (id.indexOf("O") !== -1) {
        delete eventList[id];
      }
    }
  }
}

const eventbus = new Eventbus();
eventbus.$on("a", (name, age) => {
  console.log(`my name is ${name}, my age is ${age}`);
});
eventbus.$once("a", () => {
  console.log("我是执行一次函数");
});
eventbus.$emit("a", "zb", 20);
eventbus.$emit("a", "zb", 20);
```

## 完整版

```js
class Eventbus {
  constructor() {
    this.subscribers = {};
    this.callbackId = 0;
  }
  $on(name, callback) {
    if (!this.subscribers[name]) {
      this.subscribers[name] = {};
    }
    this.callbackId++;
    let id = this.callbackId;
    this.subscribers[name][id] = callback;
    return id;
  }
  $once(name, callback) {
    if (!this.subscribers[name]) {
      this.subscribers[name] = {};
    }
    this.callbackId++;
    let id = "O" + this.callbackId;
    this.subscribers[name][id] = callback;
    return id;
  }
  $emit(name, ...rest) {
    const eventList = this.subscribers[name];
    for (const id in eventList) {
      eventList[id](...rest);
      //   是执行一次函数
      if (id.indexOf("O") !== -1) {
        delete eventList[id];
      }
    }
  }
  $off(name, id) {
    const eventList = this.subscribers[name];
    delete eventList[id];
    console.log(`id为${id}的事件已被取消订阅`);
    // 如果已经没有callback，删除这个订阅者
    if (!Object.keys(eventList).length) {
      delete this.subscribers[name];
    }
  }
}
```

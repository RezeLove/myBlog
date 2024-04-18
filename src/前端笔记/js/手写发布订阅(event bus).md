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

## 另一种实现 once 的思路：

将 once 对应的回调函数进行包裹，执行完后就触发 off 事件

```js
class EventBus {
  constructor() {
    this.subscribers = {};
  }

  // 订阅事件
  on(name, callback) {
    if (!this.subscribers[name]) {
      this.subscribers[name] = new Set();
    }
    this.subscribers[name].add(callback);
  }

  // 发布事件
  emit(name, ...args) {
    const eventList = this.subscribers[name];
    if (eventList) {
      for (const event of eventList) {
        event(...args);
      }
    }
  }

  // 取消订阅事件
  off(name, callback) {
    const eventList = this.subscribers[name];
    if (eventList) {
      eventList.delete(callback);
      if (eventList.size === 0) {
        delete this.subscribers[name];
      }
    }
  }

  // 一次性订阅事件
  once(name, callback) {
    const onceCallback = (...args) => {
      callback(...args);
      this.off(name, onceCallback);
    };
    this.on(name, onceCallback);
  }
}

// 示例用法
const eventBus = new EventBus();

// 订阅事件
eventBus.on("message", (data) => {
  console.log("Message received:", data);
});

// 发布事件
eventBus.emit("message", "Hello, world!");

// 取消订阅事件
const callback = (data) => {
  console.log("Callback:", data);
};
eventBus.on("test", callback);
eventBus.emit("test", "Testing 1");
eventBus.off("test", callback);
eventBus.emit("test", "Testing 2");

// 一次性订阅事件
eventBus.once("onceEvent", () => {
  console.log("This should only happen once.");
});
eventBus.emit("onceEvent");
eventBus.emit("onceEvent");
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

---
title: nextTick的用法与原理
icon: laptop-code
order: 23
category:
  - 使用指南
  - vue
---

## 参考链接

[Vue 中$nextTick 源码解析](https://juejin.cn/post/6844904147804749832)

## nextTick 的应用场景与用法

Vue 在更新 DOM 时是异步执行的(微任务)，只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更

这样是为了在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作，提升性能。比如主线程中更新 DOM，循环 100 次就要更新 100 次 DOM；而如果等事件循环完成之后更新 DOM，只需要更新 1 次。

但这也带来了一个问题，在数据更新后没法立刻获取最新的 DOM，比如根据文字的行数来显示展开更多的一个按钮，需要在 Vue 中给数据赋值之后需要获取文字高度,然而下面的写法无法立即获取更新的文字高度

```vue
<script setup lang="ts">
import { ref, onMounted } from "vue";
const msg = ref("");
onMounted(() => {
  msg.value = "123";
  console.log(document.querySelector(".msg").offsetHeight);
});
</script>
<template>
  <div class="msg">
    {{ msg }}
  </div>
</template>
```

此时，使用 nextTick 函数即可解决这个问题

nextTick 实际上就是回调函数都存入一个 callbacks 数组，然后在 Promise.then（微任务）中依次执行这些回调（将回调函数再 DOM 更新后执行）

```vue
<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
const msg = ref("");
onMounted(() => {
  msg.value = "123";

  nextTick(() => {
    //@ts-ignore
    console.log(document.querySelector(".msg").offsetHeight);
  });
});
</script>
```

## 实现原理

关于 nextTick 函数，共涉及 3 个相关的函数分别为`nextTick`、`timerFunc`、`flushCallbacks`

其中 `nextTick` 函数负责收集回调函数并存入`callbacks`队列，并执行 `timerFunc`；`timerFunc`的作用是创建一个微任务（或宏任务），调用`flushCallbacks`；`flushCallbacks`的作用是执行一次执行`callbakcs`队列中所有的回调函数

为了防止调用 nextTick 都去创建一个 timerFunc 微任务，还需要`pending`变量配合,在 pending 为 false 的时候表示第一次添加 cb 到 callbacks 中，这时候创建一个 timerFunc 微任务，并将 pending 改为 true 加锁；后面再调用 nextTick 就只是往 callbacks 添加回调，等到微任务开始执行时，再依次执行回调，清空 callbacks 队列，并将 pending 重新设置为 false

```js
const callbacks = [];
let pending = false;
let timerFunc;

export function nextTick(cb?: Function, ctx?: Object) {
  let _resolve;
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, "nextTick");
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== "undefined") {
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  }
}
```

> timerFunc 会根据浏览器的支持情况，首先尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，上述三个都不支持最后使用 setTimeout

```js
export let isUsingMicroTask = false;
if (typeof Promise !== "undefined" && isNative(Promise)) {
  //判断1：是否原生支持Promise
  const p = Promise.resolve();
  timerFunc = () => {
    p.then(flushCallbacks);
    if (isIOS) setTimeout(noop);
  };
  isUsingMicroTask = true;
} else if (
  !isIE &&
  typeof MutationObserver !== "undefined" &&
  (isNative(MutationObserver) ||
    MutationObserver.toString() === "[object MutationObserverConstructor]")
) {
  //判断2：是否原生支持MutationObserver
  let counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });
  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
  //判断3：是否原生支持setImmediate
  timerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  //判断4：上面都不行，直接用setTimeout
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}
```

> flushCallbacks

```js
function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}
```

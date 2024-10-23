---
title: 手写ts工具类型
order: 23
category:
  - 面试
  - JS
---

## 1.Partial

用法：

```ts
interface A {
  x: number;
  y: number;
}
type T = Partial<A>; // { x?: number; y?: number; }
```

实现：遍历每一项，转化为可选类型

解释：keyof T 用于提取一个类型 T 的所有键（属性名），并生成一个联合类型。

```ts
type myPartial<T> = {
  [P in keyof T]?: T[P];
};
```

## 2. ReturnType

用法：

```ts
type T1 = ReturnType<() => string>; // string

type T2 = ReturnType<
  () => {
    a: string;
    b: number;
  }
>; // { a: string; b: number }

type T3 = ReturnType<(s: string) => void>; // void

type T4 = ReturnType<() => () => any[]>; // () => any[]

type T1 = ReturnType<boolean>; // 报错
```

```ts
type myReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
```

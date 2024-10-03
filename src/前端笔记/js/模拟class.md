---
title: 模拟class
order: 21
category:
  - 面试
  - JS
---

## 1 Class 中 extends 的作用

1. 继承父类的原型方法
2. 继承父类中的静态方法(static)
3. 继承父类的构造函数逻辑，通过 ==super()== 可以调用父类的构造函数（下面具体展开）
4. 原型链继承

## 2 Class 中 super 的作用

1. 在子类构造函数中调用父类的构造函数

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, grade) {
    // 调用父类的构造函数
    super(name);
    this.grade = grade;
  }
}
```

2. 在子类方法中调用父类方法(包括 static 方法)

```js
class Person {
  greet() {
    console.log("Hello!");
  }
  static description() {
    return "This is a person.";
  }
}

class Student extends Person {
  greet() {
    // 调用父类的 greet 方法
    super.greet();
    // 调用父类的静态方法
    super.description();
    console.log("I am a student.");
  }
}
```

## 3 如何用 js 模拟 class

父类

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};
```

子类继承

补充：

- Object.create()以一个现有对象作为原型，创建一个新对象。可能有多个子类继承父类，且重写父类方法的情况，为了避免直接修改父类的原型对象，通过 Object.create()创建一个新对象

```js
function Student(name, age, grade) {
  // 通过call或者apply调用父类的构造函数
  Person.call(this, name, age);
  this.grade = grade;
}

// 继承父类原型方法
Student.prototype = Object.create(Person.prototype);
// 设置 Student 的 constructor 为自己
Student.prototype.constructor = Student;

// Student 特有的方法
Student.prototype.study = function () {
  console.log(`${this.name} is studying.`);
};
```

使用

```js
const student = new Student("Alice", 20, "A");
student.greet(); // 输出：Hello, my name is Alice.
student.study(); // 输出：Alice is studying.
```

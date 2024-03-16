const PENDING = Symbol("PENDING"),
  FULFILLED = Symbol("FULFILLED"),
  REJECTED = Symbol("FREJECTED");

const resolvePromise = (promise2, x, resolve, reject) => {
  // 自己等待自己完成是错误的实现，用一个类型错误，结束掉 promise
  if (promise2 === x) {
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  // 只能调用一次
  let called;
  // 后续的条件要严格判断 保证代码能和别的库一起使用
  // 先判断是否是函数，不是的话直接resolve
  if ((typeof x === "object" && x != null) || typeof x === "function") {
    try {
      // 为了判断 resolve 过的就不用再 reject 了（比如 reject 和 resolve 同时调用的时候)
      let then = x.then;
      if (typeof then === "function") {
        // 不要写成 x.then，直接 then.call 就可以了 因为 x.then 会再次取值
        then.call(
          x,
          // y是x的resolve传递进来的指
          (y) => {
            // 根据 promise 的状态决定是成功还是失败
            if (called) return;
            called = true;
            // 递归解析的过程（因为可能 promise 中还有 promise）
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            // 只要失败就失败
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        // 如果 x.then 是个普通值就直接返回 resolve 作为结果
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  }
  // 如果 x 是个普通值就直接返回 resolve 作为结果
  else {
    resolve(x);
  }
};

class _Promise {
  constructor(executor) {
    //默认状态
    this.status = PENDING;
    //存放成功状态的值，默认为 undefined
    this.value = undefined;
    //存放失败状态的值，默认为 undefined
    this.reason = undefined;

    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks = [];

    let resolve = (val) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = val;
        this.onResolvedCallbacks.forEach((fn) => {
          fn();
        });
      }
    };
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => {
          fn();
        });
      }
    };
    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者
      executor(resolve, reject);
    } catch (err) {
      // 发生失败时执行失败逻辑
      reject(err);
    }
  }
  static resolve(data) {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }
  then(onFulfilled, onRejected) {
    // then可以不传值，如果没传值，就直接返回resolve的结果
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
    //因为错误的值要让后面访问到，所以这里也要跑出个错误，不然会在之后 then 的 resolve 中捕获
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };
    // 在promise2的主体中执行onFulfilled, onRejected
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        try {
          // 注：promise.then是个微任务，这里仅用setTimeout简单代替下
          setTimeout(() => {
            // 拿到onFulfilled执行的结果
            let x = onFulfilled(this.value);
            // 因为x可能是个promise，需要通过resolvePromise判断，不能直接resolve
            resolvePromise(promise2, x, resolve, reject);
          }, 0);
        } catch {
          reject(e);
        }
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }
}

_Promise.prototype.finally = function (callback) {
  return this.then(
    (value) => {
      return (
        Promise
          // 执行callback
          .resolve(callback())
          // 采用上一次的value
          .then(() => value)
      );
    },
    (reason) => {
      return (
        Promise
          // 执行callback
          .resolve(callback())
          // 采用上一次的reason
          .then(() => {
            throw reason;
          })
      );
    }
  );
};

// all方法
const PromiseAll = function (values) {
  if (!Array.isArray(values)) {
    const type = typeof values;
    return new TypeError(`TypeError: ${type} ${values} is not iterable`);
  }
  return new Promise((resolve, reject) => {
    let resultArr = [];
    let count = 0;
    const processResultByKey = (value, index) => {
      resultArr[index] = value;
      count++;
      if (count === values.length) {
        resolve(resultArr);
      }
    };
    for (let i = 0; i < values.length; i++) {
      let value = values[i];
      if (value && typeof value.then === "function") {
        value.then(
          (value) => {
            processResultByKey(value, i);
          },
          (reason) => {
            reject(reason);
          }
        );
      } else {
        processResultByKey(value, i);
      }
    }
  });
};

// race方法
const PromiseRace = function (promises) {
  return new Promise((resolve, reject) => {
    // 一起执行就是for循环
    for (let i = 0; i < promises.length; i++) {
      let val = promises[i];
      if (val && typeof val.then === "function") {
        val.then(
          (res) => {
            resolve(res);
          },
          (reason) => {
            reject(reason);
          }
        );
      } else {
        // 普通值
        resolve(val);
      }
    }
  });
};
// finally测试用例
// _Promise
//   .resolve(456)
//   .finally(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("trigger");
//         resolve(123);
//       }, 3000);
//     });
//   })
//   .then((data) => {
//     console.log(data, "success");
//   });

// all测试用例
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ok1");
//   }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ok2");
//   }, 1000);
// });

// PromiseAll([1, 2, 3, p1, p2]).then(
//   (data) => {
//     console.log("resolve", data);
//   },
//   (err) => {
//     console.log("reject", err);
//   }
// );

// race测试用例
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok1");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok2");
  }, 2000);
});
PromiseRace([p1, p2]).then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

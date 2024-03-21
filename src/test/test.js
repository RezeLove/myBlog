// 入参的方式不同
Function.prototype.apply1 = function (context, args) {
  context = context || window;

  // 给传入的对象添加属性，值为当前函数
  const fn = Symbol();
  context[fn] = this;

  // 判断第二个参数是否存在，不存在直接执行，否则拼接参数执行，并存储函数执行结果
  let res = args.length === 0 ? context[fn]() : context[fn](...args);

  // 删除新增属性
  delete context.fn;

  // 返回函数执行结果
  return res;
};

const func = function (a, b, c) {
  console.log(this.name, a + b + c);
};

const obj = {
  name: 123,
};

func.apply1(obj, [1, 2, 3]);

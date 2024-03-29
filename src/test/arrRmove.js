let arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
  {
    name: "ytx",
  },
];

const unique = (arr) => {
  // 1. ES6 set：代码简洁，但兼容性差，无法对{}去重
    return Array.from(new Set(arr));
  // 2. filter + indexof
    return arr.filter((item, index) => {
      // 当前元素的索引是否等于第一次出现的索引，无法对{}去重
      return arr.indexOf(item, 0) === index;
    });
  // 3.利用ownPorperty：用一个对象保存数组中出现过的元素，对象的key通过类型名+元素名字符串拼接的方式进行存储，防止出现同名但不同类型的数据
  // 可以对空对象去重，但是所有对象的key是一样的，会导致非重复对象也被去除
    var obj = {};
    let result = arr.filter(function (item, index, arr) {
      return obj.hasOwnProperty(typeof item + item)
        ? false
        : (obj[typeof item + item] = true);
    });
    console.log(obj);
    return result;
  //   4. reduce:reduce() 方法对数组中的每个元素按序执行提供的函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值
  // 无法对数组去重
  return arr.reduce((prev, cur) => {
    // 如果数组中不存在, 将cur和prev结构到一个新的数组，作为下次计算的结果
    return arr.includes(prev) ? prev : [...prev, cur];
  }, []);
};

console.log(unique(arr));

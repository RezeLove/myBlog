const fn = () => {
  this.name = "ytx";
};

let obj = {};

console.log(fn.call(obj));

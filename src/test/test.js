const symbol = Symbol();
const obj = { [symbol]: "test", test: symbol, test2: "test" };
for (let key in obj) {
  console.log(key);
}

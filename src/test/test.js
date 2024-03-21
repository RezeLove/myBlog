const fn = async (val, delay) => {
  setTimeout(() => {
    console.log(val);
  }, delay);
  return val;
};

const first = await fn(1, 1000);
const sec = await fn(first+1, 2000);
const thrid = await fn(sec+1, 3000);

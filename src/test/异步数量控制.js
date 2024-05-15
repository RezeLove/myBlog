const MAX_CONCURRENT_LOADS = 5; // 设置最大同时加载图片的数量
let currentIndex = 0;
const results = [];

async function loadImage(url) {
  // 模拟图片加载延迟
  return new Promise((resolve) =>
    setTimeout(resolve(url), Math.random() * 1000)
  );
}

async function loadImages(urls) {
  const inProgress = [];
  const inIndex = [];
  const results = new Array(urls.length); // 不再初始化为 undefined

  while (currentIndex < urls.length) {
    // 同时加载图片数量未达到最大限制时，继续加载图片
    while (
      inProgress.length < MAX_CONCURRENT_LOADS &&
      currentIndex < urls.length
    ) {
      const url = urls[currentIndex];
      const loadingPromise = loadImage(url, currentIndex); // 传入当前索引
      inProgress.push(loadingPromise);
      inIndex.push(url);
      currentIndex++;
    }
    // 等待当前加载中的 Promise 完成
    const completedPromise = await Promise.race(inProgress);
    const currentUrl = await completedPromise;
    const indexToRemove = inIndex.indexOf(currentUrl);
    results[urls.indexOf(currentUrl)] = currentUrl;
    inProgress.splice(indexToRemove, 1);
    inIndex.splice(indexToRemove, 1);
  }
  console.log("你好");
  // 等待所有剩余的 Promise 完成
  const left = await Promise.all(inProgress);
  for (let currentUrl of left) {
    results[urls.indexOf(currentUrl)] = currentUrl;
  }
  console.log("All images loaded:", results);
}

// 测试
const urls = [
  "url1",
  "url2",
  "url3",
  "url4",
  "url5",
  "url6",
  "url7",
  "url8",
  "url9",
  "url10",
];
loadImages(urls);
console.log("123");

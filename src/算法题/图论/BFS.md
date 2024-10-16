---
title: BFS
order: 1
category:
  - 算法题
  - 图论
---

## 例题-腐烂的橘子

[链接](https://leetcode.cn/problems/rotting-oranges/?envType=study-plan-v2&envId=top-100-liked)

思路：这题中每一分钟腐烂一次，比较适合 BFS,每一轮记录新腐烂的橘子的位置

```js
var orangesRotting = function (grid) {
  const queue = [];
  let count = 0;
  // 统计新鲜子橘子的数量 及 腐烂橘子初始位置
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
      if (grid[i][j] === 1) {
        count++;
      }
    }
  }
  let minutes = 0;
  while (count > 0 && queue.length) {
    minutes++;
    // 记录上一轮腐烂橘子的数量
    let len = queue.length;
    for (let i = 1; i <= len; i++) {
      // 遍历每个腐烂的橘子， 腐烂其周围的新鲜橘子
      const [r, c] = queue.shift();
      if (r >= 1 && grid[r - 1][c] == 1) {
        grid[r - 1][c] = 2;
        queue.push([r - 1, c]);
        count--;
      }
      if (r + 1 < grid.length && grid[r + 1][c] == 1) {
        grid[r + 1][c] = 2;
        queue.push([r + 1, c]);
        count--;
      }
      if (c >= 1 && grid[r][c - 1] == 1) {
        grid[r][c - 1] = 2;
        queue.push([r, c - 1]);
        count--;
      }
      if (c + 1 < grid[0].length && grid[r][c + 1] == 1) {
        grid[r][c + 1] = 2;
        queue.push([r, c + 1]);
        count--;
      }
    }
  }
  // 最后判断是否还剩下新鲜橘子
  if (count > 0) return -1;
  if (count === 0) return minutes;
};
```

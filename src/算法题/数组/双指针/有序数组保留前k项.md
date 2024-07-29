---
title: 有序数组保留前k项
order: 3
category:
  - 算法题
  - 双指针
---

## 题目链接

[题目链接](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150)

## 思路

利用双指针，快指针遍历数组，慢指针原地修改

## 实现

```js
var removeDuplicates = function (nums) {
  let slow = (fast = 0);
  for (; fast < nums.length; fast++) {
    // 注意:数组是有序的
    if (slow < 2 || nums[fast] != nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
};
```

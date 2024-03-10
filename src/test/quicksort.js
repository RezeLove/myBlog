const quickSort = (arr) => {
  // 递归出口，只剩一个元素
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2),
    pivot = arr[pivotIndex],
    left = [],
    right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i != pivotIndex) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};

console.log(quickSort([30, 25, 10, 80, 0, -1, 2, 5, 18, 13]));

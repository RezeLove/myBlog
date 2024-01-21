function testWeightBagProblem(weight, value, size) {
  const len = weight.length,
    //   一维dp数组
    dp = Array(size + 1).fill(0);

  for (let i = 0; i < len; i++) {
    // 重点:倒序
    for (let j = size; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }
  return dp[size];
}

function test() {
  console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();

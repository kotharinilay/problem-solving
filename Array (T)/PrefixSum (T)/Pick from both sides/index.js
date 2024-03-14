function solve(A, B) {
  const n = A.length;
  const pre_sum = [A[0]];
  const post_sum = [A[n - 1]];

  for (let i = 1; i < n; i++) {
    pre_sum.push(A[i] + A[i - 1]);
    post_sum.push(A[n - 1 - i] + A[i - 1]);
  }

  // take max as answer if we choose all B elements from front/back
  let ans = Math.max(pre_sum[B - 1], post_sum[B - 1]);
  for (let i = 0; i < B - 1; i++) {
    ans = Math.max(ans, pre_sum[i] + post_sum[B - 2 - i]);
  }
  return ans;
}

console.log(solve([2, 3, -1, 4, 2, 1], 4));

function subArraySum(A, B) {
  const n = A.length;
  const freq_map = new Map();

  // we set frequency of 0 to 1, as before first element sum is 0
  // we need to add this because if very first element is same as B then difference pf[i] - K will be 0 and
  // if we don't set this 0 we will miss this sub array
  freq_map.set(0, 1);
  // this will be pf[j] which we will maintain while iterating on array
  let curr_sum = 0;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    curr_sum += A[i];
    if (freq_map.has(curr_sum - B)) {
      ans += freq_map.get(curr_sum - B);
    }
    freq_map.set(curr_sum, (freq_map.get(curr_sum) || 0) + 1);
  }
  return ans;
}

console.log(subArraySum([1, 0, 1], 1));

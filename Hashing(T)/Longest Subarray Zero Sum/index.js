function longestSubArray(A) {
  const n = A.length;
  let maxLen = 0;
  let sum = 0;
  const sumMap = new Map();
  sumMap.set(0, [-1]);

  for (let i = 0; i < n; i++) {
    sum += A[i];
    const existSumMap = sumMap.get(sum);
    if (existSumMap !== undefined) {
      existSumMap.push(i);
      if (existSumMap.length > 1) {
        maxLen = Math.max(
          maxLen,
          existSumMap[existSumMap.length - 1] - existSumMap[0]
        );
      }
    } else {
      sumMap.set(A[i], [i]);
    }
  }
  return maxLen;
}

console.log(longestSubArray([5, 1, -4, 2, 1, 4]));

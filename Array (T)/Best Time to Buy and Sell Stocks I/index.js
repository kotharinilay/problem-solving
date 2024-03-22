function maxProfit(A) {
  const n = A.length;
  let minPrice = A[0];
  let maxProfit = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < n; i++) {
    if (A[i] < minPrice) {
      minPrice = A[i];
    } else {
      maxProfit = Math.max(A[i] - minPrice, maxProfit);
    }
  }
  return maxProfit;
}

console.log(maxProfit([1, 4, 5, 2, 4]));

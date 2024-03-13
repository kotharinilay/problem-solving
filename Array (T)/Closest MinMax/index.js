function minmax(A) {
  const n = A.length;
  let minIndex = -1;
  let maxIndex = -1;
  let minVal = Number.MAX_SAFE_INTEGER;
  let maxVal = Number.MIN_SAFE_INTEGER;
  let ans = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    if (A[i] > maxVal) {
      maxVal = A[i];
    } else if (A[i] < minVal) {
      minVal = A[i];
    }
  }

  for (let i = 0; i < n; i++) {
    if (A[i] === minVal) {
      minIndex = i;
      if (maxIndex !== -1) {
        ans = Math.min(ans, Math.abs(minIndex - maxIndex) + 1); // elements between two index [a, b] = b-a+1
      }
    }
    if (A[i] === maxVal) {
      maxIndex = i;
      if (minIndex !== -1) {
        ans = Math.min(ans, Math.abs(minIndex - maxIndex) + 1);
      }
    }
  }
  return ans;
}

minmax([2, 6, 1, 6, 9]);

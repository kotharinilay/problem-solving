function solve(A, B, C) {
  const n = A.length;
  let sum = 0;
  for (let i = 0; i < B; i++) {
    sum += A[i];
  }

  if (sum === C) {
    return 1;
  }
  let left = 1;
  let right = B;
  while (right < n) {
    sum -= A[left - 1];
    sum += A[right];
    if (sum === C) {
      return 1;
    }
    right++;
    left++;
  }
  return 0;
}
console.log(solve([4, 3, 2, 6, 1], 3, 11));

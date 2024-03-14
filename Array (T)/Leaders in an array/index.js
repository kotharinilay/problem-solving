function solve(A) {
  const n = A.length;
  let max = A[n - 1];
  const ans = [A[n - 1]];

  for (let i = n - 2; i >= 0; i--) {
    if (A[i] > max) {
      ans.push(A[i]);
      max = A[i];
    }
  }
  return ans;
}

console.log(solve([16, 17, 4, 3, 5, 2]));

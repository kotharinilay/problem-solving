function solve(A) {
  const presum_even = [A[0], A[0]];
  const presum_odd = [0, A[1]];
  let n = A.length;

  // preparing even and odd prefix sum
  for (let i = 2; i < n; i++) {
    if (i % 2 === 0) {
      presum_even[i] = presum_even[i - 1] + A[i];
      presum_odd[i] = presum_odd[i - 1];
    } else {
      presum_odd[i] = presum_odd[i - 1] + A[i];
      presum_even[i] = presum_even[i - 1];
    }
  }
  let out = 0;

  for (let i = 0; i < n; i++) {
    let even_sum;
    let odd_sum;
    // condition for edge case
    if (i === 0) {
      even_sum = presum_odd[n - 1] - presum_odd[0];
      odd_sum = presum_even[n - 1] - presum_even[0];
    } else {
      even_sum = presum_even[i - 1];
      even_sum += presum_odd[n - 1] - presum_odd[i];

      odd_sum = presum_odd[i - 1];
      odd_sum += presum_even[n - 1] - presum_even[i];
    }
    if (even_sum === odd_sum) {
      out++;
    }
  }
  return out;
}

solve([2, 1, 6, 4]);

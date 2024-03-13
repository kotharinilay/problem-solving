function solve(A) {
  const n = A.length;
  const pre_gcd = [A[0]];
  const suf_gcd = [A[n - 1]];
  let max = 0;

  // function to find gcd of 2 numbers
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  // prepare prefix gcd and suffix gcd array
  for (let i = 1; i < n; i++) {
    pre_gcd[i] = gcd(pre_gcd[i - 1], A[i]);
    suf_gcd[i] = gcd(suf_gcd[i - 1], A[n - i - 1]);
  }

  // reverse suffix gcd array, as we generated from 0 to n-1
  let left = 0;
  let right = n - 1;
  while (left < right) {
    let temp = suf_gcd[left];
    suf_gcd[left] = suf_gcd[right];
    suf_gcd[right] = temp;

    left++;
    right--;
  }

  // find gcd of left and right part by eliminating each element
  // if we eliminate i elemment; left part's gcd will be pre_gcd[i-1] and right part's gcd will be suf_gcd[i+1]
  for (let i = 0; i < n; i++) {
    let curr_gcd;
    if (i === 0) {
      curr_gcd = gcd(0, suf_gcd[i + 1]);
    } else if (i === n - 1) {
      curr_gcd = gcd(pre_gcd[i - 1], 0);
    } else {
      curr_gcd = gcd(pre_gcd[i - 1], suf_gcd[i + 1]);
    }
    max = Math.max(max, curr_gcd);
  }
  return max;
}

solve([12, 15, 18]);

function solve(A, B) {
  const mod = Math.pow(10, 9) + 7;
  const n = A.length;
  const arr_mod = new Map();
  let ans = 0;

  // prepare frequency map of A[i]%B
  for (let i = 0; i < n; i++) {
    let temp = A[i] % B;
    arr_mod.set(temp, (arr_mod.get(temp) || 0) + 1);
  }

  let left = 1;
  let right = B - 1;
  // get frequency of left and right pointers and add it's multiplication to answer
  while (left < right) {
    if (arr_mod.get(left) && arr_mod.get(right)) {
      ans += ((arr_mod.get(left) % mod) * (arr_mod.get(right) % mod)) % mod;
    }
    left++;
    right--;
  }

  // edge case 1, of B is even and there exist number B/2 in frequency map
  if (B % 2 === 0 && arr_mod.get(B / 2)) {
    let temp = arr_mod.get(B / 2);
    ans += ((temp * (temp - 1)) / 2) % mod;
  }

  // edge case 2, if 0 then add it's possible pairs to answer
  if (arr_mod.get(0) >= 2) {
    let temp = arr_mod.get(0);
    ans += ((temp * (temp - 1)) / 2) % mod;
  }
  return ans % mod;
}

solve([5, 17, 100, 11], 28);

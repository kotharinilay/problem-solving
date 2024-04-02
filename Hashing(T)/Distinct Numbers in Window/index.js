function distinctNumberWindow(A, B) {
  const n = A.length;
  const freq_map = new Map();
  const ans = [];

  for (let i = 0; i < B; i++) {
    freq_map.set(A[i], (freq_map.get(A[i]) || 0) + 1);
  }
  ans.push(freq_map.size);

  let l = 0;
  let r = B - 1;
  while (r < n - 1) {
    r++;
    freq_map.set(A[r], (freq_map.get(A[r]) || 0) + 1);
    let l_ele = freq_map.get(A[l]);
    if (l_ele > 1) {
      freq_map.set(A[l], l_ele - 1);
    } else {
      freq_map.delete(A[l]);
    }
    l++;
    ans.push(freq_map.size);
  }
  return ans;
}

console.log(distinctNumberWindow([1, 1, 2, 2], 1));

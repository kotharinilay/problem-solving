function countSort(A) {
  const n = A.length;
  let minEle = Number.MAX_SAFE_INTEGER;
  let maxEle = Number.MIN_SAFE_INTEGER;

  // Find min and max element from given array
  for (let i = 0; i < n; i++) {
    if (A[i] < minEle) {
      minEle = A[i];
    }
    if (A[i] > maxEle) {
      maxEle = A[i];
    }
  }

  // set range of frequency array
  // Here if all number positive then range is simply maxEle+1 and we can set frequency of all element at its index (i.e.frequency of number 2 will be at index 2), that's why maxEle(+1)
  // If array contains negative values then range of frequency array will be maxEle - minEle + 1
  // because in frequency array we will bring any negative number to 0 and subtract minEle from actual value to set its frequency in frequency array
  // so for [4, 8, -2, 6, -4, 1] array frequency of -4 will be at 0 index (-4 - (-4) = 0) in frequency array
  // similarly for any positive number i.e. 8 its frequency will be at 12 (8 - (-4))
  let range = maxEle - minEle + 1;
  const freq = new Array(range).fill(0);

  for (let i = 0; i < n; i++) {
    freq[A[i] - minEle]++;
  }

  const ans = [];

  // Now we have frequency of all array elements available, we will iterate for freq array length (which is maxEle - minEle + 1)
  // now in frequency array we haven't placed number at its actual value (i.e. 4 at index 4), so we can't push index of frequency array directly to ans
  // while setting frequency index we subtracted minEle, so here we have to do reverse and need to push index + minEle
  // as there can be multiple occurrence of any element, so we will iterate nested loop for all frequency of any number and push into ans
  for (let i = 0; i <= maxEle - minEle + 1; i++) {
    for (let j = 0; j < freq[i]; j++) {
      ans.push(i + minEle);
    }
  }
  return ans;
}

countSort([4, 8, -2, 6, -4, 1]);

function mergeSort(A) {
  // this function merge two sorted array (not physically different array, but index s to m is sorted and m+1 to e is sorted)
  // into temp array and apply those sorting order to original array
  function sortMerge(arr, s, m, e) {
    let lap = s; // left array pointer
    let rap = m + 1; // right array pointer
    let nap = 0; // new temp array pointer
    const tempArr = new Array(e - s + 1);

    // iterate till common length of left and right array and arrange in ascending order to temp array
    while (lap <= m && rap <= e) {
      if (arr[lap] > arr[rap]) {
        tempArr[nap] = arr[rap];
        rap++;
      } else {
        tempArr[nap] = arr[lap];
        lap++;
      }
      nap++;
    }

    // iterate remaining (if any) elements of left array elements and append to temp array
    while (lap <= m) {
      tempArr[nap] = arr[lap];
      lap++;
      nap++;
    }

    // iterate remaining (if any) elements of right array elements and append to temp array
    while (rap <= e) {
      tempArr[nap] = arr[rap];
      rap++;
      nap++;
    }

    // apply changes of sorted elements to original array
    lap = s;
    nap = 0;
    while (lap <= e) {
      arr[lap] = tempArr[nap];
      lap++;
      nap++;
    }
  }

  function divideArr(arr, s, e) {
    if (s >= e) {
      return;
    }
    let m = Math.floor((s + e) / 2);
    divideArr(arr, s, m);
    divideArr(arr, m + 1, e);
    sortMerge(arr, s, m, e);
  }
  divideArr(A, 0, A.length - 1);
  return A;
}

mergeSort([3, 5, 1, 2, 7]);

function solve(A) {
  const n = A.length;

  if (n === 1) {
    return A[0];
  }

  if (A[0] !== A[1]) {
    return A[0];
  } else if (A[n - 1] !== A[n - 2]) {
    return A[n - 1];
  }

  let l = 1;
  let r = n - 2;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (
      Number(A[mid]) !== Number(A[mid - 1]) &&
      Number(A[mid]) !== Number(A[mid + 1])
    ) {
      return A[mid];
    }

    let fo = mid;
    if (Number(A[mid]) === Number(A[mid - 1])) {
      fo = mid - 1;
    }

    if (fo % 2 === 0) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

solve([
  13, 13, 21, 21, 27, 50, 50, 102, 102, 108, 108, 110, 110, 117, 117, 120, 120,
  123, 123, 124, 124, 132, 132, 164, 164, 166, 166, 190, 190, 200, 200, 212,
  212, 217, 217, 225, 225, 238, 238, 261, 261, 276, 276, 347, 347, 348, 348,
  386, 386, 394, 394, 405, 405, 426, 426, 435, 435, 474, 474, 493, 493,
]);

function cpFact(A, B) {
  function factors(num) {
    const factor = [];
    for (let i = 1; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        factor.push(num / i);
        factor.push(i);
      }
    }
    return factor;
  }

  function gcd(n1, n2) {
    if (n2 === 0) {
      return n1;
    }
    return gcd(n2, n1 % n2);
  }
  let f = factors(A);
  let max = 0;
  for (let i = 0; i < f.length; i++) {
    let curr_gcd = gcd(f[i], B);
    if (curr_gcd === 1) {
      max = Math.max(f[i], max);
    }
  }
  return max;
}

cpFact(31, 12);

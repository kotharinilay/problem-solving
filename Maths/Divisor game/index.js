function solve(A, B, C) {
  let lcm = 0;

  function gcd(num1, num2) {
    if (num2 === 0) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  }

  lcm = (B * C) / gcd(B, C);
  let ans = 0;
  // Here increase i in multiple of lcm, then only it will be divisible by B and C
  for (let i = lcm; i <= A; i += lcm) {
    ans++;
  }
  return ans;
}

solve(12, 3, 2);

// Recursive non-memoized approach - Time complexity => O(3^n) - Space complexity => O(n)
var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

// Recursive memoized approach - Time complexity => O(n) - Space complexity => O(n)
var tribonacci = function (n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  return memo[n];
};

// Iterative approach - Time complexity => O(n) - Space complexity => O(n)
var tribonacci = function (n) {
  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
    table[i + 3] += table[i];
  }
  return table[n];
};

console.log(tribonacci(4));
console.log(tribonacci(25));

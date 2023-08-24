// Recursive non-memoized approach - Time complexity => O(2^n) - Space complexity => O(n)
var fib = function (n) {
  if (n === 0 || n === 1) return n;
  if (n < 0) return 0;

  for (let i = 2; i <= n; i++) {
    return fib(i - 1, memo) + fib(i - 2, memo);
  }
};

// Recursive memoized approach - Time complexity => O(n) - Space complexity => O(n)
var fib = function (n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n === 0 || n === 1) return n;
  if (n < 0) return 0;

  for (let i = 2; i <= n; i++) {
    memo[n] = fib(i - 1, memo) + fib(i - 2, memo);
  }
  return memo[n];
};

// Iterative approach - Time complexity => O(n) - Space complexity => O(n)
var fib = function (n) {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 1; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
};

console.log(fib(6));
console.log(fib(50));

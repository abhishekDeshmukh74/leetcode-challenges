// Recursive non-memoized approach - Time complexity => O(2^n) - Space complexity => O(n)
var fib = function (n) {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
};

// Recursive memoized approach - Time complexity => O(n) - Space complexity => O(n)
var fib = function (n, memo = {}) {
  if (n === 0 || n === 1) return n;
  if (memo[n]) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// Iterative approach - Time complexity => O(n) - Space complexity => O(n)
var fib = function (n) {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2]
  }
  return table[n];
};

// Iterative approach - Time complexity => O(n) - Space complexity => O(1)
var fib = function (n) {
  let secondLast = 0
  let last = 1

  for (let i = 2; i <= n; i++) {
    const current = last + secondLast
    secondLast = last
    last = current
  }
  return last;
};

console.log(fib(6));
console.log(fib(50));

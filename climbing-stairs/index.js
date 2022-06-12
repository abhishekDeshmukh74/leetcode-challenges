// Brute force solution will take 0(2^n)

// Recursive solution
// Map is used to avoid recomputing
var climbStairs = function (n) {
  const map = new Map();
  if (n === 1 || n === 2)  return n;
  if (map.has(n)) return map.get(n);

  const ways = climbStairs(n - 1) + climbStairs(n - 2);
  map.set(n, ways);
  return ways;
};

// Tabular solution
var climbStairs = function (n) {
  ways = [1, 2];
  for (let i = 2; i < n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[n - 1];
};

console.log(climbStairs(3));

// Brute force solution - O(n^2)
var numSplits = function (s) {
  let goodSplits = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const left = s.slice(0, i + 1);
    const right = s.slice(i + 1);

    const leftUnique = new Set(left.split(''));
    const rightUnique = new Set(right.split(''));

    if (leftUnique.size === rightUnique.size) goodSplits++;
  }
  return goodSplits;
};

// Use prefix and postfix array to store the number of distinct letters per index
// Time complexity - O(n)
var numSplits = function (s) {
  const prefixSet = new Set();
  const postfixSet = new Set();
  const prefixArr = [];
  const postfixArr = [];
  let goodSplits = 0;

  for (let i = 0; i < s.length; i++) {
    prefixSet.add(s[i]);
    postfixSet.add(s[s.length - 1 - i]);
    prefixArr.push(prefixSet.size);
    postfixArr.unshift(postfixSet.size);
  }

  for (let i = 1; i < s.length; i++) {
    if (prefixArr[i - 1] === postfixArr[i]) goodSplits++;
  }
  return goodSplits;
};

console.log(numSplits('aacaba'));
console.log(numSplits('acbadbaada'));

// Time complexity O(n)
var isValid = function (s) {
  const stack = [];
  const dictionary = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let i = 0; i < s.length; i++) {
    if (dictionary[s[i]]) {
      stack.push(s[i]);
    } else if (dictionary[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid('()[]{}'));
console.log(isValid('(]'));

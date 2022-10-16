// TODO: Optimize
var lengthOfLongestSubstring = function (s) {
  const set = new Set();

  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      const currentSize = set.size;
      if (currentSize > maxLength) maxLength = currentSize;
      set.clear();
      i -= currentSize - 1;
    }
    set.add(s[i]);
  }
  return Math.max(maxLength, set.size);
};
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('dvdf'));

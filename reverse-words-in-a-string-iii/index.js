var reverseWords = function (s) {
  const reverseWord = (left, right) => {
    let reverse = '';
    while (left <= right) {
      reverse += s[right];
      right--;
    }
    return reverse;
  };

  let reverse = '';
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      reverse += reverseWord(left, i - 1) + s[i];
      left = i + 1;
      right = i + 1;
    }
    if (i === s.length - 1) reverse += reverseWord(left, i);
  }
  return reverse;
};

console.log(reverseWords("Let's take LeetCode contest"));

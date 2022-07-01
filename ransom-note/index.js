var canConstruct = function (ransomNote, magazine) {
  const map = {};
  for (let i = 0; i < magazine.length; i++) {
    !map[magazine[i]] ? (map[magazine[i]] = 1) : map[magazine[i]]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!map[ransomNote[i]]) return false;
    map[ransomNote[i]]--;
  }

  return true;
};
console.log(canConstruct('aa', 'aab'));

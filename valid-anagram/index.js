// o(s+t)space complexity and O(s+t) time complexity
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let mapS = {};
  let mapT = {};
  for (let i = 0; i < s.length; i++) {
    mapS[s[i]] ? mapS[s[i]]++ : mapS[s[i]] = 1;
    mapT[t[i]] ? mapT[t[i]]++ : mapT[t[i]] = 1;
  }

  for (const key in mapS) if (mapS[key] !== mapT[key]) return false;
  return true;
};

// O(1) space complexity and O(nlogn) time complexity
var isAnagram = function (s, t) {
  if (!s.length || !t.length || s.length !== t.length) return false;

  return s.split('').sort().join('') === t.split('').sort().join('');
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('a', 'ab'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('aacc', 'ccac'));

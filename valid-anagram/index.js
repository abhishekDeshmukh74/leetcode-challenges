// o(s+t)space complexity and O(s+t) time complexity
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let mapS = {};
  let mapT = {};
  for (let i = 0; i < s; i++) {
    const charS = s.charAt(i);
    const charT = t.charAt(i);
    if (mapS[charS]) {
      mapS[charS] = mapS[charS] + 1;
    } else {
      mapS[charS] = 1;
    }
    if (mapT[charT]) {
      mapT[charT] = mapT[charT] + 1;
    } else {
      mapT[charT] = 1;
    }
  }

  for (const key in mapS) {
    if (mapS[key] !== mapT[key]) return false;
  }
  return true;
};

// O(1) space complexity and O(nlogn) time complexity
var isAnagram = function (s, t) {
  if (!s.length || !t.length || s.length !== t.length) return false;

  return s.split('').sort().join('') === t.split('').sort().join('');
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('a', 'ab'));

// var firstUniqChar = function (s) {
//   const map = new Map();

//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       map.set(s[i], map.get(s[i]) + 1);
//     } else {
//       map.set(s[i], 1);
//     }
//   }

//   for (const [key, value] of map.entries()) {
//     if (value === 1) return s.indexOf(key);
//   }
//   return -1;
// };

var firstUniqChar = function (s) {
    let charArr = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        charArr[s.charCodeAt(i) - 'a'.charCodeAt()]++;
    }
    for (let i = 0; i < s.length; i++) {
        if (charArr[s.charCodeAt(i) - 'a'.charCodeAt()] === 1) return i;
    }
    return -1;
};

console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("aabb"))

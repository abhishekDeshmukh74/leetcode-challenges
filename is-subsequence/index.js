var isSubsequence = function (s, t) {
    if (s === t) return true;
    if (t === '') return false;

    const slicedT = t.slice(1);
    const smallS = s[0] === t[0] ? slicedT : s;
    const subResult = isSubsequence(smallS, slicedT);
    if (subResult) return true;
    return false;
};

var isSubsequence = function (s, t) {

    let subsequenceIndex = 0
    if (s.length === 0) return true

    for (let i = 0; i < t.length; i++) {
        if (s[subsequenceIndex] === t[i]) subsequenceIndex++
        if (subsequenceIndex === s.length) return true
    }
    return false
};

console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))

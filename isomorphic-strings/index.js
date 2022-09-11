var isIsomorphic = function (s, t) {
    const mapS = {}
    const mapT = {}

    for (let i = 0; i < s.length; i++) {
        const c1 = s[i]
        const c2 = t[i]

        // if mapping doesn't exist
        if (!mapS[c1] && !mapT[c2]) {
            mapS[c1] = c2
            mapT[c2] = c1
            continue
        }
        // mapping doesn't exist in one of the dictionaries or Mapping exists and it doesn't match in either of the dictionaries or both
        if (!(mapS[c1] == c2 && mapT[c2] == c1)) return false
    }
    return true
};

console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))

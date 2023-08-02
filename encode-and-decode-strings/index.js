/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
    let result = ''
    for (const str of strs) {
        result += str.length + '#' + str
    }
    return result
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
    const result = []
    let i = 0

    while (i < s.length) {
        let leftIdx = i;
        while (s[i] !== '#') i++

        const len = Number(s.slice(leftIdx, i));
        const word = s.slice(i + 1, i + len + 1);
        result.push(word);
        i = i + len + 1;
    }
    return result
};

// var encode = function (strs) {
//     return strs.join(String.fromCharCode(257));
// };

// var decode = function (s) {
//     return s.split(String.fromCharCode(257));
// };

console.log(decode(encode(['Hello', 'World'])));
console.log(decode(encode([''])));

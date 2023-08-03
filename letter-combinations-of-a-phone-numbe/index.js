// Time complexity: O(4^N*N) where N is the length of digits. Note that 4 in this expression is referring to the maximum value length in the hash map, and not to the length of the input
// Space complexity: O(N) where N is the length of digits

var letterCombinations = function (digits) {
    const result = []
    const digitToChar = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "qprs",
        "8": "tuv",
        "9": "wxyz",
    }

    const backtrack = (i, currentStr) => {
        if (currentStr.length === digits.length) {
            result.push(currentStr)
            return
        }

        for (const char of digitToChar[digits[i]]) {
            backtrack(i + 1, currentStr + char)
        }
    }

    if (digits.length) backtrack(0, '')
    return result
};

console.log(letterCombinations('23'))
console.log(letterCombinations(''))
console.log(letterCombinations('2'))

var shortestCommonSupersequence = function (str1, str2) {

    const table = Array(str1.length + 1).fill().map(() => Array(str2.length + 1).fill(0))

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                table[i][j] = 1 + table[i - 1][j - 1]
            } else {
                table[i][j] = Math.max(table[i][j - 1], table[i - 1][j])
            }
        }
    }

    let superStr = ''
    let i = str1.length
    let j = str2.length

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            superStr += str1[i - 1]
            i--
            j--
        } else {
            if (table[i][j - 1] > table[i - 1][j]) {
                superStr += str2[j - 1]
                j--
            } else {
                superStr += str1[i - 1]
                i--
            }
        }
    }

    while (i > 0) {
        superStr += str1[i - 1]
        i--
    }
    while (j > 0) {
        superStr += str2[j - 1];
        j--;
    }
    return superStr.split('').reverse().join('')
};

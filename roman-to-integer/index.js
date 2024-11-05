var romanToInt = function (s) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romanNumerals[s[i]];
        const next = romanNumerals[s[i + 1]];

        (next && current < next) ? sum -= current : sum += current
    }
    return sum;
};

console.log(romanToInt("I"))
console.log(romanToInt("III"))
console.log(romanToInt("IV"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))

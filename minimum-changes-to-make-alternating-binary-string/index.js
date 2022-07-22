var minOperations = function (s) {

    const minCount = function (next) {
        let count = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] !== next) count++
            next = next === '1' ? '0' : '1'
        }
        return count
    }
    return Math.min(minCount('0'), minCount('1'))
};
console.log(minOperations('0100'))

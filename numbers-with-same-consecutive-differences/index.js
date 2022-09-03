var numsSameConsecDiff = function (n, k) {
    const answer = []
    const findNumber = (num) => {
        if (String(num).length === n) {
            answer.push(num)
            return
        }
        for (let i = 0; i <= 9; i++) {
            const lastDigit = num % 10
            if (Math.abs(lastDigit - i) === k) {
                const updatedNumber = num * 10 + i
                findNumber(updatedNumber)
            }
        }
    }
    for (let i = 1; i <= 9; i++) findNumber(i)
    return answer
}

console.log(numsSameConsecDiff(3, 7))

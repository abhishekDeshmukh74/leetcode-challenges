const mergeAlternately = (a, b) => {
    const maxLength = Math.max(a.length, b.length)
    let result = ''

    for (let i = 0; i < maxLength; i++) {
        result += (a[i] ?? '') + (b[i] ?? '')
    }

    return result
}
console.log(mergeAlternately('abc', 'pqr'))
console.log(mergeAlternately('ab', 'pqrs'))
console.log(mergeAlternately('abcd', 'pq'))

var fullJustify = function (words, maxWidth) {

    const getPaddedText = (words, spaces) => {
        if (words.length === 1) return getLeftJustifiedText(words, spaces - 1)

        let paddedText = ''
        const minSpacesCount = Math.floor(spaces / (words.length - 1))
        let extraSpacesCount = Math.floor(spaces % (words.length - 1))
        let commonPaddingSpaces = ''
        for (let i = 0; i < minSpacesCount; i++) commonPaddingSpaces += ' '
        for (let i = 0; i < words.length; i++) {
            if (i === words.length - 1) {
                paddedText += words[i]
            } else {
                paddedText += words[i] + commonPaddingSpaces
                if (extraSpacesCount) {
                    paddedText += ' '
                    extraSpacesCount--
                }
            }
        }
        return paddedText
    }

    const getLeftJustifiedText = (words, spaces) => {
        let justifiedText = ''
        for (let i = 0; i < words.length; i++) {
            if (i === words.length - 1 && spaces < 0) {
                justifiedText += words[i]
            } else {
                justifiedText += words[i] + ' '
            }
        }
        for (let i = 0; i < spaces; i++) justifiedText += ' '
        return justifiedText
    }

    let result = []
    let currentLength = 0
    let prevWords = []
    for (const word of words) {
        currentLength += word.length + 1
        prevWords.push(word)
        if (currentLength > maxWidth + 1) {
            const extraWord = prevWords.pop()
            currentLength -= extraWord.length + 1
            const extraSpaces = maxWidth - currentLength + 1

            result.push(getPaddedText(prevWords, extraSpaces + prevWords.length - 1))

            currentLength = extraWord.length + 1
            prevWords = [extraWord]
        }
    }
    result.push(getLeftJustifiedText(prevWords, maxWidth - currentLength))
    return result
}

console.log(fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16))
console.log(fullJustify(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16))
console.log(fullJustify(['Science', 'is', 'what', 'we', 'understand', 'well', 'enough', 'to', 'explain', 'to', 'a', 'computer.', 'Art', 'is', 'everything', 'else', 'we', 'do'], 20))
console.log(fullJustify(['ask', 'not', 'what', 'your', 'country', 'can', 'do', 'for', 'you', 'ask', 'what', 'you', 'can', 'do', 'for', 'your', 'country'], 16))

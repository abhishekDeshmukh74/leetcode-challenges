var compactObject = function (obj) {
    // These three if statements deal with when obj is not an iterable object
    if (obj === null) return null;
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (typeof obj !== 'object') return obj;

    // obj is an iterable object
    const compacted = {};
    for (const key in obj) {
        let value = compactObject(obj[key]);
        if (Boolean(value)) compacted[key] = value;
    }
    return compacted;
};

console.log(compactObject([null, 0, false, 1]))
console.log(compactObject({ 'a': null, 'b': [false, 1] }))
console.log(compactObject([null, 0, 5, [0], [false, 16]]))

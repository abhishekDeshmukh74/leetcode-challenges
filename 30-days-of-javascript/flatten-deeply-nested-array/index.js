var flat = function (arr, depth) {
    const stack = arr.map((e) => [e, depth])
    const flat = [];

    while (stack.length) {
        const [element, depth] = stack.pop()
        if (Array.isArray(element) && depth > 0) {
            stack.push(...element.map(subItem => [subItem, depth - 1]));
        } else {
            flat.push(element);
        }
    }
    return flat.reverse()
};

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0))
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1))
console.log(flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2))

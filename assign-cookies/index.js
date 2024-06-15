var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let cookieIndex = 0;
    let contentChildren = 0;

    while (cookieIndex < s.length && contentChildren < g.length) {
        if (s[cookieIndex] >= g[contentChildren]) {
            contentChildren++;
        }
        cookieIndex++;
    }
    return contentChildren;
};

console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));

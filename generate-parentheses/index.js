const generateParenthesis = (n) => {
    const result = [];
    const backtrack = (openingCount, closingCount, str) => {
        if (str.length == 2 * n) {
            result.push(str);
            return;
        }
        if (openingCount < n) {
            backtrack(openingCount + 1, closingCount, str + "(");
        }

        if (closingCount < n && closingCount < openingCount) {
            backtrack(openingCount, closingCount + 1, str + ")");
        }
    };

    backtrack(0, 0, "");
    return result;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
